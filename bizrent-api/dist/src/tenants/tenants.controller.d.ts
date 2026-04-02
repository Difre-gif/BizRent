import { TenantsService } from './tenants.service';
export declare class TenantsController {
    private readonly tenantsService;
    constructor(tenantsService: TenantsService);
    getPendingTenants(): Promise<any>;
    approveTenant(userId: string, req: any): Promise<any>;
}
