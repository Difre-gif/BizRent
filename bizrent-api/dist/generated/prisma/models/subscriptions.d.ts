import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type subscriptionsModel = runtime.Types.Result.DefaultSelection<Prisma.$subscriptionsPayload>;
export type AggregateSubscriptions = {
    _count: SubscriptionsCountAggregateOutputType | null;
    _avg: SubscriptionsAvgAggregateOutputType | null;
    _sum: SubscriptionsSumAggregateOutputType | null;
    _min: SubscriptionsMinAggregateOutputType | null;
    _max: SubscriptionsMaxAggregateOutputType | null;
};
export type SubscriptionsAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type SubscriptionsSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type SubscriptionsMinAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    tier: $Enums.subscription_tier_enum | null;
    billing_cycle: $Enums.billing_cycle_enum | null;
    amount: runtime.Decimal | null;
    status: $Enums.subscription_status_enum | null;
    trial_ends_at: Date | null;
    current_period_start: Date | null;
    current_period_end: Date | null;
    cancelled_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SubscriptionsMaxAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    tier: $Enums.subscription_tier_enum | null;
    billing_cycle: $Enums.billing_cycle_enum | null;
    amount: runtime.Decimal | null;
    status: $Enums.subscription_status_enum | null;
    trial_ends_at: Date | null;
    current_period_start: Date | null;
    current_period_end: Date | null;
    cancelled_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SubscriptionsCountAggregateOutputType = {
    id: number;
    org_id: number;
    tier: number;
    billing_cycle: number;
    amount: number;
    status: number;
    trial_ends_at: number;
    current_period_start: number;
    current_period_end: number;
    cancelled_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type SubscriptionsAvgAggregateInputType = {
    amount?: true;
};
export type SubscriptionsSumAggregateInputType = {
    amount?: true;
};
export type SubscriptionsMinAggregateInputType = {
    id?: true;
    org_id?: true;
    tier?: true;
    billing_cycle?: true;
    amount?: true;
    status?: true;
    trial_ends_at?: true;
    current_period_start?: true;
    current_period_end?: true;
    cancelled_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type SubscriptionsMaxAggregateInputType = {
    id?: true;
    org_id?: true;
    tier?: true;
    billing_cycle?: true;
    amount?: true;
    status?: true;
    trial_ends_at?: true;
    current_period_start?: true;
    current_period_end?: true;
    cancelled_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type SubscriptionsCountAggregateInputType = {
    id?: true;
    org_id?: true;
    tier?: true;
    billing_cycle?: true;
    amount?: true;
    status?: true;
    trial_ends_at?: true;
    current_period_start?: true;
    current_period_end?: true;
    cancelled_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type SubscriptionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SubscriptionsCountAggregateInputType;
    _avg?: SubscriptionsAvgAggregateInputType;
    _sum?: SubscriptionsSumAggregateInputType;
    _min?: SubscriptionsMinAggregateInputType;
    _max?: SubscriptionsMaxAggregateInputType;
};
export type GetSubscriptionsAggregateType<T extends SubscriptionsAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscriptions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubscriptions[P]> : Prisma.GetScalarType<T[P], AggregateSubscriptions[P]>;
};
export type subscriptionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithAggregationInput | Prisma.subscriptionsOrderByWithAggregationInput[];
    by: Prisma.SubscriptionsScalarFieldEnum[] | Prisma.SubscriptionsScalarFieldEnum;
    having?: Prisma.subscriptionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SubscriptionsCountAggregateInputType | true;
    _avg?: SubscriptionsAvgAggregateInputType;
    _sum?: SubscriptionsSumAggregateInputType;
    _min?: SubscriptionsMinAggregateInputType;
    _max?: SubscriptionsMaxAggregateInputType;
};
export type SubscriptionsGroupByOutputType = {
    id: string;
    org_id: string;
    tier: $Enums.subscription_tier_enum;
    billing_cycle: $Enums.billing_cycle_enum;
    amount: runtime.Decimal;
    status: $Enums.subscription_status_enum;
    trial_ends_at: Date | null;
    current_period_start: Date | null;
    current_period_end: Date | null;
    cancelled_at: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: SubscriptionsCountAggregateOutputType | null;
    _avg: SubscriptionsAvgAggregateOutputType | null;
    _sum: SubscriptionsSumAggregateOutputType | null;
    _min: SubscriptionsMinAggregateOutputType | null;
    _max: SubscriptionsMaxAggregateOutputType | null;
};
export type GetSubscriptionsGroupByPayload<T extends subscriptionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SubscriptionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SubscriptionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SubscriptionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SubscriptionsGroupByOutputType[P]>;
}>>;
export type subscriptionsWhereInput = {
    AND?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    OR?: Prisma.subscriptionsWhereInput[];
    NOT?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    id?: Prisma.UuidFilter<"subscriptions"> | string;
    org_id?: Prisma.UuidFilter<"subscriptions"> | string;
    tier?: Prisma.Enumsubscription_tier_enumFilter<"subscriptions"> | $Enums.subscription_tier_enum;
    billing_cycle?: Prisma.Enumbilling_cycle_enumFilter<"subscriptions"> | $Enums.billing_cycle_enum;
    amount?: Prisma.DecimalFilter<"subscriptions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsubscription_status_enumFilter<"subscriptions"> | $Enums.subscription_status_enum;
    trial_ends_at?: Prisma.DateTimeNullableFilter<"subscriptions"> | Date | string | null;
    current_period_start?: Prisma.DateTimeNullableFilter<"subscriptions"> | Date | string | null;
    current_period_end?: Prisma.DateTimeNullableFilter<"subscriptions"> | Date | string | null;
    cancelled_at?: Prisma.DateTimeNullableFilter<"subscriptions"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"subscriptions"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"subscriptions"> | Date | string;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
};
export type subscriptionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    billing_cycle?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trial_ends_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    current_period_start?: Prisma.SortOrderInput | Prisma.SortOrder;
    current_period_end?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelled_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    organisations?: Prisma.organisationsOrderByWithRelationInput;
};
export type subscriptionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    org_id?: string;
    AND?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    OR?: Prisma.subscriptionsWhereInput[];
    NOT?: Prisma.subscriptionsWhereInput | Prisma.subscriptionsWhereInput[];
    tier?: Prisma.Enumsubscription_tier_enumFilter<"subscriptions"> | $Enums.subscription_tier_enum;
    billing_cycle?: Prisma.Enumbilling_cycle_enumFilter<"subscriptions"> | $Enums.billing_cycle_enum;
    amount?: Prisma.DecimalFilter<"subscriptions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsubscription_status_enumFilter<"subscriptions"> | $Enums.subscription_status_enum;
    trial_ends_at?: Prisma.DateTimeNullableFilter<"subscriptions"> | Date | string | null;
    current_period_start?: Prisma.DateTimeNullableFilter<"subscriptions"> | Date | string | null;
    current_period_end?: Prisma.DateTimeNullableFilter<"subscriptions"> | Date | string | null;
    cancelled_at?: Prisma.DateTimeNullableFilter<"subscriptions"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"subscriptions"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"subscriptions"> | Date | string;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
}, "id" | "org_id">;
export type subscriptionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    billing_cycle?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trial_ends_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    current_period_start?: Prisma.SortOrderInput | Prisma.SortOrder;
    current_period_end?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelled_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.subscriptionsCountOrderByAggregateInput;
    _avg?: Prisma.subscriptionsAvgOrderByAggregateInput;
    _max?: Prisma.subscriptionsMaxOrderByAggregateInput;
    _min?: Prisma.subscriptionsMinOrderByAggregateInput;
    _sum?: Prisma.subscriptionsSumOrderByAggregateInput;
};
export type subscriptionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.subscriptionsScalarWhereWithAggregatesInput | Prisma.subscriptionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.subscriptionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.subscriptionsScalarWhereWithAggregatesInput | Prisma.subscriptionsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"subscriptions"> | string;
    org_id?: Prisma.UuidWithAggregatesFilter<"subscriptions"> | string;
    tier?: Prisma.Enumsubscription_tier_enumWithAggregatesFilter<"subscriptions"> | $Enums.subscription_tier_enum;
    billing_cycle?: Prisma.Enumbilling_cycle_enumWithAggregatesFilter<"subscriptions"> | $Enums.billing_cycle_enum;
    amount?: Prisma.DecimalWithAggregatesFilter<"subscriptions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsubscription_status_enumWithAggregatesFilter<"subscriptions"> | $Enums.subscription_status_enum;
    trial_ends_at?: Prisma.DateTimeNullableWithAggregatesFilter<"subscriptions"> | Date | string | null;
    current_period_start?: Prisma.DateTimeNullableWithAggregatesFilter<"subscriptions"> | Date | string | null;
    current_period_end?: Prisma.DateTimeNullableWithAggregatesFilter<"subscriptions"> | Date | string | null;
    cancelled_at?: Prisma.DateTimeNullableWithAggregatesFilter<"subscriptions"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"subscriptions"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"subscriptions"> | Date | string;
};
export type subscriptionsCreateInput = {
    id?: string;
    tier: $Enums.subscription_tier_enum;
    billing_cycle?: $Enums.billing_cycle_enum;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.subscription_status_enum;
    trial_ends_at?: Date | string | null;
    current_period_start?: Date | string | null;
    current_period_end?: Date | string | null;
    cancelled_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organisations: Prisma.organisationsCreateNestedOneWithoutSubscriptionsInput;
};
export type subscriptionsUncheckedCreateInput = {
    id?: string;
    org_id: string;
    tier: $Enums.subscription_tier_enum;
    billing_cycle?: $Enums.billing_cycle_enum;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.subscription_status_enum;
    trial_ends_at?: Date | string | null;
    current_period_start?: Date | string | null;
    current_period_end?: Date | string | null;
    cancelled_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type subscriptionsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.Enumsubscription_tier_enumFieldUpdateOperationsInput | $Enums.subscription_tier_enum;
    billing_cycle?: Prisma.Enumbilling_cycle_enumFieldUpdateOperationsInput | $Enums.billing_cycle_enum;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsubscription_status_enumFieldUpdateOperationsInput | $Enums.subscription_status_enum;
    trial_ends_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutSubscriptionsNestedInput;
};
export type subscriptionsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.Enumsubscription_tier_enumFieldUpdateOperationsInput | $Enums.subscription_tier_enum;
    billing_cycle?: Prisma.Enumbilling_cycle_enumFieldUpdateOperationsInput | $Enums.billing_cycle_enum;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsubscription_status_enumFieldUpdateOperationsInput | $Enums.subscription_status_enum;
    trial_ends_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscriptionsCreateManyInput = {
    id?: string;
    org_id: string;
    tier: $Enums.subscription_tier_enum;
    billing_cycle?: $Enums.billing_cycle_enum;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.subscription_status_enum;
    trial_ends_at?: Date | string | null;
    current_period_start?: Date | string | null;
    current_period_end?: Date | string | null;
    cancelled_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type subscriptionsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.Enumsubscription_tier_enumFieldUpdateOperationsInput | $Enums.subscription_tier_enum;
    billing_cycle?: Prisma.Enumbilling_cycle_enumFieldUpdateOperationsInput | $Enums.billing_cycle_enum;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsubscription_status_enumFieldUpdateOperationsInput | $Enums.subscription_status_enum;
    trial_ends_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscriptionsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.Enumsubscription_tier_enumFieldUpdateOperationsInput | $Enums.subscription_tier_enum;
    billing_cycle?: Prisma.Enumbilling_cycle_enumFieldUpdateOperationsInput | $Enums.billing_cycle_enum;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsubscription_status_enumFieldUpdateOperationsInput | $Enums.subscription_status_enum;
    trial_ends_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SubscriptionsNullableScalarRelationFilter = {
    is?: Prisma.subscriptionsWhereInput | null;
    isNot?: Prisma.subscriptionsWhereInput | null;
};
export type subscriptionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    billing_cycle?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trial_ends_at?: Prisma.SortOrder;
    current_period_start?: Prisma.SortOrder;
    current_period_end?: Prisma.SortOrder;
    cancelled_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type subscriptionsAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type subscriptionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    billing_cycle?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trial_ends_at?: Prisma.SortOrder;
    current_period_start?: Prisma.SortOrder;
    current_period_end?: Prisma.SortOrder;
    cancelled_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type subscriptionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    billing_cycle?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    trial_ends_at?: Prisma.SortOrder;
    current_period_start?: Prisma.SortOrder;
    current_period_end?: Prisma.SortOrder;
    cancelled_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type subscriptionsSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type subscriptionsCreateNestedOneWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.subscriptionsCreateWithoutOrganisationsInput, Prisma.subscriptionsUncheckedCreateWithoutOrganisationsInput>;
    connectOrCreate?: Prisma.subscriptionsCreateOrConnectWithoutOrganisationsInput;
    connect?: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsUncheckedCreateNestedOneWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.subscriptionsCreateWithoutOrganisationsInput, Prisma.subscriptionsUncheckedCreateWithoutOrganisationsInput>;
    connectOrCreate?: Prisma.subscriptionsCreateOrConnectWithoutOrganisationsInput;
    connect?: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsUpdateOneWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.subscriptionsCreateWithoutOrganisationsInput, Prisma.subscriptionsUncheckedCreateWithoutOrganisationsInput>;
    connectOrCreate?: Prisma.subscriptionsCreateOrConnectWithoutOrganisationsInput;
    upsert?: Prisma.subscriptionsUpsertWithoutOrganisationsInput;
    disconnect?: Prisma.subscriptionsWhereInput | boolean;
    delete?: Prisma.subscriptionsWhereInput | boolean;
    connect?: Prisma.subscriptionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.subscriptionsUpdateToOneWithWhereWithoutOrganisationsInput, Prisma.subscriptionsUpdateWithoutOrganisationsInput>, Prisma.subscriptionsUncheckedUpdateWithoutOrganisationsInput>;
};
export type subscriptionsUncheckedUpdateOneWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.subscriptionsCreateWithoutOrganisationsInput, Prisma.subscriptionsUncheckedCreateWithoutOrganisationsInput>;
    connectOrCreate?: Prisma.subscriptionsCreateOrConnectWithoutOrganisationsInput;
    upsert?: Prisma.subscriptionsUpsertWithoutOrganisationsInput;
    disconnect?: Prisma.subscriptionsWhereInput | boolean;
    delete?: Prisma.subscriptionsWhereInput | boolean;
    connect?: Prisma.subscriptionsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.subscriptionsUpdateToOneWithWhereWithoutOrganisationsInput, Prisma.subscriptionsUpdateWithoutOrganisationsInput>, Prisma.subscriptionsUncheckedUpdateWithoutOrganisationsInput>;
};
export type Enumbilling_cycle_enumFieldUpdateOperationsInput = {
    set?: $Enums.billing_cycle_enum;
};
export type subscriptionsCreateWithoutOrganisationsInput = {
    id?: string;
    tier: $Enums.subscription_tier_enum;
    billing_cycle?: $Enums.billing_cycle_enum;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.subscription_status_enum;
    trial_ends_at?: Date | string | null;
    current_period_start?: Date | string | null;
    current_period_end?: Date | string | null;
    cancelled_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type subscriptionsUncheckedCreateWithoutOrganisationsInput = {
    id?: string;
    tier: $Enums.subscription_tier_enum;
    billing_cycle?: $Enums.billing_cycle_enum;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status: $Enums.subscription_status_enum;
    trial_ends_at?: Date | string | null;
    current_period_start?: Date | string | null;
    current_period_end?: Date | string | null;
    cancelled_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type subscriptionsCreateOrConnectWithoutOrganisationsInput = {
    where: Prisma.subscriptionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscriptionsCreateWithoutOrganisationsInput, Prisma.subscriptionsUncheckedCreateWithoutOrganisationsInput>;
};
export type subscriptionsUpsertWithoutOrganisationsInput = {
    update: Prisma.XOR<Prisma.subscriptionsUpdateWithoutOrganisationsInput, Prisma.subscriptionsUncheckedUpdateWithoutOrganisationsInput>;
    create: Prisma.XOR<Prisma.subscriptionsCreateWithoutOrganisationsInput, Prisma.subscriptionsUncheckedCreateWithoutOrganisationsInput>;
    where?: Prisma.subscriptionsWhereInput;
};
export type subscriptionsUpdateToOneWithWhereWithoutOrganisationsInput = {
    where?: Prisma.subscriptionsWhereInput;
    data: Prisma.XOR<Prisma.subscriptionsUpdateWithoutOrganisationsInput, Prisma.subscriptionsUncheckedUpdateWithoutOrganisationsInput>;
};
export type subscriptionsUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.Enumsubscription_tier_enumFieldUpdateOperationsInput | $Enums.subscription_tier_enum;
    billing_cycle?: Prisma.Enumbilling_cycle_enumFieldUpdateOperationsInput | $Enums.billing_cycle_enum;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsubscription_status_enumFieldUpdateOperationsInput | $Enums.subscription_status_enum;
    trial_ends_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscriptionsUncheckedUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.Enumsubscription_tier_enumFieldUpdateOperationsInput | $Enums.subscription_tier_enum;
    billing_cycle?: Prisma.Enumbilling_cycle_enumFieldUpdateOperationsInput | $Enums.billing_cycle_enum;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumsubscription_status_enumFieldUpdateOperationsInput | $Enums.subscription_status_enum;
    trial_ends_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_start?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    current_period_end?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelled_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type subscriptionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    tier?: boolean;
    billing_cycle?: boolean;
    amount?: boolean;
    status?: boolean;
    trial_ends_at?: boolean;
    current_period_start?: boolean;
    current_period_end?: boolean;
    cancelled_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscriptions"]>;
export type subscriptionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    tier?: boolean;
    billing_cycle?: boolean;
    amount?: boolean;
    status?: boolean;
    trial_ends_at?: boolean;
    current_period_start?: boolean;
    current_period_end?: boolean;
    cancelled_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscriptions"]>;
export type subscriptionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    tier?: boolean;
    billing_cycle?: boolean;
    amount?: boolean;
    status?: boolean;
    trial_ends_at?: boolean;
    current_period_start?: boolean;
    current_period_end?: boolean;
    cancelled_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["subscriptions"]>;
export type subscriptionsSelectScalar = {
    id?: boolean;
    org_id?: boolean;
    tier?: boolean;
    billing_cycle?: boolean;
    amount?: boolean;
    status?: boolean;
    trial_ends_at?: boolean;
    current_period_start?: boolean;
    current_period_end?: boolean;
    cancelled_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type subscriptionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "org_id" | "tier" | "billing_cycle" | "amount" | "status" | "trial_ends_at" | "current_period_start" | "current_period_end" | "cancelled_at" | "created_at" | "updated_at", ExtArgs["result"]["subscriptions"]>;
export type subscriptionsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
};
export type subscriptionsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
};
export type subscriptionsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
};
export type $subscriptionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "subscriptions";
    objects: {
        organisations: Prisma.$organisationsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        org_id: string;
        tier: $Enums.subscription_tier_enum;
        billing_cycle: $Enums.billing_cycle_enum;
        amount: runtime.Decimal;
        status: $Enums.subscription_status_enum;
        trial_ends_at: Date | null;
        current_period_start: Date | null;
        current_period_end: Date | null;
        cancelled_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["subscriptions"]>;
    composites: {};
};
export type subscriptionsGetPayload<S extends boolean | null | undefined | subscriptionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload, S>;
export type subscriptionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<subscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SubscriptionsCountAggregateInputType | true;
};
export interface subscriptionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['subscriptions'];
        meta: {
            name: 'subscriptions';
        };
    };
    findUnique<T extends subscriptionsFindUniqueArgs>(args: Prisma.SelectSubset<T, subscriptionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends subscriptionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, subscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends subscriptionsFindFirstArgs>(args?: Prisma.SelectSubset<T, subscriptionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends subscriptionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, subscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends subscriptionsFindManyArgs>(args?: Prisma.SelectSubset<T, subscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends subscriptionsCreateArgs>(args: Prisma.SelectSubset<T, subscriptionsCreateArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends subscriptionsCreateManyArgs>(args?: Prisma.SelectSubset<T, subscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends subscriptionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, subscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends subscriptionsDeleteArgs>(args: Prisma.SelectSubset<T, subscriptionsDeleteArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends subscriptionsUpdateArgs>(args: Prisma.SelectSubset<T, subscriptionsUpdateArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends subscriptionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, subscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends subscriptionsUpdateManyArgs>(args: Prisma.SelectSubset<T, subscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends subscriptionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, subscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends subscriptionsUpsertArgs>(args: Prisma.SelectSubset<T, subscriptionsUpsertArgs<ExtArgs>>): Prisma.Prisma__subscriptionsClient<runtime.Types.Result.GetResult<Prisma.$subscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends subscriptionsCountArgs>(args?: Prisma.Subset<T, subscriptionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SubscriptionsCountAggregateOutputType> : number>;
    aggregate<T extends SubscriptionsAggregateArgs>(args: Prisma.Subset<T, SubscriptionsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionsAggregateType<T>>;
    groupBy<T extends subscriptionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: subscriptionsGroupByArgs['orderBy'];
    } : {
        orderBy?: subscriptionsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, subscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: subscriptionsFieldRefs;
}
export interface Prisma__subscriptionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisations<T extends Prisma.organisationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.organisationsDefaultArgs<ExtArgs>>): Prisma.Prisma__organisationsClient<runtime.Types.Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface subscriptionsFieldRefs {
    readonly id: Prisma.FieldRef<"subscriptions", 'String'>;
    readonly org_id: Prisma.FieldRef<"subscriptions", 'String'>;
    readonly tier: Prisma.FieldRef<"subscriptions", 'subscription_tier_enum'>;
    readonly billing_cycle: Prisma.FieldRef<"subscriptions", 'billing_cycle_enum'>;
    readonly amount: Prisma.FieldRef<"subscriptions", 'Decimal'>;
    readonly status: Prisma.FieldRef<"subscriptions", 'subscription_status_enum'>;
    readonly trial_ends_at: Prisma.FieldRef<"subscriptions", 'DateTime'>;
    readonly current_period_start: Prisma.FieldRef<"subscriptions", 'DateTime'>;
    readonly current_period_end: Prisma.FieldRef<"subscriptions", 'DateTime'>;
    readonly cancelled_at: Prisma.FieldRef<"subscriptions", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"subscriptions", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"subscriptions", 'DateTime'>;
}
export type subscriptionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionsScalarFieldEnum | Prisma.SubscriptionsScalarFieldEnum[];
};
export type subscriptionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionsScalarFieldEnum | Prisma.SubscriptionsScalarFieldEnum[];
};
export type subscriptionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where?: Prisma.subscriptionsWhereInput;
    orderBy?: Prisma.subscriptionsOrderByWithRelationInput | Prisma.subscriptionsOrderByWithRelationInput[];
    cursor?: Prisma.subscriptionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SubscriptionsScalarFieldEnum | Prisma.SubscriptionsScalarFieldEnum[];
};
export type subscriptionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionsCreateInput, Prisma.subscriptionsUncheckedCreateInput>;
};
export type subscriptionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.subscriptionsCreateManyInput | Prisma.subscriptionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type subscriptionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    data: Prisma.subscriptionsCreateManyInput | Prisma.subscriptionsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.subscriptionsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type subscriptionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionsUpdateInput, Prisma.subscriptionsUncheckedUpdateInput>;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.subscriptionsUpdateManyMutationInput, Prisma.subscriptionsUncheckedUpdateManyInput>;
    where?: Prisma.subscriptionsWhereInput;
    limit?: number;
};
export type subscriptionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscriptionsUpdateManyMutationInput, Prisma.subscriptionsUncheckedUpdateManyInput>;
    where?: Prisma.subscriptionsWhereInput;
    limit?: number;
    include?: Prisma.subscriptionsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type subscriptionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscriptionsCreateInput, Prisma.subscriptionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.subscriptionsUpdateInput, Prisma.subscriptionsUncheckedUpdateInput>;
};
export type subscriptionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
    where: Prisma.subscriptionsWhereUniqueInput;
};
export type subscriptionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscriptionsWhereInput;
    limit?: number;
};
export type subscriptionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscriptionsSelect<ExtArgs> | null;
    omit?: Prisma.subscriptionsOmit<ExtArgs> | null;
    include?: Prisma.subscriptionsInclude<ExtArgs> | null;
};
