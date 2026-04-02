"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_role_enum = exports.unit_type_enum = exports.unit_status_enum = exports.tenancy_status_enum = exports.subscription_tier_enum = exports.subscription_status_enum = exports.property_type_enum = exports.payment_status_enum = exports.payment_method_enum = exports.notification_type_enum = exports.invoice_status_enum = exports.billing_cycle_enum = void 0;
exports.billing_cycle_enum = {
    MONTHLY: 'MONTHLY',
    ANNUAL: 'ANNUAL'
};
exports.invoice_status_enum = {
    DUE: 'DUE',
    PAID: 'PAID',
    PARTIAL: 'PARTIAL',
    OVERDUE: 'OVERDUE',
    CANCELLED: 'CANCELLED'
};
exports.notification_type_enum = {
    PAYMENT_SUBMITTED: 'PAYMENT_SUBMITTED',
    PAYMENT_APPROVED: 'PAYMENT_APPROVED',
    PAYMENT_REJECTED: 'PAYMENT_REJECTED',
    INVOICE_DUE: 'INVOICE_DUE',
    INVOICE_OVERDUE: 'INVOICE_OVERDUE',
    RECEIPT_AVAILABLE: 'RECEIPT_AVAILABLE',
    SUBSCRIPTION_EXPIRING: 'SUBSCRIPTION_EXPIRING'
};
exports.payment_method_enum = {
    MOMO: 'MOMO',
    BANK_TRANSFER: 'BANK_TRANSFER'
};
exports.payment_status_enum = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
exports.property_type_enum = {
    APARTMENT: 'APARTMENT',
    COMMERCIAL: 'COMMERCIAL',
    OFFICE: 'OFFICE',
    KIOSK: 'KIOSK',
    MIXED_USE: 'MIXED_USE'
};
exports.subscription_status_enum = {
    TRIAL: 'TRIAL',
    ACTIVE: 'ACTIVE',
    LAPSED: 'LAPSED',
    CANCELLED: 'CANCELLED'
};
exports.subscription_tier_enum = {
    STARTER: 'STARTER',
    GROWTH: 'GROWTH',
    PRO: 'PRO'
};
exports.tenancy_status_enum = {
    ACTIVE: 'ACTIVE',
    TERMINATED: 'TERMINATED',
    EXPIRED: 'EXPIRED'
};
exports.unit_status_enum = {
    VACANT: 'VACANT',
    OCCUPIED: 'OCCUPIED',
    MAINTENANCE: 'MAINTENANCE'
};
exports.unit_type_enum = {
    STUDIO: 'STUDIO',
    ONE_BED: 'ONE_BED',
    TWO_BED: 'TWO_BED',
    THREE_BED: 'THREE_BED',
    KIOSK: 'KIOSK',
    OFFICE: 'OFFICE',
    OTHER: 'OTHER'
};
exports.user_role_enum = {
    OWNER: 'OWNER',
    MANAGER: 'MANAGER',
    ACCOUNTANT: 'ACCOUNTANT',
    TENANT: 'TENANT',
    SUPER_ADMIN: 'SUPER_ADMIN'
};
//# sourceMappingURL=enums.js.map