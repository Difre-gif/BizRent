"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { StatusBanner } from "@/components/ui/StatusBanner";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import Link from "next/link";
import { FileText, Clock, Loader2 } from "lucide-react";
import { formatDateShort } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { useAuthStore } from "@/lib/store/authStore";

export default function TenantHomePage() {
  const [activeTab, setActiveTab] = useState<"invoices" | "history">("invoices");
  const user = useAuthStore(state => state.user);

  const { data: invoices = [], isLoading: loadingInvoices } = useQuery({
    queryKey: ['tenant', 'invoices'],
    queryFn: async () => {
      const res = await apiClient.get('/invoices');
      return res.data;
    }
  });

  const { data: payments = [], isLoading: loadingPayments } = useQuery({
    queryKey: ['tenant', 'payments'],
    queryFn: async () => {
      const res = await apiClient.get('/payments/tenant');
      return res.data;
    }
  });

  if (loadingInvoices || loadingPayments) {
    return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin text-bizrent-navy" /></div>;
  }

  const totalOutstanding = invoices.reduce((sum: number, inv: any) => {
    return (inv.status === "DUE" || inv.status === "OVERDUE" || inv.status === "PARTIAL") 
      ? sum + (Number(inv.amount_due) - Number(inv.amount_paid)) 
      : sum;
  }, 0);

  return (
    <div className="max-w-lg mx-auto pb-24 lg:pb-8 pt-4 px-4 lg:pt-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-bizrent-slate">Hello, {user?.email?.split('@')[0] || 'Tenant'}.</h1>
          <p className="text-sm text-slate-500">Welcome Back</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-[#E0E7FF] text-bizrent-blue flex items-center justify-center font-bold text-lg uppercase">
          {user?.email?.charAt(0) || 'T'}
        </div>
      </div>

      {totalOutstanding > 0 && (
        <div className="mb-6">
          <StatusBanner 
            type="warning" 
            message={`You have RWF ${totalOutstanding.toLocaleString()} outstanding across ${invoices.filter((i:any) => ["DUE", "OVERDUE", "PARTIAL"].includes(i.status)).length} invoices.`} 
          />
        </div>
      )}

      <div className="flex gap-4 border-b border-slate-200 mb-4">
        <button 
          className={`pb-2 text-sm font-bold uppercase tracking-wider ${activeTab === 'invoices' ? 'text-bizrent-navy border-b-2 border-bizrent-navy' : 'text-slate-400'}`}
          onClick={() => setActiveTab('invoices')}
        >
          Current Invoices
        </button>
        <button 
          className={`pb-2 text-sm font-bold uppercase tracking-wider ${activeTab === 'history' ? 'text-bizrent-navy border-b-2 border-bizrent-navy' : 'text-slate-400'}`}
          onClick={() => setActiveTab('history')}
        >
          Payment History
        </button>
      </div>

      <div className="space-y-4">
        {activeTab === "invoices" ? (
          <>
            {invoices.map((inv: any) => {
              const property = inv.units?.properties;
              const unit = inv.units;
              
              return (
                <Card key={inv.id} className="p-0 overflow-hidden">
                  <div className="p-4 border-b border-slate-100 flex justify-between items-start">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                        <FileText className="h-5 w-5 text-bizrent-navy" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-bizrent-slate">{property?.name || 'Property'}</h3>
                        <p className="text-xs text-slate-500">Unit {unit?.unit_number} • {formatDateShort(inv.billing_period_start)}</p>
                      </div>
                    </div>
                    <StatusBadge status={inv.status} size="sm" />
                  </div>
                  
                  <div className="p-4 bg-slate-50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-500 mb-0.5 tracking-wider">Amount Due</p>
                      <p className="font-bold font-mono text-bizrent-slate">RWF {Number(inv.amount_due).toLocaleString()}</p>
                    </div>
                    
                    <div className="w-full sm:w-auto">
                      {inv.status === "PAID" && (
                        <SecondaryButton fullWidth size="sm" className="border-bizrent-emerald text-bizrent-emerald hover:bg-[#D1FAE5]">
                          Download Receipt
                        </SecondaryButton>
                      )}
                      {inv.status === "PENDING" && (
                        <Link href={`/invoices/${inv.id}`} className="block w-full">
                          <SecondaryButton fullWidth size="sm" className="border-bizrent-amber text-[#92400E] hover:bg-[#FEF3C7]">
                            View Submission
                          </SecondaryButton>
                        </Link>
                      )}
                      {inv.status === "DUE" && (
                        <Link href={`/invoices/${inv.id}/pay`} className="block w-full">
                          <PrimaryButton fullWidth size="sm">Pay Now</PrimaryButton>
                        </Link>
                      )}
                      {inv.status === "OVERDUE" && (
                        <Link href={`/invoices/${inv.id}/pay`} className="block w-full">
                          <PrimaryButton fullWidth size="sm" className="bg-bizrent-red hover:bg-red-800">
                            Pay Now — Overdue
                          </PrimaryButton>
                        </Link>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}

            {invoices.length === 0 && (
              <Card>
                <EmptyState
                  icon={<FileText className="h-12 w-12 text-slate-300" />}
                  title="Nothing due right now"
                  description="Your invoices will appear here when your landlord generates them."
                />
              </Card>
            )}
          </>
        ) : (
          <>
            {payments.map((p: any) => {
              const invoice = p.invoices;
              const property = invoice?.units?.properties;
              const unit = invoice?.units;
              
              return (
                <Card key={p.id} className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-bizrent-slate">{property?.name || 'Property'}</h3>
                    <p className="text-xs text-slate-500">Unit {unit?.unit_number} • {formatDateShort(p.submitted_at)}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold font-mono text-sm text-bizrent-slate mb-1">RWF {Number(p.amount).toLocaleString()}</p>
                    <StatusBadge status={p.status} size="sm" />
                  </div>
                </Card>
              );
            })}

            {payments.length === 0 && (
              <Card>
                <EmptyState
                  icon={<Clock className="h-12 w-12 text-slate-300" />}
                  title="No payment history"
                  description="You haven't made any payments yet."
                />
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
}