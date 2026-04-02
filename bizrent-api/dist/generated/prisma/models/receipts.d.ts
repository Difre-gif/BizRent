import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type receiptsModel = runtime.Types.Result.DefaultSelection<Prisma.$receiptsPayload>;
export type AggregateReceipts = {
    _count: ReceiptsCountAggregateOutputType | null;
    _avg: ReceiptsAvgAggregateOutputType | null;
    _sum: ReceiptsSumAggregateOutputType | null;
    _min: ReceiptsMinAggregateOutputType | null;
    _max: ReceiptsMaxAggregateOutputType | null;
};
export type ReceiptsAvgAggregateOutputType = {
    file_size_bytes: number | null;
    download_count: number | null;
};
export type ReceiptsSumAggregateOutputType = {
    file_size_bytes: number | null;
    download_count: number | null;
};
export type ReceiptsMinAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    payment_id: string | null;
    invoice_id: string | null;
    tenant_user_id: string | null;
    receipt_number: string | null;
    file_path: string | null;
    file_size_bytes: number | null;
    generated_at: Date | null;
    download_count: number | null;
    created_at: Date | null;
};
export type ReceiptsMaxAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    payment_id: string | null;
    invoice_id: string | null;
    tenant_user_id: string | null;
    receipt_number: string | null;
    file_path: string | null;
    file_size_bytes: number | null;
    generated_at: Date | null;
    download_count: number | null;
    created_at: Date | null;
};
export type ReceiptsCountAggregateOutputType = {
    id: number;
    org_id: number;
    payment_id: number;
    invoice_id: number;
    tenant_user_id: number;
    receipt_number: number;
    file_path: number;
    file_size_bytes: number;
    generated_at: number;
    download_count: number;
    created_at: number;
    _all: number;
};
export type ReceiptsAvgAggregateInputType = {
    file_size_bytes?: true;
    download_count?: true;
};
export type ReceiptsSumAggregateInputType = {
    file_size_bytes?: true;
    download_count?: true;
};
export type ReceiptsMinAggregateInputType = {
    id?: true;
    org_id?: true;
    payment_id?: true;
    invoice_id?: true;
    tenant_user_id?: true;
    receipt_number?: true;
    file_path?: true;
    file_size_bytes?: true;
    generated_at?: true;
    download_count?: true;
    created_at?: true;
};
export type ReceiptsMaxAggregateInputType = {
    id?: true;
    org_id?: true;
    payment_id?: true;
    invoice_id?: true;
    tenant_user_id?: true;
    receipt_number?: true;
    file_path?: true;
    file_size_bytes?: true;
    generated_at?: true;
    download_count?: true;
    created_at?: true;
};
export type ReceiptsCountAggregateInputType = {
    id?: true;
    org_id?: true;
    payment_id?: true;
    invoice_id?: true;
    tenant_user_id?: true;
    receipt_number?: true;
    file_path?: true;
    file_size_bytes?: true;
    generated_at?: true;
    download_count?: true;
    created_at?: true;
    _all?: true;
};
export type ReceiptsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.receiptsWhereInput;
    orderBy?: Prisma.receiptsOrderByWithRelationInput | Prisma.receiptsOrderByWithRelationInput[];
    cursor?: Prisma.receiptsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReceiptsCountAggregateInputType;
    _avg?: ReceiptsAvgAggregateInputType;
    _sum?: ReceiptsSumAggregateInputType;
    _min?: ReceiptsMinAggregateInputType;
    _max?: ReceiptsMaxAggregateInputType;
};
export type GetReceiptsAggregateType<T extends ReceiptsAggregateArgs> = {
    [P in keyof T & keyof AggregateReceipts]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReceipts[P]> : Prisma.GetScalarType<T[P], AggregateReceipts[P]>;
};
export type receiptsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.receiptsWhereInput;
    orderBy?: Prisma.receiptsOrderByWithAggregationInput | Prisma.receiptsOrderByWithAggregationInput[];
    by: Prisma.ReceiptsScalarFieldEnum[] | Prisma.ReceiptsScalarFieldEnum;
    having?: Prisma.receiptsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReceiptsCountAggregateInputType | true;
    _avg?: ReceiptsAvgAggregateInputType;
    _sum?: ReceiptsSumAggregateInputType;
    _min?: ReceiptsMinAggregateInputType;
    _max?: ReceiptsMaxAggregateInputType;
};
export type ReceiptsGroupByOutputType = {
    id: string;
    org_id: string;
    payment_id: string;
    invoice_id: string;
    tenant_user_id: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes: number | null;
    generated_at: Date;
    download_count: number;
    created_at: Date;
    _count: ReceiptsCountAggregateOutputType | null;
    _avg: ReceiptsAvgAggregateOutputType | null;
    _sum: ReceiptsSumAggregateOutputType | null;
    _min: ReceiptsMinAggregateOutputType | null;
    _max: ReceiptsMaxAggregateOutputType | null;
};
export type GetReceiptsGroupByPayload<T extends receiptsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReceiptsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReceiptsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReceiptsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReceiptsGroupByOutputType[P]>;
}>>;
export type receiptsWhereInput = {
    AND?: Prisma.receiptsWhereInput | Prisma.receiptsWhereInput[];
    OR?: Prisma.receiptsWhereInput[];
    NOT?: Prisma.receiptsWhereInput | Prisma.receiptsWhereInput[];
    id?: Prisma.UuidFilter<"receipts"> | string;
    org_id?: Prisma.UuidFilter<"receipts"> | string;
    payment_id?: Prisma.UuidFilter<"receipts"> | string;
    invoice_id?: Prisma.UuidFilter<"receipts"> | string;
    tenant_user_id?: Prisma.UuidFilter<"receipts"> | string;
    receipt_number?: Prisma.StringFilter<"receipts"> | string;
    file_path?: Prisma.StringFilter<"receipts"> | string;
    file_size_bytes?: Prisma.IntNullableFilter<"receipts"> | number | null;
    generated_at?: Prisma.DateTimeFilter<"receipts"> | Date | string;
    download_count?: Prisma.IntFilter<"receipts"> | number;
    created_at?: Prisma.DateTimeFilter<"receipts"> | Date | string;
    invoices?: Prisma.XOR<Prisma.InvoicesScalarRelationFilter, Prisma.invoicesWhereInput>;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    payments?: Prisma.XOR<Prisma.PaymentsScalarRelationFilter, Prisma.paymentsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type receiptsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    invoice_id?: Prisma.SortOrder;
    tenant_user_id?: Prisma.SortOrder;
    receipt_number?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size_bytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    invoices?: Prisma.invoicesOrderByWithRelationInput;
    organisations?: Prisma.organisationsOrderByWithRelationInput;
    payments?: Prisma.paymentsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type receiptsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    payment_id?: string;
    receipt_number?: string;
    AND?: Prisma.receiptsWhereInput | Prisma.receiptsWhereInput[];
    OR?: Prisma.receiptsWhereInput[];
    NOT?: Prisma.receiptsWhereInput | Prisma.receiptsWhereInput[];
    org_id?: Prisma.UuidFilter<"receipts"> | string;
    invoice_id?: Prisma.UuidFilter<"receipts"> | string;
    tenant_user_id?: Prisma.UuidFilter<"receipts"> | string;
    file_path?: Prisma.StringFilter<"receipts"> | string;
    file_size_bytes?: Prisma.IntNullableFilter<"receipts"> | number | null;
    generated_at?: Prisma.DateTimeFilter<"receipts"> | Date | string;
    download_count?: Prisma.IntFilter<"receipts"> | number;
    created_at?: Prisma.DateTimeFilter<"receipts"> | Date | string;
    invoices?: Prisma.XOR<Prisma.InvoicesScalarRelationFilter, Prisma.invoicesWhereInput>;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    payments?: Prisma.XOR<Prisma.PaymentsScalarRelationFilter, Prisma.paymentsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id" | "payment_id" | "receipt_number">;
export type receiptsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    invoice_id?: Prisma.SortOrder;
    tenant_user_id?: Prisma.SortOrder;
    receipt_number?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size_bytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.receiptsCountOrderByAggregateInput;
    _avg?: Prisma.receiptsAvgOrderByAggregateInput;
    _max?: Prisma.receiptsMaxOrderByAggregateInput;
    _min?: Prisma.receiptsMinOrderByAggregateInput;
    _sum?: Prisma.receiptsSumOrderByAggregateInput;
};
export type receiptsScalarWhereWithAggregatesInput = {
    AND?: Prisma.receiptsScalarWhereWithAggregatesInput | Prisma.receiptsScalarWhereWithAggregatesInput[];
    OR?: Prisma.receiptsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.receiptsScalarWhereWithAggregatesInput | Prisma.receiptsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"receipts"> | string;
    org_id?: Prisma.UuidWithAggregatesFilter<"receipts"> | string;
    payment_id?: Prisma.UuidWithAggregatesFilter<"receipts"> | string;
    invoice_id?: Prisma.UuidWithAggregatesFilter<"receipts"> | string;
    tenant_user_id?: Prisma.UuidWithAggregatesFilter<"receipts"> | string;
    receipt_number?: Prisma.StringWithAggregatesFilter<"receipts"> | string;
    file_path?: Prisma.StringWithAggregatesFilter<"receipts"> | string;
    file_size_bytes?: Prisma.IntNullableWithAggregatesFilter<"receipts"> | number | null;
    generated_at?: Prisma.DateTimeWithAggregatesFilter<"receipts"> | Date | string;
    download_count?: Prisma.IntWithAggregatesFilter<"receipts"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"receipts"> | Date | string;
};
export type receiptsCreateInput = {
    id?: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
    invoices: Prisma.invoicesCreateNestedOneWithoutReceiptsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutReceiptsInput;
    payments: Prisma.paymentsCreateNestedOneWithoutReceiptsInput;
    users: Prisma.usersCreateNestedOneWithoutReceiptsInput;
};
export type receiptsUncheckedCreateInput = {
    id?: string;
    org_id: string;
    payment_id: string;
    invoice_id: string;
    tenant_user_id: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
};
export type receiptsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateOneRequiredWithoutReceiptsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutReceiptsNestedInput;
    payments?: Prisma.paymentsUpdateOneRequiredWithoutReceiptsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutReceiptsNestedInput;
};
export type receiptsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type receiptsCreateManyInput = {
    id?: string;
    org_id: string;
    payment_id: string;
    invoice_id: string;
    tenant_user_id: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
};
export type receiptsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type receiptsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReceiptsListRelationFilter = {
    every?: Prisma.receiptsWhereInput;
    some?: Prisma.receiptsWhereInput;
    none?: Prisma.receiptsWhereInput;
};
export type receiptsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReceiptsNullableScalarRelationFilter = {
    is?: Prisma.receiptsWhereInput | null;
    isNot?: Prisma.receiptsWhereInput | null;
};
export type receiptsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    invoice_id?: Prisma.SortOrder;
    tenant_user_id?: Prisma.SortOrder;
    receipt_number?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size_bytes?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type receiptsAvgOrderByAggregateInput = {
    file_size_bytes?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
};
export type receiptsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    invoice_id?: Prisma.SortOrder;
    tenant_user_id?: Prisma.SortOrder;
    receipt_number?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size_bytes?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type receiptsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    payment_id?: Prisma.SortOrder;
    invoice_id?: Prisma.SortOrder;
    tenant_user_id?: Prisma.SortOrder;
    receipt_number?: Prisma.SortOrder;
    file_path?: Prisma.SortOrder;
    file_size_bytes?: Prisma.SortOrder;
    generated_at?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type receiptsSumOrderByAggregateInput = {
    file_size_bytes?: Prisma.SortOrder;
    download_count?: Prisma.SortOrder;
};
export type receiptsCreateNestedManyWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutInvoicesInput, Prisma.receiptsUncheckedCreateWithoutInvoicesInput> | Prisma.receiptsCreateWithoutInvoicesInput[] | Prisma.receiptsUncheckedCreateWithoutInvoicesInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutInvoicesInput | Prisma.receiptsCreateOrConnectWithoutInvoicesInput[];
    createMany?: Prisma.receiptsCreateManyInvoicesInputEnvelope;
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
};
export type receiptsUncheckedCreateNestedManyWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutInvoicesInput, Prisma.receiptsUncheckedCreateWithoutInvoicesInput> | Prisma.receiptsCreateWithoutInvoicesInput[] | Prisma.receiptsUncheckedCreateWithoutInvoicesInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutInvoicesInput | Prisma.receiptsCreateOrConnectWithoutInvoicesInput[];
    createMany?: Prisma.receiptsCreateManyInvoicesInputEnvelope;
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
};
export type receiptsUpdateManyWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutInvoicesInput, Prisma.receiptsUncheckedCreateWithoutInvoicesInput> | Prisma.receiptsCreateWithoutInvoicesInput[] | Prisma.receiptsUncheckedCreateWithoutInvoicesInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutInvoicesInput | Prisma.receiptsCreateOrConnectWithoutInvoicesInput[];
    upsert?: Prisma.receiptsUpsertWithWhereUniqueWithoutInvoicesInput | Prisma.receiptsUpsertWithWhereUniqueWithoutInvoicesInput[];
    createMany?: Prisma.receiptsCreateManyInvoicesInputEnvelope;
    set?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    disconnect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    delete?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    update?: Prisma.receiptsUpdateWithWhereUniqueWithoutInvoicesInput | Prisma.receiptsUpdateWithWhereUniqueWithoutInvoicesInput[];
    updateMany?: Prisma.receiptsUpdateManyWithWhereWithoutInvoicesInput | Prisma.receiptsUpdateManyWithWhereWithoutInvoicesInput[];
    deleteMany?: Prisma.receiptsScalarWhereInput | Prisma.receiptsScalarWhereInput[];
};
export type receiptsUncheckedUpdateManyWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutInvoicesInput, Prisma.receiptsUncheckedCreateWithoutInvoicesInput> | Prisma.receiptsCreateWithoutInvoicesInput[] | Prisma.receiptsUncheckedCreateWithoutInvoicesInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutInvoicesInput | Prisma.receiptsCreateOrConnectWithoutInvoicesInput[];
    upsert?: Prisma.receiptsUpsertWithWhereUniqueWithoutInvoicesInput | Prisma.receiptsUpsertWithWhereUniqueWithoutInvoicesInput[];
    createMany?: Prisma.receiptsCreateManyInvoicesInputEnvelope;
    set?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    disconnect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    delete?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    update?: Prisma.receiptsUpdateWithWhereUniqueWithoutInvoicesInput | Prisma.receiptsUpdateWithWhereUniqueWithoutInvoicesInput[];
    updateMany?: Prisma.receiptsUpdateManyWithWhereWithoutInvoicesInput | Prisma.receiptsUpdateManyWithWhereWithoutInvoicesInput[];
    deleteMany?: Prisma.receiptsScalarWhereInput | Prisma.receiptsScalarWhereInput[];
};
export type receiptsCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutOrganisationsInput, Prisma.receiptsUncheckedCreateWithoutOrganisationsInput> | Prisma.receiptsCreateWithoutOrganisationsInput[] | Prisma.receiptsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutOrganisationsInput | Prisma.receiptsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.receiptsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
};
export type receiptsUncheckedCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutOrganisationsInput, Prisma.receiptsUncheckedCreateWithoutOrganisationsInput> | Prisma.receiptsCreateWithoutOrganisationsInput[] | Prisma.receiptsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutOrganisationsInput | Prisma.receiptsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.receiptsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
};
export type receiptsUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutOrganisationsInput, Prisma.receiptsUncheckedCreateWithoutOrganisationsInput> | Prisma.receiptsCreateWithoutOrganisationsInput[] | Prisma.receiptsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutOrganisationsInput | Prisma.receiptsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.receiptsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.receiptsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.receiptsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    disconnect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    delete?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    update?: Prisma.receiptsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.receiptsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.receiptsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.receiptsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.receiptsScalarWhereInput | Prisma.receiptsScalarWhereInput[];
};
export type receiptsUncheckedUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutOrganisationsInput, Prisma.receiptsUncheckedCreateWithoutOrganisationsInput> | Prisma.receiptsCreateWithoutOrganisationsInput[] | Prisma.receiptsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutOrganisationsInput | Prisma.receiptsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.receiptsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.receiptsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.receiptsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    disconnect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    delete?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    update?: Prisma.receiptsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.receiptsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.receiptsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.receiptsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.receiptsScalarWhereInput | Prisma.receiptsScalarWhereInput[];
};
export type receiptsCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutPaymentsInput, Prisma.receiptsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.receiptsWhereUniqueInput;
};
export type receiptsUncheckedCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutPaymentsInput, Prisma.receiptsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.receiptsWhereUniqueInput;
};
export type receiptsUpdateOneWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutPaymentsInput, Prisma.receiptsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.receiptsUpsertWithoutPaymentsInput;
    disconnect?: Prisma.receiptsWhereInput | boolean;
    delete?: Prisma.receiptsWhereInput | boolean;
    connect?: Prisma.receiptsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.receiptsUpdateToOneWithWhereWithoutPaymentsInput, Prisma.receiptsUpdateWithoutPaymentsInput>, Prisma.receiptsUncheckedUpdateWithoutPaymentsInput>;
};
export type receiptsUncheckedUpdateOneWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutPaymentsInput, Prisma.receiptsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.receiptsUpsertWithoutPaymentsInput;
    disconnect?: Prisma.receiptsWhereInput | boolean;
    delete?: Prisma.receiptsWhereInput | boolean;
    connect?: Prisma.receiptsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.receiptsUpdateToOneWithWhereWithoutPaymentsInput, Prisma.receiptsUpdateWithoutPaymentsInput>, Prisma.receiptsUncheckedUpdateWithoutPaymentsInput>;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type receiptsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutUsersInput, Prisma.receiptsUncheckedCreateWithoutUsersInput> | Prisma.receiptsCreateWithoutUsersInput[] | Prisma.receiptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutUsersInput | Prisma.receiptsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.receiptsCreateManyUsersInputEnvelope;
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
};
export type receiptsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutUsersInput, Prisma.receiptsUncheckedCreateWithoutUsersInput> | Prisma.receiptsCreateWithoutUsersInput[] | Prisma.receiptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutUsersInput | Prisma.receiptsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.receiptsCreateManyUsersInputEnvelope;
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
};
export type receiptsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutUsersInput, Prisma.receiptsUncheckedCreateWithoutUsersInput> | Prisma.receiptsCreateWithoutUsersInput[] | Prisma.receiptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutUsersInput | Prisma.receiptsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.receiptsUpsertWithWhereUniqueWithoutUsersInput | Prisma.receiptsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.receiptsCreateManyUsersInputEnvelope;
    set?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    disconnect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    delete?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    update?: Prisma.receiptsUpdateWithWhereUniqueWithoutUsersInput | Prisma.receiptsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.receiptsUpdateManyWithWhereWithoutUsersInput | Prisma.receiptsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.receiptsScalarWhereInput | Prisma.receiptsScalarWhereInput[];
};
export type receiptsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.receiptsCreateWithoutUsersInput, Prisma.receiptsUncheckedCreateWithoutUsersInput> | Prisma.receiptsCreateWithoutUsersInput[] | Prisma.receiptsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.receiptsCreateOrConnectWithoutUsersInput | Prisma.receiptsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.receiptsUpsertWithWhereUniqueWithoutUsersInput | Prisma.receiptsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.receiptsCreateManyUsersInputEnvelope;
    set?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    disconnect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    delete?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    connect?: Prisma.receiptsWhereUniqueInput | Prisma.receiptsWhereUniqueInput[];
    update?: Prisma.receiptsUpdateWithWhereUniqueWithoutUsersInput | Prisma.receiptsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.receiptsUpdateManyWithWhereWithoutUsersInput | Prisma.receiptsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.receiptsScalarWhereInput | Prisma.receiptsScalarWhereInput[];
};
export type receiptsCreateWithoutInvoicesInput = {
    id?: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
    organisations: Prisma.organisationsCreateNestedOneWithoutReceiptsInput;
    payments: Prisma.paymentsCreateNestedOneWithoutReceiptsInput;
    users: Prisma.usersCreateNestedOneWithoutReceiptsInput;
};
export type receiptsUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    org_id: string;
    payment_id: string;
    tenant_user_id: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
};
export type receiptsCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.receiptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.receiptsCreateWithoutInvoicesInput, Prisma.receiptsUncheckedCreateWithoutInvoicesInput>;
};
export type receiptsCreateManyInvoicesInputEnvelope = {
    data: Prisma.receiptsCreateManyInvoicesInput | Prisma.receiptsCreateManyInvoicesInput[];
    skipDuplicates?: boolean;
};
export type receiptsUpsertWithWhereUniqueWithoutInvoicesInput = {
    where: Prisma.receiptsWhereUniqueInput;
    update: Prisma.XOR<Prisma.receiptsUpdateWithoutInvoicesInput, Prisma.receiptsUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.receiptsCreateWithoutInvoicesInput, Prisma.receiptsUncheckedCreateWithoutInvoicesInput>;
};
export type receiptsUpdateWithWhereUniqueWithoutInvoicesInput = {
    where: Prisma.receiptsWhereUniqueInput;
    data: Prisma.XOR<Prisma.receiptsUpdateWithoutInvoicesInput, Prisma.receiptsUncheckedUpdateWithoutInvoicesInput>;
};
export type receiptsUpdateManyWithWhereWithoutInvoicesInput = {
    where: Prisma.receiptsScalarWhereInput;
    data: Prisma.XOR<Prisma.receiptsUpdateManyMutationInput, Prisma.receiptsUncheckedUpdateManyWithoutInvoicesInput>;
};
export type receiptsScalarWhereInput = {
    AND?: Prisma.receiptsScalarWhereInput | Prisma.receiptsScalarWhereInput[];
    OR?: Prisma.receiptsScalarWhereInput[];
    NOT?: Prisma.receiptsScalarWhereInput | Prisma.receiptsScalarWhereInput[];
    id?: Prisma.UuidFilter<"receipts"> | string;
    org_id?: Prisma.UuidFilter<"receipts"> | string;
    payment_id?: Prisma.UuidFilter<"receipts"> | string;
    invoice_id?: Prisma.UuidFilter<"receipts"> | string;
    tenant_user_id?: Prisma.UuidFilter<"receipts"> | string;
    receipt_number?: Prisma.StringFilter<"receipts"> | string;
    file_path?: Prisma.StringFilter<"receipts"> | string;
    file_size_bytes?: Prisma.IntNullableFilter<"receipts"> | number | null;
    generated_at?: Prisma.DateTimeFilter<"receipts"> | Date | string;
    download_count?: Prisma.IntFilter<"receipts"> | number;
    created_at?: Prisma.DateTimeFilter<"receipts"> | Date | string;
};
export type receiptsCreateWithoutOrganisationsInput = {
    id?: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
    invoices: Prisma.invoicesCreateNestedOneWithoutReceiptsInput;
    payments: Prisma.paymentsCreateNestedOneWithoutReceiptsInput;
    users: Prisma.usersCreateNestedOneWithoutReceiptsInput;
};
export type receiptsUncheckedCreateWithoutOrganisationsInput = {
    id?: string;
    payment_id: string;
    invoice_id: string;
    tenant_user_id: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
};
export type receiptsCreateOrConnectWithoutOrganisationsInput = {
    where: Prisma.receiptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.receiptsCreateWithoutOrganisationsInput, Prisma.receiptsUncheckedCreateWithoutOrganisationsInput>;
};
export type receiptsCreateManyOrganisationsInputEnvelope = {
    data: Prisma.receiptsCreateManyOrganisationsInput | Prisma.receiptsCreateManyOrganisationsInput[];
    skipDuplicates?: boolean;
};
export type receiptsUpsertWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.receiptsWhereUniqueInput;
    update: Prisma.XOR<Prisma.receiptsUpdateWithoutOrganisationsInput, Prisma.receiptsUncheckedUpdateWithoutOrganisationsInput>;
    create: Prisma.XOR<Prisma.receiptsCreateWithoutOrganisationsInput, Prisma.receiptsUncheckedCreateWithoutOrganisationsInput>;
};
export type receiptsUpdateWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.receiptsWhereUniqueInput;
    data: Prisma.XOR<Prisma.receiptsUpdateWithoutOrganisationsInput, Prisma.receiptsUncheckedUpdateWithoutOrganisationsInput>;
};
export type receiptsUpdateManyWithWhereWithoutOrganisationsInput = {
    where: Prisma.receiptsScalarWhereInput;
    data: Prisma.XOR<Prisma.receiptsUpdateManyMutationInput, Prisma.receiptsUncheckedUpdateManyWithoutOrganisationsInput>;
};
export type receiptsCreateWithoutPaymentsInput = {
    id?: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
    invoices: Prisma.invoicesCreateNestedOneWithoutReceiptsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutReceiptsInput;
    users: Prisma.usersCreateNestedOneWithoutReceiptsInput;
};
export type receiptsUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    org_id: string;
    invoice_id: string;
    tenant_user_id: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
};
export type receiptsCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.receiptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.receiptsCreateWithoutPaymentsInput, Prisma.receiptsUncheckedCreateWithoutPaymentsInput>;
};
export type receiptsUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.receiptsUpdateWithoutPaymentsInput, Prisma.receiptsUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.receiptsCreateWithoutPaymentsInput, Prisma.receiptsUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.receiptsWhereInput;
};
export type receiptsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.receiptsWhereInput;
    data: Prisma.XOR<Prisma.receiptsUpdateWithoutPaymentsInput, Prisma.receiptsUncheckedUpdateWithoutPaymentsInput>;
};
export type receiptsUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateOneRequiredWithoutReceiptsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutReceiptsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutReceiptsNestedInput;
};
export type receiptsUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type receiptsCreateWithoutUsersInput = {
    id?: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
    invoices: Prisma.invoicesCreateNestedOneWithoutReceiptsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutReceiptsInput;
    payments: Prisma.paymentsCreateNestedOneWithoutReceiptsInput;
};
export type receiptsUncheckedCreateWithoutUsersInput = {
    id?: string;
    org_id: string;
    payment_id: string;
    invoice_id: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
};
export type receiptsCreateOrConnectWithoutUsersInput = {
    where: Prisma.receiptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.receiptsCreateWithoutUsersInput, Prisma.receiptsUncheckedCreateWithoutUsersInput>;
};
export type receiptsCreateManyUsersInputEnvelope = {
    data: Prisma.receiptsCreateManyUsersInput | Prisma.receiptsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type receiptsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.receiptsWhereUniqueInput;
    update: Prisma.XOR<Prisma.receiptsUpdateWithoutUsersInput, Prisma.receiptsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.receiptsCreateWithoutUsersInput, Prisma.receiptsUncheckedCreateWithoutUsersInput>;
};
export type receiptsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.receiptsWhereUniqueInput;
    data: Prisma.XOR<Prisma.receiptsUpdateWithoutUsersInput, Prisma.receiptsUncheckedUpdateWithoutUsersInput>;
};
export type receiptsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.receiptsScalarWhereInput;
    data: Prisma.XOR<Prisma.receiptsUpdateManyMutationInput, Prisma.receiptsUncheckedUpdateManyWithoutUsersInput>;
};
export type receiptsCreateManyInvoicesInput = {
    id?: string;
    org_id: string;
    payment_id: string;
    tenant_user_id: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
};
export type receiptsUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutReceiptsNestedInput;
    payments?: Prisma.paymentsUpdateOneRequiredWithoutReceiptsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutReceiptsNestedInput;
};
export type receiptsUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type receiptsUncheckedUpdateManyWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type receiptsCreateManyOrganisationsInput = {
    id?: string;
    payment_id: string;
    invoice_id: string;
    tenant_user_id: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
};
export type receiptsUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateOneRequiredWithoutReceiptsNestedInput;
    payments?: Prisma.paymentsUpdateOneRequiredWithoutReceiptsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutReceiptsNestedInput;
};
export type receiptsUncheckedUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type receiptsUncheckedUpdateManyWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type receiptsCreateManyUsersInput = {
    id?: string;
    org_id: string;
    payment_id: string;
    invoice_id: string;
    receipt_number: string;
    file_path: string;
    file_size_bytes?: number | null;
    generated_at?: Date | string;
    download_count?: number;
    created_at?: Date | string;
};
export type receiptsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateOneRequiredWithoutReceiptsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutReceiptsNestedInput;
    payments?: Prisma.paymentsUpdateOneRequiredWithoutReceiptsNestedInput;
};
export type receiptsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type receiptsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    payment_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    receipt_number?: Prisma.StringFieldUpdateOperationsInput | string;
    file_path?: Prisma.StringFieldUpdateOperationsInput | string;
    file_size_bytes?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    generated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    download_count?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type receiptsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    payment_id?: boolean;
    invoice_id?: boolean;
    tenant_user_id?: boolean;
    receipt_number?: boolean;
    file_path?: boolean;
    file_size_bytes?: boolean;
    generated_at?: boolean;
    download_count?: boolean;
    created_at?: boolean;
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["receipts"]>;
export type receiptsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    payment_id?: boolean;
    invoice_id?: boolean;
    tenant_user_id?: boolean;
    receipt_number?: boolean;
    file_path?: boolean;
    file_size_bytes?: boolean;
    generated_at?: boolean;
    download_count?: boolean;
    created_at?: boolean;
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["receipts"]>;
export type receiptsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    payment_id?: boolean;
    invoice_id?: boolean;
    tenant_user_id?: boolean;
    receipt_number?: boolean;
    file_path?: boolean;
    file_size_bytes?: boolean;
    generated_at?: boolean;
    download_count?: boolean;
    created_at?: boolean;
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["receipts"]>;
export type receiptsSelectScalar = {
    id?: boolean;
    org_id?: boolean;
    payment_id?: boolean;
    invoice_id?: boolean;
    tenant_user_id?: boolean;
    receipt_number?: boolean;
    file_path?: boolean;
    file_size_bytes?: boolean;
    generated_at?: boolean;
    download_count?: boolean;
    created_at?: boolean;
};
export type receiptsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "org_id" | "payment_id" | "invoice_id" | "tenant_user_id" | "receipt_number" | "file_path" | "file_size_bytes" | "generated_at" | "download_count" | "created_at", ExtArgs["result"]["receipts"]>;
export type receiptsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type receiptsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type receiptsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.paymentsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $receiptsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "receipts";
    objects: {
        invoices: Prisma.$invoicesPayload<ExtArgs>;
        organisations: Prisma.$organisationsPayload<ExtArgs>;
        payments: Prisma.$paymentsPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        org_id: string;
        payment_id: string;
        invoice_id: string;
        tenant_user_id: string;
        receipt_number: string;
        file_path: string;
        file_size_bytes: number | null;
        generated_at: Date;
        download_count: number;
        created_at: Date;
    }, ExtArgs["result"]["receipts"]>;
    composites: {};
};
export type receiptsGetPayload<S extends boolean | null | undefined | receiptsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$receiptsPayload, S>;
export type receiptsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<receiptsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReceiptsCountAggregateInputType | true;
};
export interface receiptsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['receipts'];
        meta: {
            name: 'receipts';
        };
    };
    findUnique<T extends receiptsFindUniqueArgs>(args: Prisma.SelectSubset<T, receiptsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__receiptsClient<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends receiptsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, receiptsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__receiptsClient<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends receiptsFindFirstArgs>(args?: Prisma.SelectSubset<T, receiptsFindFirstArgs<ExtArgs>>): Prisma.Prisma__receiptsClient<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends receiptsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, receiptsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__receiptsClient<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends receiptsFindManyArgs>(args?: Prisma.SelectSubset<T, receiptsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends receiptsCreateArgs>(args: Prisma.SelectSubset<T, receiptsCreateArgs<ExtArgs>>): Prisma.Prisma__receiptsClient<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends receiptsCreateManyArgs>(args?: Prisma.SelectSubset<T, receiptsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends receiptsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, receiptsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends receiptsDeleteArgs>(args: Prisma.SelectSubset<T, receiptsDeleteArgs<ExtArgs>>): Prisma.Prisma__receiptsClient<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends receiptsUpdateArgs>(args: Prisma.SelectSubset<T, receiptsUpdateArgs<ExtArgs>>): Prisma.Prisma__receiptsClient<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends receiptsDeleteManyArgs>(args?: Prisma.SelectSubset<T, receiptsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends receiptsUpdateManyArgs>(args: Prisma.SelectSubset<T, receiptsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends receiptsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, receiptsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends receiptsUpsertArgs>(args: Prisma.SelectSubset<T, receiptsUpsertArgs<ExtArgs>>): Prisma.Prisma__receiptsClient<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends receiptsCountArgs>(args?: Prisma.Subset<T, receiptsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReceiptsCountAggregateOutputType> : number>;
    aggregate<T extends ReceiptsAggregateArgs>(args: Prisma.Subset<T, ReceiptsAggregateArgs>): Prisma.PrismaPromise<GetReceiptsAggregateType<T>>;
    groupBy<T extends receiptsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: receiptsGroupByArgs['orderBy'];
    } : {
        orderBy?: receiptsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, receiptsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceiptsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: receiptsFieldRefs;
}
export interface Prisma__receiptsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    invoices<T extends Prisma.invoicesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.invoicesDefaultArgs<ExtArgs>>): Prisma.Prisma__invoicesClient<runtime.Types.Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    organisations<T extends Prisma.organisationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.organisationsDefaultArgs<ExtArgs>>): Prisma.Prisma__organisationsClient<runtime.Types.Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.paymentsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.paymentsDefaultArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface receiptsFieldRefs {
    readonly id: Prisma.FieldRef<"receipts", 'String'>;
    readonly org_id: Prisma.FieldRef<"receipts", 'String'>;
    readonly payment_id: Prisma.FieldRef<"receipts", 'String'>;
    readonly invoice_id: Prisma.FieldRef<"receipts", 'String'>;
    readonly tenant_user_id: Prisma.FieldRef<"receipts", 'String'>;
    readonly receipt_number: Prisma.FieldRef<"receipts", 'String'>;
    readonly file_path: Prisma.FieldRef<"receipts", 'String'>;
    readonly file_size_bytes: Prisma.FieldRef<"receipts", 'Int'>;
    readonly generated_at: Prisma.FieldRef<"receipts", 'DateTime'>;
    readonly download_count: Prisma.FieldRef<"receipts", 'Int'>;
    readonly created_at: Prisma.FieldRef<"receipts", 'DateTime'>;
}
export type receiptsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelect<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    include?: Prisma.receiptsInclude<ExtArgs> | null;
    where: Prisma.receiptsWhereUniqueInput;
};
export type receiptsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelect<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    include?: Prisma.receiptsInclude<ExtArgs> | null;
    where: Prisma.receiptsWhereUniqueInput;
};
export type receiptsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelect<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    include?: Prisma.receiptsInclude<ExtArgs> | null;
    where?: Prisma.receiptsWhereInput;
    orderBy?: Prisma.receiptsOrderByWithRelationInput | Prisma.receiptsOrderByWithRelationInput[];
    cursor?: Prisma.receiptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReceiptsScalarFieldEnum | Prisma.ReceiptsScalarFieldEnum[];
};
export type receiptsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelect<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    include?: Prisma.receiptsInclude<ExtArgs> | null;
    where?: Prisma.receiptsWhereInput;
    orderBy?: Prisma.receiptsOrderByWithRelationInput | Prisma.receiptsOrderByWithRelationInput[];
    cursor?: Prisma.receiptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReceiptsScalarFieldEnum | Prisma.ReceiptsScalarFieldEnum[];
};
export type receiptsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelect<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    include?: Prisma.receiptsInclude<ExtArgs> | null;
    where?: Prisma.receiptsWhereInput;
    orderBy?: Prisma.receiptsOrderByWithRelationInput | Prisma.receiptsOrderByWithRelationInput[];
    cursor?: Prisma.receiptsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReceiptsScalarFieldEnum | Prisma.ReceiptsScalarFieldEnum[];
};
export type receiptsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelect<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    include?: Prisma.receiptsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.receiptsCreateInput, Prisma.receiptsUncheckedCreateInput>;
};
export type receiptsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.receiptsCreateManyInput | Prisma.receiptsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type receiptsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    data: Prisma.receiptsCreateManyInput | Prisma.receiptsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.receiptsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type receiptsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelect<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    include?: Prisma.receiptsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.receiptsUpdateInput, Prisma.receiptsUncheckedUpdateInput>;
    where: Prisma.receiptsWhereUniqueInput;
};
export type receiptsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.receiptsUpdateManyMutationInput, Prisma.receiptsUncheckedUpdateManyInput>;
    where?: Prisma.receiptsWhereInput;
    limit?: number;
};
export type receiptsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.receiptsUpdateManyMutationInput, Prisma.receiptsUncheckedUpdateManyInput>;
    where?: Prisma.receiptsWhereInput;
    limit?: number;
    include?: Prisma.receiptsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type receiptsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelect<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    include?: Prisma.receiptsInclude<ExtArgs> | null;
    where: Prisma.receiptsWhereUniqueInput;
    create: Prisma.XOR<Prisma.receiptsCreateInput, Prisma.receiptsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.receiptsUpdateInput, Prisma.receiptsUncheckedUpdateInput>;
};
export type receiptsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelect<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    include?: Prisma.receiptsInclude<ExtArgs> | null;
    where: Prisma.receiptsWhereUniqueInput;
};
export type receiptsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.receiptsWhereInput;
    limit?: number;
};
export type receiptsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelect<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    include?: Prisma.receiptsInclude<ExtArgs> | null;
};
