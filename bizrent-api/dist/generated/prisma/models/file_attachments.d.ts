import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type file_attachmentsModel = runtime.Types.Result.DefaultSelection<Prisma.$file_attachmentsPayload>;
export type AggregateFile_attachments = {
    _count: File_attachmentsCountAggregateOutputType | null;
    _avg: File_attachmentsAvgAggregateOutputType | null;
    _sum: File_attachmentsSumAggregateOutputType | null;
    _min: File_attachmentsMinAggregateOutputType | null;
    _max: File_attachmentsMaxAggregateOutputType | null;
};
export type File_attachmentsAvgAggregateOutputType = {
    size_bytes: number | null;
};
export type File_attachmentsSumAggregateOutputType = {
    size_bytes: number | null;
};
export type File_attachmentsMinAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    uploaded_by: string | null;
    bucket: string | null;
    file_path: string | null;
    original_filename: string | null;
    mime_type: string | null;
    size_bytes: number | null;
    created_at: Date | null;
};
export type File_attachmentsMaxAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    uploaded_by: string | null;
    bucket: string | null;
    file_path: string | null;
    original_filename: string | null;
    mime_type: string | null;
    size_bytes: number | null;
    created_at: Date | null;
};
export type File_attachmentsCountAggregateOutputType = {
    id: number;
    org_id: number;
    uploaded_by: number;
    bucket: number;
    file_path: number;
    original_filename: number;
    mime_type: number;
    size_bytes: number;
    created_at: number;
    _all: number;
};
export type File_attachmentsAvgAggregateInputType = {
    size_bytes?: true;
};
export type File_attachmentsSumAggregateInputType = {
    size_bytes?: true;
};
export type File_attachmentsMinAggregateInputType = {
    id?: true;
    org_id?: true;
    uploaded_by?: true;
    bucket?: true;
    file_path?: true;
    original_filename?: true;
    mime_type?: true;
    size_bytes?: true;
    created_at?: true;
};
export type File_attachmentsMaxAggregateInputType = {
    id?: true;
    org_id?: true;
    uploaded_by?: true;
    bucket?: true;
    file_path?: true;
    original_filename?: true;
    mime_type?: true;
    size_bytes?: true;
    created_at?: true;
};
export type File_attachmentsCountAggregateInputType = {
    id?: true;
    org_id?: true;
    uploaded_by?: true;
    bucket?: true;
    file_path?: true;
    original_filename?: true;
    mime_type?: true;
    size_bytes?: true;
    created_at?: true;
    _all?: true;
};
export type File_attachmentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.file_attachmentsWhereInput;
    orderBy?: Prisma.file_attachmentsOrderByWithRelationInput | Prisma.file_attachmentsOrderByWithRelationInput[];
    cursor?: Prisma.file_attachmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | File_attachmentsCountAggregateInputType;
    _avg?: File_attachmentsAvgAggregateInputType;
    _sum?: File_attachmentsSumAggregateInputType;
    _min?: File_attachmentsMinAggregateInputType;
    _max?: File_attachmentsMaxAggregateInputType;
};
export type GetFile_attachmentsAggregateType<T extends File_attachmentsAggregateArgs> = {
    [P in keyof T & keyof AggregateFile_attachments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFile_attachments[P]> : Prisma.GetScalarType<T[P], AggregateFile_attachments[P]>;
};
export type file_attachmentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.file_attachmentsWhereInput;
    orderBy?: Prisma.file_attachmentsOrderByWithAggregationInput | Prisma.file_attachmentsOrderByWithAggregationInput[];
    by: Prisma.File_attachmentsScalarFieldEnum[] | Prisma.File_attachmentsScalarFieldEnum;
    having?: Prisma.file_attachmentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: File_attachmentsCountAggregateInputType | true;
    _avg?: File_attachmentsAvgAggregateInputType;
    _sum?: File_attachmentsSumAggregateInputType;
    _min?: File_attachmentsMinAggregateInputType;
    _max?: File_attachmentsMaxAggregateInputType;
};
export type File_attachmentsGroupByOutputType = {
    id: string;
    org_id: string;
    uploaded_by: string;
    bucket: string;
    file_path: string;
    original_filename: string | null;
    mime_type: string;
    size_bytes: number;
    created_at: Date;
    _count: File_attachmentsCountAggregateOutputType | null;
    _avg: File_attachmentsAvgAggregateOutputType | null;
    _sum: File_attachmentsSumAggregateOutputType | null;
    _min: File_attachmentsMinAggregateOutputType | null;
    _max: File_attachmentsMaxAggregateOutputType | null;
};
export type GetFile_attachmentsGroupByPayload<T extends file_attachmentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<File_attachmentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof File_attachmentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], File_attachmentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], File_attachmentsGroupByOutputType[P]>;
}>>;
export type file_attachmentsWhereInput = {
    AND?: Prisma.file_attachmentsWhereInput | Prisma.file_attachmentsWhereInput[];
    OR?: Prisma.file_attachmentsWhereInput[];
    NOT?: Prisma.file_attachmentsWhereInput | Prisma.file_attachmentsWhereInput[];
    id?: Prisma.UuidFilter<"file_attachments"> | string;
    org_id?: Prisma.UuidFilter<"file_attachments"> | string;
    uploaded_by?: Prisma.UuidFilter<"file_attachments"> | string;
    bucket?: Prisma.StringFilter<"file_attachments"> | string;
    file_path?: Prisma.StringFilter<"file_attachments"> | string;
    original_filename?: Prisma.StringNullableFilter<"file_attachments"> | string | null;
    mime_type?: Prisma.StringFilter<"file_attachments"> | string;
    size_bytes?: Prisma.IntFilter<"file_attachments"> | number;
    created_at?: Prisma.DateTimeFilter<"file_attachments"> | Date | string;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    payments?: Prisma.PaymentsListRelationFilter;
};
export type file_attachmentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    bucket?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    original_filename?: Prisma.SortOrderInput | Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    size_bytes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    organisations?: Prisma.organisationsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
    payments?: Prisma.paymentsOrderByRelationAggregateInput;
};
export type file_attachmentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    file_path?: string;
    AND?: Prisma.file_attachmentsWhereInput | Prisma.file_attachmentsWhereInput[];
    OR?: Prisma.file_attachmentsWhereInput[];
    NOT?: Prisma.file_attachmentsWhereInput | Prisma.file_attachmentsWhereInput[];
    org_id?: Prisma.UuidFilter<"file_attachments"> | string;
    uploaded_by?: Prisma.UuidFilter<"file_attachments"> | string;
    bucket?: Prisma.StringFilter<"file_attachments"> | string;
    original_filename?: Prisma.StringNullableFilter<"file_attachments"> | string | null;
    mime_type?: Prisma.StringFilter<"file_attachments"> | string;
    size_bytes?: Prisma.IntFilter<"file_attachments"> | number;
    created_at?: Prisma.DateTimeFilter<"file_attachments"> | Date | string;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    payments?: Prisma.PaymentsListRelationFilter;
}, "id" | "file_path">;
export type file_attachmentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    bucket?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    original_filename?: Prisma.SortOrderInput | Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    size_bytes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.file_attachmentsCountOrderByAggregateInput;
    _avg?: Prisma.file_attachmentsAvgOrderByAggregateInput;
    _max?: Prisma.file_attachmentsMaxOrderByAggregateInput;
    _min?: Prisma.file_attachmentsMinOrderByAggregateInput;
    _sum?: Prisma.file_attachmentsSumOrderByAggregateInput;
};
export type file_attachmentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.file_attachmentsScalarWhereWithAggregatesInput | Prisma.file_attachmentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.file_attachmentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.file_attachmentsScalarWhereWithAggregatesInput | Prisma.file_attachmentsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"file_attachments"> | string;
    org_id?: Prisma.UuidWithAggregatesFilter<"file_attachments"> | string;
    uploaded_by?: Prisma.UuidWithAggregatesFilter<"file_attachments"> | string;
    bucket?: Prisma.StringWithAggregatesFilter<"file_attachments"> | string;
    file_path?: Prisma.StringWithAggregatesFilter<"file_attachments"> | string;
    original_filename?: Prisma.StringNullableWithAggregatesFilter<"file_attachments"> | string | null;
    mime_type?: Prisma.StringWithAggregatesFilter<"file_attachments"> | string;
    size_bytes?: Prisma.IntWithAggregatesFilter<"file_attachments"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"file_attachments"> | Date | string;
};
export type file_attachmentsCreateInput = {
    id?: string;
    bucket: string;
    file_path: string;
    original_filename?: string | null;
    mime_type: string;
    size_bytes: number;
    created_at?: Date | string;
    organisations: Prisma.organisationsCreateNestedOneWithoutFile_attachmentsInput;
    users: Prisma.usersCreateNestedOneWithoutFile_attachmentsInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutFile_attachmentsInput;
};
export type file_attachmentsUncheckedCreateInput = {
    id?: string;
    org_id: string;
    uploaded_by: string;
    bucket: string;
    file_path: string;
    original_filename?: string | null;
    mime_type: string;
    size_bytes: number;
    created_at?: Date | string;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutFile_attachmentsInput;
};
export type file_attachmentsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutFile_attachmentsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutFile_attachmentsNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutFile_attachmentsNestedInput;
};
export type file_attachmentsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutFile_attachmentsNestedInput;
};
export type file_attachmentsCreateManyInput = {
    id?: string;
    org_id: string;
    uploaded_by: string;
    bucket: string;
    file_path: string;
    original_filename?: string | null;
    mime_type: string;
    size_bytes: number;
    created_at?: Date | string;
};
export type file_attachmentsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type file_attachmentsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type file_attachmentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    bucket?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    original_filename?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    size_bytes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type file_attachmentsAvgOrderByAggregateInput = {
    size_bytes?: Prisma.SortOrder;
};
export type file_attachmentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    bucket?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    original_filename?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    size_bytes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type file_attachmentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    bucket?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    original_filename?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    size_bytes?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type file_attachmentsSumOrderByAggregateInput = {
    size_bytes?: Prisma.SortOrder;
};
export type File_attachmentsListRelationFilter = {
    every?: Prisma.file_attachmentsWhereInput;
    some?: Prisma.file_attachmentsWhereInput;
    none?: Prisma.file_attachmentsWhereInput;
};
export type file_attachmentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type File_attachmentsNullableScalarRelationFilter = {
    is?: Prisma.file_attachmentsWhereInput | null;
    isNot?: Prisma.file_attachmentsWhereInput | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type file_attachmentsCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.file_attachmentsCreateWithoutOrganisationsInput, Prisma.file_attachmentsUncheckedCreateWithoutOrganisationsInput> | Prisma.file_attachmentsCreateWithoutOrganisationsInput[] | Prisma.file_attachmentsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.file_attachmentsCreateOrConnectWithoutOrganisationsInput | Prisma.file_attachmentsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.file_attachmentsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
};
export type file_attachmentsUncheckedCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.file_attachmentsCreateWithoutOrganisationsInput, Prisma.file_attachmentsUncheckedCreateWithoutOrganisationsInput> | Prisma.file_attachmentsCreateWithoutOrganisationsInput[] | Prisma.file_attachmentsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.file_attachmentsCreateOrConnectWithoutOrganisationsInput | Prisma.file_attachmentsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.file_attachmentsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
};
export type file_attachmentsUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.file_attachmentsCreateWithoutOrganisationsInput, Prisma.file_attachmentsUncheckedCreateWithoutOrganisationsInput> | Prisma.file_attachmentsCreateWithoutOrganisationsInput[] | Prisma.file_attachmentsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.file_attachmentsCreateOrConnectWithoutOrganisationsInput | Prisma.file_attachmentsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.file_attachmentsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.file_attachmentsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.file_attachmentsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    disconnect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    delete?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    connect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    update?: Prisma.file_attachmentsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.file_attachmentsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.file_attachmentsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.file_attachmentsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.file_attachmentsScalarWhereInput | Prisma.file_attachmentsScalarWhereInput[];
};
export type file_attachmentsUncheckedUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.file_attachmentsCreateWithoutOrganisationsInput, Prisma.file_attachmentsUncheckedCreateWithoutOrganisationsInput> | Prisma.file_attachmentsCreateWithoutOrganisationsInput[] | Prisma.file_attachmentsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.file_attachmentsCreateOrConnectWithoutOrganisationsInput | Prisma.file_attachmentsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.file_attachmentsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.file_attachmentsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.file_attachmentsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    disconnect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    delete?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    connect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    update?: Prisma.file_attachmentsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.file_attachmentsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.file_attachmentsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.file_attachmentsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.file_attachmentsScalarWhereInput | Prisma.file_attachmentsScalarWhereInput[];
};
export type file_attachmentsCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.file_attachmentsCreateWithoutPaymentsInput, Prisma.file_attachmentsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.file_attachmentsCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.file_attachmentsWhereUniqueInput;
};
export type file_attachmentsUpdateOneWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.file_attachmentsCreateWithoutPaymentsInput, Prisma.file_attachmentsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.file_attachmentsCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.file_attachmentsUpsertWithoutPaymentsInput;
    disconnect?: Prisma.file_attachmentsWhereInput | boolean;
    delete?: Prisma.file_attachmentsWhereInput | boolean;
    connect?: Prisma.file_attachmentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.file_attachmentsUpdateToOneWithWhereWithoutPaymentsInput, Prisma.file_attachmentsUpdateWithoutPaymentsInput>, Prisma.file_attachmentsUncheckedUpdateWithoutPaymentsInput>;
};
export type file_attachmentsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.file_attachmentsCreateWithoutUsersInput, Prisma.file_attachmentsUncheckedCreateWithoutUsersInput> | Prisma.file_attachmentsCreateWithoutUsersInput[] | Prisma.file_attachmentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.file_attachmentsCreateOrConnectWithoutUsersInput | Prisma.file_attachmentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.file_attachmentsCreateManyUsersInputEnvelope;
    connect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
};
export type file_attachmentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.file_attachmentsCreateWithoutUsersInput, Prisma.file_attachmentsUncheckedCreateWithoutUsersInput> | Prisma.file_attachmentsCreateWithoutUsersInput[] | Prisma.file_attachmentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.file_attachmentsCreateOrConnectWithoutUsersInput | Prisma.file_attachmentsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.file_attachmentsCreateManyUsersInputEnvelope;
    connect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
};
export type file_attachmentsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.file_attachmentsCreateWithoutUsersInput, Prisma.file_attachmentsUncheckedCreateWithoutUsersInput> | Prisma.file_attachmentsCreateWithoutUsersInput[] | Prisma.file_attachmentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.file_attachmentsCreateOrConnectWithoutUsersInput | Prisma.file_attachmentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.file_attachmentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.file_attachmentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.file_attachmentsCreateManyUsersInputEnvelope;
    set?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    disconnect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    delete?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    connect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    update?: Prisma.file_attachmentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.file_attachmentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.file_attachmentsUpdateManyWithWhereWithoutUsersInput | Prisma.file_attachmentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.file_attachmentsScalarWhereInput | Prisma.file_attachmentsScalarWhereInput[];
};
export type file_attachmentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.file_attachmentsCreateWithoutUsersInput, Prisma.file_attachmentsUncheckedCreateWithoutUsersInput> | Prisma.file_attachmentsCreateWithoutUsersInput[] | Prisma.file_attachmentsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.file_attachmentsCreateOrConnectWithoutUsersInput | Prisma.file_attachmentsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.file_attachmentsUpsertWithWhereUniqueWithoutUsersInput | Prisma.file_attachmentsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.file_attachmentsCreateManyUsersInputEnvelope;
    set?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    disconnect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    delete?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    connect?: Prisma.file_attachmentsWhereUniqueInput | Prisma.file_attachmentsWhereUniqueInput[];
    update?: Prisma.file_attachmentsUpdateWithWhereUniqueWithoutUsersInput | Prisma.file_attachmentsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.file_attachmentsUpdateManyWithWhereWithoutUsersInput | Prisma.file_attachmentsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.file_attachmentsScalarWhereInput | Prisma.file_attachmentsScalarWhereInput[];
};
export type file_attachmentsCreateWithoutOrganisationsInput = {
    id?: string;
    bucket: string;
    file_path: string;
    original_filename?: string | null;
    mime_type: string;
    size_bytes: number;
    created_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutFile_attachmentsInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutFile_attachmentsInput;
};
export type file_attachmentsUncheckedCreateWithoutOrganisationsInput = {
    id?: string;
    uploaded_by: string;
    bucket: string;
    file_path: string;
    original_filename?: string | null;
    mime_type: string;
    size_bytes: number;
    created_at?: Date | string;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutFile_attachmentsInput;
};
export type file_attachmentsCreateOrConnectWithoutOrganisationsInput = {
    where: Prisma.file_attachmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.file_attachmentsCreateWithoutOrganisationsInput, Prisma.file_attachmentsUncheckedCreateWithoutOrganisationsInput>;
};
export type file_attachmentsCreateManyOrganisationsInputEnvelope = {
    data: Prisma.file_attachmentsCreateManyOrganisationsInput | Prisma.file_attachmentsCreateManyOrganisationsInput[];
    skipDuplicates?: boolean;
};
export type file_attachmentsUpsertWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.file_attachmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.file_attachmentsUpdateWithoutOrganisationsInput, Prisma.file_attachmentsUncheckedUpdateWithoutOrganisationsInput>;
    create: Prisma.XOR<Prisma.file_attachmentsCreateWithoutOrganisationsInput, Prisma.file_attachmentsUncheckedCreateWithoutOrganisationsInput>;
};
export type file_attachmentsUpdateWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.file_attachmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.file_attachmentsUpdateWithoutOrganisationsInput, Prisma.file_attachmentsUncheckedUpdateWithoutOrganisationsInput>;
};
export type file_attachmentsUpdateManyWithWhereWithoutOrganisationsInput = {
    where: Prisma.file_attachmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.file_attachmentsUpdateManyMutationInput, Prisma.file_attachmentsUncheckedUpdateManyWithoutOrganisationsInput>;
};
export type file_attachmentsScalarWhereInput = {
    AND?: Prisma.file_attachmentsScalarWhereInput | Prisma.file_attachmentsScalarWhereInput[];
    OR?: Prisma.file_attachmentsScalarWhereInput[];
    NOT?: Prisma.file_attachmentsScalarWhereInput | Prisma.file_attachmentsScalarWhereInput[];
    id?: Prisma.UuidFilter<"file_attachments"> | string;
    org_id?: Prisma.UuidFilter<"file_attachments"> | string;
    uploaded_by?: Prisma.UuidFilter<"file_attachments"> | string;
    bucket?: Prisma.StringFilter<"file_attachments"> | string;
    file_path?: Prisma.StringFilter<"file_attachments"> | string;
    original_filename?: Prisma.StringNullableFilter<"file_attachments"> | string | null;
    mime_type?: Prisma.StringFilter<"file_attachments"> | string;
    size_bytes?: Prisma.IntFilter<"file_attachments"> | number;
    created_at?: Prisma.DateTimeFilter<"file_attachments"> | Date | string;
};
export type file_attachmentsCreateWithoutPaymentsInput = {
    id?: string;
    bucket: string;
    file_path: string;
    original_filename?: string | null;
    mime_type: string;
    size_bytes: number;
    created_at?: Date | string;
    organisations: Prisma.organisationsCreateNestedOneWithoutFile_attachmentsInput;
    users: Prisma.usersCreateNestedOneWithoutFile_attachmentsInput;
};
export type file_attachmentsUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    org_id: string;
    uploaded_by: string;
    bucket: string;
    file_path: string;
    original_filename?: string | null;
    mime_type: string;
    size_bytes: number;
    created_at?: Date | string;
};
export type file_attachmentsCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.file_attachmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.file_attachmentsCreateWithoutPaymentsInput, Prisma.file_attachmentsUncheckedCreateWithoutPaymentsInput>;
};
export type file_attachmentsUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.file_attachmentsUpdateWithoutPaymentsInput, Prisma.file_attachmentsUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.file_attachmentsCreateWithoutPaymentsInput, Prisma.file_attachmentsUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.file_attachmentsWhereInput;
};
export type file_attachmentsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.file_attachmentsWhereInput;
    data: Prisma.XOR<Prisma.file_attachmentsUpdateWithoutPaymentsInput, Prisma.file_attachmentsUncheckedUpdateWithoutPaymentsInput>;
};
export type file_attachmentsUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutFile_attachmentsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutFile_attachmentsNestedInput;
};
export type file_attachmentsUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type file_attachmentsCreateWithoutUsersInput = {
    id?: string;
    bucket: string;
    file_path: string;
    original_filename?: string | null;
    mime_type: string;
    size_bytes: number;
    created_at?: Date | string;
    organisations: Prisma.organisationsCreateNestedOneWithoutFile_attachmentsInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutFile_attachmentsInput;
};
export type file_attachmentsUncheckedCreateWithoutUsersInput = {
    id?: string;
    org_id: string;
    bucket: string;
    file_path: string;
    original_filename?: string | null;
    mime_type: string;
    size_bytes: number;
    created_at?: Date | string;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutFile_attachmentsInput;
};
export type file_attachmentsCreateOrConnectWithoutUsersInput = {
    where: Prisma.file_attachmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.file_attachmentsCreateWithoutUsersInput, Prisma.file_attachmentsUncheckedCreateWithoutUsersInput>;
};
export type file_attachmentsCreateManyUsersInputEnvelope = {
    data: Prisma.file_attachmentsCreateManyUsersInput | Prisma.file_attachmentsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type file_attachmentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.file_attachmentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.file_attachmentsUpdateWithoutUsersInput, Prisma.file_attachmentsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.file_attachmentsCreateWithoutUsersInput, Prisma.file_attachmentsUncheckedCreateWithoutUsersInput>;
};
export type file_attachmentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.file_attachmentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.file_attachmentsUpdateWithoutUsersInput, Prisma.file_attachmentsUncheckedUpdateWithoutUsersInput>;
};
export type file_attachmentsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.file_attachmentsScalarWhereInput;
    data: Prisma.XOR<Prisma.file_attachmentsUpdateManyMutationInput, Prisma.file_attachmentsUncheckedUpdateManyWithoutUsersInput>;
};
export type file_attachmentsCreateManyOrganisationsInput = {
    id?: string;
    uploaded_by: string;
    bucket: string;
    file_path: string;
    original_filename?: string | null;
    mime_type: string;
    size_bytes: number;
    created_at?: Date | string;
};
export type file_attachmentsUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutFile_attachmentsNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutFile_attachmentsNestedInput;
};
export type file_attachmentsUncheckedUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutFile_attachmentsNestedInput;
};
export type file_attachmentsUncheckedUpdateManyWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type file_attachmentsCreateManyUsersInput = {
    id?: string;
    org_id: string;
    bucket: string;
    file_path: string;
    original_filename?: string | null;
    mime_type: string;
    size_bytes: number;
    created_at?: Date | string;
};
export type file_attachmentsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutFile_attachmentsNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutFile_attachmentsNestedInput;
};
export type file_attachmentsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutFile_attachmentsNestedInput;
};
export type file_attachmentsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    bucket?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.StringFieldUpdateOperationsInput | string;
    size_bytes?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type File_attachmentsCountOutputType = {
    payments: number;
};
export type File_attachmentsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | File_attachmentsCountOutputTypeCountPaymentsArgs;
};
export type File_attachmentsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.File_attachmentsCountOutputTypeSelect<ExtArgs> | null;
};
export type File_attachmentsCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
};
export type file_attachmentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    uploaded_by?: boolean;
    bucket?: boolean;
    file_path?: boolean;
    original_filename?: boolean;
    mime_type?: boolean;
    size_bytes?: boolean;
    created_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.file_attachments$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.File_attachmentsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["file_attachments"]>;
export type file_attachmentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    uploaded_by?: boolean;
    bucket?: boolean;
    file_path?: boolean;
    original_filename?: boolean;
    mime_type?: boolean;
    size_bytes?: boolean;
    created_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["file_attachments"]>;
export type file_attachmentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    uploaded_by?: boolean;
    bucket?: boolean;
    file_path?: boolean;
    original_filename?: boolean;
    mime_type?: boolean;
    size_bytes?: boolean;
    created_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["file_attachments"]>;
export type file_attachmentsSelectScalar = {
    id?: boolean;
    org_id?: boolean;
    uploaded_by?: boolean;
    bucket?: boolean;
    file_path?: boolean;
    original_filename?: boolean;
    mime_type?: boolean;
    size_bytes?: boolean;
    created_at?: boolean;
};
export type file_attachmentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "org_id" | "uploaded_by" | "bucket" | "file_path" | "original_filename" | "mime_type" | "size_bytes" | "created_at", ExtArgs["result"]["file_attachments"]>;
export type file_attachmentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.file_attachments$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.File_attachmentsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type file_attachmentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type file_attachmentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $file_attachmentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "file_attachments";
    objects: {
        organisations: Prisma.$organisationsPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
        payments: Prisma.$paymentsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        org_id: string;
        uploaded_by: string;
        bucket: string;
        file_path: string;
        original_filename: string | null;
        mime_type: string;
        size_bytes: number;
        created_at: Date;
    }, ExtArgs["result"]["file_attachments"]>;
    composites: {};
};
export type file_attachmentsGetPayload<S extends boolean | null | undefined | file_attachmentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload, S>;
export type file_attachmentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<file_attachmentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: File_attachmentsCountAggregateInputType | true;
};
export interface file_attachmentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['file_attachments'];
        meta: {
            name: 'file_attachments';
        };
    };
    findUnique<T extends file_attachmentsFindUniqueArgs>(args: Prisma.SelectSubset<T, file_attachmentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__file_attachmentsClient<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends file_attachmentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, file_attachmentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__file_attachmentsClient<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends file_attachmentsFindFirstArgs>(args?: Prisma.SelectSubset<T, file_attachmentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__file_attachmentsClient<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends file_attachmentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, file_attachmentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__file_attachmentsClient<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends file_attachmentsFindManyArgs>(args?: Prisma.SelectSubset<T, file_attachmentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends file_attachmentsCreateArgs>(args: Prisma.SelectSubset<T, file_attachmentsCreateArgs<ExtArgs>>): Prisma.Prisma__file_attachmentsClient<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends file_attachmentsCreateManyArgs>(args?: Prisma.SelectSubset<T, file_attachmentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends file_attachmentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, file_attachmentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends file_attachmentsDeleteArgs>(args: Prisma.SelectSubset<T, file_attachmentsDeleteArgs<ExtArgs>>): Prisma.Prisma__file_attachmentsClient<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends file_attachmentsUpdateArgs>(args: Prisma.SelectSubset<T, file_attachmentsUpdateArgs<ExtArgs>>): Prisma.Prisma__file_attachmentsClient<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends file_attachmentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, file_attachmentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends file_attachmentsUpdateManyArgs>(args: Prisma.SelectSubset<T, file_attachmentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends file_attachmentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, file_attachmentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends file_attachmentsUpsertArgs>(args: Prisma.SelectSubset<T, file_attachmentsUpsertArgs<ExtArgs>>): Prisma.Prisma__file_attachmentsClient<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends file_attachmentsCountArgs>(args?: Prisma.Subset<T, file_attachmentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], File_attachmentsCountAggregateOutputType> : number>;
    aggregate<T extends File_attachmentsAggregateArgs>(args: Prisma.Subset<T, File_attachmentsAggregateArgs>): Prisma.PrismaPromise<GetFile_attachmentsAggregateType<T>>;
    groupBy<T extends file_attachmentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: file_attachmentsGroupByArgs['orderBy'];
    } : {
        orderBy?: file_attachmentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, file_attachmentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFile_attachmentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: file_attachmentsFieldRefs;
}
export interface Prisma__file_attachmentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisations<T extends Prisma.organisationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.organisationsDefaultArgs<ExtArgs>>): Prisma.Prisma__organisationsClient<runtime.Types.Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.file_attachments$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.file_attachments$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface file_attachmentsFieldRefs {
    readonly id: Prisma.FieldRef<"file_attachments", 'String'>;
    readonly org_id: Prisma.FieldRef<"file_attachments", 'String'>;
    readonly uploaded_by: Prisma.FieldRef<"file_attachments", 'String'>;
    readonly bucket: Prisma.FieldRef<"file_attachments", 'String'>;
    readonly file_path: Prisma.FieldRef<"file_attachments", 'String'>;
    readonly original_filename: Prisma.FieldRef<"file_attachments", 'String'>;
    readonly mime_type: Prisma.FieldRef<"file_attachments", 'String'>;
    readonly size_bytes: Prisma.FieldRef<"file_attachments", 'Int'>;
    readonly created_at: Prisma.FieldRef<"file_attachments", 'DateTime'>;
}
export type file_attachmentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelect<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    include?: Prisma.file_attachmentsInclude<ExtArgs> | null;
    where: Prisma.file_attachmentsWhereUniqueInput;
};
export type file_attachmentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelect<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    include?: Prisma.file_attachmentsInclude<ExtArgs> | null;
    where: Prisma.file_attachmentsWhereUniqueInput;
};
export type file_attachmentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelect<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    include?: Prisma.file_attachmentsInclude<ExtArgs> | null;
    where?: Prisma.file_attachmentsWhereInput;
    orderBy?: Prisma.file_attachmentsOrderByWithRelationInput | Prisma.file_attachmentsOrderByWithRelationInput[];
    cursor?: Prisma.file_attachmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.File_attachmentsScalarFieldEnum | Prisma.File_attachmentsScalarFieldEnum[];
};
export type file_attachmentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelect<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    include?: Prisma.file_attachmentsInclude<ExtArgs> | null;
    where?: Prisma.file_attachmentsWhereInput;
    orderBy?: Prisma.file_attachmentsOrderByWithRelationInput | Prisma.file_attachmentsOrderByWithRelationInput[];
    cursor?: Prisma.file_attachmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.File_attachmentsScalarFieldEnum | Prisma.File_attachmentsScalarFieldEnum[];
};
export type file_attachmentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelect<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    include?: Prisma.file_attachmentsInclude<ExtArgs> | null;
    where?: Prisma.file_attachmentsWhereInput;
    orderBy?: Prisma.file_attachmentsOrderByWithRelationInput | Prisma.file_attachmentsOrderByWithRelationInput[];
    cursor?: Prisma.file_attachmentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.File_attachmentsScalarFieldEnum | Prisma.File_attachmentsScalarFieldEnum[];
};
export type file_attachmentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelect<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    include?: Prisma.file_attachmentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.file_attachmentsCreateInput, Prisma.file_attachmentsUncheckedCreateInput>;
};
export type file_attachmentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.file_attachmentsCreateManyInput | Prisma.file_attachmentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type file_attachmentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    data: Prisma.file_attachmentsCreateManyInput | Prisma.file_attachmentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.file_attachmentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type file_attachmentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelect<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    include?: Prisma.file_attachmentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.file_attachmentsUpdateInput, Prisma.file_attachmentsUncheckedUpdateInput>;
    where: Prisma.file_attachmentsWhereUniqueInput;
};
export type file_attachmentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.file_attachmentsUpdateManyMutationInput, Prisma.file_attachmentsUncheckedUpdateManyInput>;
    where?: Prisma.file_attachmentsWhereInput;
    limit?: number;
};
export type file_attachmentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.file_attachmentsUpdateManyMutationInput, Prisma.file_attachmentsUncheckedUpdateManyInput>;
    where?: Prisma.file_attachmentsWhereInput;
    limit?: number;
    include?: Prisma.file_attachmentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type file_attachmentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelect<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    include?: Prisma.file_attachmentsInclude<ExtArgs> | null;
    where: Prisma.file_attachmentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.file_attachmentsCreateInput, Prisma.file_attachmentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.file_attachmentsUpdateInput, Prisma.file_attachmentsUncheckedUpdateInput>;
};
export type file_attachmentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelect<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    include?: Prisma.file_attachmentsInclude<ExtArgs> | null;
    where: Prisma.file_attachmentsWhereUniqueInput;
};
export type file_attachmentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.file_attachmentsWhereInput;
    limit?: number;
};
export type file_attachments$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type file_attachmentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelect<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    include?: Prisma.file_attachmentsInclude<ExtArgs> | null;
};
