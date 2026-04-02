import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type paymentsModel = runtime.Types.Result.DefaultSelection<Prisma.$paymentsPayload>;
export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type PaymentsAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentsSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentsMinAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    invoice_id: string | null;
    tenant_user_id: string | null;
    amount: runtime.Decimal | null;
    payment_method: $Enums.payment_method_enum | null;
    transaction_id: string | null;
    proof_file_id: string | null;
    status: $Enums.payment_status_enum | null;
    rejection_reason: string | null;
    reviewed_by: string | null;
    reviewed_at: Date | null;
    submitted_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PaymentsMaxAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    invoice_id: string | null;
    tenant_user_id: string | null;
    amount: runtime.Decimal | null;
    payment_method: $Enums.payment_method_enum | null;
    transaction_id: string | null;
    proof_file_id: string | null;
    status: $Enums.payment_status_enum | null;
    rejection_reason: string | null;
    reviewed_by: string | null;
    reviewed_at: Date | null;
    submitted_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PaymentsCountAggregateOutputType = {
    id: number;
    org_id: number;
    invoice_id: number;
    tenant_user_id: number;
    amount: number;
    payment_method: number;
    transaction_id: number;
    proof_file_id: number;
    status: number;
    rejection_reason: number;
    reviewed_by: number;
    reviewed_at: number;
    submitted_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type PaymentsAvgAggregateInputType = {
    amount?: true;
};
export type PaymentsSumAggregateInputType = {
    amount?: true;
};
export type PaymentsMinAggregateInputType = {
    id?: true;
    org_id?: true;
    invoice_id?: true;
    tenant_user_id?: true;
    amount?: true;
    payment_method?: true;
    transaction_id?: true;
    proof_file_id?: true;
    status?: true;
    rejection_reason?: true;
    reviewed_by?: true;
    reviewed_at?: true;
    submitted_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type PaymentsMaxAggregateInputType = {
    id?: true;
    org_id?: true;
    invoice_id?: true;
    tenant_user_id?: true;
    amount?: true;
    payment_method?: true;
    transaction_id?: true;
    proof_file_id?: true;
    status?: true;
    rejection_reason?: true;
    reviewed_by?: true;
    reviewed_at?: true;
    submitted_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type PaymentsCountAggregateInputType = {
    id?: true;
    org_id?: true;
    invoice_id?: true;
    tenant_user_id?: true;
    amount?: true;
    payment_method?: true;
    transaction_id?: true;
    proof_file_id?: true;
    status?: true;
    rejection_reason?: true;
    reviewed_by?: true;
    reviewed_at?: true;
    submitted_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type PaymentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentsCountAggregateInputType;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
    [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayments[P]> : Prisma.GetScalarType<T[P], AggregatePayments[P]>;
};
export type paymentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithAggregationInput | Prisma.paymentsOrderByWithAggregationInput[];
    by: Prisma.PaymentsScalarFieldEnum[] | Prisma.PaymentsScalarFieldEnum;
    having?: Prisma.paymentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentsCountAggregateInputType | true;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type PaymentsGroupByOutputType = {
    id: string;
    org_id: string;
    invoice_id: string;
    tenant_user_id: string;
    amount: runtime.Decimal;
    payment_method: $Enums.payment_method_enum;
    transaction_id: string | null;
    proof_file_id: string | null;
    status: $Enums.payment_status_enum;
    rejection_reason: string | null;
    reviewed_by: string | null;
    reviewed_at: Date | null;
    submitted_at: Date;
    created_at: Date;
    updated_at: Date;
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]>;
}>>;
export type paymentsWhereInput = {
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    id?: Prisma.UuidFilter<"payments"> | string;
    org_id?: Prisma.UuidFilter<"payments"> | string;
    invoice_id?: Prisma.UuidFilter<"payments"> | string;
    tenant_user_id?: Prisma.UuidFilter<"payments"> | string;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFilter<"payments"> | $Enums.payment_method_enum;
    transaction_id?: Prisma.StringNullableFilter<"payments"> | string | null;
    proof_file_id?: Prisma.UuidNullableFilter<"payments"> | string | null;
    status?: Prisma.Enumpayment_status_enumFilter<"payments"> | $Enums.payment_status_enum;
    rejection_reason?: Prisma.StringNullableFilter<"payments"> | string | null;
    reviewed_by?: Prisma.UuidNullableFilter<"payments"> | string | null;
    reviewed_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    submitted_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    invoices?: Prisma.XOR<Prisma.InvoicesScalarRelationFilter, Prisma.invoicesWhereInput>;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    file_attachments?: Prisma.XOR<Prisma.File_attachmentsNullableScalarRelationFilter, Prisma.file_attachmentsWhereInput> | null;
    users_payments_reviewed_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    users_payments_tenant_user_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    receipts?: Prisma.XOR<Prisma.ReceiptsNullableScalarRelationFilter, Prisma.receiptsWhereInput> | null;
};
export type paymentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    invoice_id?: Prisma.SortOrder;
    tenant_user_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_method?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejection_reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewed_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    invoices?: Prisma.invoicesOrderByWithRelationInput;
    organisations?: Prisma.organisationsOrderByWithRelationInput;
    file_attachments?: Prisma.file_attachmentsOrderByWithRelationInput;
    users_payments_reviewed_byTousers?: Prisma.usersOrderByWithRelationInput;
    users_payments_tenant_user_idTousers?: Prisma.usersOrderByWithRelationInput;
    receipts?: Prisma.receiptsOrderByWithRelationInput;
};
export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    invoice_id?: string;
    org_id_transaction_id?: Prisma.paymentsOrg_idTransaction_idCompoundUniqueInput;
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    org_id?: Prisma.UuidFilter<"payments"> | string;
    tenant_user_id?: Prisma.UuidFilter<"payments"> | string;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFilter<"payments"> | $Enums.payment_method_enum;
    transaction_id?: Prisma.StringNullableFilter<"payments"> | string | null;
    proof_file_id?: Prisma.UuidNullableFilter<"payments"> | string | null;
    status?: Prisma.Enumpayment_status_enumFilter<"payments"> | $Enums.payment_status_enum;
    rejection_reason?: Prisma.StringNullableFilter<"payments"> | string | null;
    reviewed_by?: Prisma.UuidNullableFilter<"payments"> | string | null;
    reviewed_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    submitted_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    invoices?: Prisma.XOR<Prisma.InvoicesScalarRelationFilter, Prisma.invoicesWhereInput>;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    file_attachments?: Prisma.XOR<Prisma.File_attachmentsNullableScalarRelationFilter, Prisma.file_attachmentsWhereInput> | null;
    users_payments_reviewed_byTousers?: Prisma.XOR<Prisma.UsersNullableScalarRelationFilter, Prisma.usersWhereInput> | null;
    users_payments_tenant_user_idTousers?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    receipts?: Prisma.XOR<Prisma.ReceiptsNullableScalarRelationFilter, Prisma.receiptsWhereInput> | null;
}, "id" | "invoice_id" | "org_id_transaction_id">;
export type paymentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    invoice_id?: Prisma.SortOrder;
    tenant_user_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_method?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejection_reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewed_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewed_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.paymentsCountOrderByAggregateInput;
    _avg?: Prisma.paymentsAvgOrderByAggregateInput;
    _max?: Prisma.paymentsMaxOrderByAggregateInput;
    _min?: Prisma.paymentsMinOrderByAggregateInput;
    _sum?: Prisma.paymentsSumOrderByAggregateInput;
};
export type paymentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.paymentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"payments"> | string;
    org_id?: Prisma.UuidWithAggregatesFilter<"payments"> | string;
    invoice_id?: Prisma.UuidWithAggregatesFilter<"payments"> | string;
    tenant_user_id?: Prisma.UuidWithAggregatesFilter<"payments"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumWithAggregatesFilter<"payments"> | $Enums.payment_method_enum;
    transaction_id?: Prisma.StringNullableWithAggregatesFilter<"payments"> | string | null;
    proof_file_id?: Prisma.UuidNullableWithAggregatesFilter<"payments"> | string | null;
    status?: Prisma.Enumpayment_status_enumWithAggregatesFilter<"payments"> | $Enums.payment_status_enum;
    rejection_reason?: Prisma.StringNullableWithAggregatesFilter<"payments"> | string | null;
    reviewed_by?: Prisma.UuidNullableWithAggregatesFilter<"payments"> | string | null;
    reviewed_at?: Prisma.DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null;
    submitted_at?: Prisma.DateTimeWithAggregatesFilter<"payments"> | Date | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"payments"> | Date | string;
};
export type paymentsCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices: Prisma.invoicesCreateNestedOneWithoutPaymentsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutPaymentsInput;
    file_attachments?: Prisma.file_attachmentsCreateNestedOneWithoutPaymentsInput;
    users_payments_reviewed_byTousers?: Prisma.usersCreateNestedOneWithoutPayments_payments_reviewed_byTousersInput;
    users_payments_tenant_user_idTousers: Prisma.usersCreateNestedOneWithoutPayments_payments_tenant_user_idTousersInput;
    receipts?: Prisma.receiptsCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateInput = {
    id?: string;
    org_id: string;
    invoice_id: string;
    tenant_user_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    proof_file_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_by?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    receipts?: Prisma.receiptsUncheckedCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateOneRequiredWithoutPaymentsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutPaymentsNestedInput;
    file_attachments?: Prisma.file_attachmentsUpdateOneWithoutPaymentsNestedInput;
    users_payments_reviewed_byTousers?: Prisma.usersUpdateOneWithoutPayments_payments_reviewed_byTousersNestedInput;
    users_payments_tenant_user_idTousers?: Prisma.usersUpdateOneRequiredWithoutPayments_payments_tenant_user_idTousersNestedInput;
    receipts?: Prisma.receiptsUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proof_file_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipts?: Prisma.receiptsUncheckedUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsCreateManyInput = {
    id?: string;
    org_id: string;
    invoice_id: string;
    tenant_user_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    proof_file_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_by?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proof_file_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentsListRelationFilter = {
    every?: Prisma.paymentsWhereInput;
    some?: Prisma.paymentsWhereInput;
    none?: Prisma.paymentsWhereInput;
};
export type paymentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PaymentsNullableScalarRelationFilter = {
    is?: Prisma.paymentsWhereInput | null;
    isNot?: Prisma.paymentsWhereInput | null;
};
export type paymentsOrg_idTransaction_idCompoundUniqueInput = {
    org_id: string;
    transaction_id: string;
};
export type paymentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    invoice_id?: Prisma.SortOrder;
    tenant_user_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_method?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejection_reason?: Prisma.SortOrder;
    reviewed_by?: Prisma.SortOrder;
    reviewed_at?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type paymentsAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type paymentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    invoice_id?: Prisma.SortOrder;
    tenant_user_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_method?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejection_reason?: Prisma.SortOrder;
    reviewed_by?: Prisma.SortOrder;
    reviewed_at?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type paymentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    invoice_id?: Prisma.SortOrder;
    tenant_user_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    payment_method?: Prisma.SortOrder;
    transaction_id?: Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    rejection_reason?: Prisma.SortOrder;
    reviewed_by?: Prisma.SortOrder;
    reviewed_at?: Prisma.SortOrder;
    submitted_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type paymentsSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type PaymentsScalarRelationFilter = {
    is?: Prisma.paymentsWhereInput;
    isNot?: Prisma.paymentsWhereInput;
};
export type paymentsCreateNestedManyWithoutFile_attachmentsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutFile_attachmentsInput, Prisma.paymentsUncheckedCreateWithoutFile_attachmentsInput> | Prisma.paymentsCreateWithoutFile_attachmentsInput[] | Prisma.paymentsUncheckedCreateWithoutFile_attachmentsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutFile_attachmentsInput | Prisma.paymentsCreateOrConnectWithoutFile_attachmentsInput[];
    createMany?: Prisma.paymentsCreateManyFile_attachmentsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutFile_attachmentsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutFile_attachmentsInput, Prisma.paymentsUncheckedCreateWithoutFile_attachmentsInput> | Prisma.paymentsCreateWithoutFile_attachmentsInput[] | Prisma.paymentsUncheckedCreateWithoutFile_attachmentsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutFile_attachmentsInput | Prisma.paymentsCreateOrConnectWithoutFile_attachmentsInput[];
    createMany?: Prisma.paymentsCreateManyFile_attachmentsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUpdateManyWithoutFile_attachmentsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutFile_attachmentsInput, Prisma.paymentsUncheckedCreateWithoutFile_attachmentsInput> | Prisma.paymentsCreateWithoutFile_attachmentsInput[] | Prisma.paymentsUncheckedCreateWithoutFile_attachmentsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutFile_attachmentsInput | Prisma.paymentsCreateOrConnectWithoutFile_attachmentsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutFile_attachmentsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutFile_attachmentsInput[];
    createMany?: Prisma.paymentsCreateManyFile_attachmentsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutFile_attachmentsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutFile_attachmentsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutFile_attachmentsInput | Prisma.paymentsUpdateManyWithWhereWithoutFile_attachmentsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutFile_attachmentsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutFile_attachmentsInput, Prisma.paymentsUncheckedCreateWithoutFile_attachmentsInput> | Prisma.paymentsCreateWithoutFile_attachmentsInput[] | Prisma.paymentsUncheckedCreateWithoutFile_attachmentsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutFile_attachmentsInput | Prisma.paymentsCreateOrConnectWithoutFile_attachmentsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutFile_attachmentsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutFile_attachmentsInput[];
    createMany?: Prisma.paymentsCreateManyFile_attachmentsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutFile_attachmentsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutFile_attachmentsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutFile_attachmentsInput | Prisma.paymentsUpdateManyWithWhereWithoutFile_attachmentsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutInvoicesInput, Prisma.paymentsUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.paymentsWhereUniqueInput;
};
export type paymentsUncheckedCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutInvoicesInput, Prisma.paymentsUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.paymentsWhereUniqueInput;
};
export type paymentsUpdateOneWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutInvoicesInput, Prisma.paymentsUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.paymentsUpsertWithoutInvoicesInput;
    disconnect?: Prisma.paymentsWhereInput | boolean;
    delete?: Prisma.paymentsWhereInput | boolean;
    connect?: Prisma.paymentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.paymentsUpdateToOneWithWhereWithoutInvoicesInput, Prisma.paymentsUpdateWithoutInvoicesInput>, Prisma.paymentsUncheckedUpdateWithoutInvoicesInput>;
};
export type paymentsUncheckedUpdateOneWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutInvoicesInput, Prisma.paymentsUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.paymentsUpsertWithoutInvoicesInput;
    disconnect?: Prisma.paymentsWhereInput | boolean;
    delete?: Prisma.paymentsWhereInput | boolean;
    connect?: Prisma.paymentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.paymentsUpdateToOneWithWhereWithoutInvoicesInput, Prisma.paymentsUpdateWithoutInvoicesInput>, Prisma.paymentsUncheckedUpdateWithoutInvoicesInput>;
};
export type paymentsCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrganisationsInput, Prisma.paymentsUncheckedCreateWithoutOrganisationsInput> | Prisma.paymentsCreateWithoutOrganisationsInput[] | Prisma.paymentsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrganisationsInput | Prisma.paymentsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.paymentsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrganisationsInput, Prisma.paymentsUncheckedCreateWithoutOrganisationsInput> | Prisma.paymentsCreateWithoutOrganisationsInput[] | Prisma.paymentsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrganisationsInput | Prisma.paymentsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.paymentsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrganisationsInput, Prisma.paymentsUncheckedCreateWithoutOrganisationsInput> | Prisma.paymentsCreateWithoutOrganisationsInput[] | Prisma.paymentsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrganisationsInput | Prisma.paymentsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.paymentsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.paymentsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutOrganisationsInput, Prisma.paymentsUncheckedCreateWithoutOrganisationsInput> | Prisma.paymentsCreateWithoutOrganisationsInput[] | Prisma.paymentsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutOrganisationsInput | Prisma.paymentsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.paymentsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.paymentsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type Enumpayment_method_enumFieldUpdateOperationsInput = {
    set?: $Enums.payment_method_enum;
};
export type Enumpayment_status_enumFieldUpdateOperationsInput = {
    set?: $Enums.payment_status_enum;
};
export type paymentsCreateNestedOneWithoutReceiptsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutReceiptsInput, Prisma.paymentsUncheckedCreateWithoutReceiptsInput>;
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutReceiptsInput;
    connect?: Prisma.paymentsWhereUniqueInput;
};
export type paymentsUpdateOneRequiredWithoutReceiptsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutReceiptsInput, Prisma.paymentsUncheckedCreateWithoutReceiptsInput>;
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutReceiptsInput;
    upsert?: Prisma.paymentsUpsertWithoutReceiptsInput;
    connect?: Prisma.paymentsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.paymentsUpdateToOneWithWhereWithoutReceiptsInput, Prisma.paymentsUpdateWithoutReceiptsInput>, Prisma.paymentsUncheckedUpdateWithoutReceiptsInput>;
};
export type paymentsCreateNestedManyWithoutUsers_payments_reviewed_byTousersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_reviewed_byTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_reviewed_byTousersInput> | Prisma.paymentsCreateWithoutUsers_payments_reviewed_byTousersInput[] | Prisma.paymentsUncheckedCreateWithoutUsers_payments_reviewed_byTousersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsers_payments_reviewed_byTousersInput | Prisma.paymentsCreateOrConnectWithoutUsers_payments_reviewed_byTousersInput[];
    createMany?: Prisma.paymentsCreateManyUsers_payments_reviewed_byTousersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsCreateNestedManyWithoutUsers_payments_tenant_user_idTousersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_tenant_user_idTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_tenant_user_idTousersInput> | Prisma.paymentsCreateWithoutUsers_payments_tenant_user_idTousersInput[] | Prisma.paymentsUncheckedCreateWithoutUsers_payments_tenant_user_idTousersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsers_payments_tenant_user_idTousersInput | Prisma.paymentsCreateOrConnectWithoutUsers_payments_tenant_user_idTousersInput[];
    createMany?: Prisma.paymentsCreateManyUsers_payments_tenant_user_idTousersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutUsers_payments_reviewed_byTousersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_reviewed_byTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_reviewed_byTousersInput> | Prisma.paymentsCreateWithoutUsers_payments_reviewed_byTousersInput[] | Prisma.paymentsUncheckedCreateWithoutUsers_payments_reviewed_byTousersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsers_payments_reviewed_byTousersInput | Prisma.paymentsCreateOrConnectWithoutUsers_payments_reviewed_byTousersInput[];
    createMany?: Prisma.paymentsCreateManyUsers_payments_reviewed_byTousersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutUsers_payments_tenant_user_idTousersInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_tenant_user_idTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_tenant_user_idTousersInput> | Prisma.paymentsCreateWithoutUsers_payments_tenant_user_idTousersInput[] | Prisma.paymentsUncheckedCreateWithoutUsers_payments_tenant_user_idTousersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsers_payments_tenant_user_idTousersInput | Prisma.paymentsCreateOrConnectWithoutUsers_payments_tenant_user_idTousersInput[];
    createMany?: Prisma.paymentsCreateManyUsers_payments_tenant_user_idTousersInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUpdateManyWithoutUsers_payments_reviewed_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_reviewed_byTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_reviewed_byTousersInput> | Prisma.paymentsCreateWithoutUsers_payments_reviewed_byTousersInput[] | Prisma.paymentsUncheckedCreateWithoutUsers_payments_reviewed_byTousersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsers_payments_reviewed_byTousersInput | Prisma.paymentsCreateOrConnectWithoutUsers_payments_reviewed_byTousersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutUsers_payments_reviewed_byTousersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutUsers_payments_reviewed_byTousersInput[];
    createMany?: Prisma.paymentsCreateManyUsers_payments_reviewed_byTousersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutUsers_payments_reviewed_byTousersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutUsers_payments_reviewed_byTousersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutUsers_payments_reviewed_byTousersInput | Prisma.paymentsUpdateManyWithWhereWithoutUsers_payments_reviewed_byTousersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUpdateManyWithoutUsers_payments_tenant_user_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_tenant_user_idTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_tenant_user_idTousersInput> | Prisma.paymentsCreateWithoutUsers_payments_tenant_user_idTousersInput[] | Prisma.paymentsUncheckedCreateWithoutUsers_payments_tenant_user_idTousersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsers_payments_tenant_user_idTousersInput | Prisma.paymentsCreateOrConnectWithoutUsers_payments_tenant_user_idTousersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutUsers_payments_tenant_user_idTousersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutUsers_payments_tenant_user_idTousersInput[];
    createMany?: Prisma.paymentsCreateManyUsers_payments_tenant_user_idTousersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutUsers_payments_tenant_user_idTousersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutUsers_payments_tenant_user_idTousersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutUsers_payments_tenant_user_idTousersInput | Prisma.paymentsUpdateManyWithWhereWithoutUsers_payments_tenant_user_idTousersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutUsers_payments_reviewed_byTousersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_reviewed_byTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_reviewed_byTousersInput> | Prisma.paymentsCreateWithoutUsers_payments_reviewed_byTousersInput[] | Prisma.paymentsUncheckedCreateWithoutUsers_payments_reviewed_byTousersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsers_payments_reviewed_byTousersInput | Prisma.paymentsCreateOrConnectWithoutUsers_payments_reviewed_byTousersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutUsers_payments_reviewed_byTousersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutUsers_payments_reviewed_byTousersInput[];
    createMany?: Prisma.paymentsCreateManyUsers_payments_reviewed_byTousersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutUsers_payments_reviewed_byTousersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutUsers_payments_reviewed_byTousersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutUsers_payments_reviewed_byTousersInput | Prisma.paymentsUpdateManyWithWhereWithoutUsers_payments_reviewed_byTousersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutUsers_payments_tenant_user_idTousersNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_tenant_user_idTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_tenant_user_idTousersInput> | Prisma.paymentsCreateWithoutUsers_payments_tenant_user_idTousersInput[] | Prisma.paymentsUncheckedCreateWithoutUsers_payments_tenant_user_idTousersInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutUsers_payments_tenant_user_idTousersInput | Prisma.paymentsCreateOrConnectWithoutUsers_payments_tenant_user_idTousersInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutUsers_payments_tenant_user_idTousersInput | Prisma.paymentsUpsertWithWhereUniqueWithoutUsers_payments_tenant_user_idTousersInput[];
    createMany?: Prisma.paymentsCreateManyUsers_payments_tenant_user_idTousersInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutUsers_payments_tenant_user_idTousersInput | Prisma.paymentsUpdateWithWhereUniqueWithoutUsers_payments_tenant_user_idTousersInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutUsers_payments_tenant_user_idTousersInput | Prisma.paymentsUpdateManyWithWhereWithoutUsers_payments_tenant_user_idTousersInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsCreateWithoutFile_attachmentsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices: Prisma.invoicesCreateNestedOneWithoutPaymentsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutPaymentsInput;
    users_payments_reviewed_byTousers?: Prisma.usersCreateNestedOneWithoutPayments_payments_reviewed_byTousersInput;
    users_payments_tenant_user_idTousers: Prisma.usersCreateNestedOneWithoutPayments_payments_tenant_user_idTousersInput;
    receipts?: Prisma.receiptsCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutFile_attachmentsInput = {
    id?: string;
    org_id: string;
    invoice_id: string;
    tenant_user_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_by?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    receipts?: Prisma.receiptsUncheckedCreateNestedOneWithoutPaymentsInput;
};
export type paymentsCreateOrConnectWithoutFile_attachmentsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutFile_attachmentsInput, Prisma.paymentsUncheckedCreateWithoutFile_attachmentsInput>;
};
export type paymentsCreateManyFile_attachmentsInputEnvelope = {
    data: Prisma.paymentsCreateManyFile_attachmentsInput | Prisma.paymentsCreateManyFile_attachmentsInput[];
    skipDuplicates?: boolean;
};
export type paymentsUpsertWithWhereUniqueWithoutFile_attachmentsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutFile_attachmentsInput, Prisma.paymentsUncheckedUpdateWithoutFile_attachmentsInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutFile_attachmentsInput, Prisma.paymentsUncheckedCreateWithoutFile_attachmentsInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutFile_attachmentsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutFile_attachmentsInput, Prisma.paymentsUncheckedUpdateWithoutFile_attachmentsInput>;
};
export type paymentsUpdateManyWithWhereWithoutFile_attachmentsInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutFile_attachmentsInput>;
};
export type paymentsScalarWhereInput = {
    AND?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    OR?: Prisma.paymentsScalarWhereInput[];
    NOT?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    id?: Prisma.UuidFilter<"payments"> | string;
    org_id?: Prisma.UuidFilter<"payments"> | string;
    invoice_id?: Prisma.UuidFilter<"payments"> | string;
    tenant_user_id?: Prisma.UuidFilter<"payments"> | string;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFilter<"payments"> | $Enums.payment_method_enum;
    transaction_id?: Prisma.StringNullableFilter<"payments"> | string | null;
    proof_file_id?: Prisma.UuidNullableFilter<"payments"> | string | null;
    status?: Prisma.Enumpayment_status_enumFilter<"payments"> | $Enums.payment_status_enum;
    rejection_reason?: Prisma.StringNullableFilter<"payments"> | string | null;
    reviewed_by?: Prisma.UuidNullableFilter<"payments"> | string | null;
    reviewed_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    submitted_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
};
export type paymentsCreateWithoutInvoicesInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    organisations: Prisma.organisationsCreateNestedOneWithoutPaymentsInput;
    file_attachments?: Prisma.file_attachmentsCreateNestedOneWithoutPaymentsInput;
    users_payments_reviewed_byTousers?: Prisma.usersCreateNestedOneWithoutPayments_payments_reviewed_byTousersInput;
    users_payments_tenant_user_idTousers: Prisma.usersCreateNestedOneWithoutPayments_payments_tenant_user_idTousersInput;
    receipts?: Prisma.receiptsCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    org_id: string;
    tenant_user_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    proof_file_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_by?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    receipts?: Prisma.receiptsUncheckedCreateNestedOneWithoutPaymentsInput;
};
export type paymentsCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutInvoicesInput, Prisma.paymentsUncheckedCreateWithoutInvoicesInput>;
};
export type paymentsUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutInvoicesInput, Prisma.paymentsUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutInvoicesInput, Prisma.paymentsUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.paymentsWhereInput;
};
export type paymentsUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.paymentsWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutInvoicesInput, Prisma.paymentsUncheckedUpdateWithoutInvoicesInput>;
};
export type paymentsUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutPaymentsNestedInput;
    file_attachments?: Prisma.file_attachmentsUpdateOneWithoutPaymentsNestedInput;
    users_payments_reviewed_byTousers?: Prisma.usersUpdateOneWithoutPayments_payments_reviewed_byTousersNestedInput;
    users_payments_tenant_user_idTousers?: Prisma.usersUpdateOneRequiredWithoutPayments_payments_tenant_user_idTousersNestedInput;
    receipts?: Prisma.receiptsUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proof_file_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipts?: Prisma.receiptsUncheckedUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsCreateWithoutOrganisationsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices: Prisma.invoicesCreateNestedOneWithoutPaymentsInput;
    file_attachments?: Prisma.file_attachmentsCreateNestedOneWithoutPaymentsInput;
    users_payments_reviewed_byTousers?: Prisma.usersCreateNestedOneWithoutPayments_payments_reviewed_byTousersInput;
    users_payments_tenant_user_idTousers: Prisma.usersCreateNestedOneWithoutPayments_payments_tenant_user_idTousersInput;
    receipts?: Prisma.receiptsCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutOrganisationsInput = {
    id?: string;
    invoice_id: string;
    tenant_user_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    proof_file_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_by?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    receipts?: Prisma.receiptsUncheckedCreateNestedOneWithoutPaymentsInput;
};
export type paymentsCreateOrConnectWithoutOrganisationsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutOrganisationsInput, Prisma.paymentsUncheckedCreateWithoutOrganisationsInput>;
};
export type paymentsCreateManyOrganisationsInputEnvelope = {
    data: Prisma.paymentsCreateManyOrganisationsInput | Prisma.paymentsCreateManyOrganisationsInput[];
    skipDuplicates?: boolean;
};
export type paymentsUpsertWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutOrganisationsInput, Prisma.paymentsUncheckedUpdateWithoutOrganisationsInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutOrganisationsInput, Prisma.paymentsUncheckedCreateWithoutOrganisationsInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutOrganisationsInput, Prisma.paymentsUncheckedUpdateWithoutOrganisationsInput>;
};
export type paymentsUpdateManyWithWhereWithoutOrganisationsInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutOrganisationsInput>;
};
export type paymentsCreateWithoutReceiptsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices: Prisma.invoicesCreateNestedOneWithoutPaymentsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutPaymentsInput;
    file_attachments?: Prisma.file_attachmentsCreateNestedOneWithoutPaymentsInput;
    users_payments_reviewed_byTousers?: Prisma.usersCreateNestedOneWithoutPayments_payments_reviewed_byTousersInput;
    users_payments_tenant_user_idTousers: Prisma.usersCreateNestedOneWithoutPayments_payments_tenant_user_idTousersInput;
};
export type paymentsUncheckedCreateWithoutReceiptsInput = {
    id?: string;
    org_id: string;
    invoice_id: string;
    tenant_user_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    proof_file_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_by?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsCreateOrConnectWithoutReceiptsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutReceiptsInput, Prisma.paymentsUncheckedCreateWithoutReceiptsInput>;
};
export type paymentsUpsertWithoutReceiptsInput = {
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutReceiptsInput, Prisma.paymentsUncheckedUpdateWithoutReceiptsInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutReceiptsInput, Prisma.paymentsUncheckedCreateWithoutReceiptsInput>;
    where?: Prisma.paymentsWhereInput;
};
export type paymentsUpdateToOneWithWhereWithoutReceiptsInput = {
    where?: Prisma.paymentsWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutReceiptsInput, Prisma.paymentsUncheckedUpdateWithoutReceiptsInput>;
};
export type paymentsUpdateWithoutReceiptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateOneRequiredWithoutPaymentsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutPaymentsNestedInput;
    file_attachments?: Prisma.file_attachmentsUpdateOneWithoutPaymentsNestedInput;
    users_payments_reviewed_byTousers?: Prisma.usersUpdateOneWithoutPayments_payments_reviewed_byTousersNestedInput;
    users_payments_tenant_user_idTousers?: Prisma.usersUpdateOneRequiredWithoutPayments_payments_tenant_user_idTousersNestedInput;
};
export type paymentsUncheckedUpdateWithoutReceiptsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proof_file_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsCreateWithoutUsers_payments_reviewed_byTousersInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices: Prisma.invoicesCreateNestedOneWithoutPaymentsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutPaymentsInput;
    file_attachments?: Prisma.file_attachmentsCreateNestedOneWithoutPaymentsInput;
    users_payments_tenant_user_idTousers: Prisma.usersCreateNestedOneWithoutPayments_payments_tenant_user_idTousersInput;
    receipts?: Prisma.receiptsCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutUsers_payments_reviewed_byTousersInput = {
    id?: string;
    org_id: string;
    invoice_id: string;
    tenant_user_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    proof_file_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    receipts?: Prisma.receiptsUncheckedCreateNestedOneWithoutPaymentsInput;
};
export type paymentsCreateOrConnectWithoutUsers_payments_reviewed_byTousersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_reviewed_byTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_reviewed_byTousersInput>;
};
export type paymentsCreateManyUsers_payments_reviewed_byTousersInputEnvelope = {
    data: Prisma.paymentsCreateManyUsers_payments_reviewed_byTousersInput | Prisma.paymentsCreateManyUsers_payments_reviewed_byTousersInput[];
    skipDuplicates?: boolean;
};
export type paymentsCreateWithoutUsers_payments_tenant_user_idTousersInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices: Prisma.invoicesCreateNestedOneWithoutPaymentsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutPaymentsInput;
    file_attachments?: Prisma.file_attachmentsCreateNestedOneWithoutPaymentsInput;
    users_payments_reviewed_byTousers?: Prisma.usersCreateNestedOneWithoutPayments_payments_reviewed_byTousersInput;
    receipts?: Prisma.receiptsCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateWithoutUsers_payments_tenant_user_idTousersInput = {
    id?: string;
    org_id: string;
    invoice_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    proof_file_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_by?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    receipts?: Prisma.receiptsUncheckedCreateNestedOneWithoutPaymentsInput;
};
export type paymentsCreateOrConnectWithoutUsers_payments_tenant_user_idTousersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_tenant_user_idTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_tenant_user_idTousersInput>;
};
export type paymentsCreateManyUsers_payments_tenant_user_idTousersInputEnvelope = {
    data: Prisma.paymentsCreateManyUsers_payments_tenant_user_idTousersInput | Prisma.paymentsCreateManyUsers_payments_tenant_user_idTousersInput[];
    skipDuplicates?: boolean;
};
export type paymentsUpsertWithWhereUniqueWithoutUsers_payments_reviewed_byTousersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutUsers_payments_reviewed_byTousersInput, Prisma.paymentsUncheckedUpdateWithoutUsers_payments_reviewed_byTousersInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_reviewed_byTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_reviewed_byTousersInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutUsers_payments_reviewed_byTousersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutUsers_payments_reviewed_byTousersInput, Prisma.paymentsUncheckedUpdateWithoutUsers_payments_reviewed_byTousersInput>;
};
export type paymentsUpdateManyWithWhereWithoutUsers_payments_reviewed_byTousersInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutUsers_payments_reviewed_byTousersInput>;
};
export type paymentsUpsertWithWhereUniqueWithoutUsers_payments_tenant_user_idTousersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutUsers_payments_tenant_user_idTousersInput, Prisma.paymentsUncheckedUpdateWithoutUsers_payments_tenant_user_idTousersInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutUsers_payments_tenant_user_idTousersInput, Prisma.paymentsUncheckedCreateWithoutUsers_payments_tenant_user_idTousersInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutUsers_payments_tenant_user_idTousersInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutUsers_payments_tenant_user_idTousersInput, Prisma.paymentsUncheckedUpdateWithoutUsers_payments_tenant_user_idTousersInput>;
};
export type paymentsUpdateManyWithWhereWithoutUsers_payments_tenant_user_idTousersInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutUsers_payments_tenant_user_idTousersInput>;
};
export type paymentsCreateManyFile_attachmentsInput = {
    id?: string;
    org_id: string;
    invoice_id: string;
    tenant_user_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_by?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUpdateWithoutFile_attachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateOneRequiredWithoutPaymentsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutPaymentsNestedInput;
    users_payments_reviewed_byTousers?: Prisma.usersUpdateOneWithoutPayments_payments_reviewed_byTousersNestedInput;
    users_payments_tenant_user_idTousers?: Prisma.usersUpdateOneRequiredWithoutPayments_payments_tenant_user_idTousersNestedInput;
    receipts?: Prisma.receiptsUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutFile_attachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipts?: Prisma.receiptsUncheckedUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateManyWithoutFile_attachmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsCreateManyOrganisationsInput = {
    id?: string;
    invoice_id: string;
    tenant_user_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    proof_file_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_by?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateOneRequiredWithoutPaymentsNestedInput;
    file_attachments?: Prisma.file_attachmentsUpdateOneWithoutPaymentsNestedInput;
    users_payments_reviewed_byTousers?: Prisma.usersUpdateOneWithoutPayments_payments_reviewed_byTousersNestedInput;
    users_payments_tenant_user_idTousers?: Prisma.usersUpdateOneRequiredWithoutPayments_payments_tenant_user_idTousersNestedInput;
    receipts?: Prisma.receiptsUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proof_file_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipts?: Prisma.receiptsUncheckedUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateManyWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proof_file_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsCreateManyUsers_payments_reviewed_byTousersInput = {
    id?: string;
    org_id: string;
    invoice_id: string;
    tenant_user_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    proof_file_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsCreateManyUsers_payments_tenant_user_idTousersInput = {
    id?: string;
    org_id: string;
    invoice_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method: $Enums.payment_method_enum;
    transaction_id?: string | null;
    proof_file_id?: string | null;
    status?: $Enums.payment_status_enum;
    rejection_reason?: string | null;
    reviewed_by?: string | null;
    reviewed_at?: Date | string | null;
    submitted_at?: Date | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUpdateWithoutUsers_payments_reviewed_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateOneRequiredWithoutPaymentsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutPaymentsNestedInput;
    file_attachments?: Prisma.file_attachmentsUpdateOneWithoutPaymentsNestedInput;
    users_payments_tenant_user_idTousers?: Prisma.usersUpdateOneRequiredWithoutPayments_payments_tenant_user_idTousersNestedInput;
    receipts?: Prisma.receiptsUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutUsers_payments_reviewed_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proof_file_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipts?: Prisma.receiptsUncheckedUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateManyWithoutUsers_payments_reviewed_byTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    tenant_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proof_file_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsUpdateWithoutUsers_payments_tenant_user_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateOneRequiredWithoutPaymentsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutPaymentsNestedInput;
    file_attachments?: Prisma.file_attachmentsUpdateOneWithoutPaymentsNestedInput;
    users_payments_reviewed_byTousers?: Prisma.usersUpdateOneWithoutPayments_payments_reviewed_byTousersNestedInput;
    receipts?: Prisma.receiptsUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateWithoutUsers_payments_tenant_user_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proof_file_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    receipts?: Prisma.receiptsUncheckedUpdateOneWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateManyWithoutUsers_payments_tenant_user_idTousersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    invoice_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    payment_method?: Prisma.Enumpayment_method_enumFieldUpdateOperationsInput | $Enums.payment_method_enum;
    transaction_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proof_file_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.Enumpayment_status_enumFieldUpdateOperationsInput | $Enums.payment_status_enum;
    rejection_reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewed_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    submitted_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    invoice_id?: boolean;
    tenant_user_id?: boolean;
    amount?: boolean;
    payment_method?: boolean;
    transaction_id?: boolean;
    proof_file_id?: boolean;
    status?: boolean;
    rejection_reason?: boolean;
    reviewed_by?: boolean;
    reviewed_at?: boolean;
    submitted_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    file_attachments?: boolean | Prisma.payments$file_attachmentsArgs<ExtArgs>;
    users_payments_reviewed_byTousers?: boolean | Prisma.payments$users_payments_reviewed_byTousersArgs<ExtArgs>;
    users_payments_tenant_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    receipts?: boolean | Prisma.payments$receiptsArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    invoice_id?: boolean;
    tenant_user_id?: boolean;
    amount?: boolean;
    payment_method?: boolean;
    transaction_id?: boolean;
    proof_file_id?: boolean;
    status?: boolean;
    rejection_reason?: boolean;
    reviewed_by?: boolean;
    reviewed_at?: boolean;
    submitted_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    file_attachments?: boolean | Prisma.payments$file_attachmentsArgs<ExtArgs>;
    users_payments_reviewed_byTousers?: boolean | Prisma.payments$users_payments_reviewed_byTousersArgs<ExtArgs>;
    users_payments_tenant_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    invoice_id?: boolean;
    tenant_user_id?: boolean;
    amount?: boolean;
    payment_method?: boolean;
    transaction_id?: boolean;
    proof_file_id?: boolean;
    status?: boolean;
    rejection_reason?: boolean;
    reviewed_by?: boolean;
    reviewed_at?: boolean;
    submitted_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    file_attachments?: boolean | Prisma.payments$file_attachmentsArgs<ExtArgs>;
    users_payments_reviewed_byTousers?: boolean | Prisma.payments$users_payments_reviewed_byTousersArgs<ExtArgs>;
    users_payments_tenant_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectScalar = {
    id?: boolean;
    org_id?: boolean;
    invoice_id?: boolean;
    tenant_user_id?: boolean;
    amount?: boolean;
    payment_method?: boolean;
    transaction_id?: boolean;
    proof_file_id?: boolean;
    status?: boolean;
    rejection_reason?: boolean;
    reviewed_by?: boolean;
    reviewed_at?: boolean;
    submitted_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type paymentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "org_id" | "invoice_id" | "tenant_user_id" | "amount" | "payment_method" | "transaction_id" | "proof_file_id" | "status" | "rejection_reason" | "reviewed_by" | "reviewed_at" | "submitted_at" | "created_at" | "updated_at", ExtArgs["result"]["payments"]>;
export type paymentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    file_attachments?: boolean | Prisma.payments$file_attachmentsArgs<ExtArgs>;
    users_payments_reviewed_byTousers?: boolean | Prisma.payments$users_payments_reviewed_byTousersArgs<ExtArgs>;
    users_payments_tenant_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    receipts?: boolean | Prisma.payments$receiptsArgs<ExtArgs>;
};
export type paymentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    file_attachments?: boolean | Prisma.payments$file_attachmentsArgs<ExtArgs>;
    users_payments_reviewed_byTousers?: boolean | Prisma.payments$users_payments_reviewed_byTousersArgs<ExtArgs>;
    users_payments_tenant_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoices?: boolean | Prisma.invoicesDefaultArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    file_attachments?: boolean | Prisma.payments$file_attachmentsArgs<ExtArgs>;
    users_payments_reviewed_byTousers?: boolean | Prisma.payments$users_payments_reviewed_byTousersArgs<ExtArgs>;
    users_payments_tenant_user_idTousers?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $paymentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "payments";
    objects: {
        invoices: Prisma.$invoicesPayload<ExtArgs>;
        organisations: Prisma.$organisationsPayload<ExtArgs>;
        file_attachments: Prisma.$file_attachmentsPayload<ExtArgs> | null;
        users_payments_reviewed_byTousers: Prisma.$usersPayload<ExtArgs> | null;
        users_payments_tenant_user_idTousers: Prisma.$usersPayload<ExtArgs>;
        receipts: Prisma.$receiptsPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        org_id: string;
        invoice_id: string;
        tenant_user_id: string;
        amount: runtime.Decimal;
        payment_method: $Enums.payment_method_enum;
        transaction_id: string | null;
        proof_file_id: string | null;
        status: $Enums.payment_status_enum;
        rejection_reason: string | null;
        reviewed_by: string | null;
        reviewed_at: Date | null;
        submitted_at: Date;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["payments"]>;
    composites: {};
};
export type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$paymentsPayload, S>;
export type paymentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentsCountAggregateInputType | true;
};
export interface paymentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['payments'];
        meta: {
            name: 'payments';
        };
    };
    findUnique<T extends paymentsFindUniqueArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends paymentsFindFirstArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends paymentsFindManyArgs>(args?: Prisma.SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends paymentsCreateArgs>(args: Prisma.SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends paymentsCreateManyArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends paymentsDeleteArgs>(args: Prisma.SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends paymentsUpdateArgs>(args: Prisma.SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends paymentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends paymentsUpdateManyArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends paymentsUpsertArgs>(args: Prisma.SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends paymentsCountArgs>(args?: Prisma.Subset<T, paymentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentsCountAggregateOutputType> : number>;
    aggregate<T extends PaymentsAggregateArgs>(args: Prisma.Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>;
    groupBy<T extends paymentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: paymentsGroupByArgs['orderBy'];
    } : {
        orderBy?: paymentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: paymentsFieldRefs;
}
export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    invoices<T extends Prisma.invoicesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.invoicesDefaultArgs<ExtArgs>>): Prisma.Prisma__invoicesClient<runtime.Types.Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    organisations<T extends Prisma.organisationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.organisationsDefaultArgs<ExtArgs>>): Prisma.Prisma__organisationsClient<runtime.Types.Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    file_attachments<T extends Prisma.payments$file_attachmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.payments$file_attachmentsArgs<ExtArgs>>): Prisma.Prisma__file_attachmentsClient<runtime.Types.Result.GetResult<Prisma.$file_attachmentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users_payments_reviewed_byTousers<T extends Prisma.payments$users_payments_reviewed_byTousersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.payments$users_payments_reviewed_byTousersArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users_payments_tenant_user_idTousers<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    receipts<T extends Prisma.payments$receiptsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.payments$receiptsArgs<ExtArgs>>): Prisma.Prisma__receiptsClient<runtime.Types.Result.GetResult<Prisma.$receiptsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface paymentsFieldRefs {
    readonly id: Prisma.FieldRef<"payments", 'String'>;
    readonly org_id: Prisma.FieldRef<"payments", 'String'>;
    readonly invoice_id: Prisma.FieldRef<"payments", 'String'>;
    readonly tenant_user_id: Prisma.FieldRef<"payments", 'String'>;
    readonly amount: Prisma.FieldRef<"payments", 'Decimal'>;
    readonly payment_method: Prisma.FieldRef<"payments", 'payment_method_enum'>;
    readonly transaction_id: Prisma.FieldRef<"payments", 'String'>;
    readonly proof_file_id: Prisma.FieldRef<"payments", 'String'>;
    readonly status: Prisma.FieldRef<"payments", 'payment_status_enum'>;
    readonly rejection_reason: Prisma.FieldRef<"payments", 'String'>;
    readonly reviewed_by: Prisma.FieldRef<"payments", 'String'>;
    readonly reviewed_at: Prisma.FieldRef<"payments", 'DateTime'>;
    readonly submitted_at: Prisma.FieldRef<"payments", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"payments", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"payments", 'DateTime'>;
}
export type paymentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
};
export type paymentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type paymentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.paymentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type paymentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
    include?: Prisma.paymentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
};
export type paymentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type payments$file_attachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.file_attachmentsSelect<ExtArgs> | null;
    omit?: Prisma.file_attachmentsOmit<ExtArgs> | null;
    include?: Prisma.file_attachmentsInclude<ExtArgs> | null;
    where?: Prisma.file_attachmentsWhereInput;
};
export type payments$users_payments_reviewed_byTousersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
};
export type payments$receiptsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.receiptsSelect<ExtArgs> | null;
    omit?: Prisma.receiptsOmit<ExtArgs> | null;
    include?: Prisma.receiptsInclude<ExtArgs> | null;
    where?: Prisma.receiptsWhereInput;
};
export type paymentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
};
