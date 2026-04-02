"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export interface Column<T> {
  header: string;
  accessor?: keyof T;
  cell?: (row: T) => ReactNode;
  className?: string;
  headerClassName?: string;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  isLoading?: boolean;
  emptyMessage?: string;
  emptyIcon?: ReactNode;
  keyExtractor?: (row: T, index: number) => string;
  sortColumn?: keyof T;
  sortDirection?: "asc" | "desc";
  onSort?: (column: keyof T) => void;
}

function SkeletonRow({ cols }: { cols: number }) {
  return (
    <tr>
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="px-4 py-3">
          <div className="h-4 bg-slate-200 rounded animate-pulse" style={{ width: `${60 + Math.random() * 30}%` }} />
        </td>
      ))}
    </tr>
  );
}

export function DataTable<T>({
  columns,
  data,
  isLoading = false,
  emptyMessage = "No data found.",
  emptyIcon,
  keyExtractor,
  sortColumn,
  sortDirection,
  onSort,
}: DataTableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-lg border border-slate-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-bizrent-navy">
            {columns.map((col, i) => (
              <th
                key={i}
                onClick={() => col.accessor && onSort?.(col.accessor)}
                className={cn(
                  "px-4 py-3 text-left text-xs font-semibold text-white tracking-wide whitespace-nowrap",
                  col.accessor && onSort && "cursor-pointer select-none hover:bg-slate-700 transition-colors",
                  col.headerClassName
                )}
              >
                <div className="flex items-center gap-1">
                  {col.header}
                  {sortColumn === col.accessor && col.accessor && (
                    <span className="text-white/80 text-[10px]">{sortDirection === "asc" ? "▲" : "▼"}</span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <SkeletonRow key={i} cols={columns.length} />
            ))
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="px-4 py-12 text-center">
                <div className="flex flex-col items-center gap-2 text-slate-400">
                  {emptyIcon && <div className="text-slate-300">{emptyIcon}</div>}
                  <p className="text-sm">{emptyMessage}</p>
                </div>
              </td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr
                key={keyExtractor ? keyExtractor(row, idx) : idx}
                className={cn("hover:bg-slate-50 transition-colors", idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]")}
              >
                {columns.map((col, ci) => (
                  <td key={ci} className={cn("px-4 py-3 text-slate-700", col.className)}>
                    {col.cell ? col.cell(row) : col.accessor ? String(row[col.accessor] ?? "-") : "-"}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
