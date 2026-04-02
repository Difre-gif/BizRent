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

export default function RegisterPage() {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  
  const [roleType, setRoleType] = useState<"LANDLORD" | "TENANT">("LANDLORD");
  const [showPassword, setShowPassword] = useState(false);
  const [orgName, setOrgName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (roleType === "LANDLORD" && !orgName) {
      setError("Please provide an organisation name.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    
    setIsLoading(true);
    setError("");
    
    try {
      const response = await apiClient.post('/auth/register', { 
        email, 
        password, 
        full_name: fullName, 
        role_type: roleType, 
        organisation_name: roleType === "LANDLORD" ? orgName : undefined 
      });
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

      if (roleType === "TENANT") {
        router.push("/pending");
      } else {
        router.push("/dashboard");
      }
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed. Please try again.");
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
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 py-12 overflow-y-auto">
        <div className="w-full max-w-sm">
          <div className="lg:hidden font-bold text-2xl tracking-tight mb-8">
            <span className="text-bizrent-navy">Biz</span>
            <span className="text-bizrent-emerald">Rent</span>
          </div>
          <h2 className="text-2xl font-bold text-bizrent-slate mb-2">Create Account</h2>
          <p className="text-slate-500 mb-6 text-sm">Sign up to manage your properties and collections.</p>

          <div className="flex bg-slate-100 p-1 rounded-lg mb-6">
            <button
              onClick={() => setRoleType("LANDLORD")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${roleType === "LANDLORD" ? "bg-white text-bizrent-navy shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              type="button"
            >
              Landlord
            </button>
            <button
              onClick={() => setRoleType("TENANT")}
              className={`flex-1 py-2 text-sm font-medium rounded-md transition-all ${roleType === "TENANT" ? "bg-white text-bizrent-navy shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              type="button"
            >
              Tenant
            </button>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {roleType === "LANDLORD" && (
              <div className="space-y-1">
                <label htmlFor="orgName" className="text-sm font-medium text-slate-700">Organisation Name</label>
                <input
                  id="orgName"
                  type="text"
                  value={orgName}
                  onChange={(e) => { setOrgName(e.target.value); setError(""); }}
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bizrent-blue transition-all ${error && !orgName ? "border-bizrent-red" : "border-slate-300"}`}
                  placeholder="Mutoni Properties Ltd"
                />
              </div>
            )}

            <div className="space-y-1">
              <label htmlFor="fullName" className="text-sm font-medium text-slate-700">Full Name</label>
              <input
                id="fullName"
                type="text"
                value={fullName}
                onChange={(e) => { setFullName(e.target.value); setError(""); }}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bizrent-blue transition-all ${error && !fullName ? "border-bizrent-red" : "border-slate-300"}`}
                placeholder="Claudette Mutoni"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-slate-700">Email address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(""); }}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bizrent-blue transition-all ${error && !email ? "border-bizrent-red" : "border-slate-300"}`}
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
                  className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bizrent-blue transition-all pr-10 ${error && (!password || password !== confirmPassword) ? "border-bizrent-red" : "border-slate-300"}`}
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

            <div className="space-y-1">
              <label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">Confirm Password</label>
              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value); setError(""); }}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-bizrent-blue transition-all ${error && password !== confirmPassword ? "border-bizrent-red" : "border-slate-300"}`}
                placeholder="••••••••"
              />
            </div>

            {error && <p className="text-sm text-bizrent-red">{error}</p>}

            <PrimaryButton type="submit" fullWidth className="mt-6" isLoading={isLoading}>
              Create Account
            </PrimaryButton>
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Already have an account? <Link href="/login" className="font-medium text-bizrent-blue hover:text-bizrent-blue">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}