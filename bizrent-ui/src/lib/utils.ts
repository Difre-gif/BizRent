import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ─── Class name utility ────────────────────────────────────────────────────────

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── Currency formatting ───────────────────────────────────────────────────────

/**
 * Format a number as RWF currency.
 * Output: "RWF 120,000"
 */
export function formatCurrency(amount: number, currency = "RWF"): string {
  const formatted = new Intl.NumberFormat("en-RW", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
  return `${currency} ${formatted}`;
}

// ─── Date formatting ───────────────────────────────────────────────────────────

/**
 * Format an ISO date string as East Africa readable format.
 * Output: "1 April 2026"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Format an ISO date string as short date.
 * Output: "1 Apr 2026"
 */
export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Format relative time (e.g. "2 hours ago")
 */
export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? "s" : ""} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  return formatDateShort(dateString);
}

/**
 * Calculate how many days overdue an invoice is.
 */
export function daysOverdue(dueDateString: string): number {
  const due = new Date(dueDateString);
  const now = new Date();
  const diffMs = now.getTime() - due.getTime();
  return Math.max(0, Math.floor(diffMs / 86400000));
}

// ─── Percentage ────────────────────────────────────────────────────────────────

export function formatPercent(value: number): string {
  return `${Math.round(value)}%`;
}

// ─── File size ─────────────────────────────────────────────────────────────────

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ─── Initials ──────────────────────────────────────────────────────────────────

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
