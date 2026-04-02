import { LandlordSidebar, LandlordMobileNav } from "@/components/landlord/Sidebar";
import { RoleSwitcher } from "@/components/shared/RoleSwitcher";
import type { ReactNode } from "react";

export default function LandlordLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-bizrent-light">
      <LandlordSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6 pb-24 lg:pb-6 min-h-full">
          {children}
        </div>
      </main>
      <LandlordMobileNav />
      <RoleSwitcher />
    </div>
  );
}
