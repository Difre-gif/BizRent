import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type propertiesModel = runtime.Types.Result.DefaultSelection<Prisma.$propertiesPayload>;
export type AggregateProperties = {
    _count: PropertiesCountAggregateOutputType | null;
    _avg: PropertiesAvgAggregateOutputType | null;
    _sum: PropertiesSumAggregateOutputType | null;
    _min: PropertiesMinAggregateOutputType | null;
    _max: PropertiesMaxAggregateOutputType | null;
};
export type PropertiesAvgAggregateOutputType = {
    total_units: number | null;
};
export type PropertiesSumAggregateOutputType = {
    total_units: number | null;
};
export type PropertiesMinAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    name: string | null;
    property_type: $Enums.property_type_enum | null;
    address_line1: string | null;
    address_line2: string | null;
    city: string | null;
    district: string | null;
    country_code: string | null;
    total_units: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PropertiesMaxAggregateOutputType = {
    id: string | null;
    org_id: string | null;
    name: string | null;
    property_type: $Enums.property_type_enum | null;
    address_line1: string | null;
    address_line2: string | null;
    city: string | null;
    district: string | null;
    country_code: string | null;
    total_units: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PropertiesCountAggregateOutputType = {
    id: number;
    org_id: number;
    name: number;
    property_type: number;
    address_line1: number;
    address_line2: number;
    city: number;
    district: number;
    country_code: number;
    total_units: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type PropertiesAvgAggregateInputType = {
    total_units?: true;
};
export type PropertiesSumAggregateInputType = {
    total_units?: true;
};
export type PropertiesMinAggregateInputType = {
    id?: true;
    org_id?: true;
    name?: true;
    property_type?: true;
    address_line1?: true;
    address_line2?: true;
    city?: true;
    district?: true;
    country_code?: true;
    total_units?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type PropertiesMaxAggregateInputType = {
    id?: true;
    org_id?: true;
    name?: true;
    property_type?: true;
    address_line1?: true;
    address_line2?: true;
    city?: true;
    district?: true;
    country_code?: true;
    total_units?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type PropertiesCountAggregateInputType = {
    id?: true;
    org_id?: true;
    name?: true;
    property_type?: true;
    address_line1?: true;
    address_line2?: true;
    city?: true;
    district?: true;
    country_code?: true;
    total_units?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type PropertiesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.propertiesWhereInput;
    orderBy?: Prisma.propertiesOrderByWithRelationInput | Prisma.propertiesOrderByWithRelationInput[];
    cursor?: Prisma.propertiesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PropertiesCountAggregateInputType;
    _avg?: PropertiesAvgAggregateInputType;
    _sum?: PropertiesSumAggregateInputType;
    _min?: PropertiesMinAggregateInputType;
    _max?: PropertiesMaxAggregateInputType;
};
export type GetPropertiesAggregateType<T extends PropertiesAggregateArgs> = {
    [P in keyof T & keyof AggregateProperties]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProperties[P]> : Prisma.GetScalarType<T[P], AggregateProperties[P]>;
};
export type propertiesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.propertiesWhereInput;
    orderBy?: Prisma.propertiesOrderByWithAggregationInput | Prisma.propertiesOrderByWithAggregationInput[];
    by: Prisma.PropertiesScalarFieldEnum[] | Prisma.PropertiesScalarFieldEnum;
    having?: Prisma.propertiesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PropertiesCountAggregateInputType | true;
    _avg?: PropertiesAvgAggregateInputType;
    _sum?: PropertiesSumAggregateInputType;
    _min?: PropertiesMinAggregateInputType;
    _max?: PropertiesMaxAggregateInputType;
};
export type PropertiesGroupByOutputType = {
    id: string;
    org_id: string;
    name: string;
    property_type: $Enums.property_type_enum;
    address_line1: string;
    address_line2: string | null;
    city: string;
    district: string | null;
    country_code: string;
    total_units: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: PropertiesCountAggregateOutputType | null;
    _avg: PropertiesAvgAggregateOutputType | null;
    _sum: PropertiesSumAggregateOutputType | null;
    _min: PropertiesMinAggregateOutputType | null;
    _max: PropertiesMaxAggregateOutputType | null;
};
export type GetPropertiesGroupByPayload<T extends propertiesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PropertiesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PropertiesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PropertiesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PropertiesGroupByOutputType[P]>;
}>>;
export type propertiesWhereInput = {
    AND?: Prisma.propertiesWhereInput | Prisma.propertiesWhereInput[];
    OR?: Prisma.propertiesWhereInput[];
    NOT?: Prisma.propertiesWhereInput | Prisma.propertiesWhereInput[];
    id?: Prisma.UuidFilter<"properties"> | string;
    org_id?: Prisma.UuidFilter<"properties"> | string;
    name?: Prisma.StringFilter<"properties"> | string;
    property_type?: Prisma.Enumproperty_type_enumFilter<"properties"> | $Enums.property_type_enum;
    address_line1?: Prisma.StringFilter<"properties"> | string;
    address_line2?: Prisma.StringNullableFilter<"properties"> | string | null;
    city?: Prisma.StringFilter<"properties"> | string;
    district?: Prisma.StringNullableFilter<"properties"> | string | null;
    country_code?: Prisma.StringFilter<"properties"> | string;
    total_units?: Prisma.IntFilter<"properties"> | number;
    is_active?: Prisma.BoolFilter<"properties"> | boolean;
    created_at?: Prisma.DateTimeFilter<"properties"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"properties"> | Date | string;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    units?: Prisma.UnitsListRelationFilter;
};
export type propertiesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    property_type?: Prisma.SortOrder;
    address_line1?: Prisma.SortOrder;
    address_line2?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrder;
    district?: Prisma.SortOrderInput | Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    total_units?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    organisations?: Prisma.organisationsOrderByWithRelationInput;
    units?: Prisma.unitsOrderByRelationAggregateInput;
};
export type propertiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.propertiesWhereInput | Prisma.propertiesWhereInput[];
    OR?: Prisma.propertiesWhereInput[];
    NOT?: Prisma.propertiesWhereInput | Prisma.propertiesWhereInput[];
    org_id?: Prisma.UuidFilter<"properties"> | string;
    name?: Prisma.StringFilter<"properties"> | string;
    property_type?: Prisma.Enumproperty_type_enumFilter<"properties"> | $Enums.property_type_enum;
    address_line1?: Prisma.StringFilter<"properties"> | string;
    address_line2?: Prisma.StringNullableFilter<"properties"> | string | null;
    city?: Prisma.StringFilter<"properties"> | string;
    district?: Prisma.StringNullableFilter<"properties"> | string | null;
    country_code?: Prisma.StringFilter<"properties"> | string;
    total_units?: Prisma.IntFilter<"properties"> | number;
    is_active?: Prisma.BoolFilter<"properties"> | boolean;
    created_at?: Prisma.DateTimeFilter<"properties"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"properties"> | Date | string;
    organisations?: Prisma.XOR<Prisma.OrganisationsScalarRelationFilter, Prisma.organisationsWhereInput>;
    units?: Prisma.UnitsListRelationFilter;
}, "id">;
export type propertiesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    property_type?: Prisma.SortOrder;
    address_line1?: Prisma.SortOrder;
    address_line2?: Prisma.SortOrderInput | Prisma.SortOrder;
    city?: Prisma.SortOrder;
    district?: Prisma.SortOrderInput | Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    total_units?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.propertiesCountOrderByAggregateInput;
    _avg?: Prisma.propertiesAvgOrderByAggregateInput;
    _max?: Prisma.propertiesMaxOrderByAggregateInput;
    _min?: Prisma.propertiesMinOrderByAggregateInput;
    _sum?: Prisma.propertiesSumOrderByAggregateInput;
};
export type propertiesScalarWhereWithAggregatesInput = {
    AND?: Prisma.propertiesScalarWhereWithAggregatesInput | Prisma.propertiesScalarWhereWithAggregatesInput[];
    OR?: Prisma.propertiesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.propertiesScalarWhereWithAggregatesInput | Prisma.propertiesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"properties"> | string;
    org_id?: Prisma.UuidWithAggregatesFilter<"properties"> | string;
    name?: Prisma.StringWithAggregatesFilter<"properties"> | string;
    property_type?: Prisma.Enumproperty_type_enumWithAggregatesFilter<"properties"> | $Enums.property_type_enum;
    address_line1?: Prisma.StringWithAggregatesFilter<"properties"> | string;
    address_line2?: Prisma.StringNullableWithAggregatesFilter<"properties"> | string | null;
    city?: Prisma.StringWithAggregatesFilter<"properties"> | string;
    district?: Prisma.StringNullableWithAggregatesFilter<"properties"> | string | null;
    country_code?: Prisma.StringWithAggregatesFilter<"properties"> | string;
    total_units?: Prisma.IntWithAggregatesFilter<"properties"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"properties"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"properties"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"properties"> | Date | string;
};
export type propertiesCreateInput = {
    id?: string;
    name: string;
    property_type: $Enums.property_type_enum;
    address_line1: string;
    address_line2?: string | null;
    city?: string;
    district?: string | null;
    country_code?: string;
    total_units?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    organisations: Prisma.organisationsCreateNestedOneWithoutPropertiesInput;
    units?: Prisma.unitsCreateNestedManyWithoutPropertiesInput;
};
export type propertiesUncheckedCreateInput = {
    id?: string;
    org_id: string;
    name: string;
    property_type: $Enums.property_type_enum;
    address_line1: string;
    address_line2?: string | null;
    city?: string;
    district?: string | null;
    country_code?: string;
    total_units?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    units?: Prisma.unitsUncheckedCreateNestedManyWithoutPropertiesInput;
};
export type propertiesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    property_type?: Prisma.Enumproperty_type_enumFieldUpdateOperationsInput | $Enums.property_type_enum;
    address_line1?: Prisma.StringFieldUpdateOperationsInput | string;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    total_units?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutPropertiesNestedInput;
    units?: Prisma.unitsUpdateManyWithoutPropertiesNestedInput;
};
export type propertiesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    property_type?: Prisma.Enumproperty_type_enumFieldUpdateOperationsInput | $Enums.property_type_enum;
    address_line1?: Prisma.StringFieldUpdateOperationsInput | string;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    total_units?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    units?: Prisma.unitsUncheckedUpdateManyWithoutPropertiesNestedInput;
};
export type propertiesCreateManyInput = {
    id?: string;
    org_id: string;
    name: string;
    property_type: $Enums.property_type_enum;
    address_line1: string;
    address_line2?: string | null;
    city?: string;
    district?: string | null;
    country_code?: string;
    total_units?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type propertiesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    property_type?: Prisma.Enumproperty_type_enumFieldUpdateOperationsInput | $Enums.property_type_enum;
    address_line1?: Prisma.StringFieldUpdateOperationsInput | string;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    total_units?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type propertiesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    property_type?: Prisma.Enumproperty_type_enumFieldUpdateOperationsInput | $Enums.property_type_enum;
    address_line1?: Prisma.StringFieldUpdateOperationsInput | string;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    total_units?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertiesListRelationFilter = {
    every?: Prisma.propertiesWhereInput;
    some?: Prisma.propertiesWhereInput;
    none?: Prisma.propertiesWhereInput;
};
export type propertiesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type propertiesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    property_type?: Prisma.SortOrder;
    address_line1?: Prisma.SortOrder;
    address_line2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    total_units?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type propertiesAvgOrderByAggregateInput = {
    total_units?: Prisma.SortOrder;
};
export type propertiesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    property_type?: Prisma.SortOrder;
    address_line1?: Prisma.SortOrder;
    address_line2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    total_units?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type propertiesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    org_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    property_type?: Prisma.SortOrder;
    address_line1?: Prisma.SortOrder;
    address_line2?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    country_code?: Prisma.SortOrder;
    total_units?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type propertiesSumOrderByAggregateInput = {
    total_units?: Prisma.SortOrder;
};
export type PropertiesScalarRelationFilter = {
    is?: Prisma.propertiesWhereInput;
    isNot?: Prisma.propertiesWhereInput;
};
export type propertiesCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.propertiesCreateWithoutOrganisationsInput, Prisma.propertiesUncheckedCreateWithoutOrganisationsInput> | Prisma.propertiesCreateWithoutOrganisationsInput[] | Prisma.propertiesUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.propertiesCreateOrConnectWithoutOrganisationsInput | Prisma.propertiesCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.propertiesCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.propertiesWhereUniqueInput | Prisma.propertiesWhereUniqueInput[];
};
export type propertiesUncheckedCreateNestedManyWithoutOrganisationsInput = {
    create?: Prisma.XOR<Prisma.propertiesCreateWithoutOrganisationsInput, Prisma.propertiesUncheckedCreateWithoutOrganisationsInput> | Prisma.propertiesCreateWithoutOrganisationsInput[] | Prisma.propertiesUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.propertiesCreateOrConnectWithoutOrganisationsInput | Prisma.propertiesCreateOrConnectWithoutOrganisationsInput[];
    createMany?: Prisma.propertiesCreateManyOrganisationsInputEnvelope;
    connect?: Prisma.propertiesWhereUniqueInput | Prisma.propertiesWhereUniqueInput[];
};
export type propertiesUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.propertiesCreateWithoutOrganisationsInput, Prisma.propertiesUncheckedCreateWithoutOrganisationsInput> | Prisma.propertiesCreateWithoutOrganisationsInput[] | Prisma.propertiesUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.propertiesCreateOrConnectWithoutOrganisationsInput | Prisma.propertiesCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.propertiesUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.propertiesUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.propertiesCreateManyOrganisationsInputEnvelope;
    set?: Prisma.propertiesWhereUniqueInput | Prisma.propertiesWhereUniqueInput[];
    disconnect?: Prisma.propertiesWhereUniqueInput | Prisma.propertiesWhereUniqueInput[];
    delete?: Prisma.propertiesWhereUniqueInput | Prisma.propertiesWhereUniqueInput[];
    connect?: Prisma.propertiesWhereUniqueInput | Prisma.propertiesWhereUniqueInput[];
    update?: Prisma.propertiesUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.propertiesUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.propertiesUpdateManyWithWhereWithoutOrganisationsInput | Prisma.propertiesUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.propertiesScalarWhereInput | Prisma.propertiesScalarWhereInput[];
};
export type propertiesUncheckedUpdateManyWithoutOrganisationsNestedInput = {
    create?: Prisma.XOR<Prisma.propertiesCreateWithoutOrganisationsInput, Prisma.propertiesUncheckedCreateWithoutOrganisationsInput> | Prisma.propertiesCreateWithoutOrganisationsInput[] | Prisma.propertiesUncheckedCreateWithoutOrganisationsInput[];
    connectOrCreate?: Prisma.propertiesCreateOrConnectWithoutOrganisationsInput | Prisma.propertiesCreateOrConnectWithoutOrganisationsInput[];
    upsert?: Prisma.propertiesUpsertWithWhereUniqueWithoutOrganisationsInput | Prisma.propertiesUpsertWithWhereUniqueWithoutOrganisationsInput[];
    createMany?: Prisma.propertiesCreateManyOrganisationsInputEnvelope;
    set?: Prisma.propertiesWhereUniqueInput | Prisma.propertiesWhereUniqueInput[];
    disconnect?: Prisma.propertiesWhereUniqueInput | Prisma.propertiesWhereUniqueInput[];
    delete?: Prisma.propertiesWhereUniqueInput | Prisma.propertiesWhereUniqueInput[];
    connect?: Prisma.propertiesWhereUniqueInput | Prisma.propertiesWhereUniqueInput[];
    update?: Prisma.propertiesUpdateWithWhereUniqueWithoutOrganisationsInput | Prisma.propertiesUpdateWithWhereUniqueWithoutOrganisationsInput[];
    updateMany?: Prisma.propertiesUpdateManyWithWhereWithoutOrganisationsInput | Prisma.propertiesUpdateManyWithWhereWithoutOrganisationsInput[];
    deleteMany?: Prisma.propertiesScalarWhereInput | Prisma.propertiesScalarWhereInput[];
};
export type Enumproperty_type_enumFieldUpdateOperationsInput = {
    set?: $Enums.property_type_enum;
};
export type propertiesCreateNestedOneWithoutUnitsInput = {
    create?: Prisma.XOR<Prisma.propertiesCreateWithoutUnitsInput, Prisma.propertiesUncheckedCreateWithoutUnitsInput>;
    connectOrCreate?: Prisma.propertiesCreateOrConnectWithoutUnitsInput;
    connect?: Prisma.propertiesWhereUniqueInput;
};
export type propertiesUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: Prisma.XOR<Prisma.propertiesCreateWithoutUnitsInput, Prisma.propertiesUncheckedCreateWithoutUnitsInput>;
    connectOrCreate?: Prisma.propertiesCreateOrConnectWithoutUnitsInput;
    upsert?: Prisma.propertiesUpsertWithoutUnitsInput;
    connect?: Prisma.propertiesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.propertiesUpdateToOneWithWhereWithoutUnitsInput, Prisma.propertiesUpdateWithoutUnitsInput>, Prisma.propertiesUncheckedUpdateWithoutUnitsInput>;
};
export type propertiesCreateWithoutOrganisationsInput = {
    id?: string;
    name: string;
    property_type: $Enums.property_type_enum;
    address_line1: string;
    address_line2?: string | null;
    city?: string;
    district?: string | null;
    country_code?: string;
    total_units?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    units?: Prisma.unitsCreateNestedManyWithoutPropertiesInput;
};
export type propertiesUncheckedCreateWithoutOrganisationsInput = {
    id?: string;
    name: string;
    property_type: $Enums.property_type_enum;
    address_line1: string;
    address_line2?: string | null;
    city?: string;
    district?: string | null;
    country_code?: string;
    total_units?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    units?: Prisma.unitsUncheckedCreateNestedManyWithoutPropertiesInput;
};
export type propertiesCreateOrConnectWithoutOrganisationsInput = {
    where: Prisma.propertiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.propertiesCreateWithoutOrganisationsInput, Prisma.propertiesUncheckedCreateWithoutOrganisationsInput>;
};
export type propertiesCreateManyOrganisationsInputEnvelope = {
    data: Prisma.propertiesCreateManyOrganisationsInput | Prisma.propertiesCreateManyOrganisationsInput[];
    skipDuplicates?: boolean;
};
export type propertiesUpsertWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.propertiesWhereUniqueInput;
    update: Prisma.XOR<Prisma.propertiesUpdateWithoutOrganisationsInput, Prisma.propertiesUncheckedUpdateWithoutOrganisationsInput>;
    create: Prisma.XOR<Prisma.propertiesCreateWithoutOrganisationsInput, Prisma.propertiesUncheckedCreateWithoutOrganisationsInput>;
};
export type propertiesUpdateWithWhereUniqueWithoutOrganisationsInput = {
    where: Prisma.propertiesWhereUniqueInput;
    data: Prisma.XOR<Prisma.propertiesUpdateWithoutOrganisationsInput, Prisma.propertiesUncheckedUpdateWithoutOrganisationsInput>;
};
export type propertiesUpdateManyWithWhereWithoutOrganisationsInput = {
    where: Prisma.propertiesScalarWhereInput;
    data: Prisma.XOR<Prisma.propertiesUpdateManyMutationInput, Prisma.propertiesUncheckedUpdateManyWithoutOrganisationsInput>;
};
export type propertiesScalarWhereInput = {
    AND?: Prisma.propertiesScalarWhereInput | Prisma.propertiesScalarWhereInput[];
    OR?: Prisma.propertiesScalarWhereInput[];
    NOT?: Prisma.propertiesScalarWhereInput | Prisma.propertiesScalarWhereInput[];
    id?: Prisma.UuidFilter<"properties"> | string;
    org_id?: Prisma.UuidFilter<"properties"> | string;
    name?: Prisma.StringFilter<"properties"> | string;
    property_type?: Prisma.Enumproperty_type_enumFilter<"properties"> | $Enums.property_type_enum;
    address_line1?: Prisma.StringFilter<"properties"> | string;
    address_line2?: Prisma.StringNullableFilter<"properties"> | string | null;
    city?: Prisma.StringFilter<"properties"> | string;
    district?: Prisma.StringNullableFilter<"properties"> | string | null;
    country_code?: Prisma.StringFilter<"properties"> | string;
    total_units?: Prisma.IntFilter<"properties"> | number;
    is_active?: Prisma.BoolFilter<"properties"> | boolean;
    created_at?: Prisma.DateTimeFilter<"properties"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"properties"> | Date | string;
};
export type propertiesCreateWithoutUnitsInput = {
    id?: string;
    name: string;
    property_type: $Enums.property_type_enum;
    address_line1: string;
    address_line2?: string | null;
    city?: string;
    district?: string | null;
    country_code?: string;
    total_units?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    organisations: Prisma.organisationsCreateNestedOneWithoutPropertiesInput;
};
export type propertiesUncheckedCreateWithoutUnitsInput = {
    id?: string;
    org_id: string;
    name: string;
    property_type: $Enums.property_type_enum;
    address_line1: string;
    address_line2?: string | null;
    city?: string;
    district?: string | null;
    country_code?: string;
    total_units?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type propertiesCreateOrConnectWithoutUnitsInput = {
    where: Prisma.propertiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.propertiesCreateWithoutUnitsInput, Prisma.propertiesUncheckedCreateWithoutUnitsInput>;
};
export type propertiesUpsertWithoutUnitsInput = {
    update: Prisma.XOR<Prisma.propertiesUpdateWithoutUnitsInput, Prisma.propertiesUncheckedUpdateWithoutUnitsInput>;
    create: Prisma.XOR<Prisma.propertiesCreateWithoutUnitsInput, Prisma.propertiesUncheckedCreateWithoutUnitsInput>;
    where?: Prisma.propertiesWhereInput;
};
export type propertiesUpdateToOneWithWhereWithoutUnitsInput = {
    where?: Prisma.propertiesWhereInput;
    data: Prisma.XOR<Prisma.propertiesUpdateWithoutUnitsInput, Prisma.propertiesUncheckedUpdateWithoutUnitsInput>;
};
export type propertiesUpdateWithoutUnitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    property_type?: Prisma.Enumproperty_type_enumFieldUpdateOperationsInput | $Enums.property_type_enum;
    address_line1?: Prisma.StringFieldUpdateOperationsInput | string;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    total_units?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    organisations?: Prisma.organisationsUpdateOneRequiredWithoutPropertiesNestedInput;
};
export type propertiesUncheckedUpdateWithoutUnitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    org_id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    property_type?: Prisma.Enumproperty_type_enumFieldUpdateOperationsInput | $Enums.property_type_enum;
    address_line1?: Prisma.StringFieldUpdateOperationsInput | string;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    total_units?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type propertiesCreateManyOrganisationsInput = {
    id?: string;
    name: string;
    property_type: $Enums.property_type_enum;
    address_line1: string;
    address_line2?: string | null;
    city?: string;
    district?: string | null;
    country_code?: string;
    total_units?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type propertiesUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    property_type?: Prisma.Enumproperty_type_enumFieldUpdateOperationsInput | $Enums.property_type_enum;
    address_line1?: Prisma.StringFieldUpdateOperationsInput | string;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    total_units?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    units?: Prisma.unitsUpdateManyWithoutPropertiesNestedInput;
};
export type propertiesUncheckedUpdateWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    property_type?: Prisma.Enumproperty_type_enumFieldUpdateOperationsInput | $Enums.property_type_enum;
    address_line1?: Prisma.StringFieldUpdateOperationsInput | string;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    total_units?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    units?: Prisma.unitsUncheckedUpdateManyWithoutPropertiesNestedInput;
};
export type propertiesUncheckedUpdateManyWithoutOrganisationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    property_type?: Prisma.Enumproperty_type_enumFieldUpdateOperationsInput | $Enums.property_type_enum;
    address_line1?: Prisma.StringFieldUpdateOperationsInput | string;
    address_line2?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    country_code?: Prisma.StringFieldUpdateOperationsInput | string;
    total_units?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PropertiesCountOutputType = {
    units: number;
};
export type PropertiesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    units?: boolean | PropertiesCountOutputTypeCountUnitsArgs;
};
export type PropertiesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PropertiesCountOutputTypeSelect<ExtArgs> | null;
};
export type PropertiesCountOutputTypeCountUnitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.unitsWhereInput;
};
export type propertiesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    name?: boolean;
    property_type?: boolean;
    address_line1?: boolean;
    address_line2?: boolean;
    city?: boolean;
    district?: boolean;
    country_code?: boolean;
    total_units?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    units?: boolean | Prisma.properties$unitsArgs<ExtArgs>;
    _count?: boolean | Prisma.PropertiesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["properties"]>;
export type propertiesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    name?: boolean;
    property_type?: boolean;
    address_line1?: boolean;
    address_line2?: boolean;
    city?: boolean;
    district?: boolean;
    country_code?: boolean;
    total_units?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["properties"]>;
export type propertiesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    org_id?: boolean;
    name?: boolean;
    property_type?: boolean;
    address_line1?: boolean;
    address_line2?: boolean;
    city?: boolean;
    district?: boolean;
    country_code?: boolean;
    total_units?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["properties"]>;
export type propertiesSelectScalar = {
    id?: boolean;
    org_id?: boolean;
    name?: boolean;
    property_type?: boolean;
    address_line1?: boolean;
    address_line2?: boolean;
    city?: boolean;
    district?: boolean;
    country_code?: boolean;
    total_units?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type propertiesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "org_id" | "name" | "property_type" | "address_line1" | "address_line2" | "city" | "district" | "country_code" | "total_units" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["properties"]>;
export type propertiesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
    units?: boolean | Prisma.properties$unitsArgs<ExtArgs>;
    _count?: boolean | Prisma.PropertiesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type propertiesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
};
export type propertiesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    organisations?: boolean | Prisma.organisationsDefaultArgs<ExtArgs>;
};
export type $propertiesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "properties";
    objects: {
        organisations: Prisma.$organisationsPayload<ExtArgs>;
        units: Prisma.$unitsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        org_id: string;
        name: string;
        property_type: $Enums.property_type_enum;
        address_line1: string;
        address_line2: string | null;
        city: string;
        district: string | null;
        country_code: string;
        total_units: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["properties"]>;
    composites: {};
};
export type propertiesGetPayload<S extends boolean | null | undefined | propertiesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$propertiesPayload, S>;
export type propertiesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<propertiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PropertiesCountAggregateInputType | true;
};
export interface propertiesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['properties'];
        meta: {
            name: 'properties';
        };
    };
    findUnique<T extends propertiesFindUniqueArgs>(args: Prisma.SelectSubset<T, propertiesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__propertiesClient<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends propertiesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, propertiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__propertiesClient<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends propertiesFindFirstArgs>(args?: Prisma.SelectSubset<T, propertiesFindFirstArgs<ExtArgs>>): Prisma.Prisma__propertiesClient<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends propertiesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, propertiesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__propertiesClient<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends propertiesFindManyArgs>(args?: Prisma.SelectSubset<T, propertiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends propertiesCreateArgs>(args: Prisma.SelectSubset<T, propertiesCreateArgs<ExtArgs>>): Prisma.Prisma__propertiesClient<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends propertiesCreateManyArgs>(args?: Prisma.SelectSubset<T, propertiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends propertiesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, propertiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends propertiesDeleteArgs>(args: Prisma.SelectSubset<T, propertiesDeleteArgs<ExtArgs>>): Prisma.Prisma__propertiesClient<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends propertiesUpdateArgs>(args: Prisma.SelectSubset<T, propertiesUpdateArgs<ExtArgs>>): Prisma.Prisma__propertiesClient<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends propertiesDeleteManyArgs>(args?: Prisma.SelectSubset<T, propertiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends propertiesUpdateManyArgs>(args: Prisma.SelectSubset<T, propertiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends propertiesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, propertiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends propertiesUpsertArgs>(args: Prisma.SelectSubset<T, propertiesUpsertArgs<ExtArgs>>): Prisma.Prisma__propertiesClient<runtime.Types.Result.GetResult<Prisma.$propertiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends propertiesCountArgs>(args?: Prisma.Subset<T, propertiesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PropertiesCountAggregateOutputType> : number>;
    aggregate<T extends PropertiesAggregateArgs>(args: Prisma.Subset<T, PropertiesAggregateArgs>): Prisma.PrismaPromise<GetPropertiesAggregateType<T>>;
    groupBy<T extends propertiesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: propertiesGroupByArgs['orderBy'];
    } : {
        orderBy?: propertiesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, propertiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: propertiesFieldRefs;
}
export interface Prisma__propertiesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organisations<T extends Prisma.organisationsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.organisationsDefaultArgs<ExtArgs>>): Prisma.Prisma__organisationsClient<runtime.Types.Result.GetResult<Prisma.$organisationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    units<T extends Prisma.properties$unitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.properties$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$unitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface propertiesFieldRefs {
    readonly id: Prisma.FieldRef<"properties", 'String'>;
    readonly org_id: Prisma.FieldRef<"properties", 'String'>;
    readonly name: Prisma.FieldRef<"properties", 'String'>;
    readonly property_type: Prisma.FieldRef<"properties", 'property_type_enum'>;
    readonly address_line1: Prisma.FieldRef<"properties", 'String'>;
    readonly address_line2: Prisma.FieldRef<"properties", 'String'>;
    readonly city: Prisma.FieldRef<"properties", 'String'>;
    readonly district: Prisma.FieldRef<"properties", 'String'>;
    readonly country_code: Prisma.FieldRef<"properties", 'String'>;
    readonly total_units: Prisma.FieldRef<"properties", 'Int'>;
    readonly is_active: Prisma.FieldRef<"properties", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"properties", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"properties", 'DateTime'>;
}
export type propertiesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelect<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    include?: Prisma.propertiesInclude<ExtArgs> | null;
    where: Prisma.propertiesWhereUniqueInput;
};
export type propertiesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelect<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    include?: Prisma.propertiesInclude<ExtArgs> | null;
    where: Prisma.propertiesWhereUniqueInput;
};
export type propertiesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelect<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    include?: Prisma.propertiesInclude<ExtArgs> | null;
    where?: Prisma.propertiesWhereInput;
    orderBy?: Prisma.propertiesOrderByWithRelationInput | Prisma.propertiesOrderByWithRelationInput[];
    cursor?: Prisma.propertiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertiesScalarFieldEnum | Prisma.PropertiesScalarFieldEnum[];
};
export type propertiesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelect<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    include?: Prisma.propertiesInclude<ExtArgs> | null;
    where?: Prisma.propertiesWhereInput;
    orderBy?: Prisma.propertiesOrderByWithRelationInput | Prisma.propertiesOrderByWithRelationInput[];
    cursor?: Prisma.propertiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertiesScalarFieldEnum | Prisma.PropertiesScalarFieldEnum[];
};
export type propertiesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelect<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    include?: Prisma.propertiesInclude<ExtArgs> | null;
    where?: Prisma.propertiesWhereInput;
    orderBy?: Prisma.propertiesOrderByWithRelationInput | Prisma.propertiesOrderByWithRelationInput[];
    cursor?: Prisma.propertiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PropertiesScalarFieldEnum | Prisma.PropertiesScalarFieldEnum[];
};
export type propertiesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelect<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    include?: Prisma.propertiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.propertiesCreateInput, Prisma.propertiesUncheckedCreateInput>;
};
export type propertiesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.propertiesCreateManyInput | Prisma.propertiesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type propertiesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    data: Prisma.propertiesCreateManyInput | Prisma.propertiesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.propertiesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type propertiesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelect<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    include?: Prisma.propertiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.propertiesUpdateInput, Prisma.propertiesUncheckedUpdateInput>;
    where: Prisma.propertiesWhereUniqueInput;
};
export type propertiesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.propertiesUpdateManyMutationInput, Prisma.propertiesUncheckedUpdateManyInput>;
    where?: Prisma.propertiesWhereInput;
    limit?: number;
};
export type propertiesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.propertiesUpdateManyMutationInput, Prisma.propertiesUncheckedUpdateManyInput>;
    where?: Prisma.propertiesWhereInput;
    limit?: number;
    include?: Prisma.propertiesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type propertiesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelect<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    include?: Prisma.propertiesInclude<ExtArgs> | null;
    where: Prisma.propertiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.propertiesCreateInput, Prisma.propertiesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.propertiesUpdateInput, Prisma.propertiesUncheckedUpdateInput>;
};
export type propertiesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelect<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    include?: Prisma.propertiesInclude<ExtArgs> | null;
    where: Prisma.propertiesWhereUniqueInput;
};
export type propertiesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.propertiesWhereInput;
    limit?: number;
};
export type properties$unitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type propertiesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.propertiesSelect<ExtArgs> | null;
    omit?: Prisma.propertiesOmit<ExtArgs> | null;
    include?: Prisma.propertiesInclude<ExtArgs> | null;
};
