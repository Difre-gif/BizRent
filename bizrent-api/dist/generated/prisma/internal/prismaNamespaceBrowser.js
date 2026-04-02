"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.JsonNullValueFilter = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.UsersScalarFieldEnum = exports.User_organisation_rolesScalarFieldEnum = exports.UnitsScalarFieldEnum = exports.TenanciesScalarFieldEnum = exports.SubscriptionsScalarFieldEnum = exports.Subscription_tiersScalarFieldEnum = exports.Refresh_tokensScalarFieldEnum = exports.ReceiptsScalarFieldEnum = exports.PropertiesScalarFieldEnum = exports.PaymentsScalarFieldEnum = exports.OrganisationsScalarFieldEnum = exports.NotificationsScalarFieldEnum = exports.InvoicesScalarFieldEnum = exports.File_attachmentsScalarFieldEnum = exports.Audit_logsScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    audit_logs: 'audit_logs',
    file_attachments: 'file_attachments',
    invoices: 'invoices',
    notifications: 'notifications',
    organisations: 'organisations',
    payments: 'payments',
    properties: 'properties',
    receipts: 'receipts',
    refresh_tokens: 'refresh_tokens',
    subscription_tiers: 'subscription_tiers',
    subscriptions: 'subscriptions',
    tenancies: 'tenancies',
    units: 'units',
    user_organisation_roles: 'user_organisation_roles',
    users: 'users'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Audit_logsScalarFieldEnum = {
    id: 'id',
    org_id: 'org_id',
    actor_user_id: 'actor_user_id',
    actor_role: 'actor_role',
    action: 'action',
    target_type: 'target_type',
    target_id: 'target_id',
    diff: 'diff',
    metadata: 'metadata',
    created_at: 'created_at'
};
exports.File_attachmentsScalarFieldEnum = {
    id: 'id',
    org_id: 'org_id',
    uploaded_by: 'uploaded_by',
    bucket: 'bucket',
    file_path: 'file_path',
    original_filename: 'original_filename',
    mime_type: 'mime_type',
    size_bytes: 'size_bytes',
    created_at: 'created_at'
};
exports.InvoicesScalarFieldEnum = {
    id: 'id',
    org_id: 'org_id',
    tenancy_id: 'tenancy_id',
    unit_id: 'unit_id',
    tenant_user_id: 'tenant_user_id',
    invoice_number: 'invoice_number',
    billing_period_start: 'billing_period_start',
    billing_period_end: 'billing_period_end',
    due_date: 'due_date',
    amount_due: 'amount_due',
    amount_paid: 'amount_paid',
    balance: 'balance',
    status: 'status',
    notes: 'notes',
    generated_by: 'generated_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.NotificationsScalarFieldEnum = {
    id: 'id',
    org_id: 'org_id',
    recipient_user_id: 'recipient_user_id',
    type: 'type',
    title: 'title',
    body: 'body',
    reference_type: 'reference_type',
    reference_id: 'reference_id',
    is_read: 'is_read',
    read_at: 'read_at',
    created_at: 'created_at'
};
exports.OrganisationsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    phone: 'phone',
    email: 'email',
    country_code: 'country_code',
    currency_code: 'currency_code',
    timezone: 'timezone',
    subscription_status: 'subscription_status',
    trial_ends_at: 'trial_ends_at',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.PaymentsScalarFieldEnum = {
    id: 'id',
    org_id: 'org_id',
    invoice_id: 'invoice_id',
    tenant_user_id: 'tenant_user_id',
    amount: 'amount',
    payment_method: 'payment_method',
    transaction_id: 'transaction_id',
    proof_file_id: 'proof_file_id',
    status: 'status',
    rejection_reason: 'rejection_reason',
    reviewed_by: 'reviewed_by',
    reviewed_at: 'reviewed_at',
    submitted_at: 'submitted_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.PropertiesScalarFieldEnum = {
    id: 'id',
    org_id: 'org_id',
    name: 'name',
    property_type: 'property_type',
    address_line1: 'address_line1',
    address_line2: 'address_line2',
    city: 'city',
    district: 'district',
    country_code: 'country_code',
    total_units: 'total_units',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.ReceiptsScalarFieldEnum = {
    id: 'id',
    org_id: 'org_id',
    payment_id: 'payment_id',
    invoice_id: 'invoice_id',
    tenant_user_id: 'tenant_user_id',
    receipt_number: 'receipt_number',
    file_path: 'file_path',
    file_size_bytes: 'file_size_bytes',
    generated_at: 'generated_at',
    download_count: 'download_count',
    created_at: 'created_at'
};
exports.Refresh_tokensScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    token_hash: 'token_hash',
    expires_at: 'expires_at',
    revoked_at: 'revoked_at',
    device_info: 'device_info',
    ip_address: 'ip_address',
    created_at: 'created_at'
};
exports.Subscription_tiersScalarFieldEnum = {
    id: 'id',
    tier: 'tier',
    max_units: 'max_units',
    max_properties: 'max_properties',
    max_managers: 'max_managers',
    has_whatsapp: 'has_whatsapp',
    has_kinyarwanda: 'has_kinyarwanda',
    has_api_access: 'has_api_access',
    monthly_price_rwf: 'monthly_price_rwf',
    annual_price_rwf: 'annual_price_rwf'
};
exports.SubscriptionsScalarFieldEnum = {
    id: 'id',
    org_id: 'org_id',
    tier: 'tier',
    billing_cycle: 'billing_cycle',
    amount: 'amount',
    status: 'status',
    trial_ends_at: 'trial_ends_at',
    current_period_start: 'current_period_start',
    current_period_end: 'current_period_end',
    cancelled_at: 'cancelled_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.TenanciesScalarFieldEnum = {
    id: 'id',
    org_id: 'org_id',
    unit_id: 'unit_id',
    tenant_user_id: 'tenant_user_id',
    start_date: 'start_date',
    end_date: 'end_date',
    agreed_rent: 'agreed_rent',
    deposit_amount: 'deposit_amount',
    status: 'status',
    terminated_at: 'terminated_at',
    terminated_by: 'terminated_by',
    termination_reason: 'termination_reason',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.UnitsScalarFieldEnum = {
    id: 'id',
    org_id: 'org_id',
    property_id: 'property_id',
    unit_number: 'unit_number',
    unit_type: 'unit_type',
    floor: 'floor',
    monthly_rent: 'monthly_rent',
    status: 'status',
    description: 'description',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.User_organisation_rolesScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    org_id: 'org_id',
    role: 'role',
    is_active: 'is_active',
    invited_by: 'invited_by',
    invited_at: 'invited_at',
    accepted_at: 'accepted_at',
    created_at: 'created_at'
};
exports.UsersScalarFieldEnum = {
    id: 'id',
    email: 'email',
    phone: 'phone',
    full_name: 'full_name',
    password_hash: 'password_hash',
    is_active: 'is_active',
    is_email_verified: 'is_email_verified',
    last_login_at: 'last_login_at',
    preferred_language: 'preferred_language',
    two_fa_enabled: 'two_fa_enabled',
    two_fa_secret: 'two_fa_secret',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map