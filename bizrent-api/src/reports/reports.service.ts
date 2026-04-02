import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async getSummary() {
    const totalProperties = await this.prisma.client.properties.count({ where: { is_active: true } });
    const totalUnits = await this.prisma.client.units.count({ where: { is_active: true } });
    const pendingPayments = await this.prisma.client.payments.count({ where: { status: 'PENDING' } });
    
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    
    const invoices = await this.prisma.client.invoices.findMany({
      where: { billing_period_start: { gte: startOfMonth } }
    });

    let due = 0;
    let paid = 0;
    invoices.forEach(inv => {
      due += Number(inv.amount_due);
      paid += Number(inv.amount_paid);
    });

    const collectionRate = due === 0 ? 0 : Math.round((paid / due) * 100);

    return {
      totalProperties,
      totalUnits,
      pendingPayments,
      collectionRate,
    };
  }
}
