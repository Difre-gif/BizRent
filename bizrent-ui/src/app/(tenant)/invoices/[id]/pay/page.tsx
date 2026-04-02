"use client";

import { use, useState } from "react";
import { Card } from "@/components/ui/Card";
import { PrimaryButton } from "@/components/ui/Button";
import { FileUploadZone } from "@/components/ui/FileUploadZone";
import { ArrowLeft, Building2, CheckCircle2, Loader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { notFound } from "next/navigation";
import { z } from "zod";
import { useToast } from "@/components/ui/Toast";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiClient } from "@/lib/apiClient";
import { createClient } from "@supabase/supabase-js";
import { useAuthStore } from "@/lib/store/authStore";

const momoSchema = z.object({
  transactionId: z
    .string()
    .min(8, "Transaction ID must be at least 8 characters.")
    .regex(/^[A-Z]{2}[0-9]{10,20}$/, "Invalid MoMo transaction ID format. It should look like MP26040100001234."),
  file: z
    .instanceof(File)
    .refine(f => f.size <= 5 * 1024 * 1024, "File must be under 5MB.")
    .refine(f => ["image/jpeg", "image/png", "application/pdf"].includes(f.type), "File must be JPG, PNG, or PDF.")
    .optional()
});

// Initialize Supabase client for storage uploads
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ippbpimivjuabjijuwvv.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'dummy'
);

export default function SubmitPaymentProofPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const resolvedParams = use(params);
  const invoiceId = resolvedParams.id;
  const user = useAuthStore(state => state.user);

  const { data: invoice, isLoading, error: fetchError } = useQuery({
    queryKey: ['invoice', invoiceId],
    queryFn: async () => {
      const res = await apiClient.get(`/invoices/${invoiceId}`);
      return res.data;
    }
  });

  const [method, setMethod] = useState<"MOMO" | "BANK">("MOMO");
  const [transactionId, setTransactionId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (method === "MOMO") {
      const validation = momoSchema.safeParse({ transactionId, file: file || undefined });
      if (!validation.success) {
        setError(validation.error.issues[0].message);
        return;
      }
    } else {
      if (!transactionId) {
        setError("Please enter your Bank transaction ID.");
        return;
      }
      if (!file) {
        setError("Bank transfers require a payment proof file.");
        return;
      }
    }
    
    setIsSubmitting(true);
    setError("");

    try {
      let proof_file_url = undefined;

      // 1. Upload to Supabase Storage if file exists
      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${user?.orgId}/${fileName}`;

        // Get auth token to pass to supabase so RLS works
        const token = useAuthStore.getState().token;

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('payment-proofs')
          .upload(filePath, file, {
            upsert: false,
          });

        if (uploadError) {
          throw new Error("Failed to upload proof file: " + uploadError.message);
        }
        
        proof_file_url = uploadData.path;
      }

      // 2. Submit payment to API
      await apiClient.post('/payments', {
        invoice_id: invoiceId,
        amount: Number(invoice.amount_due) - Number(invoice.amount_paid), // Pay remaining balance
        payment_method: method,
        transaction_id: transactionId,
        proof_file_url,
      });

      toast({
        variant: "success",
        title: "Payment Submitted",
        description: "Your payment has been submitted and is waiting for landlord approval."
      });
      router.push(`/home`);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || "An error occurred while submitting payment.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin text-bizrent-navy" /></div>;
  }

  if (fetchError || !invoice) {
    return notFound();
  }

  return (
    <div className="max-w-lg mx-auto pb-24 lg:pb-8 pt-4 px-4 lg:pt-8">
      <Link href="/home" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-bizrent-slate mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4" /> Back to Home
      </Link>

      <Card className="mb-6 p-0 overflow-hidden bg-bizrent-navy text-white border-none">
        <div className="p-5 flex items-start gap-4">
          <div className="p-3 bg-white/10 rounded-xl">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-blue-200 mb-0.5">{invoice.units?.properties?.name || 'Property'} — Unit {invoice.units?.unit_number}</p>
            <p className="text-[32px] font-bold font-mono tracking-tight mb-1 leading-none">
              RWF {(Number(invoice.amount_due) - Number(invoice.amount_paid)).toLocaleString()}
            </p>
            <p className="text-xs text-blue-200">
              Due {new Date(invoice.due_date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </div>
      </Card>

      <div className="mb-8 px-2">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2" />
          <div className="absolute left-0 top-1/2 w-full h-0.5 bg-bizrent-emerald -z-10 -translate-y-1/2" />
          
          <div className="flex flex-col items-center gap-1 bg-bizrent-light px-2">
            <CheckCircle2 className="h-5 w-5 text-bizrent-emerald bg-white rounded-full" />
            <span className="text-[10px] font-bold text-bizrent-emerald uppercase tracking-wider">Step 1</span>
          </div>
          <div className="flex flex-col items-center gap-1 bg-bizrent-light px-2">
            <CheckCircle2 className="h-5 w-5 text-bizrent-emerald bg-white rounded-full" />
            <span className="text-[10px] font-bold text-bizrent-emerald uppercase tracking-wider">Step 2</span>
          </div>
          <div className="flex flex-col items-center gap-1 bg-bizrent-light px-2">
            <div className="h-5 w-5 rounded-full border-2 border-bizrent-blue bg-white flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-bizrent-blue" />
            </div>
            <span className="text-[10px] font-bold text-bizrent-blue uppercase tracking-wider">Step 3</span>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-bizrent-slate">How did you pay?</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setMethod("MOMO")}
              className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                method === "MOMO" 
                  ? "border-[#FFCC00] bg-[#FFCC00]/10 text-slate-900" 
                  : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-[#FFCC00] flex items-center justify-center text-white font-bold text-lg mb-1 shadow-sm">M</div>
              <span className="font-semibold text-sm">MTN MoMo</span>
            </button>
            <button
              type="button"
              onClick={() => setMethod("BANK")}
              className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
                method === "BANK" 
                  ? "border-bizrent-navy bg-[#E0E7FF] text-bizrent-navy" 
                  : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 mb-1">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="font-semibold text-sm">Bank Transfer</span>
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-bizrent-slate">
            Enter your {method === "MOMO" ? "MoMo" : "Bank"} transaction ID
          </h2>
          <div className="space-y-2">
            <input
              type="text"
              value={transactionId}
              onChange={(e) => {
                setTransactionId(e.target.value.toUpperCase());
                setError("");
              }}
              placeholder="e.g. MP26..."
              className={`w-full px-4 py-3 text-lg font-mono border-2 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-50 transition-all uppercase ${
                error ? "border-bizrent-red focus:border-bizrent-red" : "border-slate-300 focus:border-bizrent-blue"
              }`}
            />
            {error ? (
              <p className="text-sm text-bizrent-red">{error}</p>
            ) : (
              <p className="text-sm text-slate-500 ml-1">
                This is the reference code in your {method === "MOMO" ? "MoMo confirmation SMS" : "bank receipt"}.
              </p>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-bizrent-slate">Attach Screenshot (Optional)</h2>
          <FileUploadZone 
            onFileSelect={setFile} 
            accept="image/*,.pdf" 
            maxSizeMB={5} 
            label={`Upload ${method === "MOMO" ? "SMS screenshot" : "receipt PDF/image"}`} 
          />
        </div>

        <div className="pt-4 pb-8">
          <PrimaryButton 
            type="submit" 
            fullWidth 
            size="lg" 
            isLoading={isSubmitting}
            disabled={!transactionId || (method === "BANK" && !file)}
          >
            Submit Payment Proof
          </PrimaryButton>
          <p className="text-center text-xs text-slate-400 mt-4">
            By submitting, you confirm that the provided information is accurate. False submissions may lead to penalties.
          </p>
        </div>

      </form>
    </div>
  );
}