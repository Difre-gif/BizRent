import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type subscription_tiersModel = runtime.Types.Result.DefaultSelection<Prisma.$subscription_tiersPayload>;
export type AggregateSubscription_tiers = {
    _count: Subscription_tiersCountAggregateOutputType | null;
    _avg: Subscription_tiersAvgAggregateOutputType | null;
    _sum: Subscription_tiersSumAggregateOutputType | null;
    _min: Subscription_tiersMinAggregateOutputType | null;
    _max: Subscription_tiersMaxAggregateOutputType | null;
};
export type Subscription_tiersAvgAggregateOutputType = {
    max_units: number | null;
    max_properties: number | null;
    max_managers: number | null;
    monthly_price_rwf: runtime.Decimal | null;
    annual_price_rwf: runtime.Decimal | null;
};
export type Subscription_tiersSumAggregateOutputType = {
    max_units: number | null;
    max_properties: number | null;
    max_managers: number | null;
    monthly_price_rwf: runtime.Decimal | null;
    annual_price_rwf: runtime.Decimal | null;
};
export type Subscription_tiersMinAggregateOutputType = {
    id: string | null;
    tier: $Enums.subscription_tier_enum | null;
    max_units: number | null;
    max_properties: number | null;
    max_managers: number | null;
    has_whatsapp: boolean | null;
    has_kinyarwanda: boolean | null;
    has_api_access: boolean | null;
    monthly_price_rwf: runtime.Decimal | null;
    annual_price_rwf: runtime.Decimal | null;
};
export type Subscription_tiersMaxAggregateOutputType = {
    id: string | null;
    tier: $Enums.subscription_tier_enum | null;
    max_units: number | null;
    max_properties: number | null;
    max_managers: number | null;
    has_whatsapp: boolean | null;
    has_kinyarwanda: boolean | null;
    has_api_access: boolean | null;
    monthly_price_rwf: runtime.Decimal | null;
    annual_price_rwf: runtime.Decimal | null;
};
export type Subscription_tiersCountAggregateOutputType = {
    id: number;
    tier: number;
    max_units: number;
    max_properties: number;
    max_managers: number;
    has_whatsapp: number;
    has_kinyarwanda: number;
    has_api_access: number;
    monthly_price_rwf: number;
    annual_price_rwf: number;
    _all: number;
};
export type Subscription_tiersAvgAggregateInputType = {
    max_units?: true;
    max_properties?: true;
    max_managers?: true;
    monthly_price_rwf?: true;
    annual_price_rwf?: true;
};
export type Subscription_tiersSumAggregateInputType = {
    max_units?: true;
    max_properties?: true;
    max_managers?: true;
    monthly_price_rwf?: true;
    annual_price_rwf?: true;
};
export type Subscription_tiersMinAggregateInputType = {
    id?: true;
    tier?: true;
    max_units?: true;
    max_properties?: true;
    max_managers?: true;
    has_whatsapp?: true;
    has_kinyarwanda?: true;
    has_api_access?: true;
    monthly_price_rwf?: true;
    annual_price_rwf?: true;
};
export type Subscription_tiersMaxAggregateInputType = {
    id?: true;
    tier?: true;
    max_units?: true;
    max_properties?: true;
    max_managers?: true;
    has_whatsapp?: true;
    has_kinyarwanda?: true;
    has_api_access?: true;
    monthly_price_rwf?: true;
    annual_price_rwf?: true;
};
export type Subscription_tiersCountAggregateInputType = {
    id?: true;
    tier?: true;
    max_units?: true;
    max_properties?: true;
    max_managers?: true;
    has_whatsapp?: true;
    has_kinyarwanda?: true;
    has_api_access?: true;
    monthly_price_rwf?: true;
    annual_price_rwf?: true;
    _all?: true;
};
export type Subscription_tiersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscription_tiersWhereInput;
    orderBy?: Prisma.subscription_tiersOrderByWithRelationInput | Prisma.subscription_tiersOrderByWithRelationInput[];
    cursor?: Prisma.subscription_tiersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Subscription_tiersCountAggregateInputType;
    _avg?: Subscription_tiersAvgAggregateInputType;
    _sum?: Subscription_tiersSumAggregateInputType;
    _min?: Subscription_tiersMinAggregateInputType;
    _max?: Subscription_tiersMaxAggregateInputType;
};
export type GetSubscription_tiersAggregateType<T extends Subscription_tiersAggregateArgs> = {
    [P in keyof T & keyof AggregateSubscription_tiers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSubscription_tiers[P]> : Prisma.GetScalarType<T[P], AggregateSubscription_tiers[P]>;
};
export type subscription_tiersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscription_tiersWhereInput;
    orderBy?: Prisma.subscription_tiersOrderByWithAggregationInput | Prisma.subscription_tiersOrderByWithAggregationInput[];
    by: Prisma.Subscription_tiersScalarFieldEnum[] | Prisma.Subscription_tiersScalarFieldEnum;
    having?: Prisma.subscription_tiersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Subscription_tiersCountAggregateInputType | true;
    _avg?: Subscription_tiersAvgAggregateInputType;
    _sum?: Subscription_tiersSumAggregateInputType;
    _min?: Subscription_tiersMinAggregateInputType;
    _max?: Subscription_tiersMaxAggregateInputType;
};
export type Subscription_tiersGroupByOutputType = {
    id: string;
    tier: $Enums.subscription_tier_enum;
    max_units: number;
    max_properties: number;
    max_managers: number;
    has_whatsapp: boolean;
    has_kinyarwanda: boolean;
    has_api_access: boolean;
    monthly_price_rwf: runtime.Decimal;
    annual_price_rwf: runtime.Decimal;
    _count: Subscription_tiersCountAggregateOutputType | null;
    _avg: Subscription_tiersAvgAggregateOutputType | null;
    _sum: Subscription_tiersSumAggregateOutputType | null;
    _min: Subscription_tiersMinAggregateOutputType | null;
    _max: Subscription_tiersMaxAggregateOutputType | null;
};
export type GetSubscription_tiersGroupByPayload<T extends subscription_tiersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Subscription_tiersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Subscription_tiersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Subscription_tiersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Subscription_tiersGroupByOutputType[P]>;
}>>;
export type subscription_tiersWhereInput = {
    AND?: Prisma.subscription_tiersWhereInput | Prisma.subscription_tiersWhereInput[];
    OR?: Prisma.subscription_tiersWhereInput[];
    NOT?: Prisma.subscription_tiersWhereInput | Prisma.subscription_tiersWhereInput[];
    id?: Prisma.UuidFilter<"subscription_tiers"> | string;
    tier?: Prisma.Enumsubscription_tier_enumFilter<"subscription_tiers"> | $Enums.subscription_tier_enum;
    max_units?: Prisma.IntFilter<"subscription_tiers"> | number;
    max_properties?: Prisma.IntFilter<"subscription_tiers"> | number;
    max_managers?: Prisma.IntFilter<"subscription_tiers"> | number;
    has_whatsapp?: Prisma.BoolFilter<"subscription_tiers"> | boolean;
    has_kinyarwanda?: Prisma.BoolFilter<"subscription_tiers"> | boolean;
    has_api_access?: Prisma.BoolFilter<"subscription_tiers"> | boolean;
    monthly_price_rwf?: Prisma.DecimalFilter<"subscription_tiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    annual_price_rwf?: Prisma.DecimalFilter<"subscription_tiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type subscription_tiersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    max_units?: Prisma.SortOrder;
    max_properties?: Prisma.SortOrder;
    max_managers?: Prisma.SortOrder;
    has_whatsapp?: Prisma.SortOrder;
    has_kinyarwanda?: Prisma.SortOrder;
    has_api_access?: Prisma.SortOrder;
    monthly_price_rwf?: Prisma.SortOrder;
    annual_price_rwf?: Prisma.SortOrder;
};
export type subscription_tiersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    tier?: $Enums.subscription_tier_enum;
    AND?: Prisma.subscription_tiersWhereInput | Prisma.subscription_tiersWhereInput[];
    OR?: Prisma.subscription_tiersWhereInput[];
    NOT?: Prisma.subscription_tiersWhereInput | Prisma.subscription_tiersWhereInput[];
    max_units?: Prisma.IntFilter<"subscription_tiers"> | number;
    max_properties?: Prisma.IntFilter<"subscription_tiers"> | number;
    max_managers?: Prisma.IntFilter<"subscription_tiers"> | number;
    has_whatsapp?: Prisma.BoolFilter<"subscription_tiers"> | boolean;
    has_kinyarwanda?: Prisma.BoolFilter<"subscription_tiers"> | boolean;
    has_api_access?: Prisma.BoolFilter<"subscription_tiers"> | boolean;
    monthly_price_rwf?: Prisma.DecimalFilter<"subscription_tiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    annual_price_rwf?: Prisma.DecimalFilter<"subscription_tiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
}, "id" | "tier">;
export type subscription_tiersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    max_units?: Prisma.SortOrder;
    max_properties?: Prisma.SortOrder;
    max_managers?: Prisma.SortOrder;
    has_whatsapp?: Prisma.SortOrder;
    has_kinyarwanda?: Prisma.SortOrder;
    has_api_access?: Prisma.SortOrder;
    monthly_price_rwf?: Prisma.SortOrder;
    annual_price_rwf?: Prisma.SortOrder;
    _count?: Prisma.subscription_tiersCountOrderByAggregateInput;
    _avg?: Prisma.subscription_tiersAvgOrderByAggregateInput;
    _max?: Prisma.subscription_tiersMaxOrderByAggregateInput;
    _min?: Prisma.subscription_tiersMinOrderByAggregateInput;
    _sum?: Prisma.subscription_tiersSumOrderByAggregateInput;
};
export type subscription_tiersScalarWhereWithAggregatesInput = {
    AND?: Prisma.subscription_tiersScalarWhereWithAggregatesInput | Prisma.subscription_tiersScalarWhereWithAggregatesInput[];
    OR?: Prisma.subscription_tiersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.subscription_tiersScalarWhereWithAggregatesInput | Prisma.subscription_tiersScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"subscription_tiers"> | string;
    tier?: Prisma.Enumsubscription_tier_enumWithAggregatesFilter<"subscription_tiers"> | $Enums.subscription_tier_enum;
    max_units?: Prisma.IntWithAggregatesFilter<"subscription_tiers"> | number;
    max_properties?: Prisma.IntWithAggregatesFilter<"subscription_tiers"> | number;
    max_managers?: Prisma.IntWithAggregatesFilter<"subscription_tiers"> | number;
    has_whatsapp?: Prisma.BoolWithAggregatesFilter<"subscription_tiers"> | boolean;
    has_kinyarwanda?: Prisma.BoolWithAggregatesFilter<"subscription_tiers"> | boolean;
    has_api_access?: Prisma.BoolWithAggregatesFilter<"subscription_tiers"> | boolean;
    monthly_price_rwf?: Prisma.DecimalWithAggregatesFilter<"subscription_tiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    annual_price_rwf?: Prisma.DecimalWithAggregatesFilter<"subscription_tiers"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type subscription_tiersCreateInput = {
    id?: string;
    tier: $Enums.subscription_tier_enum;
    max_units: number;
    max_properties: number;
    max_managers: number;
    has_whatsapp?: boolean;
    has_kinyarwanda?: boolean;
    has_api_access?: boolean;
    monthly_price_rwf: runtime.Decimal | runtime.DecimalJsLike | number | string;
    annual_price_rwf: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type subscription_tiersUncheckedCreateInput = {
    id?: string;
    tier: $Enums.subscription_tier_enum;
    max_units: number;
    max_properties: number;
    max_managers: number;
    has_whatsapp?: boolean;
    has_kinyarwanda?: boolean;
    has_api_access?: boolean;
    monthly_price_rwf: runtime.Decimal | runtime.DecimalJsLike | number | string;
    annual_price_rwf: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type subscription_tiersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.Enumsubscription_tier_enumFieldUpdateOperationsInput | $Enums.subscription_tier_enum;
    max_units?: Prisma.IntFieldUpdateOperationsInput | number;
    max_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    max_managers?: Prisma.IntFieldUpdateOperationsInput | number;
    has_whatsapp?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    has_kinyarwanda?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    has_api_access?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    monthly_price_rwf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    annual_price_rwf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type subscription_tiersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.Enumsubscription_tier_enumFieldUpdateOperationsInput | $Enums.subscription_tier_enum;
    max_units?: Prisma.IntFieldUpdateOperationsInput | number;
    max_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    max_managers?: Prisma.IntFieldUpdateOperationsInput | number;
    has_whatsapp?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    has_kinyarwanda?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    has_api_access?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    monthly_price_rwf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    annual_price_rwf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type subscription_tiersCreateManyInput = {
    id?: string;
    tier: $Enums.subscription_tier_enum;
    max_units: number;
    max_properties: number;
    max_managers: number;
    has_whatsapp?: boolean;
    has_kinyarwanda?: boolean;
    has_api_access?: boolean;
    monthly_price_rwf: runtime.Decimal | runtime.DecimalJsLike | number | string;
    annual_price_rwf: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type subscription_tiersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.Enumsubscription_tier_enumFieldUpdateOperationsInput | $Enums.subscription_tier_enum;
    max_units?: Prisma.IntFieldUpdateOperationsInput | number;
    max_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    max_managers?: Prisma.IntFieldUpdateOperationsInput | number;
    has_whatsapp?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    has_kinyarwanda?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    has_api_access?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    monthly_price_rwf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    annual_price_rwf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type subscription_tiersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.Enumsubscription_tier_enumFieldUpdateOperationsInput | $Enums.subscription_tier_enum;
    max_units?: Prisma.IntFieldUpdateOperationsInput | number;
    max_properties?: Prisma.IntFieldUpdateOperationsInput | number;
    max_managers?: Prisma.IntFieldUpdateOperationsInput | number;
    has_whatsapp?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    has_kinyarwanda?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    has_api_access?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    monthly_price_rwf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    annual_price_rwf?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type subscription_tiersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    max_units?: Prisma.SortOrder;
    max_properties?: Prisma.SortOrder;
    max_managers?: Prisma.SortOrder;
    has_whatsapp?: Prisma.SortOrder;
    has_kinyarwanda?: Prisma.SortOrder;
    has_api_access?: Prisma.SortOrder;
    monthly_price_rwf?: Prisma.SortOrder;
    annual_price_rwf?: Prisma.SortOrder;
};
export type subscription_tiersAvgOrderByAggregateInput = {
    max_units?: Prisma.SortOrder;
    max_properties?: Prisma.SortOrder;
    max_managers?: Prisma.SortOrder;
    monthly_price_rwf?: Prisma.SortOrder;
    annual_price_rwf?: Prisma.SortOrder;
};
export type subscription_tiersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    max_units?: Prisma.SortOrder;
    max_properties?: Prisma.SortOrder;
    max_managers?: Prisma.SortOrder;
    has_whatsapp?: Prisma.SortOrder;
    has_kinyarwanda?: Prisma.SortOrder;
    has_api_access?: Prisma.SortOrder;
    monthly_price_rwf?: Prisma.SortOrder;
    annual_price_rwf?: Prisma.SortOrder;
};
export type subscription_tiersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    max_units?: Prisma.SortOrder;
    max_properties?: Prisma.SortOrder;
    max_managers?: Prisma.SortOrder;
    has_whatsapp?: Prisma.SortOrder;
    has_kinyarwanda?: Prisma.SortOrder;
    has_api_access?: Prisma.SortOrder;
    monthly_price_rwf?: Prisma.SortOrder;
    annual_price_rwf?: Prisma.SortOrder;
};
export type subscription_tiersSumOrderByAggregateInput = {
    max_units?: Prisma.SortOrder;
    max_properties?: Prisma.SortOrder;
    max_managers?: Prisma.SortOrder;
    monthly_price_rwf?: Prisma.SortOrder;
    annual_price_rwf?: Prisma.SortOrder;
};
export type Enumsubscription_tier_enumFieldUpdateOperationsInput = {
    set?: $Enums.subscription_tier_enum;
};
export type subscription_tiersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tier?: boolean;
    max_units?: boolean;
    max_properties?: boolean;
    max_managers?: boolean;
    has_whatsapp?: boolean;
    has_kinyarwanda?: boolean;
    has_api_access?: boolean;
    monthly_price_rwf?: boolean;
    annual_price_rwf?: boolean;
}, ExtArgs["result"]["subscription_tiers"]>;
export type subscription_tiersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tier?: boolean;
    max_units?: boolean;
    max_properties?: boolean;
    max_managers?: boolean;
    has_whatsapp?: boolean;
    has_kinyarwanda?: boolean;
    has_api_access?: boolean;
    monthly_price_rwf?: boolean;
    annual_price_rwf?: boolean;
}, ExtArgs["result"]["subscription_tiers"]>;
export type subscription_tiersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tier?: boolean;
    max_units?: boolean;
    max_properties?: boolean;
    max_managers?: boolean;
    has_whatsapp?: boolean;
    has_kinyarwanda?: boolean;
    has_api_access?: boolean;
    monthly_price_rwf?: boolean;
    annual_price_rwf?: boolean;
}, ExtArgs["result"]["subscription_tiers"]>;
export type subscription_tiersSelectScalar = {
    id?: boolean;
    tier?: boolean;
    max_units?: boolean;
    max_properties?: boolean;
    max_managers?: boolean;
    has_whatsapp?: boolean;
    has_kinyarwanda?: boolean;
    has_api_access?: boolean;
    monthly_price_rwf?: boolean;
    annual_price_rwf?: boolean;
};
export type subscription_tiersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tier" | "max_units" | "max_properties" | "max_managers" | "has_whatsapp" | "has_kinyarwanda" | "has_api_access" | "monthly_price_rwf" | "annual_price_rwf", ExtArgs["result"]["subscription_tiers"]>;
export type $subscription_tiersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "subscription_tiers";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tier: $Enums.subscription_tier_enum;
        max_units: number;
        max_properties: number;
        max_managers: number;
        has_whatsapp: boolean;
        has_kinyarwanda: boolean;
        has_api_access: boolean;
        monthly_price_rwf: runtime.Decimal;
        annual_price_rwf: runtime.Decimal;
    }, ExtArgs["result"]["subscription_tiers"]>;
    composites: {};
};
export type subscription_tiersGetPayload<S extends boolean | null | undefined | subscription_tiersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload, S>;
export type subscription_tiersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<subscription_tiersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Subscription_tiersCountAggregateInputType | true;
};
export interface subscription_tiersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['subscription_tiers'];
        meta: {
            name: 'subscription_tiers';
        };
    };
    findUnique<T extends subscription_tiersFindUniqueArgs>(args: Prisma.SelectSubset<T, subscription_tiersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__subscription_tiersClient<runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends subscription_tiersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, subscription_tiersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscription_tiersClient<runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends subscription_tiersFindFirstArgs>(args?: Prisma.SelectSubset<T, subscription_tiersFindFirstArgs<ExtArgs>>): Prisma.Prisma__subscription_tiersClient<runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends subscription_tiersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, subscription_tiersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__subscription_tiersClient<runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends subscription_tiersFindManyArgs>(args?: Prisma.SelectSubset<T, subscription_tiersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends subscription_tiersCreateArgs>(args: Prisma.SelectSubset<T, subscription_tiersCreateArgs<ExtArgs>>): Prisma.Prisma__subscription_tiersClient<runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends subscription_tiersCreateManyArgs>(args?: Prisma.SelectSubset<T, subscription_tiersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends subscription_tiersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, subscription_tiersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends subscription_tiersDeleteArgs>(args: Prisma.SelectSubset<T, subscription_tiersDeleteArgs<ExtArgs>>): Prisma.Prisma__subscription_tiersClient<runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends subscription_tiersUpdateArgs>(args: Prisma.SelectSubset<T, subscription_tiersUpdateArgs<ExtArgs>>): Prisma.Prisma__subscription_tiersClient<runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends subscription_tiersDeleteManyArgs>(args?: Prisma.SelectSubset<T, subscription_tiersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends subscription_tiersUpdateManyArgs>(args: Prisma.SelectSubset<T, subscription_tiersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends subscription_tiersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, subscription_tiersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends subscription_tiersUpsertArgs>(args: Prisma.SelectSubset<T, subscription_tiersUpsertArgs<ExtArgs>>): Prisma.Prisma__subscription_tiersClient<runtime.Types.Result.GetResult<Prisma.$subscription_tiersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends subscription_tiersCountArgs>(args?: Prisma.Subset<T, subscription_tiersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Subscription_tiersCountAggregateOutputType> : number>;
    aggregate<T extends Subscription_tiersAggregateArgs>(args: Prisma.Subset<T, Subscription_tiersAggregateArgs>): Prisma.PrismaPromise<GetSubscription_tiersAggregateType<T>>;
    groupBy<T extends subscription_tiersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: subscription_tiersGroupByArgs['orderBy'];
    } : {
        orderBy?: subscription_tiersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, subscription_tiersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscription_tiersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: subscription_tiersFieldRefs;
}
export interface Prisma__subscription_tiersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface subscription_tiersFieldRefs {
    readonly id: Prisma.FieldRef<"subscription_tiers", 'String'>;
    readonly tier: Prisma.FieldRef<"subscription_tiers", 'subscription_tier_enum'>;
    readonly max_units: Prisma.FieldRef<"subscription_tiers", 'Int'>;
    readonly max_properties: Prisma.FieldRef<"subscription_tiers", 'Int'>;
    readonly max_managers: Prisma.FieldRef<"subscription_tiers", 'Int'>;
    readonly has_whatsapp: Prisma.FieldRef<"subscription_tiers", 'Boolean'>;
    readonly has_kinyarwanda: Prisma.FieldRef<"subscription_tiers", 'Boolean'>;
    readonly has_api_access: Prisma.FieldRef<"subscription_tiers", 'Boolean'>;
    readonly monthly_price_rwf: Prisma.FieldRef<"subscription_tiers", 'Decimal'>;
    readonly annual_price_rwf: Prisma.FieldRef<"subscription_tiers", 'Decimal'>;
}
export type subscription_tiersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelect<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
    where: Prisma.subscription_tiersWhereUniqueInput;
};
export type subscription_tiersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelect<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
    where: Prisma.subscription_tiersWhereUniqueInput;
};
export type subscription_tiersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelect<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
    where?: Prisma.subscription_tiersWhereInput;
    orderBy?: Prisma.subscription_tiersOrderByWithRelationInput | Prisma.subscription_tiersOrderByWithRelationInput[];
    cursor?: Prisma.subscription_tiersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Subscription_tiersScalarFieldEnum | Prisma.Subscription_tiersScalarFieldEnum[];
};
export type subscription_tiersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelect<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
    where?: Prisma.subscription_tiersWhereInput;
    orderBy?: Prisma.subscription_tiersOrderByWithRelationInput | Prisma.subscription_tiersOrderByWithRelationInput[];
    cursor?: Prisma.subscription_tiersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Subscription_tiersScalarFieldEnum | Prisma.Subscription_tiersScalarFieldEnum[];
};
export type subscription_tiersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelect<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
    where?: Prisma.subscription_tiersWhereInput;
    orderBy?: Prisma.subscription_tiersOrderByWithRelationInput | Prisma.subscription_tiersOrderByWithRelationInput[];
    cursor?: Prisma.subscription_tiersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Subscription_tiersScalarFieldEnum | Prisma.Subscription_tiersScalarFieldEnum[];
};
export type subscription_tiersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelect<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscription_tiersCreateInput, Prisma.subscription_tiersUncheckedCreateInput>;
};
export type subscription_tiersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.subscription_tiersCreateManyInput | Prisma.subscription_tiersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type subscription_tiersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
    data: Prisma.subscription_tiersCreateManyInput | Prisma.subscription_tiersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type subscription_tiersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelect<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscription_tiersUpdateInput, Prisma.subscription_tiersUncheckedUpdateInput>;
    where: Prisma.subscription_tiersWhereUniqueInput;
};
export type subscription_tiersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.subscription_tiersUpdateManyMutationInput, Prisma.subscription_tiersUncheckedUpdateManyInput>;
    where?: Prisma.subscription_tiersWhereInput;
    limit?: number;
};
export type subscription_tiersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.subscription_tiersUpdateManyMutationInput, Prisma.subscription_tiersUncheckedUpdateManyInput>;
    where?: Prisma.subscription_tiersWhereInput;
    limit?: number;
};
export type subscription_tiersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelect<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
    where: Prisma.subscription_tiersWhereUniqueInput;
    create: Prisma.XOR<Prisma.subscription_tiersCreateInput, Prisma.subscription_tiersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.subscription_tiersUpdateInput, Prisma.subscription_tiersUncheckedUpdateInput>;
};
export type subscription_tiersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelect<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
    where: Prisma.subscription_tiersWhereUniqueInput;
};
export type subscription_tiersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.subscription_tiersWhereInput;
    limit?: number;
};
export type subscription_tiersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.subscription_tiersSelect<ExtArgs> | null;
    omit?: Prisma.subscription_tiersOmit<ExtArgs> | null;
};
