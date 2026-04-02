"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TenantsService = class TenantsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getPendingTenants() {
        return this.prisma.client.users.findMany({
            where: {
                user_organisation_roles: {
                    none: {},
                },
            },
            select: {
                id: true,
                email: true,
                full_name: true,
                created_at: true,
            },
        });
    }
    async approveTenant(tenantUserId, orgId, approvedByUserId) {
        if (!orgId) {
            throw new common_1.BadRequestException('Approving user must belong to an organisation');
        }
        const tenantUser = await this.prisma.client.users.findUnique({
            where: { id: tenantUserId },
            include: { user_organisation_roles: true },
        });
        if (!tenantUser) {
            throw new common_1.NotFoundException('Tenant user not found');
        }
        if (tenantUser.user_organisation_roles.length > 0) {
            throw new common_1.BadRequestException('User is already assigned to an organisation');
        }
        return this.prisma.client.$transaction(async (tx) => {
            const role = await tx.user_organisation_roles.create({
                data: {
                    user_id: tenantUserId,
                    org_id: orgId,
                    role: 'TENANT',
                    status: 'APPROVED',
                    invited_by: approvedByUserId,
                    invited_at: new Date(),
                    accepted_at: new Date(),
                },
            });
            await tx.audit_logs.create({
                data: {
                    action: 'TENANT_APPROVED',
                    target_type: 'USER',
                    target_id: tenantUserId,
                    actor_user_id: approvedByUserId,
                    actor_role: 'OWNER',
                    org_id: orgId,
                },
            });
            return role;
        });
    }
};
exports.TenantsService = TenantsService;
exports.TenantsService = TenantsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TenantsService);
//# sourceMappingURL=tenants.service.js.map