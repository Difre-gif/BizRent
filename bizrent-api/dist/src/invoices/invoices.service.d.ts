import { PrismaService } from '../prisma/prisma.service';
export declare class InvoicesService {
    private prisma;
    constructor(prisma: PrismaService);
    findTenantInvoices(): Promise<any>;
    findOne(id: string): Promise<any>;
}
