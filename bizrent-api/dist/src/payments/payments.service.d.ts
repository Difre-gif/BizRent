import { PrismaService } from '../prisma/prisma.service';
export declare class PaymentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(body: {
        invoice_id: string;
        amount: number;
        payment_method: string;
        transaction_id?: string;
        proof_file_url?: string;
    }): Promise<any>;
    getPending(): Promise<any>;
    getTenantPayments(): Promise<any>;
    approve(id: string): Promise<any>;
    reject(id: string, reason: string): Promise<any>;
}
