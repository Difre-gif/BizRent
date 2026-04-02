import { PrismaService } from '../prisma/prisma.service';
export declare class TenantsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getPendingTenants(): Promise<any>;
    approveTenant(tenantUserId: string, orgId: string, approvedByUserId: string): Promise<any>;
}
