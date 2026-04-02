"use client";

import * as ToastPrimitive from "@radix-ui/react-toast";
import { CheckCircle, XCircle, AlertTriangle, Info, X } from "lucide-react";
import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type ToastVariant = "success" | "error" | "warning" | "info";

interface Toast {
  id: string;
  variant: ToastVariant;
  title: string;
  description?: string;
}

interface ToastContextValue {
  toast: (opts: Omit<Toast, "id">) => void;
}

const ToastContext = createContext<ToastContextValue>({ toast: () => {} });

export const useToast = () => useContext(ToastContext);

const VARIANT_CONFIG: Record<ToastVariant, { container: string; text: string; icon: typeof Info; title: string }> = {
  success: { container: "bg-white border-l-4 border-bizrent-emerald", icon: CheckCircle, title: "text-bizrent-slate", text: "text-slate-600" },
  error:   { container: "bg-white border-l-4 border-bizrent-red", icon: XCircle, title: "text-bizrent-slate", text: "text-slate-600" },
  warning: { container: "bg-white border-l-4 border-bizrent-amber", icon: AlertTriangle, title: "text-bizrent-slate", text: "text-slate-600" },
  info:    { container: "bg-white border-l-4 border-bizrent-blue", icon: Info, title: "text-bizrent-slate", text: "text-slate-600" },
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback((opts: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...opts, id }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4500);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      <ToastPrimitive.Provider swipeDirection="right">
        {children}
        {toasts.map((t) => {
          const config = VARIANT_CONFIG[t.variant];
          const Icon = config.icon;
          return (
              <ToastPrimitive.Root
                key={t.id}
                open
                className={cn(
                  "flex items-start gap-3 p-4 rounded-lg shadow-lg min-w-[280px] max-w-sm",
                  "data-[state=open]:animate-in data-[state=closed]:animate-out",
                  "data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-right-full",
                  config.container
                )}
              >
              <Icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${config.icon === CheckCircle ? "text-bizrent-emerald" : config.icon === XCircle ? "text-bizrent-red" : config.icon === AlertTriangle ? "text-bizrent-amber" : "text-bizrent-blue"}`} />
              <div className="flex-1 min-w-0">
                <ToastPrimitive.Title className={`text-sm font-semibold ${config.title}`}>
                  {t.title}
                </ToastPrimitive.Title>
                {t.description && (
                  <ToastPrimitive.Description className={`text-xs mt-0.5 ${config.text} opacity-80`}>
                    {t.description}
                  </ToastPrimitive.Description>
                )}
              </div>
              <ToastPrimitive.Close className={`${config.text} opacity-60 hover:opacity-100`}>
                <X className="h-4 w-4" />
              </ToastPrimitive.Close>
            </ToastPrimitive.Root>
          );
        })}
        <ToastPrimitive.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2 z-[100]" />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
}
