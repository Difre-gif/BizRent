import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { requestContext } from '../auth.context';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Call the parent canActivate which triggers the strategy
    const canActivate = await super.canActivate(context);
    if (!canActivate) {
      return false;
    }

    // Set the request context using AsyncLocalStorage
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (user) {
      requestContext.enterWith({
        userId: user.userId,
        orgId: user.orgId,
        role: user.role,
      });
    }

    return true;
  }
}
