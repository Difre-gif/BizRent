"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  fullWidth?: boolean;
  size?: "sm" | "md" | "lg";
  baseClass?: string;
}

function ButtonBase({
  children,
  isLoading,
  fullWidth,
  size = "md",
  disabled,
  className,
  baseClass = "",
  ...rest
}: ButtonBaseProps) {
  const sizeClass =
    size === "sm" ? "px-3 py-1.5 text-sm" :
    size === "lg" ? "px-6 py-3 text-base" :
    "px-4 py-2.5 text-sm";

  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none",
        sizeClass,
        fullWidth && "w-full",
        baseClass,
        className
      )}
      {...rest}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}

export function PrimaryButton(props: Omit<ButtonBaseProps, "baseClass">) {
  return (
    <ButtonBase
      {...props}
      baseClass="bg-bizrent-navy text-white hover:bg-bizrent-blue active:scale-[0.98] focus-visible:ring-bizrent-blue"
    />
  );
}

export function DangerButton(props: Omit<ButtonBaseProps, "baseClass">) {
  return (
    <ButtonBase
      {...props}
      baseClass="bg-bizrent-red text-white hover:bg-red-800 active:scale-[0.98] focus-visible:ring-bizrent-red"
    />
  );
}

export function SecondaryButton(props: Omit<ButtonBaseProps, "baseClass">) {
  return (
    <ButtonBase
      {...props}
      baseClass="border border-bizrent-navy text-bizrent-navy bg-transparent hover:bg-[#E0E7FF] active:scale-[0.98] focus-visible:ring-bizrent-navy"
    />
  );
}

export function GhostButton(props: Omit<ButtonBaseProps, "baseClass">) {
  return (
    <ButtonBase
      {...props}
      baseClass="text-slate-700 bg-transparent hover:bg-slate-100 active:scale-[0.98] focus-visible:ring-slate-400"
    />
  );
}

export function SuccessButton(props: Omit<ButtonBaseProps, "baseClass">) {
  return (
    <ButtonBase
      {...props}
      baseClass="bg-bizrent-emerald text-white hover:bg-green-600 active:scale-[0.98] focus-visible:ring-bizrent-emerald"
    />
  );
}
