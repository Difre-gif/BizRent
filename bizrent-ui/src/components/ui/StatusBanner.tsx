import type { ReactNode } from "react";
import { AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react";

type BannerType = "warning" | "danger" | "info" | "success";

const BANNER_STYLES: Record<BannerType, { container: string; text: string; icon: string; Icon: typeof Info }> = {
  warning: { container: "bg-[#FEF3C7] border border-bizrent-amber",  text: "text-[#92400E]",  icon: "text-bizrent-amber", Icon: AlertTriangle },
  danger:  { container: "bg-[#FEE2E2] border border-bizrent-red",    text: "text-[#991B1B]",    icon: "text-bizrent-red",   Icon: XCircle      },
  info:    { container: "bg-[#E0E7FF] border border-bizrent-indigo",   text: "text-[#3730A3]",   icon: "text-bizrent-indigo",  Icon: Info         },
  success: { container: "bg-[#D1FAE5] border border-bizrent-emerald",  text: "text-bizrent-forest",  icon: "text-bizrent-emerald", Icon: CheckCircle  },
};

interface StatusBannerProps {
  type: BannerType;
  message: string;
  action?: ReactNode;
}

export function StatusBanner({ type, message, action }: StatusBannerProps) {
  const config = BANNER_STYLES[type];
  const Icon = config.Icon;

  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-lg ${config.container} ${config.text}`}>
      <Icon className={`h-4 w-4 flex-shrink-0 ${config.icon}`} />
      <p className="text-sm font-medium flex-1">{message}</p>
      {action && <div className="flex-shrink-0">{action}</div>}
    </div>
  );
}
