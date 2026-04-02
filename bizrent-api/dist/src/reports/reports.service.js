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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReportsService = class ReportsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getSummary() {
        const totalProperties = await this.prisma.client.properties.count({ where: { is_active: true } });
        const totalUnits = await this.prisma.client.units.count({ where: { is_active: true } });
        const pendingPayments = await this.prisma.client.payments.count({ where: { status: 'PENDING' } });
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const invoices = await this.prisma.client.invoices.findMany({
            where: { billing_period_start: { gte: startOfMonth } }
        });
        let due = 0;
        let paid = 0;
        invoices.forEach(inv => {
            due += Number(inv.amount_due);
            paid += Number(inv.amount_paid);
        });
        const collectionRate = due === 0 ? 0 : Math.round((paid / due) * 100);
        return {
            totalProperties,
            totalUnits,
            pendingPayments,
            collectionRate,
        };
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map