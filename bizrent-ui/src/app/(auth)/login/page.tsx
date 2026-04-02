"use client";

import { useState } from "react";
import { PrimaryButton } from "@/components/ui/Button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { apiClient } from "@/lib/apiClient";
import { useAuthStore } from "@/lib/store/authStore";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

export default function LoginPage() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      const { accessToken, refreshToken } = response.data;
      
      const decoded: any = jwtDecode(accessToken);
      
      Cookies.set("bizrent_token", accessToken, { expires: 1 });
      Cookies.set("bizrent_role", decoded.role, { expires: 1 });
      
      setAuth({
        userId: decoded.sub,
        email: decoded.email,
        role: decoded.role,
        orgId: decoded.orgId,
      }, accessToken);

      if (decoded.role === 'TENANT') {
        router.push("/home");
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed. Please check your credentials.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-bizrent-light">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-bizrent-navy flex-col justify-center px-16 text-white relative overflow-hidden">
        <div className="absolute top-8 left-16 font-bold text-2xl tracking-tight">
          <span className="text-white">Biz</span>
          <span className="text-bizrent-emerald">Rent</span>
        </div>
        <div className="max-w-md z-10">
          <h1 className="text-4xl font-bold mb-6 leading-tight">Stop chasing.<br/>Start collecting.</h1>
          <ul className="space-y-4 text-slate-300">
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-bizrent-emerald" />
              Automate rent collection via Mobile Money
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-bizrent-emerald" />
              Track payments and overdue units instantly
            </li>
            <li className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-bizrent-emerald" />
              Professional invoices and receipts for tenants
            </li>
          </ul>
        </div>
        {/* Background decorative elements */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-bizrent-blue rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/4 -left-12 w-64 h-64 bg-bizrent-indigo rounded-full opacity-20 blur-3xl" />
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden font-bold text-2xl tracking-tight mb-8">
            <span className="text-bizrent-navy">Biz</span>
            <span className="text-bizrent-emerald">Rent</span>
          </div>
          <h2 className="text-2xl font-bold text-bizrent-slate mb-2">Welcome back</h2>
          <p className="text-slate-500 mb-8 text-sm">Sign in to manage your properties and collections.</p>

          <form onSubmit={handleLogin} className="space-y-5">
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

            <div className="space-y-1">
              <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(""); }}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bizrent-blue transition-all pr-10 ${error ? "border-bizrent-red" : "border-slate-300"}`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && <p className="text-sm text-bizrent-red">{error}</p>}

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-bizrent-navy focus:ring-bizrent-navy" />
                <span className="text-sm text-slate-600">Remember me</span>
              </label>
              <Link href="/forgot-password" className="text-sm font-medium text-bizrent-blue hover:text-bizrent-blue">Forgot password?</Link>
            </div>

            <PrimaryButton type="submit" fullWidth className="mt-6" isLoading={isLoading}>
              Sign In
            </PrimaryButton>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            New to BizRent? <Link href="/register" className="font-medium text-bizrent-blue hover:text-bizrent-blue">Create your account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}