import { Controller, Get, Patch, Param, UseGuards, Request } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { user_role_enum } from '@prisma/client';

@Controller('tenants')
@UseGuards(JwtAuthGuard, RolesGuard)
export class TenantsController {
  constructor(private readonly tenantsService: TenantsService) {}

  @Get('pending')
  @Roles(user_role_enum.OWNER, user_role_enum.MANAGER)
  getPendingTenants() {
    return this.tenantsService.getPendingTenants();
  }

  @Patch(':userId/approve')
  @Roles(user_role_enum.OWNER, user_role_enum.MANAGER)
  approveTenant(@Param('userId') userId: string, @Request() req) {
    // req.user has orgId and role injected by JwtStrategy
    return this.tenantsService.approveTenant(userId, req.user.orgId, req.user.userId);
  }
}
