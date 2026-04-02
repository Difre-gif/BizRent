import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type unitsModel = runtime.Types.Result.DefaultSelection<Prisma.$unitsPayload>;
export type AggregateUnits = {
    _count: UnitsCountAggregateOutputType | null;
    _avg: UnitsAvgAggregateOutputType | null;
    _sum: UnitsSumAggregateOutputType | null;
    _min: UnitsMinAggregateOutputType | null;
    _max: UnitsMaxAggregateOutputType | null;
};
export type UnitsAvgAggregateOutputType = {
    floor: number | null;
    monthly_rent: runtime.Decimal | null;
};
export type UnitsSumAggregateOutputType = {
    floor: number | null;
    monthly_rent: runtime.Decimal | null;
};
export type UnitsMinAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    property_id: string | null;
    unit_number: string | null;
    unit_type: $Enums.unit_type_enum | null;
    floor: number | null;
    monthly_rent: runtime.Decimal | null;
    status: $Enums.unit_status_enum | null;
    description: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UnitsMaxAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    property_id: string | null;
    unit_number: string | null;
    unit_type: $Enums.unit_type_enum | null;
    floor: number | null;
    monthly_rent: runtime.Decimal | null;
    status: $Enums.unit_status_enum | null;
    description: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UnitsCountAggregateOutputType = {
    id: number;
    org_id: number;
    property_id: number;
    unit_number: number;
    unit_type: number;
    floor: number;
    monthly_rent: number;
    status: number;
    description: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UnitsAvgAggregateInputType = {
    floor?: true;
    monthly_rent?: true;
};
export type UnitsSumAggregateInputType = {
    floor?: true;
    monthly_rent?: true;
};
export type UnitsMinAggregateInputType = {
    id?: true;
    org_id?: true;
    property_id?: true;
    unit_number?: true;
    unit_type?: true;
    floor?: true;
    monthly_rent?: true;
    status?: true;
    description?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type UnitsMaxAggregateInputType = {
    id?: true;
    org_id?: true;
    property_id?: true;
    unit_number?: true;
    unit_type?: true;
    floor?: true;
    monthly_rent?: true;
    status?: true;
    description?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type UnitsCountAggregateInputType = {
    id?: true;
    org_id?: true;
    property_id?: true;
    unit_number?: true;
    unit_type?: true;
    floor?: true;
    monthly_rent?: true;
    status?: true;
    description?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UnitsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.unitsWhereInput;
    orderBy?: Prisma.unitsOrderByWithRelationInput | Prisma.unitsOrderByWithRelationInput[];
    cursor?: Prisma.unitsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UnitsCountAggregateInputType;
    _avg?: UnitsAvgAggregateInputType;
    _sum?: UnitsSumAggregateInputType;
    _min?: UnitsMinAggregateInputType;
    _max?: UnitsMaxAggregateInputType;
};
export type GetUnitsAggregateType<T extends UnitsAggregateArgs> = {
    [P in keyof T & keyof AggregateUnits]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUnits[P]> : Prisma.GetScalarType<T[P], AggregateUnits[P]>;
};
export type unitsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.unitsWhereInput;
    orderBy?: Prisma.unitsOrderByWithAggregationInput | Prisma.unitsOrderByWithAggregationInput[];
    by: Prisma.UnitsScalarFieldEnum[] | Prisma.UnitsScalarFieldEnum;
    having?: Prisma.unitsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UnitsCountAggregateInputType | true;
    _avg?: UnitsAvgAggregateInputType;
    _sum?: UnitsSumAggregateInputType;
    _min?: UnitsMinAggregateInputType;
    _max?: UnitsMaxAggregateInputType;
};
export type UnitsGroupByOutputType = {
    id: string;
    org_id: string;
    property_id: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor: number | null;
    monthly_rent: runtime.Decimal;
    status: $Enums.unit_status_enum;
    description: string | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: UnitsCountAggregateOutputType | null;
    _avg: UnitsAvgAggregateOutputType | null;
    _sum: UnitsSumAggregateOutputType | null;
    _min: UnitsMinAggregateOutputType | null;
    _max: UnitsMaxAggregateOutputType | null;
};
export type GetUnitsGroupByPayload<T extends unitsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UnitsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UnitsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UnitsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UnitsGroupByOutputType[P]>;
}>>;
export type unitsWhereInput = {
    AND?: Prisma.unitsWhereInput | Prisma.unitsWhereInput[];
    OR?: Prisma.unitsWhereInput[];
    NOT?: Prisma.unitsWhereInput | Prisma.unitsWhereInput[];
    id?: Prisma.UuidFilter<"units"> | string;
    org_id?: Prisma.UuidFilter<"units"> | string;
    property_id?: Prisma.UuidFilter<"units"> | string;
    unit_number?: Prisma.StringFilter<"units"> | string;
    unit_type?: Prisma.Enumunit_type_enumFilter<"units"> | $Enums.unit_type_enum;
    floor?: Prisma.IntNullableFilter<"units"> | number | null;
    monthly_rent?: Prisma.DecimalFilter<"units"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFilter<"units"> | $Enums.unit_status_enum;
    description?: Prisma.StringNullableFilter<"units"> | string | null;
    is_active?: Prisma.BoolFilter<"units"> | boolean;
    created_at?: Prisma.DateTimeFilter<"units"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"units"> | Date | string;
    invoices?: Prisma.InvoicesListRelationFilter;
    tenancies?: Prisma.TenanciesListRelationFilter;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    properties?: Prisma.XOR<Prisma.PropertiesScalarRelationFilter, Prisma.propertiesWhereInput>;
};
export type unitsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    property_id?: Prisma.SortOrder;
    unit_number?: Prisma.SortOrder;
    unit_type?: Prisma.SortOrder;
    floor?: Prisma.SortOrderInput | Prisma.SortOrder;
    monthly_rent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    invoices?: Prisma.invoicesOrderByRelationAggregateInput;
    tenancies?: Prisma.tenanciesOrderByRelationAggregateInput;
    organisations?: Prisma.organisationsOrderByWithRelationInput;
    properties?: Prisma.propertiesOrderByWithRelationInput;
};
export type unitsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    property_id_unit_number?: Prisma.unitsProperty_idUnit_numberCompoundUniqueInput;
    AND?: Prisma.unitsWhereInput | Prisma.unitsWhereInput[];
    OR?: Prisma.unitsWhereInput[];
    NOT?: Prisma.unitsWhereInput | Prisma.unitsWhereInput[];
    org_id?: Prisma.UuidFilter<"units"> | string;
    property_id?: Prisma.UuidFilter<"units"> | string;
    unit_number?: Prisma.StringFilter<"units"> | string;
    unit_type?: Prisma.Enumunit_type_enumFilter<"units"> | $Enums.unit_type_enum;
    floor?: Prisma.IntNullableFilter<"units"> | number | null;
    monthly_rent?: Prisma.DecimalFilter<"units"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFilter<"units"> | $Enums.unit_status_enum;
    description?: Prisma.StringNullableFilter<"units"> | string | null;
    is_active?: Prisma.BoolFilter<"units"> | boolean;
    created_at?: Prisma.DateTimeFilter<"units"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"units"> | Date | string;
    invoices?: Prisma.InvoicesListRelationFilter;
    tenancies?: Prisma.TenanciesListRelationFilter;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    properties?: Prisma.XOR<Prisma.PropertiesScalarRelationFilter, Prisma.propertiesWhereInput>;
}, "id" | "property_id_unit_number">;
export type unitsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    property_id?: Prisma.SortOrder;
    unit_number?: Prisma.SortOrder;
    unit_type?: Prisma.SortOrder;
    floor?: Prisma.SortOrderInput | Prisma.SortOrder;
    monthly_rent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.unitsCountOrderByAggregateInput;
    _avg?: Prisma.unitsAvgOrderByAggregateInput;
    _max?: Prisma.unitsMaxOrderByAggregateInput;
    _min?: Prisma.unitsMinOrderByAggregateInput;
    _sum?: Prisma.unitsSumOrderByAggregateInput;
};
export type unitsScalarWhereWithAggregatesInput = {
    AND?: Prisma.unitsScalarWhereWithAggregatesInput | Prisma.unitsScalarWhereWithAggregatesInput[];
    OR?: Prisma.unitsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.unitsScalarWhereWithAggregatesInput | Prisma.unitsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"units"> | string;
    org_id?: Prisma.UuidWithAggregatesFilter<"units"> | string;
    property_id?: Prisma.UuidWithAggregatesFilter<"units"> | string;
    unit_number?: Prisma.StringWithAggregatesFilter<"units"> | string;
    unit_type?: Prisma.Enumunit_type_enumWithAggregatesFilter<"units"> | $Enums.unit_type_enum;
    floor?: Prisma.IntNullableWithAggregatesFilter<"units"> | number | null;
    monthly_rent?: Prisma.DecimalWithAggregatesFilter<"units"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumWithAggregatesFilter<"units"> | $Enums.unit_status_enum;
    description?: Prisma.StringNullableWithAggregatesFilter<"units"> | string | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"units"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"units"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"units"> | Date | string;
};
export type unitsCreateInput = {
    id?: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices?: Prisma.invoicesCreateNestedManyWithoutUnitsInput;
    tenancies?: Prisma.tenanciesCreateNestedManyWithoutUnitsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutUnitsInput;
    properties: Prisma.propertiesCreateNestedOneWithoutUnitsInput;
};
export type unitsUncheckedCreateInput = {
    id?: string;
    org_id: string;
    property_id: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices?: Prisma.invoicesUncheckedCreateNestedManyWithoutUnitsInput;
    tenancies?: Prisma.tenanciesUncheckedCreateNestedManyWithoutUnitsInput;
};
export type unitsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateManyWithoutUnitsNestedInput;
    tenancies?: Prisma.tenanciesUpdateManyWithoutUnitsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutUnitsNestedInput;
    properties?: Prisma.propertiesUpdateOneRequiredWithoutUnitsNestedInput;
};
export type unitsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    property_id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUncheckedUpdateManyWithoutUnitsNestedInput;
    tenancies?: Prisma.tenanciesUncheckedUpdateManyWithoutUnitsNestedInput;
};
export type unitsCreateManyInput = {
    id?: string;
    org_id: string;
    property_id: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type unitsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type unitsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    property_id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UnitsScalarRelationFilter = {
    is?: Prisma.unitsWhereInput;
    isNot?: Prisma.unitsWhereInput;
};
export type UnitsListRelationFilter = {
    every?: Prisma.unitsWhereInput;
    some?: Prisma.unitsWhereInput;
    none?: Prisma.unitsWhereInput;
};
export type unitsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type unitsProperty_idUnit_numberCompoundUniqueInput = {
    property_id: string;
    unit_number: string;
};
export type unitsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    property_id?: Prisma.SortOrder;
    unit_number?: Prisma.SortOrder;
    unit_type?: Prisma.SortOrder;
    floor?: Prisma.SortOrder;
    monthly_rent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type unitsAvgOrderByAggregateInput = {
    floor?: Prisma.SortOrder;
    monthly_rent?: Prisma.SortOrder;
};
export type unitsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    property_id?: Prisma.SortOrder;
    unit_number?: Prisma.SortOrder;
    unit_type?: Prisma.SortOrder;
    floor?: Prisma.SortOrder;
    monthly_rent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type unitsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    property_id?: Prisma.SortOrder;
    unit_number?: Prisma.SortOrder;
    unit_type?: Prisma.SortOrder;
    floor?: Prisma.SortOrder;
    monthly_rent?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type unitsSumOrderByAggregateInput = {
    floor?: Prisma.SortOrder;
    monthly_rent?: Prisma.SortOrder;
};
export type unitsCreateNestedOneWithoutInvoicesInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutInvoicesInput, Prisma.unitsUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutInvoicesInput;
    connect?: Prisma.unitsWhereUniqueInput;
};
export type unitsUpdateOneRequiredWithoutInvoicesNestedInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutInvoicesInput, Prisma.unitsUncheckedCreateWithoutInvoicesInput>;
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutInvoicesInput;
    upsert?: Prisma.unitsUpsertWithoutInvoicesInput;
    connect?: Prisma.unitsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.unitsUpdateToOneWithWhereWithoutInvoicesInput, Prisma.unitsUpdateWithoutInvoicesInput>, Prisma.unitsUncheckedUpdateWithoutInvoicesInput>;
};
export type unitsCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutOrganisationsInput, Prisma.unitsUncheckedCreateWithoutOrganisationsInput> | Prisma.unitsCreateWithoutOrganisationsInput[] | Prisma.unitsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutOrganisationsInput | Prisma.unitsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.unitsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
};
export type unitsUncheckedCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutOrganisationsInput, Prisma.unitsUncheckedCreateWithoutOrganisationsInput> | Prisma.unitsCreateWithoutOrganisationsInput[] | Prisma.unitsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutOrganisationsInput | Prisma.unitsCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.unitsCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
};
export type unitsUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutOrganisationsInput, Prisma.unitsUncheckedCreateWithoutOrganisationsInput> | Prisma.unitsCreateWithoutOrganisationsInput[] | Prisma.unitsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutOrganisationsInput | Prisma.unitsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.unitsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.unitsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.unitsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    disconnect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    delete?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    connect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    update?: Prisma.unitsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.unitsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.unitsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.unitsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.unitsScalarWhereInput | Prisma.unitsScalarWhereInput[];
};
export type unitsUncheckedUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutOrganisationsInput, Prisma.unitsUncheckedCreateWithoutOrganisationsInput> | Prisma.unitsCreateWithoutOrganisationsInput[] | Prisma.unitsUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutOrganisationsInput | Prisma.unitsCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.unitsUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.unitsUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.unitsCreateManyOrganisationsInputEnvelope;
    set?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    disconnect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    delete?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    connect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    update?: Prisma.unitsUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.unitsUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.unitsUpdateManyWithWhereWithoutOrganisationsInput | Prisma.unitsUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.unitsScalarWhereInput | Prisma.unitsScalarWhereInput[];
};
export type unitsCreateNestedManyWithoutPropertiesInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutPropertiesInput, Prisma.unitsUncheckedCreateWithoutPropertiesInput> | Prisma.unitsCreateWithoutPropertiesInput[] | Prisma.unitsUncheckedCreateWithoutPropertiesInput[];
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutPropertiesInput | Prisma.unitsCreateOrConnectWithoutPropertiesInput[];
    createMany?: Prisma.unitsCreateManyPropertiesInputEnvelope;
    connect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
};
export type unitsUncheckedCreateNestedManyWithoutPropertiesInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutPropertiesInput, Prisma.unitsUncheckedCreateWithoutPropertiesInput> | Prisma.unitsCreateWithoutPropertiesInput[] | Prisma.unitsUncheckedCreateWithoutPropertiesInput[];
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutPropertiesInput | Prisma.unitsCreateOrConnectWithoutPropertiesInput[];
    createMany?: Prisma.unitsCreateManyPropertiesInputEnvelope;
    connect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
};
export type unitsUpdateManyWithoutPropertiesNestedInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutPropertiesInput, Prisma.unitsUncheckedCreateWithoutPropertiesInput> | Prisma.unitsCreateWithoutPropertiesInput[] | Prisma.unitsUncheckedCreateWithoutPropertiesInput[];
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutPropertiesInput | Prisma.unitsCreateOrConnectWithoutPropertiesInput[];
    upsert?: Prisma.unitsUpsertWithWhereUniqueWithoutPropertiesInput | Prisma.unitsUpsertWithWhereUniqueWithoutPropertiesInput[];
    createMany?: Prisma.unitsCreateManyPropertiesInputEnvelope;
    set?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    disconnect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    delete?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    connect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    update?: Prisma.unitsUpdateWithWhereUniqueWithoutPropertiesInput | Prisma.unitsUpdateWithWhereUniqueWithoutPropertiesInput[];
    updateMany?: Prisma.unitsUpdateManyWithWhereWithoutPropertiesInput | Prisma.unitsUpdateManyWithWhereWithoutPropertiesInput[];
    deleteMany?: Prisma.unitsScalarWhereInput | Prisma.unitsScalarWhereInput[];
};
export type unitsUncheckedUpdateManyWithoutPropertiesNestedInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutPropertiesInput, Prisma.unitsUncheckedCreateWithoutPropertiesInput> | Prisma.unitsCreateWithoutPropertiesInput[] | Prisma.unitsUncheckedCreateWithoutPropertiesInput[];
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutPropertiesInput | Prisma.unitsCreateOrConnectWithoutPropertiesInput[];
    upsert?: Prisma.unitsUpsertWithWhereUniqueWithoutPropertiesInput | Prisma.unitsUpsertWithWhereUniqueWithoutPropertiesInput[];
    createMany?: Prisma.unitsCreateManyPropertiesInputEnvelope;
    set?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    disconnect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    delete?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    connect?: Prisma.unitsWhereUniqueInput | Prisma.unitsWhereUniqueInput[];
    update?: Prisma.unitsUpdateWithWhereUniqueWithoutPropertiesInput | Prisma.unitsUpdateWithWhereUniqueWithoutPropertiesInput[];
    updateMany?: Prisma.unitsUpdateManyWithWhereWithoutPropertiesInput | Prisma.unitsUpdateManyWithWhereWithoutPropertiesInput[];
    deleteMany?: Prisma.unitsScalarWhereInput | Prisma.unitsScalarWhereInput[];
};
export type unitsCreateNestedOneWithoutTenanciesInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutTenanciesInput, Prisma.unitsUncheckedCreateWithoutTenanciesInput>;
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutTenanciesInput;
    connect?: Prisma.unitsWhereUniqueInput;
};
export type unitsUpdateOneRequiredWithoutTenanciesNestedInput = {
    create?: Prisma.XOR<Prisma.unitsCreateWithoutTenanciesInput, Prisma.unitsUncheckedCreateWithoutTenanciesInput>;
    connectOrCreate?: Prisma.unitsCreateOrConnectWithoutTenanciesInput;
    upsert?: Prisma.unitsUpsertWithoutTenanciesInput;
    connect?: Prisma.unitsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.unitsUpdateToOneWithWhereWithoutTenanciesInput, Prisma.unitsUpdateWithoutTenanciesInput>, Prisma.unitsUncheckedUpdateWithoutTenanciesInput>;
};
export type Enumunit_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.unit_type_enum;
};
export type Enumunit_status_enumFieldUpdateOperationsInput = {
    set?: $Enums.unit_status_enum;
};
export type unitsCreateWithoutInvoicesInput = {
    id?: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenancies?: Prisma.tenanciesCreateNestedManyWithoutUnitsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutUnitsInput;
    properties: Prisma.propertiesCreateNestedOneWithoutUnitsInput;
};
export type unitsUncheckedCreateWithoutInvoicesInput = {
    id?: string;
    org_id: string;
    property_id: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenancies?: Prisma.tenanciesUncheckedCreateNestedManyWithoutUnitsInput;
};
export type unitsCreateOrConnectWithoutInvoicesInput = {
    where: Prisma.unitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.unitsCreateWithoutInvoicesInput, Prisma.unitsUncheckedCreateWithoutInvoicesInput>;
};
export type unitsUpsertWithoutInvoicesInput = {
    update: Prisma.XOR<Prisma.unitsUpdateWithoutInvoicesInput, Prisma.unitsUncheckedUpdateWithoutInvoicesInput>;
    create: Prisma.XOR<Prisma.unitsCreateWithoutInvoicesInput, Prisma.unitsUncheckedCreateWithoutInvoicesInput>;
    where?: Prisma.unitsWhereInput;
};
export type unitsUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: Prisma.unitsWhereInput;
    data: Prisma.XOR<Prisma.unitsUpdateWithoutInvoicesInput, Prisma.unitsUncheckedUpdateWithoutInvoicesInput>;
};
export type unitsUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancies?: Prisma.tenanciesUpdateManyWithoutUnitsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutUnitsNestedInput;
    properties?: Prisma.propertiesUpdateOneRequiredWithoutUnitsNestedInput;
};
export type unitsUncheckedUpdateWithoutInvoicesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    property_id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tenancies?: Prisma.tenanciesUncheckedUpdateManyWithoutUnitsNestedInput;
};
export type unitsCreateWithoutOrganisationsInput = {
    id?: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices?: Prisma.invoicesCreateNestedManyWithoutUnitsInput;
    tenancies?: Prisma.tenanciesCreateNestedManyWithoutUnitsInput;
    properties: Prisma.propertiesCreateNestedOneWithoutUnitsInput;
};
export type unitsUncheckedCreateWithoutOrganisationsInput = {
    id?: string;
    property_id: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices?: Prisma.invoicesUncheckedCreateNestedManyWithoutUnitsInput;
    tenancies?: Prisma.tenanciesUncheckedCreateNestedManyWithoutUnitsInput;
};
export type unitsCreateOrConnectWithoutOrganisationsInput = {
    where: Prisma.unitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.unitsCreateWithoutOrganisationsInput, Prisma.unitsUncheckedCreateWithoutOrganisationsInput>;
};
export type unitsCreateManyOrganisationsInputEnvelope = {
    data: Prisma.unitsCreateManyOrganisationsInput | Prisma.unitsCreateManyOrganisationsInput[];
    skipDuplicates?: boolean;
};
export type unitsUpsertWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.unitsWhereUniqueInput;
    update: Prisma.XOR<Prisma.unitsUpdateWithoutOrganisationsInput, Prisma.unitsUncheckedUpdateWithoutOrganisationsInput>;
    create: Prisma.XOR<Prisma.unitsCreateWithoutOrganisationsInput, Prisma.unitsUncheckedCreateWithoutOrganisationsInput>;
};
export type unitsUpdateWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.unitsWhereUniqueInput;
    data: Prisma.XOR<Prisma.unitsUpdateWithoutOrganisationsInput, Prisma.unitsUncheckedUpdateWithoutOrganisationsInput>;
};
export type unitsUpdateManyWithWhereWithoutOrganisationsInput = {
    where: Prisma.unitsScalarWhereInput;
    data: Prisma.XOR<Prisma.unitsUpdateManyMutationInput, Prisma.unitsUncheckedUpdateManyWithoutOrganisationsInput>;
};
export type unitsScalarWhereInput = {
    AND?: Prisma.unitsScalarWhereInput | Prisma.unitsScalarWhereInput[];
    OR?: Prisma.unitsScalarWhereInput[];
    NOT?: Prisma.unitsScalarWhereInput | Prisma.unitsScalarWhereInput[];
    id?: Prisma.UuidFilter<"units"> | string;
    org_id?: Prisma.UuidFilter<"units"> | string;
    property_id?: Prisma.UuidFilter<"units"> | string;
    unit_number?: Prisma.StringFilter<"units"> | string;
    unit_type?: Prisma.Enumunit_type_enumFilter<"units"> | $Enums.unit_type_enum;
    floor?: Prisma.IntNullableFilter<"units"> | number | null;
    monthly_rent?: Prisma.DecimalFilter<"units"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFilter<"units"> | $Enums.unit_status_enum;
    description?: Prisma.StringNullableFilter<"units"> | string | null;
    is_active?: Prisma.BoolFilter<"units"> | boolean;
    created_at?: Prisma.DateTimeFilter<"units"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"units"> | Date | string;
};
export type unitsCreateWithoutPropertiesInput = {
    id?: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices?: Prisma.invoicesCreateNestedManyWithoutUnitsInput;
    tenancies?: Prisma.tenanciesCreateNestedManyWithoutUnitsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutUnitsInput;
};
export type unitsUncheckedCreateWithoutPropertiesInput = {
    id?: string;
    org_id: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices?: Prisma.invoicesUncheckedCreateNestedManyWithoutUnitsInput;
    tenancies?: Prisma.tenanciesUncheckedCreateNestedManyWithoutUnitsInput;
};
export type unitsCreateOrConnectWithoutPropertiesInput = {
    where: Prisma.unitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.unitsCreateWithoutPropertiesInput, Prisma.unitsUncheckedCreateWithoutPropertiesInput>;
};
export type unitsCreateManyPropertiesInputEnvelope = {
    data: Prisma.unitsCreateManyPropertiesInput | Prisma.unitsCreateManyPropertiesInput[];
    skipDuplicates?: boolean;
};
export type unitsUpsertWithWhereUniqueWithoutPropertiesInput = {
    where: Prisma.unitsWhereUniqueInput;
    update: Prisma.XOR<Prisma.unitsUpdateWithoutPropertiesInput, Prisma.unitsUncheckedUpdateWithoutPropertiesInput>;
    create: Prisma.XOR<Prisma.unitsCreateWithoutPropertiesInput, Prisma.unitsUncheckedCreateWithoutPropertiesInput>;
};
export type unitsUpdateWithWhereUniqueWithoutPropertiesInput = {
    where: Prisma.unitsWhereUniqueInput;
    data: Prisma.XOR<Prisma.unitsUpdateWithoutPropertiesInput, Prisma.unitsUncheckedUpdateWithoutPropertiesInput>;
};
export type unitsUpdateManyWithWhereWithoutPropertiesInput = {
    where: Prisma.unitsScalarWhereInput;
    data: Prisma.XOR<Prisma.unitsUpdateManyMutationInput, Prisma.unitsUncheckedUpdateManyWithoutPropertiesInput>;
};
export type unitsCreateWithoutTenanciesInput = {
    id?: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices?: Prisma.invoicesCreateNestedManyWithoutUnitsInput;
    organisations: Prisma.organisationsCreateNestedOneWithoutUnitsInput;
    properties: Prisma.propertiesCreateNestedOneWithoutUnitsInput;
};
export type unitsUncheckedCreateWithoutTenanciesInput = {
    id?: string;
    org_id: string;
    property_id: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    invoices?: Prisma.invoicesUncheckedCreateNestedManyWithoutUnitsInput;
};
export type unitsCreateOrConnectWithoutTenanciesInput = {
    where: Prisma.unitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.unitsCreateWithoutTenanciesInput, Prisma.unitsUncheckedCreateWithoutTenanciesInput>;
};
export type unitsUpsertWithoutTenanciesInput = {
    update: Prisma.XOR<Prisma.unitsUpdateWithoutTenanciesInput, Prisma.unitsUncheckedUpdateWithoutTenanciesInput>;
    create: Prisma.XOR<Prisma.unitsCreateWithoutTenanciesInput, Prisma.unitsUncheckedCreateWithoutTenanciesInput>;
    where?: Prisma.unitsWhereInput;
};
export type unitsUpdateToOneWithWhereWithoutTenanciesInput = {
    where?: Prisma.unitsWhereInput;
    data: Prisma.XOR<Prisma.unitsUpdateWithoutTenanciesInput, Prisma.unitsUncheckedUpdateWithoutTenanciesInput>;
};
export type unitsUpdateWithoutTenanciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateManyWithoutUnitsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutUnitsNestedInput;
    properties?: Prisma.propertiesUpdateOneRequiredWithoutUnitsNestedInput;
};
export type unitsUncheckedUpdateWithoutTenanciesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    property_id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUncheckedUpdateManyWithoutUnitsNestedInput;
};
export type unitsCreateManyOrganisationsInput = {
    id?: string;
    property_id: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type unitsUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateManyWithoutUnitsNestedInput;
    tenancies?: Prisma.tenanciesUpdateManyWithoutUnitsNestedInput;
    properties?: Prisma.propertiesUpdateOneRequiredWithoutUnitsNestedInput;
};
export type unitsUncheckedUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    property_id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUncheckedUpdateManyWithoutUnitsNestedInput;
    tenancies?: Prisma.tenanciesUncheckedUpdateManyWithoutUnitsNestedInput;
};
export type unitsUncheckedUpdateManyWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    property_id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type unitsCreateManyPropertiesInput = {
    id?: string;
    org_id: string;
    unit_number: string;
    unit_type: $Enums.unit_type_enum;
    floor?: number | null;
    monthly_rent: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.unit_status_enum;
    description?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type unitsUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUpdateManyWithoutUnitsNestedInput;
    tenancies?: Prisma.tenanciesUpdateManyWithoutUnitsNestedInput;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutUnitsNestedInput;
};
export type unitsUncheckedUpdateWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    invoices?: Prisma.invoicesUncheckedUpdateManyWithoutUnitsNestedInput;
    tenancies?: Prisma.tenanciesUncheckedUpdateManyWithoutUnitsNestedInput;
};
export type unitsUncheckedUpdateManyWithoutPropertiesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_number?: Prisma.StringFieldUpdateOperationsInput | string;
    unit_type?: Prisma.Enumunit_type_enumFieldUpdateOperationsInput | $Enums.unit_type_enum;
    floor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monthly_rent?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumunit_status_enumFieldUpdateOperationsInput | $Enums.unit_status_enum;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UnitsCountOutputType = {
    invoices: number;
    tenancies: number;
};
export type UnitsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoices?: boolean | UnitsCountOutputTypeCountInvoicesArgs;
    tenancies?: boolean | UnitsCountOutputTypeCountTenanciesArgs;
};
export type UnitsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UnitsCountOutputTypeSelect<ExtArgs> | null;
};
export type UnitsCountOutputTypeCountInvoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.invoicesWhereInput;
};
export type UnitsCountOutputTypeCountTenanciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tenanciesWhereInput;
};
export type unitsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    property_id?: boolean;
    unit_number?: boolean;
    unit_type?: boolean;
    floor?: boolean;
    monthly_rent?: boolean;
    status?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    invoices?: boolean | Prisma.units$invoicesArgs<ExtArgs>;
    tenancies?: boolean | Prisma.units$tenanciesArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    properties?: boolean | Prisma.propertiesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UnitsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["units"]>;
export type unitsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    property_id?: boolean;
    unit_number?: boolean;
    unit_type?: boolean;
    floor?: boolean;
    monthly_rent?: boolean;
    status?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    properties?: boolean | Prisma.propertiesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["units"]>;
export type unitsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    property_id?: boolean;
    unit_number?: boolean;
    unit_type?: boolean;
    floor?: boolean;
    monthly_rent?: boolean;
    status?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    properties?: boolean | Prisma.propertiesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["units"]>;
export type unitsSelectScalar = {
    id?: boolean;
    org_id?: boolean;
    property_id?: boolean;
    unit_number?: boolean;
    unit_type?: boolean;
    floor?: boolean;
    monthly_rent?: boolean;
    status?: boolean;
    description?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type unitsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "org_id" | "property_id" | "unit_number" | "unit_type" | "floor" | "monthly_rent" | "status" | "description" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["units"]>;
export type unitsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    invoices?: boolean | Prisma.units$invoicesArgs<ExtArgs>;
    tenancies?: boolean | Prisma.units$tenanciesArgs<ExtArgs>;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    properties?: boolean | Prisma.propertiesDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.UnitsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type unitsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    properties?: boolean | Prisma.propertiesDefaultArgs<ExtArgs>;
};
export type unitsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    properties?: boolean | Prisma.propertiesDefaultArgs<ExtArgs>;
};
export type $unitsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "units";
    objects: {
        invoices: Prisma.$invoicesPayload<ExtArgs>[];
        tenancies: Prisma.$tenanciesPayload<ExtArgs>[];
        organisations: Prisma.$organisationsPayload<ExtArgs>;
        properties: Prisma.$propertiesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        org_id: string;
        property_id: string;
        unit_number: string;
        unit_type: $Enums.unit_type_enum;
        floor: number | null;
        monthly_rent: runtime.Decimal;
        status: $Enums.unit_status_enum;
        description: string | null;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["units"]>;
    composites: {};
};
export type unitsGetPayload<S extends boolean | null | undefined | unitsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$unitsPayload, S>;
export type unitsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<unitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UnitsCountAggregateInputType | true;
};
export interface unitsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['units'];
        meta: {
            name: 'units';
        };
    };
    findUnique<T extends unitsFindUniqueArgs>(args: Prisma.SelectSubset<T, unitsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__unitsClient<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends unitsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, unitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__unitsClient<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends unitsFindFirstArgs>(args?: Prisma.SelectSubset<T, unitsFindFirstArgs<ExtArgs>>): Prisma.Prisma__unitsClient<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends unitsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, unitsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__unitsClient<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends unitsFindManyArgs>(args?: Prisma.SelectSubset<T, unitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends unitsCreateArgs>(args: Prisma.SelectSubset<T, unitsCreateArgs<ExtArgs>>): Prisma.Prisma__unitsClient<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends unitsCreateManyArgs>(args?: Prisma.SelectSubset<T, unitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends unitsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, unitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends unitsDeleteArgs>(args: Prisma.SelectSubset<T, unitsDeleteArgs<ExtArgs>>): Prisma.Prisma__unitsClient<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends unitsUpdateArgs>(args: Prisma.SelectSubset<T, unitsUpdateArgs<ExtArgs>>): Prisma.Prisma__unitsClient<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends unitsDeleteManyArgs>(args?: Prisma.SelectSubset<T, unitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends unitsUpdateManyArgs>(args: Prisma.SelectSubset<T, unitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends unitsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, unitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends unitsUpsertArgs>(args: Prisma.SelectSubset<T, unitsUpsertArgs<ExtArgs>>): Prisma.Prisma__unitsClient<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends unitsCountArgs>(args?: Prisma.Subset<T, unitsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UnitsCountAggregateOutputType> : number>;
    aggregate<T extends UnitsAggregateArgs>(args: Prisma.Subset<T, UnitsAggregateArgs>): Prisma.PrismaPromise<GetUnitsAggregateType<T>>;
    groupBy<T extends unitsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: unitsGroupByArgs['orderBy'];
    } : {
        orderBy?: unitsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, unitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: unitsFieldRefs;
}
export interface Prisma__unitsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    invoices<T extends Prisma.units$invoicesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.units$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$invoicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tenancies<T extends Prisma.units$tenanciesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.units$tenanciesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tenanciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    organisations<T extends Prisma.organisationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.organisationsDefaultArgs<ExtArgs>>): Prisma.Prisma__organisationsClient<runtime.Types.Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    properties<T extends Prisma.propertiesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.propertiesDefaultArgs<ExtArgs>>): Prisma.Prisma__propertiesClient<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface unitsFieldRefs {
    readonly id: Prisma.FieldRef<"units", 'String'>;
    readonly org_id: Prisma.FieldRef<"units", 'String'>;
    readonly property_id: Prisma.FieldRef<"units", 'String'>;
    readonly unit_number: Prisma.FieldRef<"units", 'String'>;
    readonly unit_type: Prisma.FieldRef<"units", 'unit_type_enum'>;
    readonly floor: Prisma.FieldRef<"units", 'Int'>;
    readonly monthly_rent: Prisma.FieldRef<"units", 'Decimal'>;
    readonly status: Prisma.FieldRef<"units", 'unit_status_enum'>;
    readonly description: Prisma.FieldRef<"units", 'String'>;
    readonly is_active: Prisma.FieldRef<"units", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"units", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"units", 'DateTime'>;
}
export type unitsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelect<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    include?: Prisma.unitsInclude<ExtArgs> | null;
    where: Prisma.unitsWhereUniqueInput;
};
export type unitsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelect<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    include?: Prisma.unitsInclude<ExtArgs> | null;
    where: Prisma.unitsWhereUniqueInput;
};
export type unitsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelect<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    include?: Prisma.unitsInclude<ExtArgs> | null;
    where?: Prisma.unitsWhereInput;
    orderBy?: Prisma.unitsOrderByWithRelationInput | Prisma.unitsOrderByWithRelationInput[];
    cursor?: Prisma.unitsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UnitsScalarFieldEnum | Prisma.UnitsScalarFieldEnum[];
};
export type unitsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelect<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    include?: Prisma.unitsInclude<ExtArgs> | null;
    where?: Prisma.unitsWhereInput;
    orderBy?: Prisma.unitsOrderByWithRelationInput | Prisma.unitsOrderByWithRelationInput[];
    cursor?: Prisma.unitsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UnitsScalarFieldEnum | Prisma.UnitsScalarFieldEnum[];
};
export type unitsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelect<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    include?: Prisma.unitsInclude<ExtArgs> | null;
    where?: Prisma.unitsWhereInput;
    orderBy?: Prisma.unitsOrderByWithRelationInput | Prisma.unitsOrderByWithRelationInput[];
    cursor?: Prisma.unitsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UnitsScalarFieldEnum | Prisma.UnitsScalarFieldEnum[];
};
export type unitsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelect<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    include?: Prisma.unitsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.unitsCreateInput, Prisma.unitsUncheckedCreateInput>;
};
export type unitsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.unitsCreateManyInput | Prisma.unitsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type unitsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    data: Prisma.unitsCreateManyInput | Prisma.unitsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.unitsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type unitsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelect<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    include?: Prisma.unitsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.unitsUpdateInput, Prisma.unitsUncheckedUpdateInput>;
    where: Prisma.unitsWhereUniqueInput;
};
export type unitsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.unitsUpdateManyMutationInput, Prisma.unitsUncheckedUpdateManyInput>;
    where?: Prisma.unitsWhereInput;
    limit?: number;
};
export type unitsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.unitsUpdateManyMutationInput, Prisma.unitsUncheckedUpdateManyInput>;
    where?: Prisma.unitsWhereInput;
    limit?: number;
    include?: Prisma.unitsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type unitsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelect<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    include?: Prisma.unitsInclude<ExtArgs> | null;
    where: Prisma.unitsWhereUniqueInput;
    create: Prisma.XOR<Prisma.unitsCreateInput, Prisma.unitsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.unitsUpdateInput, Prisma.unitsUncheckedUpdateInput>;
};
export type unitsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelect<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    include?: Prisma.unitsInclude<ExtArgs> | null;
    where: Prisma.unitsWhereUniqueInput;
};
export type unitsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.unitsWhereInput;
    limit?: number;
};
export type units$invoicesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.invoicesSelect<ExtArgs> | null;
    omit?: Prisma.invoicesOmit<ExtArgs> | null;
    include?: Prisma.invoicesInclude<ExtArgs> | null;
    where?: Prisma.invoicesWhereInput;
    orderBy?: Prisma.invoicesOrderByWithRelationInput | Prisma.invoicesOrderByWithRelationInput[];
    cursor?: Prisma.invoicesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvoicesScalarFieldEnum | Prisma.InvoicesScalarFieldEnum[];
};
export type units$tenanciesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tenanciesSelect<ExtArgs> | null;
    omit?: Prisma.tenanciesOmit<ExtArgs> | null;
    include?: Prisma.tenanciesInclude<ExtArgs> | null;
    where?: Prisma.tenanciesWhereInput;
    orderBy?: Prisma.tenanciesOrderByWithRelationInput | Prisma.tenanciesOrderByWithRelationInput[];
    cursor?: Prisma.tenanciesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TenanciesScalarFieldEnum | Prisma.TenanciesScalarFieldEnum[];
};
export type unitsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unitsSelect<ExtArgs> | null;
    omit?: Prisma.unitsOmit<ExtArgs> | null;
    include?: Prisma.unitsInclude<ExtArgs> | null;
};
