import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type notificationsModel = runtime.Types.Result.DefaultSelection<Prisma.$notificationsPayload>;
export type AggregateNotifications = {
    _count: NotificationsCountAggregateOutputType | null;
    _min: NotificationsMinAggregateOutputType | null;
    _max: NotificationsMaxAggregateOutputType | null;
};
export type NotificationsMinAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    recipient_user_id: string | null;
    type: $Enums.notification_type_enum | null;
    title: string | null;
    body: string | null;
    reference_type: string | null;
    reference_id: string | null;
    is_read: boolean | null;
    read_at: Date | null;
    created_at: Date | null;
};
export type NotificationsMaxAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    recipient_user_id: string | null;
    type: $Enums.notification_type_enum | null;
    title: string | null;
    body: string | null;
    reference_type: string | null;
    reference_id: string | null;
    is_read: boolean | null;
    read_at: Date | null;
    created_at: Date | null;
};
export type NotificationsCountAggregateOutputType = {
    id: number;
    org_id: number;
    recipient_user_id: number;
    type: number;
    title: number;
    body: number;
    reference_type: number;
    reference_id: number;
    is_read: number;
    read_at: number;
    created_at: number;
    _all: number;
};
export type NotificationsMinAggregateInputType = {
    id?: true;
    org_id?: true;
    recipient_user_id?: true;
    type?: true;
    title?: true;
    body?: true;
    reference_type?: true;
    reference_id?: true;
    is_read?: true;
    read_at?: true;
    created_at?: true;
};
export type NotificationsMaxAggregateInputType = {
    id?: true;
    org_id?: true;
    recipient_user_id?: true;
    type?: true;
    title?: true;
    body?: true;
    reference_type?: true;
    reference_id?: true;
    is_read?: true;
    read_at?: true;
    created_at?: true;
};
export type NotificationsCountAggregateInputType = {
    id?: true;
    org_id?: true;
    recipient_user_id?: true;
    type?: true;
    title?: true;
    body?: true;
    reference_type?: true;
    reference_id?: true;
    is_read?: true;
    read_at?: true;
    created_at?: true;
    _all?: true;
};
export type NotificationsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithRelationInput | Prisma.notificationsOrderByWithRelationInput[];
    cursor?: Prisma.notificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | NotificationsCountAggregateInputType;
    _min?: NotificationsMinAggregateInputType;
    _max?: NotificationsMaxAggregateInputType;
};
export type GetNotificationsAggregateType<T extends NotificationsAggregateArgs> = {
    [P in keyof T & keyof AggregateNotifications]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotifications[P]> : Prisma.GetScalarType<T[P], AggregateNotifications[P]>;
};
export type notificationsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithAggregationInput | Prisma.notificationsOrderByWithAggregationInput[];
    by: Prisma.NotificationsScalarFieldEnum[] | Prisma.NotificationsScalarFieldEnum;
    having?: Prisma.notificationsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationsCountAggregateInputType | true;
    _min?: NotificationsMinAggregateInputType;
    _max?: NotificationsMaxAggregateInputType;
};
export type NotificationsGroupByOutputType = {
    id: string;
    org_id: string;
    recipient_user_id: string;
    type: $Enums.notification_type_enum;
    title: string;
    body: string;
    reference_type: string | null;
    reference_id: string | null;
    is_read: boolean;
    read_at: Date | null;
    created_at: Date;
    _count: NotificationsCountAggregateOutputType | null;
    _min: NotificationsMinAggregateOutputType | null;
    _max: NotificationsMaxAggregateOutputType | null;
};
export type GetNotificationsGroupByPayload<T extends notificationsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationsGroupByOutputType[P]>;
}>>;
export type notificationsWhereInput = {
    AND?: Prisma.notificationsWhereInput | Prisma.notificationsWhereInput[];
    OR?: Prisma.notificationsWhereInput[];
    NOT?: Prisma.notificationsWhereInput | Prisma.notificationsWhereInput[];
    id?: Prisma.UuidFilter<"notifications"> | string;
    org_id?: Prisma.UuidFilter<"notifications"> | string;
    recipient_user_id?: Prisma.UuidFilter<"notifications"> | string;
    type?: Prisma.Enumnotification_type_enumFilter<"notifications"> | $Enums.notification_type_enum;
    title?: Prisma.StringFilter<"notifications"> | string;
    body?: Prisma.StringFilter<"notifications"> | string;
    reference_type?: Prisma.StringNullableFilter<"notifications"> | string | null;
    reference_id?: Prisma.UuidNullableFilter<"notifications"> | string | null;
    is_read?: Prisma.BoolFilter<"notifications"> | boolean;
    read_at?: Prisma.DateTimeNullableFilter<"notifications"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"notifications"> | Date | string;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type notificationsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    recipient_user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    reference_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    reference_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    organisations?: Prisma.organisationsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type notificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.notificationsWhereInput | Prisma.notificationsWhereInput[];
    OR?: Prisma.notificationsWhereInput[];
    NOT?: Prisma.notificationsWhereInput | Prisma.notificationsWhereInput[];
    org_id?: Prisma.UuidFilter<"notifications"> | string;
    recipient_user_id?: Prisma.UuidFilter<"notifications"> | string;
    type?: Prisma.Enumnotification_type_enumFilter<"notifications"> | $Enums.notification_type_enum;
    title?: Prisma.StringFilter<"notifications"> | string;
    body?: Prisma.StringFilter<"notifications"> | string;
    reference_type?: Prisma.StringNullableFilter<"notifications"> | string | null;
    reference_id?: Prisma.UuidNullableFilter<"notifications"> | string | null;
    is_read?: Prisma.BoolFilter<"notifications"> | boolean;
    read_at?: Prisma.DateTimeNullableFilter<"notifications"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"notifications"> | Date | string;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type notificationsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    recipient_user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    reference_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    reference_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.notificationsCountOrderByAggregateInput;
    _max?: Prisma.notificationsMaxOrderByAggregateInput;
    _min?: Prisma.notificationsMinOrderByAggregateInput;
};
export type notificationsScalarWhereWithAggregatesInput = {
    AND?: Prisma.notificationsScalarWhereWithAggregatesInput | Prisma.notificationsScalarWhereWithAggregatesInput[];
    OR?: Prisma.notificationsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.notificationsScalarWhereWithAggregatesInput | Prisma.notificationsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"notifications"> | string;
    org_id?: Prisma.UuidWithAggregatesFilter<"notifications"> | string;
    recipient_user_id?: Prisma.UuidWithAggregatesFilter<"notifications"> | string;
    type?: Prisma.Enumnotification_type_enumWithAggregatesFilter<"notifications"> | $Enums.notification_type_enum;
    title?: Prisma.StringWithAggregatesFilter<"notifications"> | string;
    body?: Prisma.StringWithAggregatesFilter<"notifications"> | string;
    reference_type?: Prisma.StringNullableWithAggregatesFilter<"notifications"> | string | null;
    reference_id?: Prisma.UuidNullableWithAggregatesFilter<"notifications"> | string | null;
    is_read?: Prisma.BoolWithAggregatesFilter<"notifications"> | boolean;
    read_at?: Prisma.DateTimeNullableWithAggregatesFilter<"notifications"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"notifications"> | Date | string;
};
export type notificationsCreateInput = {
    id?: string;
    type: $Enums.notification_type_enum;
    title: string;
    body: string;
    reference_type?: string | null;
    reference_id?: string | null;
    is_read?: boolean;
    read_at?: Date | string | null;
    created_at?: Date | string;
    organisations: Prisma.organisationsCreateNestedOneWithoutNotificationsInput;
    users: Prisma.usersCreateNestedOneWithoutNotificationsInput;
};
export type notificationsUncheckedCreateInput = {
    id?: string;
    org_id: string;
    recipient_user_id: string;
    type: $Enums.notification_type_enum;
    title: string;
    body: string;
    reference_type?: string | null;
    reference_id?: string | null;
    is_read?: boolean;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type notificationsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.Enumnotification_type_enumFieldUpdateOperationsInput | $Enums.notification_type_enum;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    reference_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutNotificationsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutNotificationsNestedInput;
};
export type notificationsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.Enumnotification_type_enumFieldUpdateOperationsInput | $Enums.notification_type_enum;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    reference_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type notificationsCreateManyInput = {
    id?: string;
    org_id: string;
    recipient_user_id: string;
    type: $Enums.notification_type_enum;
    title: string;
    body: string;
    reference_type?: string | null;
    reference_id?: string | null;
    is_read?: boolean;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type notificationsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.Enumnotification_type_enumFieldUpdateOperationsInput | $Enums.notification_type_enum;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    reference_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type notificationsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.Enumnotification_type_enumFieldUpdateOperationsInput | $Enums.notification_type_enum;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    reference_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type notificationsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    recipient_user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    reference_type?: Prisma.SortOrder;
    reference_id?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type notificationsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    recipient_user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    reference_type?: Prisma.SortOrder;
    reference_id?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type notificationsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    recipient_user_id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    reference_type?: Prisma.SortOrder;
    reference_id?: Prisma.SortOrder;
    is_read?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type NotificationsListRelationFilter = {
    every?: Prisma.notificationsWhereInput;
    some?: Prisma.notificationsWhereInput;
    none?: Prisma.notificationsWhereInput;
};
export type notificationsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Enumnotification_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.notification_type_enum;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type notificationsCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutOrganisationsInput, Prisma.notificationsUncheckedCreateWithoutOrganisationsInput> | Prisma.notificationsCreateWithoutOrganisationsInput[] | Prisma.notificationsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutOrganisationsInput | Prisma.notificationsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.notificationsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
};
export type notificationsUncheckedCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutOrganisationsInput, Prisma.notificationsUncheckedCreateWithoutOrganisationsInput> | Prisma.notificationsCreateWithoutOrganisationsInput[] | Prisma.notificationsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutOrganisationsInput | Prisma.notificationsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.notificationsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
};
export type notificationsUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutOrganisationsInput, Prisma.notificationsUncheckedCreateWithoutOrganisationsInput> | Prisma.notificationsCreateWithoutOrganisationsInput[] | Prisma.notificationsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutOrganisationsInput | Prisma.notificationsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.notificationsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.notificationsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.notificationsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    disconnect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    delete?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    update?: Prisma.notificationsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.notificationsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.notificationsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.notificationsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
};
export type notificationsUncheckedUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutOrganisationsInput, Prisma.notificationsUncheckedCreateWithoutOrganisationsInput> | Prisma.notificationsCreateWithoutOrganisationsInput[] | Prisma.notificationsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutOrganisationsInput | Prisma.notificationsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.notificationsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.notificationsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.notificationsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    disconnect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    delete?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    update?: Prisma.notificationsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.notificationsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.notificationsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.notificationsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
};
export type notificationsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutUsersInput, Prisma.notificationsUncheckedCreateWithoutUsersInput> | Prisma.notificationsCreateWithoutUsersInput[] | Prisma.notificationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutUsersInput | Prisma.notificationsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.notificationsCreateManyUsersInputEnvelope;
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
};
export type notificationsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutUsersInput, Prisma.notificationsUncheckedCreateWithoutUsersInput> | Prisma.notificationsCreateWithoutUsersInput[] | Prisma.notificationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutUsersInput | Prisma.notificationsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.notificationsCreateManyUsersInputEnvelope;
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
};
export type notificationsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutUsersInput, Prisma.notificationsUncheckedCreateWithoutUsersInput> | Prisma.notificationsCreateWithoutUsersInput[] | Prisma.notificationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutUsersInput | Prisma.notificationsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.notificationsUpsertWithWhereUniqueWithoutUsersInput | Prisma.notificationsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.notificationsCreateManyUsersInputEnvelope;
    set?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    disconnect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    delete?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    update?: Prisma.notificationsUpdateWithWhereUniqueWithoutUsersInput | Prisma.notificationsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.notificationsUpdateManyWithWhereWithoutUsersInput | Prisma.notificationsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
};
export type notificationsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.notificationsCreateWithoutUsersInput, Prisma.notificationsUncheckedCreateWithoutUsersInput> | Prisma.notificationsCreateWithoutUsersInput[] | Prisma.notificationsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.notificationsCreateOrConnectWithoutUsersInput | Prisma.notificationsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.notificationsUpsertWithWhereUniqueWithoutUsersInput | Prisma.notificationsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.notificationsCreateManyUsersInputEnvelope;
    set?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    disconnect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    delete?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    connect?: Prisma.notificationsWhereUniqueInput | Prisma.notificationsWhereUniqueInput[];
    update?: Prisma.notificationsUpdateWithWhereUniqueWithoutUsersInput | Prisma.notificationsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.notificationsUpdateManyWithWhereWithoutUsersInput | Prisma.notificationsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
};
export type notificationsCreateWithoutOrganisationsInput = {
    id?: string;
    type: $Enums.notification_type_enum;
    title: string;
    body: string;
    reference_type?: string | null;
    reference_id?: string | null;
    is_read?: boolean;
    read_at?: Date | string | null;
    created_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutNotificationsInput;
};
export type notificationsUncheckedCreateWithoutOrganisationsInput = {
    id?: string;
    recipient_user_id: string;
    type: $Enums.notification_type_enum;
    title: string;
    body: string;
    reference_type?: string | null;
    reference_id?: string | null;
    is_read?: boolean;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type notificationsCreateOrConnectWithoutOrganisationsInput = {
    where: Prisma.notificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutOrganisationsInput, Prisma.notificationsUncheckedCreateWithoutOrganisationsInput>;
};
export type notificationsCreateManyOrganisationsInputEnvelope = {
    data: Prisma.notificationsCreateManyOrganisationsInput | Prisma.notificationsCreateManyOrganisationsInput[];
    skipDuplicates?: boolean;
};
export type notificationsUpsertWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.notificationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.notificationsUpdateWithoutOrganisationsInput, Prisma.notificationsUncheckedUpdateWithoutOrganisationsInput>;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutOrganisationsInput, Prisma.notificationsUncheckedCreateWithoutOrganisationsInput>;
};
export type notificationsUpdateWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.notificationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.notificationsUpdateWithoutOrganisationsInput, Prisma.notificationsUncheckedUpdateWithoutOrganisationsInput>;
};
export type notificationsUpdateManyWithWhereWithoutOrganisationsInput = {
    where: Prisma.notificationsScalarWhereInput;
    data: Prisma.XOR<Prisma.notificationsUpdateManyMutationInput, Prisma.notificationsUncheckedUpdateManyWithoutOrganisationsInput>;
};
export type notificationsScalarWhereInput = {
    AND?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
    OR?: Prisma.notificationsScalarWhereInput[];
    NOT?: Prisma.notificationsScalarWhereInput | Prisma.notificationsScalarWhereInput[];
    id?: Prisma.UuidFilter<"notifications"> | string;
    org_id?: Prisma.UuidFilter<"notifications"> | string;
    recipient_user_id?: Prisma.UuidFilter<"notifications"> | string;
    type?: Prisma.Enumnotification_type_enumFilter<"notifications"> | $Enums.notification_type_enum;
    title?: Prisma.StringFilter<"notifications"> | string;
    body?: Prisma.StringFilter<"notifications"> | string;
    reference_type?: Prisma.StringNullableFilter<"notifications"> | string | null;
    reference_id?: Prisma.UuidNullableFilter<"notifications"> | string | null;
    is_read?: Prisma.BoolFilter<"notifications"> | boolean;
    read_at?: Prisma.DateTimeNullableFilter<"notifications"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"notifications"> | Date | string;
};
export type notificationsCreateWithoutUsersInput = {
    id?: string;
    type: $Enums.notification_type_enum;
    title: string;
    body: string;
    reference_type?: string | null;
    reference_id?: string | null;
    is_read?: boolean;
    read_at?: Date | string | null;
    created_at?: Date | string;
    organisations: Prisma.organisationsCreateNestedOneWithoutNotificationsInput;
};
export type notificationsUncheckedCreateWithoutUsersInput = {
    id?: string;
    org_id: string;
    type: $Enums.notification_type_enum;
    title: string;
    body: string;
    reference_type?: string | null;
    reference_id?: string | null;
    is_read?: boolean;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type notificationsCreateOrConnectWithoutUsersInput = {
    where: Prisma.notificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutUsersInput, Prisma.notificationsUncheckedCreateWithoutUsersInput>;
};
export type notificationsCreateManyUsersInputEnvelope = {
    data: Prisma.notificationsCreateManyUsersInput | Prisma.notificationsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type notificationsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.notificationsWhereUniqueInput;
    update: Prisma.XOR<Prisma.notificationsUpdateWithoutUsersInput, Prisma.notificationsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.notificationsCreateWithoutUsersInput, Prisma.notificationsUncheckedCreateWithoutUsersInput>;
};
export type notificationsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.notificationsWhereUniqueInput;
    data: Prisma.XOR<Prisma.notificationsUpdateWithoutUsersInput, Prisma.notificationsUncheckedUpdateWithoutUsersInput>;
};
export type notificationsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.notificationsScalarWhereInput;
    data: Prisma.XOR<Prisma.notificationsUpdateManyMutationInput, Prisma.notificationsUncheckedUpdateManyWithoutUsersInput>;
};
export type notificationsCreateManyOrganisationsInput = {
    id?: string;
    recipient_user_id: string;
    type: $Enums.notification_type_enum;
    title: string;
    body: string;
    reference_type?: string | null;
    reference_id?: string | null;
    is_read?: boolean;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type notificationsUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.Enumnotification_type_enumFieldUpdateOperationsInput | $Enums.notification_type_enum;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    reference_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutNotificationsNestedInput;
};
export type notificationsUncheckedUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.Enumnotification_type_enumFieldUpdateOperationsInput | $Enums.notification_type_enum;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    reference_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type notificationsUncheckedUpdateManyWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.Enumnotification_type_enumFieldUpdateOperationsInput | $Enums.notification_type_enum;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    reference_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type notificationsCreateManyUsersInput = {
    id?: string;
    org_id: string;
    type: $Enums.notification_type_enum;
    title: string;
    body: string;
    reference_type?: string | null;
    reference_id?: string | null;
    is_read?: boolean;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type notificationsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.Enumnotification_type_enumFieldUpdateOperationsInput | $Enums.notification_type_enum;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    reference_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutNotificationsNestedInput;
};
export type notificationsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.Enumnotification_type_enumFieldUpdateOperationsInput | $Enums.notification_type_enum;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    reference_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type notificationsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.Enumnotification_type_enumFieldUpdateOperationsInput | $Enums.notification_type_enum;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    reference_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reference_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_read?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type notificationsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    recipient_user_id?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    reference_type?: boolean;
    reference_id?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    created_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notifications"]>;
export type notificationsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    recipient_user_id?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    reference_type?: boolean;
    reference_id?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    created_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notifications"]>;
export type notificationsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    recipient_user_id?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    reference_type?: boolean;
    reference_id?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    created_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["notifications"]>;
export type notificationsSelectScalar = {
    id?: boolean;
    org_id?: boolean;
    recipient_user_id?: boolean;
    type?: boolean;
    title?: boolean;
    body?: boolean;
    reference_type?: boolean;
    reference_id?: boolean;
    is_read?: boolean;
    read_at?: boolean;
    created_at?: boolean;
};
export type notificationsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "org_id" | "recipient_user_id" | "type" | "title" | "body" | "reference_type" | "reference_id" | "is_read" | "read_at" | "created_at", ExtArgs["result"]["notifications"]>;
export type notificationsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type notificationsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type notificationsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $notificationsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "notifications";
    objects: {
        organisations: Prisma.$organisationsPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        org_id: string;
        recipient_user_id: string;
        type: $Enums.notification_type_enum;
        title: string;
        body: string;
        reference_type: string | null;
        reference_id: string | null;
        is_read: boolean;
        read_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["notifications"]>;
    composites: {};
};
export type notificationsGetPayload<S extends boolean | null | undefined | notificationsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$notificationsPayload, S>;
export type notificationsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<notificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationsCountAggregateInputType | true;
};
export interface notificationsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['notifications'];
        meta: {
            name: 'notifications';
        };
    };
    findUnique<T extends notificationsFindUniqueArgs>(args: Prisma.SelectSubset<T, notificationsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends notificationsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, notificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends notificationsFindFirstArgs>(args?: Prisma.SelectSubset<T, notificationsFindFirstArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends notificationsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, notificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends notificationsFindManyArgs>(args?: Prisma.SelectSubset<T, notificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends notificationsCreateArgs>(args: Prisma.SelectSubset<T, notificationsCreateArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends notificationsCreateManyArgs>(args?: Prisma.SelectSubset<T, notificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends notificationsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, notificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends notificationsDeleteArgs>(args: Prisma.SelectSubset<T, notificationsDeleteArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends notificationsUpdateArgs>(args: Prisma.SelectSubset<T, notificationsUpdateArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends notificationsDeleteManyArgs>(args?: Prisma.SelectSubset<T, notificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends notificationsUpdateManyArgs>(args: Prisma.SelectSubset<T, notificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends notificationsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, notificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends notificationsUpsertArgs>(args: Prisma.SelectSubset<T, notificationsUpsertArgs<ExtArgs>>): Prisma.Prisma__notificationsClient<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends notificationsCountArgs>(args?: Prisma.Subset<T, notificationsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationsCountAggregateOutputType> : number>;
    aggregate<T extends NotificationsAggregateArgs>(args: Prisma.Subset<T, NotificationsAggregateArgs>): Prisma.PrismaPromise<GetNotificationsAggregateType<T>>;
    groupBy<T extends notificationsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: notificationsGroupByArgs['orderBy'];
    } : {
        orderBy?: notificationsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, notificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: notificationsFieldRefs;
}
export interface Prisma__notificationsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisations<T extends Prisma.organisationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.organisationsDefaultArgs<ExtArgs>>): Prisma.Prisma__organisationsClient<runtime.Types.Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface notificationsFieldRefs {
    readonly id: Prisma.FieldRef<"notifications", 'String'>;
    readonly org_id: Prisma.FieldRef<"notifications", 'String'>;
    readonly recipient_user_id: Prisma.FieldRef<"notifications", 'String'>;
    readonly type: Prisma.FieldRef<"notifications", 'notification_type_enum'>;
    readonly title: Prisma.FieldRef<"notifications", 'String'>;
    readonly body: Prisma.FieldRef<"notifications", 'String'>;
    readonly reference_type: Prisma.FieldRef<"notifications", 'String'>;
    readonly reference_id: Prisma.FieldRef<"notifications", 'String'>;
    readonly is_read: Prisma.FieldRef<"notifications", 'Boolean'>;
    readonly read_at: Prisma.FieldRef<"notifications", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"notifications", 'DateTime'>;
}
export type notificationsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where: Prisma.notificationsWhereUniqueInput;
};
export type notificationsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where: Prisma.notificationsWhereUniqueInput;
};
export type notificationsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithRelationInput | Prisma.notificationsOrderByWithRelationInput[];
    cursor?: Prisma.notificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type notificationsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithRelationInput | Prisma.notificationsOrderByWithRelationInput[];
    cursor?: Prisma.notificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type notificationsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithRelationInput | Prisma.notificationsOrderByWithRelationInput[];
    cursor?: Prisma.notificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type notificationsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notificationsCreateInput, Prisma.notificationsUncheckedCreateInput>;
};
export type notificationsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.notificationsCreateManyInput | Prisma.notificationsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type notificationsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    data: Prisma.notificationsCreateManyInput | Prisma.notificationsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.notificationsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type notificationsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notificationsUpdateInput, Prisma.notificationsUncheckedUpdateInput>;
    where: Prisma.notificationsWhereUniqueInput;
};
export type notificationsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.notificationsUpdateManyMutationInput, Prisma.notificationsUncheckedUpdateManyInput>;
    where?: Prisma.notificationsWhereInput;
    limit?: number;
};
export type notificationsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.notificationsUpdateManyMutationInput, Prisma.notificationsUncheckedUpdateManyInput>;
    where?: Prisma.notificationsWhereInput;
    limit?: number;
    include?: Prisma.notificationsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type notificationsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where: Prisma.notificationsWhereUniqueInput;
    create: Prisma.XOR<Prisma.notificationsCreateInput, Prisma.notificationsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.notificationsUpdateInput, Prisma.notificationsUncheckedUpdateInput>;
};
export type notificationsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where: Prisma.notificationsWhereUniqueInput;
};
export type notificationsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notificationsWhereInput;
    limit?: number;
};
export type notificationsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
};
