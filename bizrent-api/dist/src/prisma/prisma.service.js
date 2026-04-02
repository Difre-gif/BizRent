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
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const auth_context_1 = require("../auth/auth.context");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    extended;
    constructor() {
        super({
            log: ['query', 'info', 'warn', 'error'],
        });
        const self = this;
        this.extended = this.$extends({
            query: {
                $allModels: {
                    async $allOperations({ args, query }) {
                        const context = auth_context_1.requestContext.getStore();
                        if (context?.orgId) {
                            const { orgId, role } = context;
                            const [, result] = await self.$transaction([
                                self.$executeRawUnsafe(`SET LOCAL app.current_org_id = '${orgId}'; SET LOCAL app.user_role = '${role || ''}';`),
                                query(args),
                            ]);
                            return result;
                        }
                        return query(args);
                    },
                },
            },
        });
    }
    async onModuleInit() {
        await this.$connect();
    }
    async onModuleDestroy() {
        await this.$disconnect();
    }
    get client() {
        return this.extended;
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map