"use client";

import {
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  CalendarClock,
  CheckCheck,
  CircleDashed,
  MinusCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { InvoiceStatus, PaymentStatus } from "@/types";

const ICON_MAP = {
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
  CalendarClock,
  CheckCheck,
  CircleDashed,
  MinusCircle,
};

const STATUS_CONFIG: Record<
  InvoiceStatus | PaymentStatus | "CANCELLED",
  { label: string; bg: string; text: string; icon: keyof typeof ICON_MAP }
> = {
  PENDING:   { label: "Pending",       bg: "bg-[#FEF3C7]", text: "text-[#92400E]", icon: "Clock"         },
  PAID:      { label: "Paid",          bg: "bg-[#D1FAE5]", text: "text-[#065F46]", icon: "CheckCheck"    },
  DUE:       { label: "Due",           bg: "bg-[#E0E7FF]", text: "text-[#3730A3]", icon: "CalendarClock" },
  OVERDUE:   { label: "Overdue",       bg: "bg-[#FED7AA]", text: "text-[#9A3412]", icon: "AlertTriangle" },
  PARTIAL:   { label: "Partial",       bg: "bg-[#DBEAFE]", text: "text-[#1E40AF]", icon: "CircleDashed"  },
  APPROVED:  { label: "Approved",      bg: "bg-[#D1FAE5]", text: "text-[#065F46]", icon: "CheckCircle"   },
  REJECTED:  { label: "Rejected",      bg: "bg-[#FEE2E2]", text: "text-[#991B1B]", icon: "XCircle"       },
  CANCELLED: { label: "Cancelled",     bg: "bg-[#F1F5F9]", text: "text-[#334155]", icon: "MinusCircle"   },
};

interface StatusBadgeProps {
  status: InvoiceStatus | PaymentStatus | "CANCELLED";
  size?: "sm" | "md";
  className?: string;
}

export function StatusBadge({ status, size = "md", className }: StatusBadgeProps) {
  const config = STATUS_CONFIG[status];
  if (!config) return null;

  const Icon = ICON_MAP[config.icon];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium",
        config.bg,
        config.text,
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs",
        className
      )}
    >
      <Icon className={size === "sm" ? "h-3 w-3" : "h-3.5 w-3.5"} />
      {config.label}
    </span>
  );
}
