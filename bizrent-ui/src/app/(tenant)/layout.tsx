import { TenantBottomNav } from "@/components/tenant/BottomNav";
import { RoleSwitcher } from "@/components/shared/RoleSwitcher";
import type { ReactNode } from "react";

export default function TenantLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-bizrent-light flex flex-col max-w-md mx-auto lg:max-w-full">
      <main className="flex-1 pb-20">
        {children}
      </main>
      <TenantBottomNav />
      <RoleSwitcher />
    </div>
  );
}
