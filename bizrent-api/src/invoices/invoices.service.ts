import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { requestContext } from '../auth/auth.context';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async findTenantInvoices() {
    const context = requestContext.getStore();
    return this.prisma.client.invoices.findMany({
      where: { tenant_user_id: context?.userId },
      include: {
        units: { include: { properties: true } },
      },
      orderBy: { created_at: 'desc' }
    });
  }

  async findOne(id: string) {
    const context = requestContext.getStore();
    return this.prisma.client.invoices.findFirst({
      where: { id, tenant_user_id: context?.userId },
      include: {
        units: { include: { properties: true } },
      }
    });
  }
}
