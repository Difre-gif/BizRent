import { InvoicesService } from './invoices.service';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    findTenantInvoices(): Promise<any>;
    findOne(id: string): Promise<any>;
}
