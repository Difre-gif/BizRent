import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('invoices')
@UseGuards(JwtAuthGuard, RolesGuard)
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Get()
  @Roles('TENANT')
  findTenantInvoices() {
    return this.invoicesService.findTenantInvoices();
  }

  @Get(':id')
  @Roles('TENANT')
  findOne(@Param('id') id: string) {
    return this.invoicesService.findOne(id);
  }
}
