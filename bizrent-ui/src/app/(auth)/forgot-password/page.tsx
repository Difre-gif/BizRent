"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    // Mock success
    setIsSuccess(true);
  };

  return (
    <div className="flex min-h-screen bg-bizrent-light items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <div className="w-8 h-8 bg-bizrent-navy rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="text-xl font-bold text-bizrent-navy">BizRent</span>
        </div>

        <Card className="p-8">
          {isSuccess ? (
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <CheckCircle className="h-12 w-12 text-bizrent-emerald" />
              </div>
              <h2 className="text-2xl font-bold text-bizrent-slate">Check your inbox</h2>
              <p className="text-slate-500 text-sm">
                A password reset link has been sent to <span className="font-medium text-slate-700">{email}</span>.
              </p>
              <div className="pt-4">
                <Link href="/login" className="text-sm font-medium text-bizrent-blue hover:text-bizrent-blue">
                  ← Back to Sign In
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-bold text-bizrent-slate">Reset your password</h2>
                <p className="text-slate-500 text-sm">Enter your email address and we'll send you a reset link.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">Email address</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bizrent-blue transition-all ${error ? "border-bizrent-red" : "border-slate-300"}`}
                    placeholder="claudette@mutoniproperties.rw"
                  />
                </div>

                {error && <p className="text-sm text-bizrent-red">{error}</p>}

                <PrimaryButton type="submit" fullWidth className="mt-2">
                  Send Reset Link
                </PrimaryButton>
              </form>

              <div className="text-center pt-2">
                <Link href="/login" className="text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors inline-flex items-center gap-1">
                  <ArrowLeft className="h-3 w-3" /> Back to Sign In
                </Link>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}