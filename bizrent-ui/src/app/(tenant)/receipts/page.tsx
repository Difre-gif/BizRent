"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { FileText } from "lucide-react";

export default function ReceiptsPage() {
  return (
    <div className="max-w-lg mx-auto pb-24 lg:pb-8 pt-4 px-4 lg:pt-8">
      <PageHeader title="Receipts" />
      
      <div className="mt-8 bg-white border border-slate-200 rounded-xl h-64 flex items-center justify-center">
        <EmptyState 
          icon={<FileText className="h-12 w-12 text-slate-300" />}
          title="No receipts yet"
          description="Your past payment receipts will appear here once you've paid an invoice."
        />
      </div>
    </div>
  );
}