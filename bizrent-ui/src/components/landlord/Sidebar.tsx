"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, Building2, CreditCard, BarChart3,
  Settings, Receipt, LogOut, ChevronRight, Users
} from "lucide-react";
import { cn, getInitials } from "@/lib/utils";
import { useAuthStore } from "@/lib/store/authStore";
import Cookies from "js-cookie";


const NAV_ITEMS = [
  { label: "Dashboard",   href: "/dashboard",         icon: LayoutDashboard },
  { label: "Properties",  href: "/properties",        icon: Building2       },
  { label: "Payments",    href: "/payments/pending",  icon: CreditCard      },
  { label: "Tenancies",   href: "/tenancies",         icon: Users           },
  { label: "Reports",     href: "/reports",           icon: BarChart3       },
  { label: "Settings",    href: "/settings",          icon: Settings        },
  { label: "Billing",     href: "/billing",           icon: Receipt         },
];

export function LandlordSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const user = useAuthStore(state => state.user);
  const logout = useAuthStore(state => state.logout);

  const handleLogout = () => {
    logout();
    Cookies.remove("bizrent_token");
    Cookies.remove("bizrent_role");
    router.push("/login");
  };

  return (
    <aside className="hidden lg:flex flex-col w-60 bg-bizrent-slate h-screen sticky top-0 flex-shrink-0">
      {/* Logo */}
      <div className="px-5 py-5 border-b border-white/10">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-bizrent-blue rounded-lg flex items-center justify-center">
            <Building2 className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            <span className="text-white">Biz</span>
            <span className="text-bizrent-emerald">Rent</span>
          </span>
        </Link>
        <p className="text-white/40 text-xs mt-1 pl-10">{user?.email?.split('@')[0] || "Landlord"}</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href.replace("/pending", ""));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                active
                  ? "bg-bizrent-navy text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              )}
            >
              <Icon className={cn("h-4 w-4 flex-shrink-0", active ? "text-white" : "text-white/50 group-hover:text-white")} />
              {item.label}
              {active && <ChevronRight className="h-3 w-3 ml-auto text-white/60" />}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-4 py-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-bizrent-blue rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-semibold truncate">{user?.email || "User"}</p>
            <p className="text-white/40 text-[10px] truncate">{user?.role || "OWNER"}</p>
          </div>
          <button onClick={handleLogout} className="text-white/40 hover:text-white transition-colors" title="Sign out">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

// ─── Mobile bottom nav ────────────────────────────────────────────────────────

export function LandlordMobileNav() {
  const pathname = usePathname();
  const MOBILE_ITEMS = NAV_ITEMS.slice(0, 5);

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-40 safe-bottom">
      <div className="flex">
        {MOBILE_ITEMS.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href || pathname.startsWith(item.href.replace("/pending", ""));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-1 flex flex-col items-center gap-1 py-2 text-[10px] font-medium transition-colors",
                active ? "text-bizrent-navy" : "text-slate-400"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

