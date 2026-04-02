import { AsyncLocalStorage } from 'async_hooks';
export interface RequestContext {
    userId: string;
    orgId?: string;
    role?: string;
}
export declare const requestContext: AsyncLocalStorage<RequestContext>;
