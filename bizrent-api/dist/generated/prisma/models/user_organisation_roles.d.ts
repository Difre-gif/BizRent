import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type user_organisation_rolesModel = runtime.Types.Result.DefaultSelection<Prisma.$user_organisation_rolesPayload>;
export type AggregateUser_organisation_roles = {
    _count: User_organisation_rolesCountAggregateOutputType | null;
    _min: User_organisation_rolesMinAggregateOutputType | null;
    _max: User_organisation_rolesMaxAggregateOutputType | null;
};
export type User_organisation_rolesMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    org_id: string | null;
    role: $Enums.user_role_enum | null;
    is_active: boolean | null;
    invited_by: string | null;
    invited_at: Date | null;
    accepted_at: Date | null;
    created_at: Date | null;
};
export type User_organisation_rolesMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    org_id: string | null;
    role: $Enums.user_role_enum | null;
    is_active: boolean | null;
    invited_by: string | null;
    invited_at: Date | null;
    accepted_at: Date | null;
    created_at: Date | null;
};
export type User_organisation_rolesCountAggregateOutputType = {
    id: number;
    user_id: number;
    org_id: number;
    role: number;
    is_active: number;
    invited_by: number;
    invited_at: number;
    accepted_at: number;
    created_at: number;
    _all: number;
};
export type User_organisation_rolesMinAggregateInputType = {
    id?: true;
    user_id?: true;
    org_id?: true;
    role?: true;
    is_active?: true;
    invited_by?: true;
    invited_at?: true;
    accepted_at?: true;
    created_at?: true;
};
export type User_organisation_rolesMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    org_id?: true;
    role?: true;
    is_active?: true;
    invited_by?: true;
    invited_at?: true;
    accepted_at?: true;
    created_at?: true;
};
export type User_organisation_rolesCountAggregateInputType = {
    id?: true;
    user_id?: true;
    org_id?: true;
    role?: true;
    is_active?: true;
    invited_by?: true;
    invited_at?: true;
    accepted_at?: true;
    created_at?: true;
    _all?: true;
};
export type User_organisation_rolesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_organisation_rolesWhereInput;
    orderBy?: Prisma.user_organisation_rolesOrderByWithRelationInput | Prisma.user_organisation_rolesOrderByWithRelationInput[];
    cursor?: Prisma.user_organisation_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | User_organisation_rolesCountAggregateInputType;
    _min?: User_organisation_rolesMinAggregateInputType;
    _max?: User_organisation_rolesMaxAggregateInputType;
};
export type GetUser_organisation_rolesAggregateType<T extends User_organisation_rolesAggregateArgs> = {
    [P in keyof T & keyof AggregateUser_organisation_roles]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser_organisation_roles[P]> : Prisma.GetScalarType<T[P], AggregateUser_organisation_roles[P]>;
};
export type user_organisation_rolesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_organisation_rolesWhereInput;
    orderBy?: Prisma.user_organisation_rolesOrderByWithAggregationInput | Prisma.user_organisation_rolesOrderByWithAggregationInput[];
    by: Prisma.User_organisation_rolesScalarFieldEnum[] | Prisma.User_organisation_rolesScalarFieldEnum;
    having?: Prisma.user_organisation_rolesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: User_organisation_rolesCountAggregateInputType | true;
    _min?: User_organisation_rolesMinAggregateInputType;
    _max?: User_organisation_rolesMaxAggregateInputType;
};
export type User_organisation_rolesGroupByOutputType = {
    id: string;
    user_id: string;
    org_id: string;
    role: $Enums.user_role_enum;
    is_active: boolean;
    invited_by: string | null;
    invited_at: Date | null;
    accepted_at: Date | null;
    created_at: Date;
    _count: User_organisation_rolesCountAggregateOutputType | null;
    _min: User_organisation_rolesMinAggregateOutputType | null;
    _max: User_organisation_rolesMaxAggregateOutputType | null;
};
export type GetUser_organisation_rolesGroupByPayload<T extends user_organisation_rolesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<User_organisation_rolesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof User_organisation_rolesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], User_organisation_rolesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], User_organisation_rolesGroupByOutputType[P]>;
}>>;
export type user_organisation_rolesWhereInput = {
    AND?: Prisma.user_organisation_rolesWhereInput | Prisma.user_organisation_rolesWhereInput[];
    OR?: Prisma.user_organisation_rolesWhereInput[];
    NOT?: Prisma.user_organisation_rolesWhereInput | Prisma.user_organisation_rolesWhereInput[];
    id?: Prisma.UuidFilter<"user_organisation_roles"> | string;
    user_id?: Prisma.UuidFilter<"user_organisation_roles"> | string;
    org_id?: Prisma.UuidFilter<"user_organisation_roles"> | string;
    role?: Prisma.Enumuser_role_enumFilter<"user_organisation_roles"> | $Enums.user_role_enum;
    is_active?: Prisma.BoolFilter<"user_organisation_roles"> | boolean;
    invited_by?: Prisma.UuidNullableFilter<"user_organisation_roles"> | string | null;
    invited_at?: Prisma.DateTimeNullableFilter<"user_organisation_roles"> | Date | string | null;
    accepted_at?: Prisma.DateTimeNullableFilter<"user_organisation_roles"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"user_organisation_roles"> | Date | string;
    users_user_organisation_roles_invited_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    users_user_organisation_roles_user_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type user_organisation_rolesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    invited_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    invited_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    accepted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    users_user_organisation_roles_invited_byTousers?: Prisma.usersOrderByWithRelationInput;
    organisations?: Prisma.organisationsOrderByWithRelationInput;
    users_user_organisation_roles_user_idTousers?: Prisma.usersOrderByWithRelationInput;
};
export type user_organisation_rolesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id_org_id?: Prisma.user_organisation_rolesUser_idOrg_idCompoundUniqueInput;
    AND?: Prisma.user_organisation_rolesWhereInput | Prisma.user_organisation_rolesWhereInput[];
    OR?: Prisma.user_organisation_rolesWhereInput[];
    NOT?: Prisma.user_organisation_rolesWhereInput | Prisma.user_organisation_rolesWhereInput[];
    user_id?: Prisma.UuidFilter<"user_organisation_roles"> | string;
    org_id?: Prisma.UuidFilter<"user_organisation_roles"> | string;
    role?: Prisma.Enumuser_role_enumFilter<"user_organisation_roles"> | $Enums.user_role_enum;
    is_active?: Prisma.BoolFilter<"user_organisation_roles"> | boolean;
    invited_by?: Prisma.UuidNullableFilter<"user_organisation_roles"> | string | null;
    invited_at?: Prisma.DateTimeNullableFilter<"user_organisation_roles"> | Date | string | null;
    accepted_at?: Prisma.DateTimeNullableFilter<"user_organisation_roles"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"user_organisation_roles"> | Date | string;
    users_user_organisation_roles_invited_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    users_user_organisation_roles_user_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "user_id_org_id">;
export type user_organisation_rolesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    invited_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    invited_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    accepted_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.user_organisation_rolesCountOrderByAggregateInput;
    _max?: Prisma.user_organisation_rolesMaxOrderByAggregateInput;
    _min?: Prisma.user_organisation_rolesMinOrderByAggregateInput;
};
export type user_organisation_rolesScalarWhereWithAggregatesInput = {
    AND?: Prisma.user_organisation_rolesScalarWhereWithAggregatesInput | Prisma.user_organisation_rolesScalarWhereWithAggregatesInput[];
    OR?: Prisma.user_organisation_rolesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.user_organisation_rolesScalarWhereWithAggregatesInput | Prisma.user_organisation_rolesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"user_organisation_roles"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"user_organisation_roles"> | string;
    org_id?: Prisma.UuidWithAggregatesFilter<"user_organisation_roles"> | string;
    role?: Prisma.Enumuser_role_enumWithAggregatesFilter<"user_organisation_roles"> | $Enums.user_role_enum;
    is_active?: Prisma.BoolWithAggregatesFilter<"user_organisation_roles"> | boolean;
    invited_by?: Prisma.UuidNullableWithAggregatesFilter<"user_organisation_roles"> | string | null;
    invited_at?: Prisma.DateTimeNullableWithAggregatesFilter<"user_organisation_roles"> | Date | string | null;
    accepted_at?: Prisma.DateTimeNullableWithAggregatesFilter<"user_organisation_roles"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"user_organisation_roles"> | Date | string;
};
export type user_organisation_rolesCreateInput = {
    id?: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
    users_user_organisation_roles_invited_byTousers?: Prisma.usersCreateNestedOneWithoutUser_organisation_roles_user_organisation_roles_invited_byTousersInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutUser_organisation_rolesInput;
    users_user_organisation_roles_user_idTousers: Prisma.usersCreateNestedOneWithoutUser_organisation_roles_user_organisation_roles_user_idTousersInput;
};
export type user_organisation_rolesUncheckedCreateInput = {
    id?: string;
    user_id: string;
    org_id: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_by?: string | null;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_organisation_rolesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users_user_organisation_roles_invited_byTousers?: Prisma.usersUpdateOneWithoutUser_organisation_roles_user_organisation_roles_invited_byTousersNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutUser_organisation_rolesNestedInput;
    users_user_organisation_roles_user_idTousers?: Prisma.usersUpdateOneRequiredWithoutUser_organisation_roles_user_organisation_roles_user_idTousersNestedInput;
};
export type user_organisation_rolesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_organisation_rolesCreateManyInput = {
    id?: string;
    user_id: string;
    org_id: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_by?: string | null;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_organisation_rolesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_organisation_rolesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type User_organisation_rolesListRelationFilter = {
    every?: Prisma.user_organisation_rolesWhereInput;
    some?: Prisma.user_organisation_rolesWhereInput;
    none?: Prisma.user_organisation_rolesWhereInput;
};
export type user_organisation_rolesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type user_organisation_rolesUser_idOrg_idCompoundUniqueInput = {
    user_id: string;
    org_id: string;
};
export type user_organisation_rolesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    invited_by?: Prisma.SortOrder;
    invited_at?: Prisma.SortOrder;
    accepted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type user_organisation_rolesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    invited_by?: Prisma.SortOrder;
    invited_at?: Prisma.SortOrder;
    accepted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type user_organisation_rolesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    invited_by?: Prisma.SortOrder;
    invited_at?: Prisma.SortOrder;
    accepted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type user_organisation_rolesCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutOrganisationsInput, Prisma.user_organisation_rolesUncheckedCreateWithoutOrganisationsInput> | Prisma.user_organisation_rolesCreateWithoutOrganisationsInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutOrganisationsInput | Prisma.user_organisation_rolesCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
};
export type user_organisation_rolesUncheckedCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutOrganisationsInput, Prisma.user_organisation_rolesUncheckedCreateWithoutOrganisationsInput> | Prisma.user_organisation_rolesCreateWithoutOrganisationsInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutOrganisationsInput | Prisma.user_organisation_rolesCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
};
export type user_organisation_rolesUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutOrganisationsInput, Prisma.user_organisation_rolesUncheckedCreateWithoutOrganisationsInput> | Prisma.user_organisation_rolesCreateWithoutOrganisationsInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutOrganisationsInput | Prisma.user_organisation_rolesCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyOrganisationsInputEnvelope;
    set?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    disconnect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    delete?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    update?: Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.user_organisation_rolesUpdateManyWithWhereWithoutOrganisationsInput | Prisma.user_organisation_rolesUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.user_organisation_rolesScalarWhereInput | Prisma.user_organisation_rolesScalarWhereInput[];
};
export type user_organisation_rolesUncheckedUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutOrganisationsInput, Prisma.user_organisation_rolesUncheckedCreateWithoutOrganisationsInput> | Prisma.user_organisation_rolesCreateWithoutOrganisationsInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutOrganisationsInput | Prisma.user_organisation_rolesCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyOrganisationsInputEnvelope;
    set?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    disconnect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    delete?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    update?: Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.user_organisation_rolesUpdateManyWithWhereWithoutOrganisationsInput | Prisma.user_organisation_rolesUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.user_organisation_rolesScalarWhereInput | Prisma.user_organisation_rolesScalarWhereInput[];
};
export type Enumuser_role_enumFieldUpdateOperationsInput = {
    set?: $Enums.user_role_enum;
};
export type user_organisation_rolesCreateNestedManyWithoutUsers_user_organisation_roles_invited_byTousersInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_invited_byTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_invited_byTousersInput> | Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_invited_byTousersInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_invited_byTousersInput | Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_invited_byTousersInputEnvelope;
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
};
export type user_organisation_rolesCreateNestedManyWithoutUsers_user_organisation_roles_user_idTousersInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_user_idTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_user_idTousersInput> | Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_user_idTousersInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_user_idTousersInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_user_idTousersInput | Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_user_idTousersInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_user_idTousersInputEnvelope;
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
};
export type user_organisation_rolesUncheckedCreateNestedManyWithoutUsers_user_organisation_roles_invited_byTousersInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_invited_byTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_invited_byTousersInput> | Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_invited_byTousersInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_invited_byTousersInput | Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_invited_byTousersInputEnvelope;
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
};
export type user_organisation_rolesUncheckedCreateNestedManyWithoutUsers_user_organisation_roles_user_idTousersInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_user_idTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_user_idTousersInput> | Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_user_idTousersInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_user_idTousersInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_user_idTousersInput | Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_user_idTousersInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_user_idTousersInputEnvelope;
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
};
export type user_organisation_rolesUpdateManyWithoutUsers_user_organisation_roles_invited_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_invited_byTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_invited_byTousersInput> | Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_invited_byTousersInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_invited_byTousersInput | Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    upsert?: Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutUsers_user_organisation_roles_invited_byTousersInput | Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_invited_byTousersInputEnvelope;
    set?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    disconnect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    delete?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    update?: Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutUsers_user_organisation_roles_invited_byTousersInput | Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    updateMany?: Prisma.user_organisation_rolesUpdateManyWithWhereWithoutUsers_user_organisation_roles_invited_byTousersInput | Prisma.user_organisation_rolesUpdateManyWithWhereWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    deleteMany?: Prisma.user_organisation_rolesScalarWhereInput | Prisma.user_organisation_rolesScalarWhereInput[];
};
export type user_organisation_rolesUpdateManyWithoutUsers_user_organisation_roles_user_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_user_idTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_user_idTousersInput> | Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_user_idTousersInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_user_idTousersInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_user_idTousersInput | Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_user_idTousersInput[];
    upsert?: Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutUsers_user_organisation_roles_user_idTousersInput | Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutUsers_user_organisation_roles_user_idTousersInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_user_idTousersInputEnvelope;
    set?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    disconnect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    delete?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    update?: Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutUsers_user_organisation_roles_user_idTousersInput | Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutUsers_user_organisation_roles_user_idTousersInput[];
    updateMany?: Prisma.user_organisation_rolesUpdateManyWithWhereWithoutUsers_user_organisation_roles_user_idTousersInput | Prisma.user_organisation_rolesUpdateManyWithWhereWithoutUsers_user_organisation_roles_user_idTousersInput[];
    deleteMany?: Prisma.user_organisation_rolesScalarWhereInput | Prisma.user_organisation_rolesScalarWhereInput[];
};
export type user_organisation_rolesUncheckedUpdateManyWithoutUsers_user_organisation_roles_invited_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_invited_byTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_invited_byTousersInput> | Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_invited_byTousersInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_invited_byTousersInput | Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    upsert?: Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutUsers_user_organisation_roles_invited_byTousersInput | Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_invited_byTousersInputEnvelope;
    set?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    disconnect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    delete?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    update?: Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutUsers_user_organisation_roles_invited_byTousersInput | Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    updateMany?: Prisma.user_organisation_rolesUpdateManyWithWhereWithoutUsers_user_organisation_roles_invited_byTousersInput | Prisma.user_organisation_rolesUpdateManyWithWhereWithoutUsers_user_organisation_roles_invited_byTousersInput[];
    deleteMany?: Prisma.user_organisation_rolesScalarWhereInput | Prisma.user_organisation_rolesScalarWhereInput[];
};
export type user_organisation_rolesUncheckedUpdateManyWithoutUsers_user_organisation_roles_user_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_user_idTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_user_idTousersInput> | Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_user_idTousersInput[] | Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_user_idTousersInput[];
    connectOrCreate?: Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_user_idTousersInput | Prisma.user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_user_idTousersInput[];
    upsert?: Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutUsers_user_organisation_roles_user_idTousersInput | Prisma.user_organisation_rolesUpsertWithWhereUniqueWithoutUsers_user_organisation_roles_user_idTousersInput[];
    createMany?: Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_user_idTousersInputEnvelope;
    set?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    disconnect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    delete?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    connect?: Prisma.user_organisation_rolesWhereUniqueInput | Prisma.user_organisation_rolesWhereUniqueInput[];
    update?: Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutUsers_user_organisation_roles_user_idTousersInput | Prisma.user_organisation_rolesUpdateWithWhereUniqueWithoutUsers_user_organisation_roles_user_idTousersInput[];
    updateMany?: Prisma.user_organisation_rolesUpdateManyWithWhereWithoutUsers_user_organisation_roles_user_idTousersInput | Prisma.user_organisation_rolesUpdateManyWithWhereWithoutUsers_user_organisation_roles_user_idTousersInput[];
    deleteMany?: Prisma.user_organisation_rolesScalarWhereInput | Prisma.user_organisation_rolesScalarWhereInput[];
};
export type user_organisation_rolesCreateWithoutOrganisationsInput = {
    id?: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
    users_user_organisation_roles_invited_byTousers?: Prisma.usersCreateNestedOneWithoutUser_organisation_roles_user_organisation_roles_invited_byTousersInput;
    users_user_organisation_roles_user_idTousers: Prisma.usersCreateNestedOneWithoutUser_organisation_roles_user_organisation_roles_user_idTousersInput;
};
export type user_organisation_rolesUncheckedCreateWithoutOrganisationsInput = {
    id?: string;
    user_id: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_by?: string | null;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_organisation_rolesCreateOrConnectWithoutOrganisationsInput = {
    where: Prisma.user_organisation_rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutOrganisationsInput, Prisma.user_organisation_rolesUncheckedCreateWithoutOrganisationsInput>;
};
export type user_organisation_rolesCreateManyOrganisationsInputEnvelope = {
    data: Prisma.user_organisation_rolesCreateManyOrganisationsInput | Prisma.user_organisation_rolesCreateManyOrganisationsInput[];
    skipDuplicates?: boolean;
};
export type user_organisation_rolesUpsertWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.user_organisation_rolesWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_organisation_rolesUpdateWithoutOrganisationsInput, Prisma.user_organisation_rolesUncheckedUpdateWithoutOrganisationsInput>;
    create: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutOrganisationsInput, Prisma.user_organisation_rolesUncheckedCreateWithoutOrganisationsInput>;
};
export type user_organisation_rolesUpdateWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.user_organisation_rolesWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_organisation_rolesUpdateWithoutOrganisationsInput, Prisma.user_organisation_rolesUncheckedUpdateWithoutOrganisationsInput>;
};
export type user_organisation_rolesUpdateManyWithWhereWithoutOrganisationsInput = {
    where: Prisma.user_organisation_rolesScalarWhereInput;
    data: Prisma.XOR<Prisma.user_organisation_rolesUpdateManyMutationInput, Prisma.user_organisation_rolesUncheckedUpdateManyWithoutOrganisationsInput>;
};
export type user_organisation_rolesScalarWhereInput = {
    AND?: Prisma.user_organisation_rolesScalarWhereInput | Prisma.user_organisation_rolesScalarWhereInput[];
    OR?: Prisma.user_organisation_rolesScalarWhereInput[];
    NOT?: Prisma.user_organisation_rolesScalarWhereInput | Prisma.user_organisation_rolesScalarWhereInput[];
    id?: Prisma.UuidFilter<"user_organisation_roles"> | string;
    user_id?: Prisma.UuidFilter<"user_organisation_roles"> | string;
    org_id?: Prisma.UuidFilter<"user_organisation_roles"> | string;
    role?: Prisma.Enumuser_role_enumFilter<"user_organisation_roles"> | $Enums.user_role_enum;
    is_active?: Prisma.BoolFilter<"user_organisation_roles"> | boolean;
    invited_by?: Prisma.UuidNullableFilter<"user_organisation_roles"> | string | null;
    invited_at?: Prisma.DateTimeNullableFilter<"user_organisation_roles"> | Date | string | null;
    accepted_at?: Prisma.DateTimeNullableFilter<"user_organisation_roles"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"user_organisation_roles"> | Date | string;
};
export type user_organisation_rolesCreateWithoutUsers_user_organisation_roles_invited_byTousersInput = {
    id?: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
    organisations: Prisma.organisationsCreateNestedOneWithoutUser_organisation_rolesInput;
    users_user_organisation_roles_user_idTousers: Prisma.usersCreateNestedOneWithoutUser_organisation_roles_user_organisation_roles_user_idTousersInput;
};
export type user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_invited_byTousersInput = {
    id?: string;
    user_id: string;
    org_id: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_invited_byTousersInput = {
    where: Prisma.user_organisation_rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_invited_byTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_invited_byTousersInput>;
};
export type user_organisation_rolesCreateManyUsers_user_organisation_roles_invited_byTousersInputEnvelope = {
    data: Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_invited_byTousersInput | Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_invited_byTousersInput[];
    skipDuplicates?: boolean;
};
export type user_organisation_rolesCreateWithoutUsers_user_organisation_roles_user_idTousersInput = {
    id?: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
    users_user_organisation_roles_invited_byTousers?: Prisma.usersCreateNestedOneWithoutUser_organisation_roles_user_organisation_roles_invited_byTousersInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutUser_organisation_rolesInput;
};
export type user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_user_idTousersInput = {
    id?: string;
    org_id: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_by?: string | null;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_organisation_rolesCreateOrConnectWithoutUsers_user_organisation_roles_user_idTousersInput = {
    where: Prisma.user_organisation_rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_user_idTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_user_idTousersInput>;
};
export type user_organisation_rolesCreateManyUsers_user_organisation_roles_user_idTousersInputEnvelope = {
    data: Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_user_idTousersInput | Prisma.user_organisation_rolesCreateManyUsers_user_organisation_roles_user_idTousersInput[];
    skipDuplicates?: boolean;
};
export type user_organisation_rolesUpsertWithWhereUniqueWithoutUsers_user_organisation_roles_invited_byTousersInput = {
    where: Prisma.user_organisation_rolesWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_organisation_rolesUpdateWithoutUsers_user_organisation_roles_invited_byTousersInput, Prisma.user_organisation_rolesUncheckedUpdateWithoutUsers_user_organisation_roles_invited_byTousersInput>;
    create: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_invited_byTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_invited_byTousersInput>;
};
export type user_organisation_rolesUpdateWithWhereUniqueWithoutUsers_user_organisation_roles_invited_byTousersInput = {
    where: Prisma.user_organisation_rolesWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_organisation_rolesUpdateWithoutUsers_user_organisation_roles_invited_byTousersInput, Prisma.user_organisation_rolesUncheckedUpdateWithoutUsers_user_organisation_roles_invited_byTousersInput>;
};
export type user_organisation_rolesUpdateManyWithWhereWithoutUsers_user_organisation_roles_invited_byTousersInput = {
    where: Prisma.user_organisation_rolesScalarWhereInput;
    data: Prisma.XOR<Prisma.user_organisation_rolesUpdateManyMutationInput, Prisma.user_organisation_rolesUncheckedUpdateManyWithoutUsers_user_organisation_roles_invited_byTousersInput>;
};
export type user_organisation_rolesUpsertWithWhereUniqueWithoutUsers_user_organisation_roles_user_idTousersInput = {
    where: Prisma.user_organisation_rolesWhereUniqueInput;
    update: Prisma.XOR<Prisma.user_organisation_rolesUpdateWithoutUsers_user_organisation_roles_user_idTousersInput, Prisma.user_organisation_rolesUncheckedUpdateWithoutUsers_user_organisation_roles_user_idTousersInput>;
    create: Prisma.XOR<Prisma.user_organisation_rolesCreateWithoutUsers_user_organisation_roles_user_idTousersInput, Prisma.user_organisation_rolesUncheckedCreateWithoutUsers_user_organisation_roles_user_idTousersInput>;
};
export type user_organisation_rolesUpdateWithWhereUniqueWithoutUsers_user_organisation_roles_user_idTousersInput = {
    where: Prisma.user_organisation_rolesWhereUniqueInput;
    data: Prisma.XOR<Prisma.user_organisation_rolesUpdateWithoutUsers_user_organisation_roles_user_idTousersInput, Prisma.user_organisation_rolesUncheckedUpdateWithoutUsers_user_organisation_roles_user_idTousersInput>;
};
export type user_organisation_rolesUpdateManyWithWhereWithoutUsers_user_organisation_roles_user_idTousersInput = {
    where: Prisma.user_organisation_rolesScalarWhereInput;
    data: Prisma.XOR<Prisma.user_organisation_rolesUpdateManyMutationInput, Prisma.user_organisation_rolesUncheckedUpdateManyWithoutUsers_user_organisation_roles_user_idTousersInput>;
};
export type user_organisation_rolesCreateManyOrganisationsInput = {
    id?: string;
    user_id: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_by?: string | null;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_organisation_rolesUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users_user_organisation_roles_invited_byTousers?: Prisma.usersUpdateOneWithoutUser_organisation_roles_user_organisation_roles_invited_byTousersNestedInput;
    users_user_organisation_roles_user_idTousers?: Prisma.usersUpdateOneRequiredWithoutUser_organisation_roles_user_organisation_roles_user_idTousersNestedInput;
};
export type user_organisation_rolesUncheckedUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_organisation_rolesUncheckedUpdateManyWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_organisation_rolesCreateManyUsers_user_organisation_roles_invited_byTousersInput = {
    id?: string;
    user_id: string;
    org_id: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_organisation_rolesCreateManyUsers_user_organisation_roles_user_idTousersInput = {
    id?: string;
    org_id: string;
    role: $Enums.user_role_enum;
    is_active?: boolean;
    invited_by?: string | null;
    invited_at?: Date | string | null;
    accepted_at?: Date | string | null;
    created_at?: Date | string;
};
export type user_organisation_rolesUpdateWithoutUsers_user_organisation_roles_invited_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutUser_organisation_rolesNestedInput;
    users_user_organisation_roles_user_idTousers?: Prisma.usersUpdateOneRequiredWithoutUser_organisation_roles_user_organisation_roles_user_idTousersNestedInput;
};
export type user_organisation_rolesUncheckedUpdateWithoutUsers_user_organisation_roles_invited_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_organisation_rolesUncheckedUpdateManyWithoutUsers_user_organisation_roles_invited_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_organisation_rolesUpdateWithoutUsers_user_organisation_roles_user_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users_user_organisation_roles_invited_byTousers?: Prisma.usersUpdateOneWithoutUser_organisation_roles_user_organisation_roles_invited_byTousersNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutUser_organisation_rolesNestedInput;
};
export type user_organisation_rolesUncheckedUpdateWithoutUsers_user_organisation_roles_user_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_organisation_rolesUncheckedUpdateManyWithoutUsers_user_organisation_roles_user_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.Enumuser_role_enumFieldUpdateOperationsInput | $Enums.user_role_enum;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    invited_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    invited_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    accepted_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type user_organisation_rolesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    org_id?: boolean;
    role?: boolean;
    is_active?: boolean;
    invited_by?: boolean;
    invited_at?: boolean;
    accepted_at?: boolean;
    created_at?: boolean;
    users_user_organisation_roles_invited_byTousers?: boolean | Prisma.user_organisation_roles$users_user_organisation_roles_invited_byTousersArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users_user_organisation_roles_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_organisation_roles"]>;
export type user_organisation_rolesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    org_id?: boolean;
    role?: boolean;
    is_active?: boolean;
    invited_by?: boolean;
    invited_at?: boolean;
    accepted_at?: boolean;
    created_at?: boolean;
    users_user_organisation_roles_invited_byTousers?: boolean | Prisma.user_organisation_roles$users_user_organisation_roles_invited_byTousersArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users_user_organisation_roles_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_organisation_roles"]>;
export type user_organisation_rolesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    org_id?: boolean;
    role?: boolean;
    is_active?: boolean;
    invited_by?: boolean;
    invited_at?: boolean;
    accepted_at?: boolean;
    created_at?: boolean;
    users_user_organisation_roles_invited_byTousers?: boolean | Prisma.user_organisation_roles$users_user_organisation_roles_invited_byTousersArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users_user_organisation_roles_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user_organisation_roles"]>;
export type user_organisation_rolesSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    org_id?: boolean;
    role?: boolean;
    is_active?: boolean;
    invited_by?: boolean;
    invited_at?: boolean;
    accepted_at?: boolean;
    created_at?: boolean;
};
export type user_organisation_rolesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "org_id" | "role" | "is_active" | "invited_by" | "invited_at" | "accepted_at" | "created_at", ExtArgs["result"]["user_organisation_roles"]>;
export type user_organisation_rolesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users_user_organisation_roles_invited_byTousers?: boolean | Prisma.user_organisation_roles$users_user_organisation_roles_invited_byTousersArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users_user_organisation_roles_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type user_organisation_rolesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users_user_organisation_roles_invited_byTousers?: boolean | Prisma.user_organisation_roles$users_user_organisation_roles_invited_byTousersArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users_user_organisation_roles_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type user_organisation_rolesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users_user_organisation_roles_invited_byTousers?: boolean | Prisma.user_organisation_roles$users_user_organisation_roles_invited_byTousersArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users_user_organisation_roles_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $user_organisation_rolesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "user_organisation_roles";
    objects: {
        users_user_organisation_roles_invited_byTousers: Prisma.$usersPayload<ExtArgs> | null;
        organisations: Prisma.$organisationsPayload<ExtArgs>;
        users_user_organisation_roles_user_idTousers: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        org_id: string;
        role: $Enums.user_role_enum;
        is_active: boolean;
        invited_by: string | null;
        invited_at: Date | null;
        accepted_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["user_organisation_roles"]>;
    composites: {};
};
export type user_organisation_rolesGetPayload<S extends boolean | null | undefined | user_organisation_rolesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload, S>;
export type user_organisation_rolesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<user_organisation_rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: User_organisation_rolesCountAggregateInputType | true;
};
export interface user_organisation_rolesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['user_organisation_roles'];
        meta: {
            name: 'user_organisation_roles';
        };
    };
    findUnique<T extends user_organisation_rolesFindUniqueArgs>(args: Prisma.SelectSubset<T, user_organisation_rolesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__user_organisation_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends user_organisation_rolesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, user_organisation_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_organisation_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends user_organisation_rolesFindFirstArgs>(args?: Prisma.SelectSubset<T, user_organisation_rolesFindFirstArgs<ExtArgs>>): Prisma.Prisma__user_organisation_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends user_organisation_rolesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, user_organisation_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__user_organisation_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends user_organisation_rolesFindManyArgs>(args?: Prisma.SelectSubset<T, user_organisation_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends user_organisation_rolesCreateArgs>(args: Prisma.SelectSubset<T, user_organisation_rolesCreateArgs<ExtArgs>>): Prisma.Prisma__user_organisation_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends user_organisation_rolesCreateManyArgs>(args?: Prisma.SelectSubset<T, user_organisation_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends user_organisation_rolesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, user_organisation_rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends user_organisation_rolesDeleteArgs>(args: Prisma.SelectSubset<T, user_organisation_rolesDeleteArgs<ExtArgs>>): Prisma.Prisma__user_organisation_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends user_organisation_rolesUpdateArgs>(args: Prisma.SelectSubset<T, user_organisation_rolesUpdateArgs<ExtArgs>>): Prisma.Prisma__user_organisation_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends user_organisation_rolesDeleteManyArgs>(args?: Prisma.SelectSubset<T, user_organisation_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends user_organisation_rolesUpdateManyArgs>(args: Prisma.SelectSubset<T, user_organisation_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends user_organisation_rolesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, user_organisation_rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends user_organisation_rolesUpsertArgs>(args: Prisma.SelectSubset<T, user_organisation_rolesUpsertArgs<ExtArgs>>): Prisma.Prisma__user_organisation_rolesClient<runtime.Types.Result.GetResult<Prisma.$user_organisation_rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends user_organisation_rolesCountArgs>(args?: Prisma.Subset<T, user_organisation_rolesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], User_organisation_rolesCountAggregateOutputType> : number>;
    aggregate<T extends User_organisation_rolesAggregateArgs>(args: Prisma.Subset<T, User_organisation_rolesAggregateArgs>): Prisma.PrismaPromise<GetUser_organisation_rolesAggregateType<T>>;
    groupBy<T extends user_organisation_rolesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: user_organisation_rolesGroupByArgs['orderBy'];
    } : {
        orderBy?: user_organisation_rolesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, user_organisation_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_organisation_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: user_organisation_rolesFieldRefs;
}
export interface Prisma__user_organisation_rolesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    users_user_organisation_roles_invited_byTousers<T extends Prisma.user_organisation_roles$users_user_organisation_roles_invited_byTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.user_organisation_roles$users_user_organisation_roles_invited_byTousersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    organisations<T extends Prisma.organisationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.organisationsDefaultArgs<ExtArgs>>): Prisma.Prisma__organisationsClient<runtime.Types.Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users_user_organisation_roles_user_idTousers<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface user_organisation_rolesFieldRefs {
    readonly id: Prisma.FieldRef<"user_organisation_roles", 'String'>;
    readonly user_id: Prisma.FieldRef<"user_organisation_roles", 'String'>;
    readonly org_id: Prisma.FieldRef<"user_organisation_roles", 'String'>;
    readonly role: Prisma.FieldRef<"user_organisation_roles", 'user_role_enum'>;
    readonly is_active: Prisma.FieldRef<"user_organisation_roles", 'Boolean'>;
    readonly invited_by: Prisma.FieldRef<"user_organisation_roles", 'String'>;
    readonly invited_at: Prisma.FieldRef<"user_organisation_roles", 'DateTime'>;
    readonly accepted_at: Prisma.FieldRef<"user_organisation_roles", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"user_organisation_roles", 'DateTime'>;
}
export type user_organisation_rolesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_organisation_rolesInclude<ExtArgs> | null;
    where: Prisma.user_organisation_rolesWhereUniqueInput;
};
export type user_organisation_rolesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_organisation_rolesInclude<ExtArgs> | null;
    where: Prisma.user_organisation_rolesWhereUniqueInput;
};
export type user_organisation_rolesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_organisation_rolesInclude<ExtArgs> | null;
    where?: Prisma.user_organisation_rolesWhereInput;
    orderBy?: Prisma.user_organisation_rolesOrderByWithRelationInput | Prisma.user_organisation_rolesOrderByWithRelationInput[];
    cursor?: Prisma.user_organisation_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_organisation_rolesScalarFieldEnum | Prisma.User_organisation_rolesScalarFieldEnum[];
};
export type user_organisation_rolesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_organisation_rolesInclude<ExtArgs> | null;
    where?: Prisma.user_organisation_rolesWhereInput;
    orderBy?: Prisma.user_organisation_rolesOrderByWithRelationInput | Prisma.user_organisation_rolesOrderByWithRelationInput[];
    cursor?: Prisma.user_organisation_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_organisation_rolesScalarFieldEnum | Prisma.User_organisation_rolesScalarFieldEnum[];
};
export type user_organisation_rolesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_organisation_rolesInclude<ExtArgs> | null;
    where?: Prisma.user_organisation_rolesWhereInput;
    orderBy?: Prisma.user_organisation_rolesOrderByWithRelationInput | Prisma.user_organisation_rolesOrderByWithRelationInput[];
    cursor?: Prisma.user_organisation_rolesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.User_organisation_rolesScalarFieldEnum | Prisma.User_organisation_rolesScalarFieldEnum[];
};
export type user_organisation_rolesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_organisation_rolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_organisation_rolesCreateInput, Prisma.user_organisation_rolesUncheckedCreateInput>;
};
export type user_organisation_rolesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.user_organisation_rolesCreateManyInput | Prisma.user_organisation_rolesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type user_organisation_rolesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    data: Prisma.user_organisation_rolesCreateManyInput | Prisma.user_organisation_rolesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.user_organisation_rolesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type user_organisation_rolesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_organisation_rolesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_organisation_rolesUpdateInput, Prisma.user_organisation_rolesUncheckedUpdateInput>;
    where: Prisma.user_organisation_rolesWhereUniqueInput;
};
export type user_organisation_rolesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.user_organisation_rolesUpdateManyMutationInput, Prisma.user_organisation_rolesUncheckedUpdateManyInput>;
    where?: Prisma.user_organisation_rolesWhereInput;
    limit?: number;
};
export type user_organisation_rolesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.user_organisation_rolesUpdateManyMutationInput, Prisma.user_organisation_rolesUncheckedUpdateManyInput>;
    where?: Prisma.user_organisation_rolesWhereInput;
    limit?: number;
    include?: Prisma.user_organisation_rolesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type user_organisation_rolesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_organisation_rolesInclude<ExtArgs> | null;
    where: Prisma.user_organisation_rolesWhereUniqueInput;
    create: Prisma.XOR<Prisma.user_organisation_rolesCreateInput, Prisma.user_organisation_rolesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.user_organisation_rolesUpdateInput, Prisma.user_organisation_rolesUncheckedUpdateInput>;
};
export type user_organisation_rolesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_organisation_rolesInclude<ExtArgs> | null;
    where: Prisma.user_organisation_rolesWhereUniqueInput;
};
export type user_organisation_rolesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.user_organisation_rolesWhereInput;
    limit?: number;
};
export type user_organisation_roles$users_user_organisation_roles_invited_byTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type user_organisation_rolesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.user_organisation_rolesSelect<ExtArgs> | null;
    omit?: Prisma.user_organisation_rolesOmit<ExtArgs> | null;
    include?: Prisma.user_organisation_rolesInclude<ExtArgs> | null;
};
