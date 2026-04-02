import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get audit_logs(): Prisma.audit_logsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get file_attachments(): Prisma.file_attachmentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get invoices(): Prisma.invoicesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get notifications(): Prisma.notificationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get organisations(): Prisma.organisationsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get payments(): Prisma.paymentsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get properties(): Prisma.propertiesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get receipts(): Prisma.receiptsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get refresh_tokens(): Prisma.refresh_tokensDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get subscription_tiers(): Prisma.subscription_tiersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get subscriptions(): Prisma.subscriptionsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get tenancies(): Prisma.tenanciesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get units(): Prisma.unitsDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get user_organisation_roles(): Prisma.user_organisation_rolesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get users(): Prisma.usersDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
