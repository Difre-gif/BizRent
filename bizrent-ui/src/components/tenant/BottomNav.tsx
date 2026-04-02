"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, Receipt, User } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home",     href: "/home",     icon: Home     },
  { label: "Invoices", href: "/invoices", icon: FileText },
  { label: "Receipts", href: "/receipts", icon: Receipt  },
  { label: "Profile",  href: "/profile",  icon: User     },
];

export function TenantBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40">
      <div className="flex">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-1 flex flex-col items-center gap-1 py-3 text-xs font-medium transition-colors",
                active ? "text-bizrent-navy" : "text-slate-400"
              )}
            >
              <Icon className={cn("h-5 w-5", active && "stroke-[2.5]")} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function TenantTopBar({ title }: { title?: string }) {
  return (
    <header className="bg-bizrent-navy text-white px-4 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">B</span>
          </div>
          <span className="font-bold">BizRent</span>
        </div>
        {title && <span className="text-white/80 text-sm">{title}</span>}
      </div>
    </header>
  );
}
