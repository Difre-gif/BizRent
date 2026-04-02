import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: any;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: any;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: any;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: any;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: any;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: any;
export declare const empty: any;
export declare const join: any;
export declare const raw: any;
export declare const Sql: any;
export type Sql = runtime.Sql;
export declare const Decimal: any;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: any;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly audit_logs: "audit_logs";
    readonly file_attachments: "file_attachments";
    readonly invoices: "invoices";
    readonly notifications: "notifications";
    readonly organisations: "organisations";
    readonly payments: "payments";
    readonly properties: "properties";
    readonly receipts: "receipts";
    readonly refresh_tokens: "refresh_tokens";
    readonly subscription_tiers: "subscription_tiers";
    readonly subscriptions: "subscriptions";
    readonly tenancies: "tenancies";
    readonly units: "units";
    readonly user_organisation_roles: "user_organisation_roles";
    readonly users: "users";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "audit_logs" | "file_attachments" | "invoices" | "notifications" | "organisations" | "payments" | "properties" | "receipts" | "refresh_tokens" | "subscription_tiers" | "subscriptions" | "tenancies" | "units" | "user_organisation_roles" | "users";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        audit_logs: {
            payload: Prisma.$audit_logsPayload<ExtArgs>;
            fields: Prisma.audit_logsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.audit_logsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.audit_logsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                findFirst: {
                    args: Prisma.audit_logsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.audit_logsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                findMany: {
                    args: Prisma.audit_logsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>[];
                };
                create: {
                    args: Prisma.audit_logsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                createMany: {
                    args: Prisma.audit_logsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.audit_logsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>[];
                };
                delete: {
                    args: Prisma.audit_logsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                update: {
                    args: Prisma.audit_logsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                deleteMany: {
                    args: Prisma.audit_logsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.audit_logsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.audit_logsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>[];
                };
                upsert: {
                    args: Prisma.audit_logsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                aggregate: {
                    args: Prisma.Audit_logsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAudit_logs>;
                };
                groupBy: {
                    args: Prisma.audit_logsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Audit_logsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.audit_logsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Audit_logsCountAggregateOutputType> | number;
                };
            };
        };
        file_attachments: {
            payload: Prisma.$file_attachmentsPayload<ExtArgs>;
            fields: Prisma.file_attachmentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.file_attachmentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$file_attachmentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.file_attachmentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$file_attachmentsPayload>;
                };
                findFirst: {
                    args: Prisma.file_attachmentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$file_attachmentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.file_attachmentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$file_attachmentsPayload>;
                };
                findMany: {
                    args: Prisma.file_attachmentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$file_attachmentsPayload>[];
                };
                create: {
                    args: Prisma.file_attachmentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$file_attachmentsPayload>;
                };
                createMany: {
                    args: Prisma.file_attachmentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.file_attachmentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$file_attachmentsPayload>[];
                };
                delete: {
                    args: Prisma.file_attachmentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$file_attachmentsPayload>;
                };
                update: {
                    args: Prisma.file_attachmentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$file_attachmentsPayload>;
                };
                deleteMany: {
                    args: Prisma.file_attachmentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.file_attachmentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.file_attachmentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$file_attachmentsPayload>[];
                };
                upsert: {
                    args: Prisma.file_attachmentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$file_attachmentsPayload>;
                };
                aggregate: {
                    args: Prisma.File_attachmentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFile_attachments>;
                };
                groupBy: {
                    args: Prisma.file_attachmentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.File_attachmentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.file_attachmentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.File_attachmentsCountAggregateOutputType> | number;
                };
            };
        };
        invoices: {
            payload: Prisma.$invoicesPayload<ExtArgs>;
            fields: Prisma.invoicesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.invoicesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$invoicesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.invoicesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$invoicesPayload>;
                };
                findFirst: {
                    args: Prisma.invoicesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$invoicesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.invoicesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$invoicesPayload>;
                };
                findMany: {
                    args: Prisma.invoicesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$invoicesPayload>[];
                };
                create: {
                    args: Prisma.invoicesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$invoicesPayload>;
                };
                createMany: {
                    args: Prisma.invoicesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.invoicesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$invoicesPayload>[];
                };
                delete: {
                    args: Prisma.invoicesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$invoicesPayload>;
                };
                update: {
                    args: Prisma.invoicesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$invoicesPayload>;
                };
                deleteMany: {
                    args: Prisma.invoicesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.invoicesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.invoicesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$invoicesPayload>[];
                };
                upsert: {
                    args: Prisma.invoicesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$invoicesPayload>;
                };
                aggregate: {
                    args: Prisma.InvoicesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateInvoices>;
                };
                groupBy: {
                    args: Prisma.invoicesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoicesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.invoicesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.InvoicesCountAggregateOutputType> | number;
                };
            };
        };
        notifications: {
            payload: Prisma.$notificationsPayload<ExtArgs>;
            fields: Prisma.notificationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.notificationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findFirst: {
                    args: Prisma.notificationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findMany: {
                    args: Prisma.notificationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                create: {
                    args: Prisma.notificationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                createMany: {
                    args: Prisma.notificationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                delete: {
                    args: Prisma.notificationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                update: {
                    args: Prisma.notificationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                deleteMany: {
                    args: Prisma.notificationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.notificationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                upsert: {
                    args: Prisma.notificationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotifications>;
                };
                groupBy: {
                    args: Prisma.notificationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.notificationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsCountAggregateOutputType> | number;
                };
            };
        };
        organisations: {
            payload: Prisma.$organisationsPayload<ExtArgs>;
            fields: Prisma.organisationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.organisationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$organisationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.organisationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$organisationsPayload>;
                };
                findFirst: {
                    args: Prisma.organisationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$organisationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.organisationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$organisationsPayload>;
                };
                findMany: {
                    args: Prisma.organisationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$organisationsPayload>[];
                };
                create: {
                    args: Prisma.organisationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$organisationsPayload>;
                };
                createMany: {
                    args: Prisma.organisationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.organisationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$organisationsPayload>[];
                };
                delete: {
                    args: Prisma.organisationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$organisationsPayload>;
                };
                update: {
                    args: Prisma.organisationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$organisationsPayload>;
                };
                deleteMany: {
                    args: Prisma.organisationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.organisationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.organisationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$organisationsPayload>[];
                };
                upsert: {
                    args: Prisma.organisationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$organisationsPayload>;
                };
                aggregate: {
                    args: Prisma.OrganisationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrganisations>;
                };
                groupBy: {
                    args: Prisma.organisationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganisationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.organisationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrganisationsCountAggregateOutputType> | number;
                };
            };
        };
        payments: {
            payload: Prisma.$paymentsPayload<ExtArgs>;
            fields: Prisma.paymentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.paymentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findFirst: {
                    args: Prisma.paymentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findMany: {
                    args: Prisma.paymentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                create: {
                    args: Prisma.paymentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                createMany: {
                    args: Prisma.paymentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                delete: {
                    args: Prisma.paymentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                update: {
                    args: Prisma.paymentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                deleteMany: {
                    args: Prisma.paymentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.paymentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                upsert: {
                    args: Prisma.paymentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayments>;
                };
                groupBy: {
                    args: Prisma.paymentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.paymentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsCountAggregateOutputType> | number;
                };
            };
        };
        properties: {
            payload: Prisma.$propertiesPayload<ExtArgs>;
            fields: Prisma.propertiesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.propertiesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$propertiesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.propertiesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$propertiesPayload>;
                };
                findFirst: {
                    args: Prisma.propertiesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$propertiesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.propertiesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$propertiesPayload>;
                };
                findMany: {
                    args: Prisma.propertiesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$propertiesPayload>[];
                };
                create: {
                    args: Prisma.propertiesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$propertiesPayload>;
                };
                createMany: {
                    args: Prisma.propertiesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.propertiesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$propertiesPayload>[];
                };
                delete: {
                    args: Prisma.propertiesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$propertiesPayload>;
                };
                update: {
                    args: Prisma.propertiesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$propertiesPayload>;
                };
                deleteMany: {
                    args: Prisma.propertiesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.propertiesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.propertiesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$propertiesPayload>[];
                };
                upsert: {
                    args: Prisma.propertiesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$propertiesPayload>;
                };
                aggregate: {
                    args: Prisma.PropertiesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProperties>;
                };
                groupBy: {
                    args: Prisma.propertiesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertiesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.propertiesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PropertiesCountAggregateOutputType> | number;
                };
            };
        };
        receipts: {
            payload: Prisma.$receiptsPayload<ExtArgs>;
            fields: Prisma.receiptsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.receiptsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$receiptsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.receiptsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$receiptsPayload>;
                };
                findFirst: {
                    args: Prisma.receiptsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$receiptsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.receiptsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$receiptsPayload>;
                };
                findMany: {
                    args: Prisma.receiptsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$receiptsPayload>[];
                };
                create: {
                    args: Prisma.receiptsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$receiptsPayload>;
                };
                createMany: {
                    args: Prisma.receiptsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.receiptsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$receiptsPayload>[];
                };
                delete: {
                    args: Prisma.receiptsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$receiptsPayload>;
                };
                update: {
                    args: Prisma.receiptsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$receiptsPayload>;
                };
                deleteMany: {
                    args: Prisma.receiptsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.receiptsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.receiptsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$receiptsPayload>[];
                };
                upsert: {
                    args: Prisma.receiptsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$receiptsPayload>;
                };
                aggregate: {
                    args: Prisma.ReceiptsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReceipts>;
                };
                groupBy: {
                    args: Prisma.receiptsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReceiptsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.receiptsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReceiptsCountAggregateOutputType> | number;
                };
            };
        };
        refresh_tokens: {
            payload: Prisma.$refresh_tokensPayload<ExtArgs>;
            fields: Prisma.refresh_tokensFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.refresh_tokensFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.refresh_tokensFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                findFirst: {
                    args: Prisma.refresh_tokensFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.refresh_tokensFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                findMany: {
                    args: Prisma.refresh_tokensFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[];
                };
                create: {
                    args: Prisma.refresh_tokensCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                createMany: {
                    args: Prisma.refresh_tokensCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.refresh_tokensCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[];
                };
                delete: {
                    args: Prisma.refresh_tokensDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                update: {
                    args: Prisma.refresh_tokensUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                deleteMany: {
                    args: Prisma.refresh_tokensDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.refresh_tokensUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.refresh_tokensUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>[];
                };
                upsert: {
                    args: Prisma.refresh_tokensUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$refresh_tokensPayload>;
                };
                aggregate: {
                    args: Prisma.Refresh_tokensAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRefresh_tokens>;
                };
                groupBy: {
                    args: Prisma.refresh_tokensGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Refresh_tokensGroupByOutputType>[];
                };
                count: {
                    args: Prisma.refresh_tokensCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Refresh_tokensCountAggregateOutputType> | number;
                };
            };
        };
        subscription_tiers: {
            payload: Prisma.$subscription_tiersPayload<ExtArgs>;
            fields: Prisma.subscription_tiersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.subscription_tiersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_tiersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.subscription_tiersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_tiersPayload>;
                };
                findFirst: {
                    args: Prisma.subscription_tiersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_tiersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.subscription_tiersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_tiersPayload>;
                };
                findMany: {
                    args: Prisma.subscription_tiersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_tiersPayload>[];
                };
                create: {
                    args: Prisma.subscription_tiersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_tiersPayload>;
                };
                createMany: {
                    args: Prisma.subscription_tiersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.subscription_tiersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_tiersPayload>[];
                };
                delete: {
                    args: Prisma.subscription_tiersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_tiersPayload>;
                };
                update: {
                    args: Prisma.subscription_tiersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_tiersPayload>;
                };
                deleteMany: {
                    args: Prisma.subscription_tiersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.subscription_tiersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.subscription_tiersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_tiersPayload>[];
                };
                upsert: {
                    args: Prisma.subscription_tiersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscription_tiersPayload>;
                };
                aggregate: {
                    args: Prisma.Subscription_tiersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscription_tiers>;
                };
                groupBy: {
                    args: Prisma.subscription_tiersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Subscription_tiersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.subscription_tiersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Subscription_tiersCountAggregateOutputType> | number;
                };
            };
        };
        subscriptions: {
            payload: Prisma.$subscriptionsPayload<ExtArgs>;
            fields: Prisma.subscriptionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.subscriptionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.subscriptionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                findFirst: {
                    args: Prisma.subscriptionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.subscriptionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                findMany: {
                    args: Prisma.subscriptionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>[];
                };
                create: {
                    args: Prisma.subscriptionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                createMany: {
                    args: Prisma.subscriptionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.subscriptionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>[];
                };
                delete: {
                    args: Prisma.subscriptionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                update: {
                    args: Prisma.subscriptionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                deleteMany: {
                    args: Prisma.subscriptionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.subscriptionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.subscriptionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>[];
                };
                upsert: {
                    args: Prisma.subscriptionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$subscriptionsPayload>;
                };
                aggregate: {
                    args: Prisma.SubscriptionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSubscriptions>;
                };
                groupBy: {
                    args: Prisma.subscriptionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.subscriptionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SubscriptionsCountAggregateOutputType> | number;
                };
            };
        };
        tenancies: {
            payload: Prisma.$tenanciesPayload<ExtArgs>;
            fields: Prisma.tenanciesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tenanciesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tenanciesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tenanciesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tenanciesPayload>;
                };
                findFirst: {
                    args: Prisma.tenanciesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tenanciesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tenanciesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tenanciesPayload>;
                };
                findMany: {
                    args: Prisma.tenanciesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tenanciesPayload>[];
                };
                create: {
                    args: Prisma.tenanciesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tenanciesPayload>;
                };
                createMany: {
                    args: Prisma.tenanciesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tenanciesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tenanciesPayload>[];
                };
                delete: {
                    args: Prisma.tenanciesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tenanciesPayload>;
                };
                update: {
                    args: Prisma.tenanciesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tenanciesPayload>;
                };
                deleteMany: {
                    args: Prisma.tenanciesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tenanciesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tenanciesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tenanciesPayload>[];
                };
                upsert: {
                    args: Prisma.tenanciesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tenanciesPayload>;
                };
                aggregate: {
                    args: Prisma.TenanciesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTenancies>;
                };
                groupBy: {
                    args: Prisma.tenanciesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TenanciesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tenanciesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TenanciesCountAggregateOutputType> | number;
                };
            };
        };
        units: {
            payload: Prisma.$unitsPayload<ExtArgs>;
            fields: Prisma.unitsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.unitsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unitsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.unitsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unitsPayload>;
                };
                findFirst: {
                    args: Prisma.unitsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unitsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.unitsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unitsPayload>;
                };
                findMany: {
                    args: Prisma.unitsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unitsPayload>[];
                };
                create: {
                    args: Prisma.unitsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unitsPayload>;
                };
                createMany: {
                    args: Prisma.unitsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.unitsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unitsPayload>[];
                };
                delete: {
                    args: Prisma.unitsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unitsPayload>;
                };
                update: {
                    args: Prisma.unitsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unitsPayload>;
                };
                deleteMany: {
                    args: Prisma.unitsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.unitsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.unitsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unitsPayload>[];
                };
                upsert: {
                    args: Prisma.unitsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unitsPayload>;
                };
                aggregate: {
                    args: Prisma.UnitsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUnits>;
                };
                groupBy: {
                    args: Prisma.unitsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UnitsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.unitsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UnitsCountAggregateOutputType> | number;
                };
            };
        };
        user_organisation_roles: {
            payload: Prisma.$user_organisation_rolesPayload<ExtArgs>;
            fields: Prisma.user_organisation_rolesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.user_organisation_rolesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_organisation_rolesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.user_organisation_rolesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_organisation_rolesPayload>;
                };
                findFirst: {
                    args: Prisma.user_organisation_rolesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_organisation_rolesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.user_organisation_rolesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_organisation_rolesPayload>;
                };
                findMany: {
                    args: Prisma.user_organisation_rolesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_organisation_rolesPayload>[];
                };
                create: {
                    args: Prisma.user_organisation_rolesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_organisation_rolesPayload>;
                };
                createMany: {
                    args: Prisma.user_organisation_rolesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.user_organisation_rolesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_organisation_rolesPayload>[];
                };
                delete: {
                    args: Prisma.user_organisation_rolesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_organisation_rolesPayload>;
                };
                update: {
                    args: Prisma.user_organisation_rolesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_organisation_rolesPayload>;
                };
                deleteMany: {
                    args: Prisma.user_organisation_rolesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.user_organisation_rolesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.user_organisation_rolesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_organisation_rolesPayload>[];
                };
                upsert: {
                    args: Prisma.user_organisation_rolesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$user_organisation_rolesPayload>;
                };
                aggregate: {
                    args: Prisma.User_organisation_rolesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser_organisation_roles>;
                };
                groupBy: {
                    args: Prisma.user_organisation_rolesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_organisation_rolesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.user_organisation_rolesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.User_organisation_rolesCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: any;
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Audit_logsScalarFieldEnum: {
    readonly id: "id";
    readonly org_id: "org_id";
    readonly actor_user_id: "actor_user_id";
    readonly actor_role: "actor_role";
    readonly action: "action";
    readonly target_type: "target_type";
    readonly target_id: "target_id";
    readonly diff: "diff";
    readonly metadata: "metadata";
    readonly created_at: "created_at";
};
export type Audit_logsScalarFieldEnum = (typeof Audit_logsScalarFieldEnum)[keyof typeof Audit_logsScalarFieldEnum];
export declare const File_attachmentsScalarFieldEnum: {
    readonly id: "id";
    readonly org_id: "org_id";
    readonly uploaded_by: "uploaded_by";
    readonly bucket: "bucket";
    readonly file_path: "file_path";
    readonly original_filename: "original_filename";
    readonly mime_type: "mime_type";
    readonly size_bytes: "size_bytes";
    readonly created_at: "created_at";
};
export type File_attachmentsScalarFieldEnum = (typeof File_attachmentsScalarFieldEnum)[keyof typeof File_attachmentsScalarFieldEnum];
export declare const InvoicesScalarFieldEnum: {
    readonly id: "id";
    readonly org_id: "org_id";
    readonly tenancy_id: "tenancy_id";
    readonly unit_id: "unit_id";
    readonly tenant_user_id: "tenant_user_id";
    readonly invoice_number: "invoice_number";
    readonly billing_period_start: "billing_period_start";
    readonly billing_period_end: "billing_period_end";
    readonly due_date: "due_date";
    readonly amount_due: "amount_due";
    readonly amount_paid: "amount_paid";
    readonly balance: "balance";
    readonly status: "status";
    readonly notes: "notes";
    readonly generated_by: "generated_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type InvoicesScalarFieldEnum = (typeof InvoicesScalarFieldEnum)[keyof typeof InvoicesScalarFieldEnum];
export declare const NotificationsScalarFieldEnum: {
    readonly id: "id";
    readonly org_id: "org_id";
    readonly recipient_user_id: "recipient_user_id";
    readonly type: "type";
    readonly title: "title";
    readonly body: "body";
    readonly reference_type: "reference_type";
    readonly reference_id: "reference_id";
    readonly is_read: "is_read";
    readonly read_at: "read_at";
    readonly created_at: "created_at";
};
export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum];
export declare const OrganisationsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly phone: "phone";
    readonly email: "email";
    readonly country_code: "country_code";
    readonly currency_code: "currency_code";
    readonly timezone: "timezone";
    readonly subscription_status: "subscription_status";
    readonly trial_ends_at: "trial_ends_at";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type OrganisationsScalarFieldEnum = (typeof OrganisationsScalarFieldEnum)[keyof typeof OrganisationsScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly id: "id";
    readonly org_id: "org_id";
    readonly invoice_id: "invoice_id";
    readonly tenant_user_id: "tenant_user_id";
    readonly amount: "amount";
    readonly payment_method: "payment_method";
    readonly transaction_id: "transaction_id";
    readonly proof_file_id: "proof_file_id";
    readonly status: "status";
    readonly rejection_reason: "rejection_reason";
    readonly reviewed_by: "reviewed_by";
    readonly reviewed_at: "reviewed_at";
    readonly submitted_at: "submitted_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const PropertiesScalarFieldEnum: {
    readonly id: "id";
    readonly org_id: "org_id";
    readonly name: "name";
    readonly property_type: "property_type";
    readonly address_line1: "address_line1";
    readonly address_line2: "address_line2";
    readonly city: "city";
    readonly district: "district";
    readonly country_code: "country_code";
    readonly total_units: "total_units";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PropertiesScalarFieldEnum = (typeof PropertiesScalarFieldEnum)[keyof typeof PropertiesScalarFieldEnum];
export declare const ReceiptsScalarFieldEnum: {
    readonly id: "id";
    readonly org_id: "org_id";
    readonly payment_id: "payment_id";
    readonly invoice_id: "invoice_id";
    readonly tenant_user_id: "tenant_user_id";
    readonly receipt_number: "receipt_number";
    readonly file_path: "file_path";
    readonly file_size_bytes: "file_size_bytes";
    readonly generated_at: "generated_at";
    readonly download_count: "download_count";
    readonly created_at: "created_at";
};
export type ReceiptsScalarFieldEnum = (typeof ReceiptsScalarFieldEnum)[keyof typeof ReceiptsScalarFieldEnum];
export declare const Refresh_tokensScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly token_hash: "token_hash";
    readonly expires_at: "expires_at";
    readonly revoked_at: "revoked_at";
    readonly device_info: "device_info";
    readonly ip_address: "ip_address";
    readonly created_at: "created_at";
};
export type Refresh_tokensScalarFieldEnum = (typeof Refresh_tokensScalarFieldEnum)[keyof typeof Refresh_tokensScalarFieldEnum];
export declare const Subscription_tiersScalarFieldEnum: {
    readonly id: "id";
    readonly tier: "tier";
    readonly max_units: "max_units";
    readonly max_properties: "max_properties";
    readonly max_managers: "max_managers";
    readonly has_whatsapp: "has_whatsapp";
    readonly has_kinyarwanda: "has_kinyarwanda";
    readonly has_api_access: "has_api_access";
    readonly monthly_price_rwf: "monthly_price_rwf";
    readonly annual_price_rwf: "annual_price_rwf";
};
export type Subscription_tiersScalarFieldEnum = (typeof Subscription_tiersScalarFieldEnum)[keyof typeof Subscription_tiersScalarFieldEnum];
export declare const SubscriptionsScalarFieldEnum: {
    readonly id: "id";
    readonly org_id: "org_id";
    readonly tier: "tier";
    readonly billing_cycle: "billing_cycle";
    readonly amount: "amount";
    readonly status: "status";
    readonly trial_ends_at: "trial_ends_at";
    readonly current_period_start: "current_period_start";
    readonly current_period_end: "current_period_end";
    readonly cancelled_at: "cancelled_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SubscriptionsScalarFieldEnum = (typeof SubscriptionsScalarFieldEnum)[keyof typeof SubscriptionsScalarFieldEnum];
export declare const TenanciesScalarFieldEnum: {
    readonly id: "id";
    readonly org_id: "org_id";
    readonly unit_id: "unit_id";
    readonly tenant_user_id: "tenant_user_id";
    readonly start_date: "start_date";
    readonly end_date: "end_date";
    readonly agreed_rent: "agreed_rent";
    readonly deposit_amount: "deposit_amount";
    readonly status: "status";
    readonly terminated_at: "terminated_at";
    readonly terminated_by: "terminated_by";
    readonly termination_reason: "termination_reason";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type TenanciesScalarFieldEnum = (typeof TenanciesScalarFieldEnum)[keyof typeof TenanciesScalarFieldEnum];
export declare const UnitsScalarFieldEnum: {
    readonly id: "id";
    readonly org_id: "org_id";
    readonly property_id: "property_id";
    readonly unit_number: "unit_number";
    readonly unit_type: "unit_type";
    readonly floor: "floor";
    readonly monthly_rent: "monthly_rent";
    readonly status: "status";
    readonly description: "description";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UnitsScalarFieldEnum = (typeof UnitsScalarFieldEnum)[keyof typeof UnitsScalarFieldEnum];
export declare const User_organisation_rolesScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly org_id: "org_id";
    readonly role: "role";
    readonly is_active: "is_active";
    readonly invited_by: "invited_by";
    readonly invited_at: "invited_at";
    readonly accepted_at: "accepted_at";
    readonly created_at: "created_at";
};
export type User_organisation_rolesScalarFieldEnum = (typeof User_organisation_rolesScalarFieldEnum)[keyof typeof User_organisation_rolesScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly phone: "phone";
    readonly full_name: "full_name";
    readonly password_hash: "password_hash";
    readonly is_active: "is_active";
    readonly is_email_verified: "is_email_verified";
    readonly last_login_at: "last_login_at";
    readonly preferred_language: "preferred_language";
    readonly two_fa_enabled: "two_fa_enabled";
    readonly two_fa_secret: "two_fa_secret";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: any;
    readonly JsonNull: any;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const JsonNullValueFilter: {
    readonly DbNull: any;
    readonly JsonNull: any;
    readonly AnyNull: any;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type Enumuser_role_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role_enum'>;
export type ListEnumuser_role_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role_enum[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type Enuminvoice_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'invoice_status_enum'>;
export type ListEnuminvoice_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'invoice_status_enum[]'>;
export type Enumnotification_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_type_enum'>;
export type ListEnumnotification_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_type_enum[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type Enumsubscription_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscription_status_enum'>;
export type ListEnumsubscription_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscription_status_enum[]'>;
export type Enumpayment_method_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method_enum'>;
export type ListEnumpayment_method_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method_enum[]'>;
export type Enumpayment_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status_enum'>;
export type ListEnumpayment_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status_enum[]'>;
export type Enumproperty_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'property_type_enum'>;
export type ListEnumproperty_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'property_type_enum[]'>;
export type Enumsubscription_tier_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscription_tier_enum'>;
export type ListEnumsubscription_tier_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscription_tier_enum[]'>;
export type Enumbilling_cycle_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'billing_cycle_enum'>;
export type ListEnumbilling_cycle_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'billing_cycle_enum[]'>;
export type Enumtenancy_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tenancy_status_enum'>;
export type ListEnumtenancy_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'tenancy_status_enum[]'>;
export type Enumunit_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'unit_type_enum'>;
export type ListEnumunit_type_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'unit_type_enum[]'>;
export type Enumunit_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'unit_status_enum'>;
export type ListEnumunit_status_enumFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'unit_status_enum[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    audit_logs?: Prisma.audit_logsOmit;
    file_attachments?: Prisma.file_attachmentsOmit;
    invoices?: Prisma.invoicesOmit;
    notifications?: Prisma.notificationsOmit;
    organisations?: Prisma.organisationsOmit;
    payments?: Prisma.paymentsOmit;
    properties?: Prisma.propertiesOmit;
    receipts?: Prisma.receiptsOmit;
    refresh_tokens?: Prisma.refresh_tokensOmit;
    subscription_tiers?: Prisma.subscription_tiersOmit;
    subscriptions?: Prisma.subscriptionsOmit;
    tenancies?: Prisma.tenanciesOmit;
    units?: Prisma.unitsOmit;
    user_organisation_roles?: Prisma.user_organisation_rolesOmit;
    users?: Prisma.usersOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
