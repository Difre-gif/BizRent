// ─── Status enums ──────────────────────────────────────────────────────────────

export type PaymentStatus =
  | "PENDING"
  | "APPROVED"
  | "REJECTED"
  | "PARTIAL";

export type InvoiceStatus =
  | "PENDING"
  | "PAID"
  | "DUE"
  | "OVERDUE"
  | "PARTIAL";

export type UnitStatus = "OCCUPIED" | "VACANT";

export type PropertyType = "APARTMENT" | "COMMERCIAL" | "OFFICE" | "LAND";

export type SubscriptionTier = "STARTER" | "GROWTH" | "PRO" | "ENTERPRISE";

export type SubscriptionStatus = "ACTIVE" | "INACTIVE" | "TRIAL";

export type UserRole = "OWNER" | "MANAGER" | "VIEWER";

export type PaymentMethod = "MTN_MOMO" | "AIRTEL_MONEY" | "BANK_TRANSFER" | "CASH";

// ─── Core entities ─────────────────────────────────────────────────────────────

export interface Organisation {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  currency: string;
  timezone: string;
  subscription: SubscriptionTier;
  subscriptionStatus: SubscriptionStatus;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  avatar?: string;
  organisationId: string;
}

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  address: string;
  neighbourhood: string;
  city: string;
  country: string;
  totalUnits: number;
  occupiedUnits: number;
  monthlyRevenue: number;
  organisationId: string;
}

export interface Unit {
  id: string;
  propertyId: string;
  unitNumber: string;
  type: string; // "1BED" | "2BED" | "KIOSK" | "STUDIO" etc.
  floor?: number;
  status: UnitStatus;
  monthlyRent: number;
  tenantId?: string;
}

export interface Tenant {
  id: string;
  name: string;
  email: string;
  phone: string;
  unitId: string;
  propertyId: string;
  leaseStart: string;
  leaseEnd: string;
  monthlyRent: number;
  preferredLanguage: "en" | "rw";
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  tenantId: string;
  unitId: string;
  propertyId: string;
  period: string; // "April 2026"
  periodStart: string; // ISO date
  periodEnd: string;   // ISO date
  dueDate: string;     // ISO date
  amountDue: number;
  amountPaid: number;
  status: InvoiceStatus;
  createdAt: string;
}

export interface Payment {
  id: string;
  invoiceId: string;
  tenantId: string;
  amount: number;
  method: PaymentMethod;
  transactionId: string;
  screenshotUrl?: string;
  status: PaymentStatus;
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  rejectionReason?: string;
  notes?: string;
}

export interface BillingPlan {
  tier: SubscriptionTier;
  name: string;
  priceMonthly: number;
  maxUnits: number;
  maxProperties: number;
  features: string[];
}

export interface BillingHistory {
  id: string;
  month: string;
  amount: number;
  status: "PAID" | "PENDING";
  date: string;
}

// ─── Dashboard metrics ─────────────────────────────────────────────────────────

export interface LandlordMetrics {
  totalProperties: number;
  totalUnits: number;
  occupiedUnits: number;
  vacantUnits: number;
  collectionRatePercent: number;
  pendingPaymentsCount: number;
  overdueUnitsCount: number;
  totalRevenueThisMonth: number;
  expectedRevenueThisMonth: number;
}

// ─── Composite display types ───────────────────────────────────────────────────

export interface PaymentWithDetails extends Payment {
  tenant: Tenant;
  invoice: Invoice;
  unit: Unit;
  property: Property;
}

export interface InvoiceWithDetails extends Invoice {
  tenant: Tenant;
  unit: Unit;
  property: Property;
  payments: Payment[];
}

export interface UnitWithDetails extends Unit {
  property: Property;
  tenant?: Tenant;
  currentInvoice?: Invoice;
}
