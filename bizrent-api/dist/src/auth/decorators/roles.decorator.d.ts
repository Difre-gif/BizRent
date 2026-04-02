import { user_role_enum } from '@prisma/client';
export declare const ROLES_KEY = "roles";
export declare const Roles: (...roles: user_role_enum[]) => import("@nestjs/common").CustomDecorator<string>;
