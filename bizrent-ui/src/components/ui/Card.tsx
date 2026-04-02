import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  header?: ReactNode;
  padding?: boolean;
}

export function Card({ children, className, header, padding = true }: CardProps) {
  return (
    <div
      className={cn(
        "bg-white border border-slate-200 rounded-lg shadow-[0_1px_3px_0_rgba(0,0,0,0.08)]",
        className
      )}
    >
      {header && (
        <div className="px-5 py-4 border-b border-slate-100">{header}</div>
      )}
      <div className={padding ? "p-5" : ""}>{children}</div>
    </div>
  );
}

interface DashboardMetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: ReactNode;
  color?: "navy" | "emerald" | "amber" | "blue" | "red" | "orange";
  trend?: { value: string; positive: boolean };
}

const COLOR_MAP = {
  navy:    "bg-[#E0E7FF] text-bizrent-navy",
  emerald: "bg-[#D1FAE5] text-bizrent-emerald",
  amber:   "bg-[#FEF3C7] text-bizrent-amber",
  blue:    "bg-indigo-100 text-bizrent-blue",
  red:     "bg-[#FEE2E2] text-bizrent-red",
  orange:  "bg-orange-100 text-bizrent-orange",
};

export function DashboardMetricCard({
  title,
  value,
  subtitle,
  icon,
  color = "navy",
  trend,
}: DashboardMetricCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.08)] flex items-start gap-4">
      <div className={`rounded-full p-2.5 flex-shrink-0 ${COLOR_MAP[color]}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-slate-500 uppercase tracking-wide">{title}</p>
        <p className="text-[28px] font-bold text-bizrent-slate leading-tight mt-0.5">{value}</p>
        {subtitle && <p className="text-xs text-slate-500 mt-1">{subtitle}</p>}
        {trend && (
          <p className={`text-xs font-medium mt-1 ${trend.positive ? "text-bizrent-emerald" : "text-bizrent-red"}`}>
            {trend.positive ? "↑" : "↓"} {trend.value}
          </p>
        )}
      </div>
    </div>
  );
}
