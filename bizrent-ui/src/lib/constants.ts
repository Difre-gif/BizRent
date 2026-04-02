import type { InvoiceStatus, PaymentStatus } from "@/types";

// ─── Status display config ─────────────────────────────────────────────────────

export const INVOICE_STATUS_CONFIG: Record<
  InvoiceStatus,
  { label: string; bg: string; text: string; iconName: string }
> = {
  PENDING: {
    label: "Pending",
    bg: "bg-[#FEF3C7]",
    text: "text-[#92400E]",
    iconName: "Clock",
  },
  PAID: {
    label: "Paid",
    bg: "bg-[#D1FAE5]",
    text: "text-[#065F46]",
    iconName: "CheckCheck",
  },
  DUE: {
    label: "Due",
    bg: "bg-[#E0E7FF]",
    text: "text-[#3730A3]",
    iconName: "CalendarClock",
  },
  OVERDUE: {
    label: "Overdue",
    bg: "bg-[#FED7AA]",
    text: "text-[#9A3412]",
    iconName: "AlertTriangle",
  },
  PARTIAL: {
    label: "Partial",
    bg: "bg-[#DBEAFE]",
    text: "text-[#1E40AF]",
    iconName: "CircleDashed",
  },
};

export const PAYMENT_STATUS_CONFIG: Record<
  PaymentStatus,
  { label: string; bg: string; text: string; iconName: string }
> = {
  PENDING: {
    label: "Pending Review",
    bg: "bg-[#FEF3C7]",
    text: "text-[#92400E]",
    iconName: "Clock",
  },
  APPROVED: {
    label: "Approved",
    bg: "bg-[#D1FAE5]",
    text: "text-[#065F46]",
    iconName: "CheckCircle",
  },
  REJECTED: {
    label: "Rejected",
    bg: "bg-[#FEE2E2]",
    text: "text-[#991B1B]",
    iconName: "XCircle",
  },
  PARTIAL: {
    label: "Partial",
    bg: "bg-[#DBEAFE]",
    text: "text-[#1E40AF]",
    iconName: "CircleDashed",
  },
};

// ─── Navigation ────────────────────────────────────────────────────────────────

export const LANDLORD_NAV = [
  { label: "Dashboard", href: "/landlord/dashboard", icon: "LayoutDashboard" },
  { label: "Properties", href: "/landlord/properties", icon: "Building2" },
  { label: "Payments", href: "/landlord/payments", icon: "CreditCard" },
  { label: "Reports", href: "/landlord/reports", icon: "BarChart3" },
  { label: "Settings", href: "/landlord/settings", icon: "Settings" },
  { label: "Billing", href: "/landlord/billing", icon: "Receipt" },
];

export const TENANT_NAV = [
  { label: "Home", href: "/tenant/home", icon: "Home" },
  { label: "Invoices", href: "/tenant/invoices", icon: "FileText" },
  { label: "Receipts", href: "/tenant/receipts", icon: "Receipt" },
  { label: "Profile", href: "/tenant/profile", icon: "User" },
];

// ─── Billing plans ─────────────────────────────────────────────────────────────

export const BILLING_PLANS = [
  {
    tier: "STARTER",
    name: "Starter",
    priceMonthly: 15000,
    maxUnits: 15,
    maxProperties: 3,
    features: ["Up to 15 units", "3 properties", "MoMo payments", "Email support"],
  },
  {
    tier: "GROWTH",
    name: "Growth",
    priceMonthly: 35000,
    maxUnits: 60,
    maxProperties: 15,
    features: [
      "Up to 60 units",
      "15 properties",
      "MoMo + Bank payments",
      "CSV & PDF exports",
      "Priority support",
      "Team members (up to 3)",
    ],
  },
  {
    tier: "PRO",
    name: "Pro",
    priceMonthly: 75000,
    maxUnits: 200,
    maxProperties: 50,
    features: [
      "Up to 200 units",
      "50 properties",
      "All payment methods",
      "Advanced analytics",
      "Custom SMS reminders",
      "Unlimited team members",
      "Dedicated account manager",
    ],
  },
];
