import Link from "next/link";
import { Building2, Home, ArrowRight, CheckCircle } from "lucide-react";

export default function RootPage() {
  return (
    <div className="min-h-screen bg-bizrent-light flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 bg-bizrent-navy rounded-xl flex items-center justify-center">
          <Building2 className="h-6 w-6 text-white" />
        </div>
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-bizrent-navy">Biz</span>
          <span className="text-bizrent-emerald">Rent</span>
        </span>
      </div>
      <p className="text-slate-400 text-sm mb-12">Stop chasing. Start collecting.</p>

      <h1 className="text-xl font-bold text-bizrent-slate mb-2 text-center">Interactive Demo</h1>
      <p className="text-slate-400 text-sm mb-8 text-center">Choose your view to explore the platform</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
        <Link
          href="/dashboard"
          className="group bg-white border-2 border-bizrent-navy rounded-2xl p-6 flex flex-col gap-4 hover:bg-bizrent-navy transition-all duration-200 shadow-sm hover:shadow-lg"
        >
          <div className="w-12 h-12 bg-bizrent-navy group-hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
            <Building2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-bizrent-slate group-hover:text-white text-lg transition-colors">Landlord Portal</h2>
            <p className="text-slate-400 group-hover:text-white/70 text-sm mt-1 transition-colors">
              Manage properties, review payments, and track collection rates.
            </p>
          </div>
          <div className="flex items-center gap-1 text-bizrent-navy group-hover:text-white text-sm font-semibold transition-colors">
            Enter <ArrowRight className="h-4 w-4" />
          </div>
        </Link>

        <Link
          href="/home"
          className="group bg-white border-2 border-slate-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-bizrent-emerald hover:bg-[#D1FAE5] transition-all duration-200 shadow-sm hover:shadow-lg"
        >
          <div className="w-12 h-12 bg-slate-100 group-hover:bg-bizrent-emerald rounded-xl flex items-center justify-center transition-colors">
            <Home className="h-6 w-6 text-slate-500 group-hover:text-white transition-colors" />
          </div>
          <div>
            <h2 className="font-bold text-bizrent-slate text-lg group-hover:text-bizrent-forest transition-colors">Tenant Portal</h2>
            <p className="text-slate-400 text-sm mt-1 group-hover:text-bizrent-forest/70 transition-colors">
              View invoices, submit payment proof, and download receipts.
            </p>
          </div>
          <div className="flex items-center gap-1 text-slate-500 group-hover:text-bizrent-emerald text-sm font-semibold transition-colors">
            Enter <ArrowRight className="h-4 w-4" />
          </div>
        </Link>
      </div>

      <div className="mt-10 max-w-md w-full">
        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wide text-center mb-3">Demo Context</p>
        <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-2 text-xs text-slate-500">
          {[
            "Organisation: Mutoni Properties Ltd (GROWTH plan)",
            "Landlord: Mutoni Claudette (OWNER)",
            "Tenant demo: Habimana Patrick — Remera Heights R-201",
            "April 2026 data — 1 PAID · 1 PENDING · 1 OVERDUE · 2 DUE",
          ].map((line) => (
            <div key={line} className="flex items-start gap-2">
              <CheckCircle className="h-3.5 w-3.5 text-bizrent-emerald flex-shrink-0 mt-0.5" />
              <span>{line}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
