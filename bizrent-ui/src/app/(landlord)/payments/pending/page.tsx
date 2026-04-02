"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { PrimaryButton, DangerButton, SecondaryButton } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Modal } from "@/components/ui/Modal";
import { useToast } from "@/components/ui/Toast";
import { EmptyState } from "@/components/ui/EmptyState";
import { CheckCircle, AlertTriangle, Eye, Loader2 } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ippbpimivjuabjijuwvv.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy'
);

export default function PendingPaymentsPage() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(null);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);
  const [isScreenshotModalOpen, setIsScreenshotModalOpen] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");

  const { data: payments = [], isLoading } = useQuery({
    queryKey: ['payments', 'pending'],
    queryFn: async () => {
      const res = await apiClient.get('/payments/pending');
      return res.data;
    }
  });

  const selectedPayment = payments.find((p: any) => p.id === selectedPaymentId);

  const approveMutation = useMutation({
    mutationFn: (id: string) => apiClient.patch(`/payments/${id}/approve`),
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Payment Approved",
        description: "The invoice has been marked as PAID and tenant notified.",
      });
      queryClient.invalidateQueries({ queryKey: ['payments', 'pending'] });
      queryClient.invalidateQueries({ queryKey: ['reports', 'summary'] });
      setSelectedPaymentId(null);
    }
  });

  const rejectMutation = useMutation({
    mutationFn: ({ id, reason }: { id: string, reason: string }) => apiClient.patch(`/payments/${id}/reject`, { rejection_reason: reason }),
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Payment Rejected",
        description: "The payment was rejected and tenant has been notified to resubmit.",
      });
      queryClient.invalidateQueries({ queryKey: ['payments', 'pending'] });
      setIsRejectModalOpen(false);
      setRejectionReason("");
      setSelectedPaymentId(null);
    }
  });

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin text-bizrent-navy h-10 w-10" /></div>;
  }

  if (payments.length === 0) {
    return (
      <div className="max-w-6xl mx-auto pb-24 lg:pb-8 px-4">
        <PageHeader title="Pending Payments" />
        <div className="mt-8 bg-white border border-slate-200 rounded-lg h-96 flex items-center justify-center">
          <EmptyState 
            icon={<CheckCircle className="h-12 w-12 text-bizrent-emerald" />}
            title="All clear"
            description="No payments waiting for your review. New submissions from tenants will appear here for you to approve or reject."
          />
        </div>
      </div>
    );
  }

  const getFileUrl = (path: string) => {
    const { data } = supabase.storage.from('payment-proofs').getPublicUrl(path);
    return data.publicUrl;
  };

  return (
    <div className="max-w-6xl mx-auto pb-24 lg:pb-8 h-full flex flex-col px-4">
      <div className="flex items-center gap-3 mb-6 mt-4">
        <h1 className="text-2xl font-bold text-bizrent-slate">Pending Payments</h1>
        <span className="bg-[#FEF3C7] text-bizrent-amber font-bold text-sm px-2.5 py-0.5 rounded-full">
          {payments.length}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1 min-h-[600px]">
        {/* Left Panel - List */}
        <div className="w-full lg:w-[40%] flex flex-col gap-3 overflow-y-auto pr-1">
          {payments.map((payment: any) => (
            <button
              key={payment.id}
              onClick={() => setSelectedPaymentId(payment.id)}
              className={`text-left p-4 rounded-xl border transition-all ${
                selectedPaymentId === payment.id 
                  ? "border-bizrent-navy bg-[#E0E7FF]/50 shadow-sm" 
                  : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <StatusBadge status="PENDING" size="sm" />
                <span className="text-xs text-slate-500">Submitted {new Date(payment.submitted_at).toLocaleDateString()}</span>
              </div>
              <h3 className="font-semibold text-bizrent-slate text-lg">{payment.users_payments_tenant_user_idTousers?.full_name}</h3>
              <p className="text-sm text-slate-600 mb-3">{payment.invoices?.units?.properties?.name} • {payment.invoices?.units?.unit_number}</p>
              
              <div className="flex items-end justify-between mt-4 pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Amount</p>
                  <p className="font-bold font-mono text-bizrent-slate">RWF {Number(payment.amount).toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Trans ID</p>
                  <p className="font-mono text-xs text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded">{payment.transaction_id || 'N/A'}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Right Panel - Detail */}
        {selectedPayment ? (
          <div className="w-full lg:w-[60%] bg-white border border-slate-200 rounded-xl p-6 lg:p-8 flex flex-col h-full sticky top-6 shadow-sm">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-xl font-bold text-bizrent-slate mb-1">Review Payment</h2>
                <p className="text-sm text-slate-500">Verify the transaction details below to approve the payment.</p>
              </div>
              <StatusBadge status="PENDING" />
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-xs text-slate-500 mb-1">Tenant Name</p>
                <p className="font-medium text-slate-800">{selectedPayment.users_payments_tenant_user_idTousers?.full_name}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Unit</p>
                <p className="font-medium text-slate-800">{selectedPayment.invoices?.units?.properties?.name} — {selectedPayment.invoices?.units?.unit_number}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Invoice Due Date</p>
                <p className="font-medium text-slate-800">{new Date(selectedPayment.invoices?.due_date).toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-1">Payment Method</p>
                <p className="font-medium text-slate-800 flex items-center gap-2">
                  {selectedPayment.payment_method === 'MOMO' ? (
                    <><span className="w-2 h-2 rounded-full bg-yellow-400"></span> MTN MoMo</>
                  ) : (
                    <><span className="w-2 h-2 rounded-full bg-blue-600"></span> Bank Transfer</>
                  )}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-lg p-5 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-slate-600">Amount Paid</span>
                <span className="text-xl font-bold text-bizrent-slate font-mono">RWF {Number(selectedPayment.amount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-slate-200">
                <span className="text-sm text-slate-600">Transaction ID</span>
                <span className="font-mono text-sm font-medium bg-white px-2 py-1 rounded border border-slate-200 text-bizrent-slate">
                  {selectedPayment.transaction_id || 'N/A'}
                </span>
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm font-medium text-slate-700 mb-3">Proof of Payment</p>
              {selectedPayment.file_attachments ? (
                <div>
                  <button
                    onClick={() => setIsScreenshotModalOpen(true)}
                    className="w-full h-32 border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer gap-2"
                  >
                    <Eye className="h-6 w-6 text-slate-400" />
                    <span className="text-sm font-medium text-bizrent-blue">View Screenshot</span>
                  </button>
                  <Modal
                    open={isScreenshotModalOpen}
                    onClose={() => setIsScreenshotModalOpen(false)}
                    title="Payment Proof Screenshot"
                  >
                    <div className="overflow-auto max-h-[70vh]">
                      <img
                        src={getFileUrl(selectedPayment.file_attachments.file_path)}
                        alt="Payment proof"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </Modal>
                </div>
              ) : (
                <div className="w-full h-32 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center bg-slate-50">
                  <p className="text-sm text-slate-400">No screenshot attached</p>
                </div>
              )}
            </div>

            <div className="mt-auto flex items-center gap-3 pt-6 border-t border-slate-100">
              <DangerButton className="w-1/3" onClick={() => setIsRejectModalOpen(true)}>
                Reject
              </DangerButton>
              <PrimaryButton 
                className="w-2/3 bg-bizrent-emerald hover:bg-green-600 focus-visible:ring-bizrent-emerald" 
                onClick={() => approveMutation.mutate(selectedPayment.id)}
                isLoading={approveMutation.isPending}
                disabled={rejectMutation.isPending}
              >
                Approve Payment
              </PrimaryButton>
            </div>
          </div>
        ) : (
          <div className="w-full lg:w-[60%] hidden lg:flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 text-slate-400">
            <p className="font-medium">Select a payment to review details</p>
          </div>
        )}
      </div>

      <Modal 
        open={isRejectModalOpen} 
        onClose={() => setIsRejectModalOpen(false)}
        title="Reject Payment"
        footer={
          <>
            <SecondaryButton onClick={() => setIsRejectModalOpen(false)}>Cancel</SecondaryButton>
            <DangerButton onClick={() => rejectMutation.mutate({ id: selectedPayment.id, reason: rejectionReason })} disabled={!rejectionReason.trim()} isLoading={rejectMutation.isPending}>Confirm Rejection</DangerButton>
          </>
        }
      >
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 bg-[#FEF3C7] text-[#92400E] rounded-lg border border-amber-200 mb-4">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 mt-0.5" />
            <p className="text-sm">Rejecting this payment will mark the invoice back to its previous state (DUE or OVERDUE) and notify the tenant to submit a new payment proof.</p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Reason for rejection</label>
            <textarea 
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              className="w-full p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-bizrent-red min-h-[100px] text-sm"
              placeholder="e.g. Transaction ID could not be verified."
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
