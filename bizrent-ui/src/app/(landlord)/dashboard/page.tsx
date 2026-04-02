"use client";

import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/Card";
import { Building2, Grid2X2, Clock, CheckCircle2, TrendingUp, ArrowRight, Loader2, Plus, Layers } from "lucide-react";
import Link from "next/link";
import { apiClient } from "@/lib/apiClient";
import { StatusBanner } from "@/components/ui/StatusBanner";
import { DashboardMetricCard } from "@/components/ui/Card";
import { useAuthStore } from "@/lib/store/authStore";
import { PageHeader } from "@/components/ui/PageHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { EmptyState } from "@/components/ui/EmptyState";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Button";

export default function DashboardPage() {
  const user = useAuthStore(state => state.user);

  const { data: summary, isLoading: loadingSummary } = useQuery({
    queryKey: ['reports', 'summary'],
    queryFn: async () => {
      const res = await apiClient.get('/reports/summary');
      return res.data;
    }
  });

  const { data: properties, isLoading: loadingProperties } = useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      const res = await apiClient.get('/properties');
      return res.data;
    }
  });

  const { data: pendingPaymentsList, isLoading: loadingPayments } = useQuery({
    queryKey: ['payments', 'pending'],
    queryFn: async () => {
      const res = await apiClient.get('/payments/pending');
      return res.data;
    }
  });

  if (loadingSummary || loadingProperties || loadingPayments) {
    return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin text-bizrent-navy h-10 w-10" /></div>;
  }

  const {
    totalProperties = 0,
    totalUnits = 0,
    pendingPayments = 0,
    collectionRate = 0,
  } = summary || {};

  const dateStr = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-24 lg:pb-8">
      <PageHeader 
        title={`Good morning, ${user?.email?.split('@')[0] || 'Landlord'}.`}
        subtitle={dateStr}
      />

      <div className="flex flex-col gap-3">
        {pendingPayments > 0 && (
          <StatusBanner 
            type="warning" 
            message={`${pendingPayments} payment${pendingPayments > 1 ? 's' : ''} is waiting for your review.`}
            action={
              <Link href="/payments/pending">
                <span className="text-sm font-medium underline text-[#92400E]">Review Now</span>
              </Link>
            }
          />
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardMetricCard 
          title="Total Properties"
          value={totalProperties}
          icon={<Building2 className="h-5 w-5" />}
          color="navy"
        />
        <DashboardMetricCard 
          title="Total Units"
          value={totalUnits}
          icon={<Layers className="h-5 w-5" />}
          color="blue"
        />
        <DashboardMetricCard 
          title="Pending Payments"
          value={pendingPayments}
          icon={<Clock className="h-5 w-5" />}
          color="amber"
        />
        <DashboardMetricCard 
          title="Collection Rate"
          value={`${collectionRate}%`}
          subtitle="This Month"
          icon={<TrendingUp className="h-5 w-5" />}
          color="emerald"
        />
      </div>

      <h2 className="text-lg font-semibold text-bizrent-slate mt-8 mb-4">Your Properties</h2>
      {!properties || properties.length === 0 ? (
        <Card>
          <EmptyState
            icon={<Building2 className="h-12 w-12 text-slate-400" />}
            title="No properties yet"
            description="Add your first property to get started."
            action={<PrimaryButton><Plus className="h-4 w-4 mr-1" /> Add Property</PrimaryButton>}
          />
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {properties.map((prop: any) => (
            <Card key={prop.id} className="hover:shadow-card-hover transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-bizrent-slate">{prop.name}</h3>
                  <p className="text-sm text-slate-500 mt-0.5">{prop.city}</p>
                </div>
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md tracking-wider">
                  {prop.property_type}
                </span>
              </div>
              
              <div className="space-y-4 mb-5">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-500">Occupancy</span>
                    <span className="font-medium">{prop.units?.length || 0}/{prop.total_units} units</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-bizrent-emerald rounded-full" 
                      style={{ width: `${((prop.units?.length || 0) / Math.max(prop.total_units, 1)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <Link href={`/properties/${prop.id}`}>
                <SecondaryButton fullWidth size="sm">View Details</SecondaryButton>
              </Link>
            </Card>
          ))}
          
          <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 flex flex-col items-center justify-center text-center hover:border-bizrent-navy hover:bg-slate-50 transition-colors cursor-pointer min-h-[220px]">
            <div className="h-10 w-10 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mb-3">
              <Plus className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-bizrent-slate">Add Property</h3>
            <p className="text-sm text-slate-500 mt-1">Register a new building</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card header={<h3 className="font-semibold text-bizrent-slate">Recent Payments</h3>}>
          <div className="space-y-4">
            {pendingPaymentsList?.map((p: any) => (
              <div key={p.id} className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#E0E7FF] flex items-center justify-center text-bizrent-blue font-semibold">
                    {p.users_payments_tenant_user_idTousers?.full_name?.charAt(0) || 'T'}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-bizrent-slate">{p.users_payments_tenant_user_idTousers?.full_name}</p>
                    <p className="text-xs text-slate-500">{p.invoices?.units?.properties?.name} • {p.invoices?.units?.unit_number}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium font-mono text-sm">RWF {Number(p.amount).toLocaleString()}</p>
                  <StatusBadge status={p.status} size="sm" className="mt-1" />
                </div>
              </div>
            ))}
            {(!pendingPaymentsList || pendingPaymentsList.length === 0) && (
              <p className="text-center text-slate-500 text-sm">No recent payments.</p>
            )}
            
            <Link href="/payments" className="flex items-center justify-center gap-2 text-sm font-medium text-bizrent-blue hover:text-bizrent-blue pt-2">
              View all payments <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}