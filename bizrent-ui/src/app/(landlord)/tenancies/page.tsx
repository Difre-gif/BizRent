"use client";

import { useState, useEffect } from "react";
import { apiClient } from "@/lib/apiClient";
import { PrimaryButton } from "@/components/ui/Button";

interface PendingTenant {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
}

export default function TenanciesPage() {
  const [pendingTenants, setPendingTenants] = useState<PendingTenant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPendingTenants = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.get('/tenants/pending');
      setPendingTenants(response.data);
    } catch (err: any) {
      setError("Failed to load pending tenants.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPendingTenants();
  }, []);

  const handleApprove = async (userId: string) => {
    try {
      await apiClient.patch(`/tenants/${userId}/approve`);
      // Remove from list
      setPendingTenants(pendingTenants.filter(t => t.id !== userId));
      alert("Tenant approved successfully!");
    } catch (err: any) {
      alert("Failed to approve tenant.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-bizrent-navy mb-6">Tenants Management</h1>
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-800">Pending Tenant Requests</h2>
          <p className="text-sm text-slate-500 mt-1">
            Users who have registered as tenants and are waiting to be assigned to an organisation.
          </p>
        </div>
        
        {isLoading ? (
          <div className="p-8 text-center text-slate-500">Loading...</div>
        ) : error ? (
          <div className="p-8 text-center text-bizrent-red">{error}</div>
        ) : pendingTenants.length === 0 ? (
          <div className="p-8 text-center text-slate-500">No pending tenants found.</div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="p-4 text-sm font-semibold text-slate-600">Name</th>
                <th className="p-4 text-sm font-semibold text-slate-600">Email</th>
                <th className="p-4 text-sm font-semibold text-slate-600">Registered On</th>
                <th className="p-4 text-sm font-semibold text-slate-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingTenants.map((tenant) => (
                <tr key={tenant.id} className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 text-sm text-slate-800 font-medium">{tenant.full_name}</td>
                  <td className="p-4 text-sm text-slate-600">{tenant.email}</td>
                  <td className="p-4 text-sm text-slate-500">
                    {new Date(tenant.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4 text-right">
                    <PrimaryButton onClick={() => handleApprove(tenant.id)} size="sm">
                      Approve
                    </PrimaryButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}