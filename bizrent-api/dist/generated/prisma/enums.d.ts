export declare const billing_cycle_enum: {
    readonly MONTHLY: "MONTHLY";
    readonly ANNUAL: "ANNUAL";
};
export type billing_cycle_enum = (typeof billing_cycle_enum)[keyof typeof billing_cycle_enum];
export declare const invoice_status_enum: {
    readonly DUE: "DUE";
    readonly PAID: "PAID";
    readonly PARTIAL: "PARTIAL";
    readonly OVERDUE: "OVERDUE";
    readonly CANCELLED: "CANCELLED";
};
export type invoice_status_enum = (typeof invoice_status_enum)[keyof typeof invoice_status_enum];
export declare const notification_type_enum: {
    readonly PAYMENT_SUBMITTED: "PAYMENT_SUBMITTED";
    readonly PAYMENT_APPROVED: "PAYMENT_APPROVED";
    readonly PAYMENT_REJECTED: "PAYMENT_REJECTED";
    readonly INVOICE_DUE: "INVOICE_DUE";
    readonly INVOICE_OVERDUE: "INVOICE_OVERDUE";
    readonly RECEIPT_AVAILABLE: "RECEIPT_AVAILABLE";
    readonly SUBSCRIPTION_EXPIRING: "SUBSCRIPTION_EXPIRING";
};
export type notification_type_enum = (typeof notification_type_enum)[keyof typeof notification_type_enum];
export declare const payment_method_enum: {
    readonly MOMO: "MOMO";
    readonly BANK_TRANSFER: "BANK_TRANSFER";
};
export type payment_method_enum = (typeof payment_method_enum)[keyof typeof payment_method_enum];
export declare const payment_status_enum: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type payment_status_enum = (typeof payment_status_enum)[keyof typeof payment_status_enum];
export declare const property_type_enum: {
    readonly APARTMENT: "APARTMENT";
    readonly COMMERCIAL: "COMMERCIAL";
    readonly OFFICE: "OFFICE";
    readonly KIOSK: "KIOSK";
    readonly MIXED_USE: "MIXED_USE";
};
export type property_type_enum = (typeof property_type_enum)[keyof typeof property_type_enum];
export declare const subscription_status_enum: {
    readonly TRIAL: "TRIAL";
    readonly ACTIVE: "ACTIVE";
    readonly LAPSED: "LAPSED";
    readonly CANCELLED: "CANCELLED";
};
export type subscription_status_enum = (typeof subscription_status_enum)[keyof typeof subscription_status_enum];
export declare const subscription_tier_enum: {
    readonly STARTER: "STARTER";
    readonly GROWTH: "GROWTH";
    readonly PRO: "PRO";
};
export type subscription_tier_enum = (typeof subscription_tier_enum)[keyof typeof subscription_tier_enum];
export declare const tenancy_status_enum: {
    readonly ACTIVE: "ACTIVE";
    readonly TERMINATED: "TERMINATED";
    readonly EXPIRED: "EXPIRED";
};
export type tenancy_status_enum = (typeof tenancy_status_enum)[keyof typeof tenancy_status_enum];
export declare const unit_status_enum: {
    readonly VACANT: "VACANT";
    readonly OCCUPIED: "OCCUPIED";
    readonly MAINTENANCE: "MAINTENANCE";
};
export type unit_status_enum = (typeof unit_status_enum)[keyof typeof unit_status_enum];
export declare const unit_type_enum: {
    readonly STUDIO: "STUDIO";
    readonly ONE_BED: "ONE_BED";
    readonly TWO_BED: "TWO_BED";
    readonly THREE_BED: "THREE_BED";
    readonly KIOSK: "KIOSK";
    readonly OFFICE: "OFFICE";
    readonly OTHER: "OTHER";
};
export type unit_type_enum = (typeof unit_type_enum)[keyof typeof unit_type_enum];
export declare const user_role_enum: {
    readonly OWNER: "OWNER";
    readonly MANAGER: "MANAGER";
    readonly ACCOUNTANT: "ACCOUNTANT";
    readonly TENANT: "TENANT";
    readonly SUPER_ADMIN: "SUPER_ADMIN";
};
export type user_role_enum = (typeof user_role_enum)[keyof typeof user_role_enum];
