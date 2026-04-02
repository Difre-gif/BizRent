import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { requestContext } from '../auth/auth.context';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  public extended;

  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    });
    const self = this;
    // Use an extension to apply RLS automatically to queries
    this.extended = this.$extends({
      query: {
        $allModels: {
          async $allOperations({ args, query }) {
            const context = requestContext.getStore();

            if (context?.orgId) {
              const { orgId, role } = context;
              // Run the query and SET LOCAL inside an array transaction
              // to ensure they execute on the same connection.
              const [, result] = await self.$transaction([
                self.$executeRawUnsafe(
                  `SET LOCAL app.current_org_id = '${orgId}'; SET LOCAL app.user_role = '${role || ''}';`,
                ),
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
}
