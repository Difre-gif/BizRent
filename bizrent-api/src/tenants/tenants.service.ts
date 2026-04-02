import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TenantsService {
  constructor(private readonly prisma: PrismaService) {}

  async getPendingTenants() {
    // Find users who have NO organisation roles (i.e., unassigned tenants)
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

  async approveTenant(tenantUserId: string, orgId: string, approvedByUserId: string) {
    if (!orgId) {
      throw new BadRequestException('Approving user must belong to an organisation');
    }

    const tenantUser = await this.prisma.client.users.findUnique({
      where: { id: tenantUserId },
      include: { user_organisation_roles: true },
    });

    if (!tenantUser) {
      throw new NotFoundException('Tenant user not found');
    }

    if (tenantUser.user_organisation_roles.length > 0) {
      throw new BadRequestException('User is already assigned to an organisation');
    }

    return this.prisma.client.$transaction(async (tx) => {
      // Assign the user to the landlord's organisation as a TENANT
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

      // Audit Log
      await tx.audit_logs.create({
        data: {
          action: 'TENANT_APPROVED',
          target_type: 'USER',
          target_id: tenantUserId,
          actor_user_id: approvedByUserId,
          actor_role: 'OWNER', // Approver role
          org_id: orgId,
        },
      });

      return role;
    });
  }
}
