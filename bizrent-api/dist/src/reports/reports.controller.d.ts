import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getSummary(): Promise<{
        totalProperties: any;
        totalUnits: any;
        pendingPayments: any;
        collectionRate: number;
    }>;
}
