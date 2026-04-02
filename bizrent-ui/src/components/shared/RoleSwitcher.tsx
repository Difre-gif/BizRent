"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeftRight } from "lucide-react";

export function RoleSwitcher() {
  const path = usePathname();
  const isLandlord = path.startsWith("/dashboard") || path.startsWith("/properties") || path.startsWith("/payments") || path.startsWith("/reports") || path.startsWith("/settings") || path.startsWith("/billing");
  const isTenant   = path.startsWith("/home") || path.startsWith("/invoices") || path.startsWith("/receipts") || path.startsWith("/profile");

  if (!isLandlord && !isTenant) return null;

  return (
    <Link
      href={isLandlord ? "/home" : "/dashboard"}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-bizrent-slate text-white rounded-full text-xs font-semibold shadow-lg hover:bg-slate-700 transition-all hover:scale-105 active:scale-95"
    >
      <ArrowLeftRight className="h-3.5 w-3.5" />
      Switch to {isLandlord ? "Tenant" : "Landlord"} view
    </Link>
  );
}
