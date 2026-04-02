import { PaymentsService } from './payments.service';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(body: any): Promise<any>;
    getTenantPayments(): Promise<any>;
    getPending(): Promise<any>;
    approve(id: string): Promise<any>;
    reject(id: string, reason: string): Promise<any>;
}
