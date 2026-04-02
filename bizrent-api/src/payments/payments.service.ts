import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { requestContext } from '../auth/auth.context';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async create(body: { invoice_id: string, amount: number, payment_method: string, transaction_id?: string, proof_file_url?: string }) {
    const context = requestContext.getStore();
    
    // Check if pending payment exists for this invoice
    const existingPending = await this.prisma.client.payments.findFirst({
      where: { invoice_id: body.invoice_id, status: 'PENDING' }
    });
    if (existingPending) {
      throw new ConflictException('A pending payment already exists for this invoice');
    }

    if (body.transaction_id) {
      const existingTx = await this.prisma.client.payments.findFirst({
        where: { transaction_id: body.transaction_id }
      });
      if (existingTx) {
        throw new ConflictException('This transaction ID has already been submitted');
      }
    }

    return this.prisma.client.$transaction(async (tx) => {
      let proof_file_id = null;
      if (body.proof_file_url) {
        const file = await tx.file_attachments.create({
          data: {
            org_id: context?.orgId as string,
            uploaded_by: context?.userId as string,
            bucket: 'payment-proofs',
            file_path: body.proof_file_url,
            mime_type: 'image/unknown',
            size_bytes: 0
          }
        });
        proof_file_id = file.id;
      }

      const payment = await tx.payments.create({
        data: {
          org_id: context?.orgId as string,
          invoice_id: body.invoice_id,
          tenant_user_id: context?.userId as string,
          amount: body.amount,
          payment_method: body.payment_method as any,
          transaction_id: body.transaction_id,
          proof_file_id,
          status: 'PENDING'
        }
      });

      await tx.audit_logs.create({
        data: {
          action: 'PAYMENT_SUBMITTED',
          target_type: 'PAYMENT',
          target_id: payment.id,
          actor_user_id: context?.userId,
          actor_role: context?.role as any,
          org_id: context?.orgId,
        }
      });

      return payment;
    });
  }

  async getPending() {
    return this.prisma.client.payments.findMany({
      where: { status: 'PENDING' },
      include: {
        users_payments_tenant_user_idTousers: {
          select: { full_name: true, email: true }
        },
        invoices: {
          include: {
            units: {
              include: { properties: true }
            }
          }
        },
        file_attachments: true
      },
      orderBy: { submitted_at: 'asc' }
    });
  }

  async getTenantPayments() {
    const context = requestContext.getStore();
    return this.prisma.client.payments.findMany({
      where: { tenant_user_id: context?.userId },
      include: {
        invoices: {
          include: {
            units: { include: { properties: true } }
          }
        }
      },
      orderBy: { submitted_at: 'desc' }
    });
  }

  async approve(id: string) {
    const context = requestContext.getStore();
    const payment = await this.prisma.client.payments.findUnique({
      where: { id }
    });

    if (!payment || payment.status !== 'PENDING') {
      throw new NotFoundException('Payment not found or not pending');
    }

    const invoice = await this.prisma.client.invoices.findUnique({
      where: { id: payment.invoice_id }
    });

    if (!invoice) throw new NotFoundException('Invoice not found');

    const newAmountPaid = Number(invoice.amount_paid) + Number(payment.amount);
    const newStatus = newAmountPaid >= Number(invoice.amount_due) ? 'PAID' : 'PARTIAL';

    return this.prisma.client.$transaction([
      this.prisma.client.payments.update({
        where: { id },
        data: {
          status: 'APPROVED',
          reviewed_by: context?.userId,
          reviewed_at: new Date()
        }
      }),
      this.prisma.client.invoices.update({
        where: { id: payment.invoice_id },
        data: {
          amount_paid: newAmountPaid,
          status: newStatus as any
        }
      }),
      this.prisma.client.audit_logs.create({
        data: {
          action: 'PAYMENT_APPROVED',
          target_type: 'PAYMENT',
          target_id: id,
          actor_user_id: context?.userId,
          actor_role: context?.role as any,
          org_id: context?.orgId,
        }
      })
    ]);
  }

  async reject(id: string, reason: string) {
    const context = requestContext.getStore();
    if (!reason) throw new BadRequestException('Reason required');

    return this.prisma.client.$transaction([
      this.prisma.client.payments.update({
        where: { id },
        data: {
          status: 'REJECTED',
          rejection_reason: reason,
          reviewed_by: context?.userId,
          reviewed_at: new Date()
        }
      }),
      this.prisma.client.audit_logs.create({
        data: {
          action: 'PAYMENT_REJECTED',
          target_type: 'PAYMENT',
          target_id: id,
          actor_user_id: context?.userId,
          actor_role: context?.role as any,
          org_id: context?.orgId,
        }
      })
    ]);
  }
}
