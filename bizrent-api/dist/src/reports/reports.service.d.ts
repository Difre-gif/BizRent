import { PrismaService } from '../prisma/prisma.service';
export declare class ReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    getSummary(): Promise<{
        totalProperties: any;
        totalUnits: any;
        pendingPayments: any;
        collectionRate: number;
    }>;
}
