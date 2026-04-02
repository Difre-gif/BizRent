"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const auth_context_1 = require("../auth/auth.context");
let PaymentsService = class PaymentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(body) {
        const context = auth_context_1.requestContext.getStore();
        const existingPending = await this.prisma.client.payments.findFirst({
            where: { invoice_id: body.invoice_id, status: 'PENDING' }
        });
        if (existingPending) {
            throw new common_1.ConflictException('A pending payment already exists for this invoice');
        }
        if (body.transaction_id) {
            const existingTx = await this.prisma.client.payments.findFirst({
                where: { transaction_id: body.transaction_id }
            });
            if (existingTx) {
                throw new common_1.ConflictException('This transaction ID has already been submitted');
            }
        }
        return this.prisma.client.$transaction(async (tx) => {
            let proof_file_id = null;
            if (body.proof_file_url) {
                const file = await tx.file_attachments.create({
                    data: {
                        org_id: context?.orgId,
                        uploaded_by: context?.userId,
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
                    org_id: context?.orgId,
                    invoice_id: body.invoice_id,
                    tenant_user_id: context?.userId,
                    amount: body.amount,
                    payment_method: body.payment_method,
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
                    actor_role: context?.role,
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
        const context = auth_context_1.requestContext.getStore();
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
    async approve(id) {
        const context = auth_context_1.requestContext.getStore();
        const payment = await this.prisma.client.payments.findUnique({
            where: { id }
        });
        if (!payment || payment.status !== 'PENDING') {
            throw new common_1.NotFoundException('Payment not found or not pending');
        }
        const invoice = await this.prisma.client.invoices.findUnique({
            where: { id: payment.invoice_id }
        });
        if (!invoice)
            throw new common_1.NotFoundException('Invoice not found');
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
                    status: newStatus
                }
            }),
            this.prisma.client.audit_logs.create({
                data: {
                    action: 'PAYMENT_APPROVED',
                    target_type: 'PAYMENT',
                    target_id: id,
                    actor_user_id: context?.userId,
                    actor_role: context?.role,
                    org_id: context?.orgId,
                }
            })
        ]);
    }
    async reject(id, reason) {
        const context = auth_context_1.requestContext.getStore();
        if (!reason)
            throw new common_1.BadRequestException('Reason required');
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
                    actor_role: context?.role,
                    org_id: context?.orgId,
                }
            })
        ]);
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map