"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { PrimaryButton } from "@/components/ui/Button";
import { useAuthStore } from "@/lib/store/authStore";

export default function PendingApprovalPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    // If user has an orgId, they are approved
    if (user?.orgId) {
      router.push("/home");
    }
  }, [user, router]);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-bizrent-light p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-sm p-8 text-center border border-slate-200">
        <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-bizrent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h2 className="text-2xl font-bold text-bizrent-navy mb-4">Account Pending Approval</h2>
        
        <p className="text-slate-600 mb-8 leading-relaxed">
          Your tenant account has been created successfully. However, you need to be approved and linked to a property by your landlord before you can view your dashboard and invoices.
        </p>

        <p className="text-sm text-slate-500 mb-8">
          Please ask your landlord to approve your account from their dashboard.
        </p>

        <PrimaryButton onClick={handleLogout} className="w-full">
          Sign out
        </PrimaryButton>
      </div>
    </div>
  );
}
