import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type audit_logsModel = runtime.Types.Result.DefaultSelection<Prisma.$audit_logsPayload>;
export type AggregateAudit_logs = {
    _count: Audit_logsCountAggregateOutputType | null;
    _avg: Audit_logsAvgAggregateOutputType | null;
    _sum: Audit_logsSumAggregateOutputType | null;
    _min: Audit_logsMinAggregateOutputType | null;
    _max: Audit_logsMaxAggregateOutputType | null;
};
export type Audit_logsAvgAggregateOutputType = {
    id: number | null;
};
export type Audit_logsSumAggregateOutputType = {
    id: bigint | null;
};
export type Audit_logsMinAggregateOutputType = {
    id: bigint | null;
    org_id: string | null;
    actor_user_id: string | null;
    actor_role: $Enums.user_role_enum | null;
    action: string | null;
    target_type: string | null;
    target_id: string | null;
    created_at: Date | null;
};
export type Audit_logsMaxAggregateOutputType = {
    id: bigint | null;
    org_id: string | null;
    actor_user_id: string | null;
    actor_role: $Enums.user_role_enum | null;
    action: string | null;
    target_type: string | null;
    target_id: string | null;
    created_at: Date | null;
};
export type Audit_logsCountAggregateOutputType = {
    id: number;
    org_id: number;
    actor_user_id: number;
    actor_role: number;
    action: number;
    target_type: number;
    target_id: number;
    diff: number;
    metadata: number;
    created_at: number;
    _all: number;
};
export type Audit_logsAvgAggregateInputType = {
    id?: true;
};
export type Audit_logsSumAggregateInputType = {
    id?: true;
};
export type Audit_logsMinAggregateInputType = {
    id?: true;
    org_id?: true;
    actor_user_id?: true;
    actor_role?: true;
    action?: true;
    target_type?: true;
    target_id?: true;
    created_at?: true;
};
export type Audit_logsMaxAggregateInputType = {
    id?: true;
    org_id?: true;
    actor_user_id?: true;
    actor_role?: true;
    action?: true;
    target_type?: true;
    target_id?: true;
    created_at?: true;
};
export type Audit_logsCountAggregateInputType = {
    id?: true;
    org_id?: true;
    actor_user_id?: true;
    actor_role?: true;
    action?: true;
    target_type?: true;
    target_id?: true;
    diff?: true;
    metadata?: true;
    created_at?: true;
    _all?: true;
};
export type Audit_logsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_logsWhereInput;
    orderBy?: Prisma.audit_logsOrderByWithRelationInput | Prisma.audit_logsOrderByWithRelationInput[];
    cursor?: Prisma.audit_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Audit_logsCountAggregateInputType;
    _avg?: Audit_logsAvgAggregateInputType;
    _sum?: Audit_logsSumAggregateInputType;
    _min?: Audit_logsMinAggregateInputType;
    _max?: Audit_logsMaxAggregateInputType;
};
export type GetAudit_logsAggregateType<T extends Audit_logsAggregateArgs> = {
    [P in keyof T & keyof AggregateAudit_logs]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAudit_logs[P]> : Prisma.GetScalarType<T[P], AggregateAudit_logs[P]>;
};
export type audit_logsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_logsWhereInput;
    orderBy?: Prisma.audit_logsOrderByWithAggregationInput | Prisma.audit_logsOrderByWithAggregationInput[];
    by: Prisma.Audit_logsScalarFieldEnum[] | Prisma.Audit_logsScalarFieldEnum;
    having?: Prisma.audit_logsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Audit_logsCountAggregateInputType | true;
    _avg?: Audit_logsAvgAggregateInputType;
    _sum?: Audit_logsSumAggregateInputType;
    _min?: Audit_logsMinAggregateInputType;
    _max?: Audit_logsMaxAggregateInputType;
};
export type Audit_logsGroupByOutputType = {
    id: bigint;
    org_id: string | null;
    actor_user_id: string | null;
    actor_role: $Enums.user_role_enum | null;
    action: string;
    target_type: string;
    target_id: string;
    diff: runtime.JsonValue | null;
    metadata: runtime.JsonValue | null;
    created_at: Date;
    _count: Audit_logsCountAggregateOutputType | null;
    _avg: Audit_logsAvgAggregateOutputType | null;
    _sum: Audit_logsSumAggregateOutputType | null;
    _min: Audit_logsMinAggregateOutputType | null;
    _max: Audit_logsMaxAggregateOutputType | null;
};
export type GetAudit_logsGroupByPayload<T extends audit_logsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Audit_logsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Audit_logsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Audit_logsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Audit_logsGroupByOutputType[P]>;
}>>;
export type audit_logsWhereInput = {
    AND?: Prisma.audit_logsWhereInput | Prisma.audit_logsWhereInput[];
    OR?: Prisma.audit_logsWhereInput[];
    NOT?: Prisma.audit_logsWhereInput | Prisma.audit_logsWhereInput[];
    id?: Prisma.BigIntFilter<"audit_logs"> | bigint | number;
    org_id?: Prisma.UuidNullableFilter<"audit_logs"> | string | null;
    actor_user_id?: Prisma.UuidNullableFilter<"audit_logs"> | string | null;
    actor_role?: Prisma.Enumuser_role_enumNullableFilter<"audit_logs"> | $Enums.user_role_enum | null;
    action?: Prisma.StringFilter<"audit_logs"> | string;
    target_type?: Prisma.StringFilter<"audit_logs"> | string;
    target_id?: Prisma.UuidFilter<"audit_logs"> | string;
    diff?: Prisma.JsonNullableFilter<"audit_logs">;
    metadata?: Prisma.JsonNullableFilter<"audit_logs">;
    created_at?: Prisma.DateTimeFilter<"audit_logs"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    organisations?: Prisma.XOR<Prisma.OrganisationsNullableScalarRelationFilter, Prisma.organisationsWhereInput> | null;
};
export type audit_logsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    actor_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    actor_role?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    target_type?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    diff?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    users?: Prisma.usersOrderByWithRelationInput;
    organisations?: Prisma.organisationsOrderByWithRelationInput;
};
export type audit_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number;
    AND?: Prisma.audit_logsWhereInput | Prisma.audit_logsWhereInput[];
    OR?: Prisma.audit_logsWhereInput[];
    NOT?: Prisma.audit_logsWhereInput | Prisma.audit_logsWhereInput[];
    org_id?: Prisma.UuidNullableFilter<"audit_logs"> | string | null;
    actor_user_id?: Prisma.UuidNullableFilter<"audit_logs"> | string | null;
    actor_role?: Prisma.Enumuser_role_enumNullableFilter<"audit_logs"> | $Enums.user_role_enum | null;
    action?: Prisma.StringFilter<"audit_logs"> | string;
    target_type?: Prisma.StringFilter<"audit_logs"> | string;
    target_id?: Prisma.UuidFilter<"audit_logs"> | string;
    diff?: Prisma.JsonNullableFilter<"audit_logs">;
    metadata?: Prisma.JsonNullableFilter<"audit_logs">;
    created_at?: Prisma.DateTimeFilter<"audit_logs"> | Date | string;
    users?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    organisations?: Prisma.XOR<Prisma.OrganisationsNullableScalarRelationFilter, Prisma.organisationsWhereInput> | null;
}, "id">;
export type audit_logsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    actor_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    actor_role?: Prisma.SortOrderInput | Prisma.SortOrder;
    action?: Prisma.SortOrder;
    target_type?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    diff?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.audit_logsCountOrderByAggregateInput;
    _avg?: Prisma.audit_logsAvgOrderByAggregateInput;
    _max?: Prisma.audit_logsMaxOrderByAggregateInput;
    _min?: Prisma.audit_logsMinOrderByAggregateInput;
    _sum?: Prisma.audit_logsSumOrderByAggregateInput;
};
export type audit_logsScalarWhereWithAggregatesInput = {
    AND?: Prisma.audit_logsScalarWhereWithAggregatesInput | Prisma.audit_logsScalarWhereWithAggregatesInput[];
    OR?: Prisma.audit_logsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.audit_logsScalarWhereWithAggregatesInput | Prisma.audit_logsScalarWhereWithAggregatesInput[];
    id?: Prisma.BigIntWithAggregatesFilter<"audit_logs"> | bigint | number;
    org_id?: Prisma.UuidNullableWithAggregatesFilter<"audit_logs"> | string | null;
    actor_user_id?: Prisma.UuidNullableWithAggregatesFilter<"audit_logs"> | string | null;
    actor_role?: Prisma.Enumuser_role_enumNullableWithAggregatesFilter<"audit_logs"> | $Enums.user_role_enum | null;
    action?: Prisma.StringWithAggregatesFilter<"audit_logs"> | string;
    target_type?: Prisma.StringWithAggregatesFilter<"audit_logs"> | string;
    target_id?: Prisma.UuidWithAggregatesFilter<"audit_logs"> | string;
    diff?: Prisma.JsonNullableWithAggregatesFilter<"audit_logs">;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"audit_logs">;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"audit_logs"> | Date | string;
};
export type audit_logsCreateInput = {
    id?: bigint | number;
    actor_role?: $Enums.user_role_enum | null;
    action: string;
    target_type: string;
    target_id: string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    users?: Prisma.usersCreateNestedOneWithoutAudit_logsInput;
    organisations?: Prisma.organisationsCreateNestedOneWithoutAudit_logsInput;
};
export type audit_logsUncheckedCreateInput = {
    id?: bigint | number;
    org_id?: string | null;
    actor_user_id?: string | null;
    actor_role?: $Enums.user_role_enum | null;
    action: string;
    target_type: string;
    target_id: string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type audit_logsUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actor_role?: Prisma.NullableEnumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneWithoutAudit_logsNestedInput;
    organisations?: Prisma.organisationsUpdateOneWithoutAudit_logsNestedInput;
};
export type audit_logsUncheckedUpdateInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    org_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actor_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actor_role?: Prisma.NullableEnumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logsCreateManyInput = {
    id?: bigint | number;
    org_id?: string | null;
    actor_user_id?: string | null;
    actor_role?: $Enums.user_role_enum | null;
    action: string;
    target_type: string;
    target_id: string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type audit_logsUpdateManyMutationInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actor_role?: Prisma.NullableEnumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logsUncheckedUpdateManyInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    org_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actor_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actor_role?: Prisma.NullableEnumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    actor_user_id?: Prisma.SortOrder;
    actor_role?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    target_type?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    diff?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type audit_logsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type audit_logsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    actor_user_id?: Prisma.SortOrder;
    actor_role?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    target_type?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type audit_logsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    actor_user_id?: Prisma.SortOrder;
    actor_role?: Prisma.SortOrder;
    action?: Prisma.SortOrder;
    target_type?: Prisma.SortOrder;
    target_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type audit_logsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type Audit_logsListRelationFilter = {
    every?: Prisma.audit_logsWhereInput;
    some?: Prisma.audit_logsWhereInput;
    none?: Prisma.audit_logsWhereInput;
};
export type audit_logsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type NullableEnumuser_role_enumFieldUpdateOperationsInput = {
    set?: $Enums.user_role_enum | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type audit_logsCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.audit_logsCreateWithoutOrganisationsInput, Prisma.audit_logsUncheckedCreateWithoutOrganisationsInput> | Prisma.audit_logsCreateWithoutOrganisationsInput[] | Prisma.audit_logsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.audit_logsCreateOrConnectWithoutOrganisationsInput | Prisma.audit_logsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.audit_logsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
};
export type audit_logsUncheckedCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.audit_logsCreateWithoutOrganisationsInput, Prisma.audit_logsUncheckedCreateWithoutOrganisationsInput> | Prisma.audit_logsCreateWithoutOrganisationsInput[] | Prisma.audit_logsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.audit_logsCreateOrConnectWithoutOrganisationsInput | Prisma.audit_logsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.audit_logsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
};
export type audit_logsUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.audit_logsCreateWithoutOrganisationsInput, Prisma.audit_logsUncheckedCreateWithoutOrganisationsInput> | Prisma.audit_logsCreateWithoutOrganisationsInput[] | Prisma.audit_logsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.audit_logsCreateOrConnectWithoutOrganisationsInput | Prisma.audit_logsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.audit_logsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.audit_logsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.audit_logsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    disconnect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    delete?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    connect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    update?: Prisma.audit_logsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.audit_logsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.audit_logsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.audit_logsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.audit_logsScalarWhereInput | Prisma.audit_logsScalarWhereInput[];
};
export type audit_logsUncheckedUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.audit_logsCreateWithoutOrganisationsInput, Prisma.audit_logsUncheckedCreateWithoutOrganisationsInput> | Prisma.audit_logsCreateWithoutOrganisationsInput[] | Prisma.audit_logsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.audit_logsCreateOrConnectWithoutOrganisationsInput | Prisma.audit_logsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.audit_logsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.audit_logsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.audit_logsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    disconnect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    delete?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    connect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    update?: Prisma.audit_logsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.audit_logsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.audit_logsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.audit_logsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.audit_logsScalarWhereInput | Prisma.audit_logsScalarWhereInput[];
};
export type audit_logsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.audit_logsCreateWithoutUsersInput, Prisma.audit_logsUncheckedCreateWithoutUsersInput> | Prisma.audit_logsCreateWithoutUsersInput[] | Prisma.audit_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.audit_logsCreateOrConnectWithoutUsersInput | Prisma.audit_logsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.audit_logsCreateManyUsersInputEnvelope;
    connect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
};
export type audit_logsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.audit_logsCreateWithoutUsersInput, Prisma.audit_logsUncheckedCreateWithoutUsersInput> | Prisma.audit_logsCreateWithoutUsersInput[] | Prisma.audit_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.audit_logsCreateOrConnectWithoutUsersInput | Prisma.audit_logsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.audit_logsCreateManyUsersInputEnvelope;
    connect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
};
export type audit_logsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.audit_logsCreateWithoutUsersInput, Prisma.audit_logsUncheckedCreateWithoutUsersInput> | Prisma.audit_logsCreateWithoutUsersInput[] | Prisma.audit_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.audit_logsCreateOrConnectWithoutUsersInput | Prisma.audit_logsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.audit_logsUpsertWithWhereUniqueWithoutUsersInput | Prisma.audit_logsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.audit_logsCreateManyUsersInputEnvelope;
    set?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    disconnect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    delete?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    connect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    update?: Prisma.audit_logsUpdateWithWhereUniqueWithoutUsersInput | Prisma.audit_logsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.audit_logsUpdateManyWithWhereWithoutUsersInput | Prisma.audit_logsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.audit_logsScalarWhereInput | Prisma.audit_logsScalarWhereInput[];
};
export type audit_logsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.audit_logsCreateWithoutUsersInput, Prisma.audit_logsUncheckedCreateWithoutUsersInput> | Prisma.audit_logsCreateWithoutUsersInput[] | Prisma.audit_logsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.audit_logsCreateOrConnectWithoutUsersInput | Prisma.audit_logsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.audit_logsUpsertWithWhereUniqueWithoutUsersInput | Prisma.audit_logsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.audit_logsCreateManyUsersInputEnvelope;
    set?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    disconnect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    delete?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    connect?: Prisma.audit_logsWhereUniqueInput | Prisma.audit_logsWhereUniqueInput[];
    update?: Prisma.audit_logsUpdateWithWhereUniqueWithoutUsersInput | Prisma.audit_logsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.audit_logsUpdateManyWithWhereWithoutUsersInput | Prisma.audit_logsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.audit_logsScalarWhereInput | Prisma.audit_logsScalarWhereInput[];
};
export type audit_logsCreateWithoutOrganisationsInput = {
    id?: bigint | number;
    actor_role?: $Enums.user_role_enum | null;
    action: string;
    target_type: string;
    target_id: string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    users?: Prisma.usersCreateNestedOneWithoutAudit_logsInput;
};
export type audit_logsUncheckedCreateWithoutOrganisationsInput = {
    id?: bigint | number;
    actor_user_id?: string | null;
    actor_role?: $Enums.user_role_enum | null;
    action: string;
    target_type: string;
    target_id: string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type audit_logsCreateOrConnectWithoutOrganisationsInput = {
    where: Prisma.audit_logsWhereUniqueInput;
    create: Prisma.XOR<Prisma.audit_logsCreateWithoutOrganisationsInput, Prisma.audit_logsUncheckedCreateWithoutOrganisationsInput>;
};
export type audit_logsCreateManyOrganisationsInputEnvelope = {
    data: Prisma.audit_logsCreateManyOrganisationsInput | Prisma.audit_logsCreateManyOrganisationsInput[];
    skipDuplicates?: boolean;
};
export type audit_logsUpsertWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.audit_logsWhereUniqueInput;
    update: Prisma.XOR<Prisma.audit_logsUpdateWithoutOrganisationsInput, Prisma.audit_logsUncheckedUpdateWithoutOrganisationsInput>;
    create: Prisma.XOR<Prisma.audit_logsCreateWithoutOrganisationsInput, Prisma.audit_logsUncheckedCreateWithoutOrganisationsInput>;
};
export type audit_logsUpdateWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.audit_logsWhereUniqueInput;
    data: Prisma.XOR<Prisma.audit_logsUpdateWithoutOrganisationsInput, Prisma.audit_logsUncheckedUpdateWithoutOrganisationsInput>;
};
export type audit_logsUpdateManyWithWhereWithoutOrganisationsInput = {
    where: Prisma.audit_logsScalarWhereInput;
    data: Prisma.XOR<Prisma.audit_logsUpdateManyMutationInput, Prisma.audit_logsUncheckedUpdateManyWithoutOrganisationsInput>;
};
export type audit_logsScalarWhereInput = {
    AND?: Prisma.audit_logsScalarWhereInput | Prisma.audit_logsScalarWhereInput[];
    OR?: Prisma.audit_logsScalarWhereInput[];
    NOT?: Prisma.audit_logsScalarWhereInput | Prisma.audit_logsScalarWhereInput[];
    id?: Prisma.BigIntFilter<"audit_logs"> | bigint | number;
    org_id?: Prisma.UuidNullableFilter<"audit_logs"> | string | null;
    actor_user_id?: Prisma.UuidNullableFilter<"audit_logs"> | string | null;
    actor_role?: Prisma.Enumuser_role_enumNullableFilter<"audit_logs"> | $Enums.user_role_enum | null;
    action?: Prisma.StringFilter<"audit_logs"> | string;
    target_type?: Prisma.StringFilter<"audit_logs"> | string;
    target_id?: Prisma.UuidFilter<"audit_logs"> | string;
    diff?: Prisma.JsonNullableFilter<"audit_logs">;
    metadata?: Prisma.JsonNullableFilter<"audit_logs">;
    created_at?: Prisma.DateTimeFilter<"audit_logs"> | Date | string;
};
export type audit_logsCreateWithoutUsersInput = {
    id?: bigint | number;
    actor_role?: $Enums.user_role_enum | null;
    action: string;
    target_type: string;
    target_id: string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
    organisations?: Prisma.organisationsCreateNestedOneWithoutAudit_logsInput;
};
export type audit_logsUncheckedCreateWithoutUsersInput = {
    id?: bigint | number;
    org_id?: string | null;
    actor_role?: $Enums.user_role_enum | null;
    action: string;
    target_type: string;
    target_id: string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type audit_logsCreateOrConnectWithoutUsersInput = {
    where: Prisma.audit_logsWhereUniqueInput;
    create: Prisma.XOR<Prisma.audit_logsCreateWithoutUsersInput, Prisma.audit_logsUncheckedCreateWithoutUsersInput>;
};
export type audit_logsCreateManyUsersInputEnvelope = {
    data: Prisma.audit_logsCreateManyUsersInput | Prisma.audit_logsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type audit_logsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.audit_logsWhereUniqueInput;
    update: Prisma.XOR<Prisma.audit_logsUpdateWithoutUsersInput, Prisma.audit_logsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.audit_logsCreateWithoutUsersInput, Prisma.audit_logsUncheckedCreateWithoutUsersInput>;
};
export type audit_logsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.audit_logsWhereUniqueInput;
    data: Prisma.XOR<Prisma.audit_logsUpdateWithoutUsersInput, Prisma.audit_logsUncheckedUpdateWithoutUsersInput>;
};
export type audit_logsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.audit_logsScalarWhereInput;
    data: Prisma.XOR<Prisma.audit_logsUpdateManyMutationInput, Prisma.audit_logsUncheckedUpdateManyWithoutUsersInput>;
};
export type audit_logsCreateManyOrganisationsInput = {
    id?: bigint | number;
    actor_user_id?: string | null;
    actor_role?: $Enums.user_role_enum | null;
    action: string;
    target_type: string;
    target_id: string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type audit_logsUpdateWithoutOrganisationsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actor_role?: Prisma.NullableEnumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneWithoutAudit_logsNestedInput;
};
export type audit_logsUncheckedUpdateWithoutOrganisationsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actor_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actor_role?: Prisma.NullableEnumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logsUncheckedUpdateManyWithoutOrganisationsInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actor_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actor_role?: Prisma.NullableEnumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logsCreateManyUsersInput = {
    id?: bigint | number;
    org_id?: string | null;
    actor_role?: $Enums.user_role_enum | null;
    action: string;
    target_type: string;
    target_id: string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Date | string;
};
export type audit_logsUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    actor_role?: Prisma.NullableEnumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneWithoutAudit_logsNestedInput;
};
export type audit_logsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    org_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actor_role?: Prisma.NullableEnumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    org_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actor_role?: Prisma.NullableEnumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum | null;
    action?: Prisma.StringFieldUpdateOperationsInput | string;
    target_type?: Prisma.StringFieldUpdateOperationsInput | string;
    target_id?: Prisma.StringFieldUpdateOperationsInput | string;
    diff?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type audit_logsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    actor_user_id?: boolean;
    actor_role?: boolean;
    action?: boolean;
    target_type?: boolean;
    target_id?: boolean;
    diff?: boolean;
    metadata?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.audit_logs$usersArgs<ExtArgs>;
    organisations?: boolean | Prisma.audit_logs$organisationsArgs<ExtArgs>;
}, ExtArgs["result"]["audit_logs"]>;
export type audit_logsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    actor_user_id?: boolean;
    actor_role?: boolean;
    action?: boolean;
    target_type?: boolean;
    target_id?: boolean;
    diff?: boolean;
    metadata?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.audit_logs$usersArgs<ExtArgs>;
    organisations?: boolean | Prisma.audit_logs$organisationsArgs<ExtArgs>;
}, ExtArgs["result"]["audit_logs"]>;
export type audit_logsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    actor_user_id?: boolean;
    actor_role?: boolean;
    action?: boolean;
    target_type?: boolean;
    target_id?: boolean;
    diff?: boolean;
    metadata?: boolean;
    created_at?: boolean;
    users?: boolean | Prisma.audit_logs$usersArgs<ExtArgs>;
    organisations?: boolean | Prisma.audit_logs$organisationsArgs<ExtArgs>;
}, ExtArgs["result"]["audit_logs"]>;
export type audit_logsSelectScalar = {
    id?: boolean;
    org_id?: boolean;
    actor_user_id?: boolean;
    actor_role?: boolean;
    action?: boolean;
    target_type?: boolean;
    target_id?: boolean;
    diff?: boolean;
    metadata?: boolean;
    created_at?: boolean;
};
export type audit_logsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "org_id" | "actor_user_id" | "actor_role" | "action" | "target_type" | "target_id" | "diff" | "metadata" | "created_at", ExtArgs["result"]["audit_logs"]>;
export type audit_logsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.audit_logs$usersArgs<ExtArgs>;
    organisations?: boolean | Prisma.audit_logs$organisationsArgs<ExtArgs>;
};
export type audit_logsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.audit_logs$usersArgs<ExtArgs>;
    organisations?: boolean | Prisma.audit_logs$organisationsArgs<ExtArgs>;
};
export type audit_logsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.audit_logs$usersArgs<ExtArgs>;
    organisations?: boolean | Prisma.audit_logs$organisationsArgs<ExtArgs>;
};
export type $audit_logsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "audit_logs";
    objects: {
        users: Prisma.$usersPayload<ExtArgs> | null;
        organisations: Prisma.$organisationsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: bigint;
        org_id: string | null;
        actor_user_id: string | null;
        actor_role: $Enums.user_role_enum | null;
        action: string;
        target_type: string;
        target_id: string;
        diff: runtime.JsonValue | null;
        metadata: runtime.JsonValue | null;
        created_at: Date;
    }, ExtArgs["result"]["audit_logs"]>;
    composites: {};
};
export type audit_logsGetPayload<S extends boolean | null | undefined | audit_logsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$audit_logsPayload, S>;
export type audit_logsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<audit_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Audit_logsCountAggregateInputType | true;
};
export interface audit_logsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['audit_logs'];
        meta: {
            name: 'audit_logs';
        };
    };
    findUnique<T extends audit_logsFindUniqueArgs>(args: Prisma.SelectSubset<T, audit_logsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__audit_logsClient<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends audit_logsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, audit_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__audit_logsClient<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends audit_logsFindFirstArgs>(args?: Prisma.SelectSubset<T, audit_logsFindFirstArgs<ExtArgs>>): Prisma.Prisma__audit_logsClient<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends audit_logsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, audit_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__audit_logsClient<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends audit_logsFindManyArgs>(args?: Prisma.SelectSubset<T, audit_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends audit_logsCreateArgs>(args: Prisma.SelectSubset<T, audit_logsCreateArgs<ExtArgs>>): Prisma.Prisma__audit_logsClient<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends audit_logsCreateManyArgs>(args?: Prisma.SelectSubset<T, audit_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends audit_logsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, audit_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends audit_logsDeleteArgs>(args: Prisma.SelectSubset<T, audit_logsDeleteArgs<ExtArgs>>): Prisma.Prisma__audit_logsClient<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends audit_logsUpdateArgs>(args: Prisma.SelectSubset<T, audit_logsUpdateArgs<ExtArgs>>): Prisma.Prisma__audit_logsClient<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends audit_logsDeleteManyArgs>(args?: Prisma.SelectSubset<T, audit_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends audit_logsUpdateManyArgs>(args: Prisma.SelectSubset<T, audit_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends audit_logsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, audit_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends audit_logsUpsertArgs>(args: Prisma.SelectSubset<T, audit_logsUpsertArgs<ExtArgs>>): Prisma.Prisma__audit_logsClient<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends audit_logsCountArgs>(args?: Prisma.Subset<T, audit_logsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Audit_logsCountAggregateOutputType> : number>;
    aggregate<T extends Audit_logsAggregateArgs>(args: Prisma.Subset<T, Audit_logsAggregateArgs>): Prisma.PrismaPromise<GetAudit_logsAggregateType<T>>;
    groupBy<T extends audit_logsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: audit_logsGroupByArgs['orderBy'];
    } : {
        orderBy?: audit_logsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, audit_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: audit_logsFieldRefs;
}
export interface Prisma__audit_logsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users<T extends Prisma.audit_logs$usersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.audit_logs$usersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    organisations<T extends Prisma.audit_logs$organisationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.audit_logs$organisationsArgs<ExtArgs>>): Prisma.Prisma__organisationsClient<runtime.Types.Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface audit_logsFieldRefs {
    readonly id: Prisma.FieldRef<"audit_logs", 'BigInt'>;
    readonly org_id: Prisma.FieldRef<"audit_logs", 'String'>;
    readonly actor_user_id: Prisma.FieldRef<"audit_logs", 'String'>;
    readonly actor_role: Prisma.FieldRef<"audit_logs", 'user_role_enum'>;
    readonly action: Prisma.FieldRef<"audit_logs", 'String'>;
    readonly target_type: Prisma.FieldRef<"audit_logs", 'String'>;
    readonly target_id: Prisma.FieldRef<"audit_logs", 'String'>;
    readonly diff: Prisma.FieldRef<"audit_logs", 'Json'>;
    readonly metadata: Prisma.FieldRef<"audit_logs", 'Json'>;
    readonly created_at: Prisma.FieldRef<"audit_logs", 'DateTime'>;
}
export type audit_logsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
    where: Prisma.audit_logsWhereUniqueInput;
};
export type audit_logsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
    where: Prisma.audit_logsWhereUniqueInput;
};
export type audit_logsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
    where?: Prisma.audit_logsWhereInput;
    orderBy?: Prisma.audit_logsOrderByWithRelationInput | Prisma.audit_logsOrderByWithRelationInput[];
    cursor?: Prisma.audit_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Audit_logsScalarFieldEnum | Prisma.Audit_logsScalarFieldEnum[];
};
export type audit_logsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
    where?: Prisma.audit_logsWhereInput;
    orderBy?: Prisma.audit_logsOrderByWithRelationInput | Prisma.audit_logsOrderByWithRelationInput[];
    cursor?: Prisma.audit_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Audit_logsScalarFieldEnum | Prisma.Audit_logsScalarFieldEnum[];
};
export type audit_logsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
    where?: Prisma.audit_logsWhereInput;
    orderBy?: Prisma.audit_logsOrderByWithRelationInput | Prisma.audit_logsOrderByWithRelationInput[];
    cursor?: Prisma.audit_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Audit_logsScalarFieldEnum | Prisma.Audit_logsScalarFieldEnum[];
};
export type audit_logsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.audit_logsCreateInput, Prisma.audit_logsUncheckedCreateInput>;
};
export type audit_logsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.audit_logsCreateManyInput | Prisma.audit_logsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type audit_logsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    data: Prisma.audit_logsCreateManyInput | Prisma.audit_logsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.audit_logsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type audit_logsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.audit_logsUpdateInput, Prisma.audit_logsUncheckedUpdateInput>;
    where: Prisma.audit_logsWhereUniqueInput;
};
export type audit_logsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.audit_logsUpdateManyMutationInput, Prisma.audit_logsUncheckedUpdateManyInput>;
    where?: Prisma.audit_logsWhereInput;
    limit?: number;
};
export type audit_logsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.audit_logsUpdateManyMutationInput, Prisma.audit_logsUncheckedUpdateManyInput>;
    where?: Prisma.audit_logsWhereInput;
    limit?: number;
    include?: Prisma.audit_logsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type audit_logsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
    where: Prisma.audit_logsWhereUniqueInput;
    create: Prisma.XOR<Prisma.audit_logsCreateInput, Prisma.audit_logsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.audit_logsUpdateInput, Prisma.audit_logsUncheckedUpdateInput>;
};
export type audit_logsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
    where: Prisma.audit_logsWhereUniqueInput;
};
export type audit_logsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_logsWhereInput;
    limit?: number;
};
export type audit_logs$usersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type audit_logs$organisationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.organisationsSelect<ExtArgs> | null;
    omit?: Prisma.organisationsOmit<ExtArgs> | null;
    include?: Prisma.organisationsInclude<ExtArgs> | null;
    where?: Prisma.organisationsWhereInput;
};
export type audit_logsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
};
