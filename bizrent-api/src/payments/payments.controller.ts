import { Controller, Get, Post, Patch, Param, Body, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('payments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @Roles('TENANT')
  create(@Body() body: any) {
    return this.paymentsService.create(body);
  }

  @Get('tenant')
  @Roles('TENANT')
  getTenantPayments() {
    return this.paymentsService.getTenantPayments();
  }

  @Get('pending')
  @Roles('OWNER', 'MANAGER', 'ACCOUNTANT')
  getPending() {
    return this.paymentsService.getPending();
  }

  @Patch(':id/approve')
  @Roles('OWNER', 'MANAGER')
  approve(@Param('id') id: string) {
    return this.paymentsService.approve(id);
  }

  @Patch(':id/reject')
  @Roles('OWNER', 'MANAGER')
  reject(@Param('id') id: string, @Body('rejection_reason') reason: string) {
    return this.paymentsService.reject(id, reason);
  }
}
