import { AsyncLocalStorage } from 'async_hooks';

export interface RequestContext {
  userId: string;
  orgId?: string;
  role?: string;
}

export const requestContext = new AsyncLocalStorage<RequestContext>();
