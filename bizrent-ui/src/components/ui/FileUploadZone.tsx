"use client";

import { useState, useRef, useCallback } from "react";
import { Upload, X, FileImage, CheckCircle } from "lucide-react";
import { cn, formatFileSize } from "@/lib/utils";

interface FileUploadZoneProps {
  onFileSelect?: (file: File) => void;
  accept?: string;
  label?: string;
  maxSizeMB?: number;
}

export function FileUploadZone({
  onFileSelect,
  accept = "image/*,.pdf",
  label = "Upload screenshot or receipt",
  maxSizeMB = 5,
}: FileUploadZoneProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback(
    (f: File) => {
      setError(null);
      const isValidType = ["image/jpeg", "image/png", "application/pdf"].includes(f.type);
      const isValidSize = f.size <= maxSizeMB * 1024 * 1024;
      
      if (!isValidType || !isValidSize) {
        setError(`File must be under ${maxSizeMB}MB and JPG, PNG, or PDF format.`);
        return;
      }

      setFile(f);
      onFileSelect?.(f);
    },
    [onFileSelect, maxSizeMB]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const dropped = e.dataTransfer.files[0];
      if (dropped) handleFile(dropped);
    },
    [handleFile]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) handleFile(selected);
  };

  const remove = () => {
    setFile(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
    onFileSelect?.(null as any);
  };

  if (file) {
    return (
      <div className="flex items-center gap-3 p-4 bg-[#D1FAE5] border border-green-200 rounded-lg">
        <div className="text-bizrent-emerald">
          <CheckCircle className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-slate-700 truncate">{file.name}</p>
          <p className="text-xs text-slate-400">{formatFileSize(file.size)}</p>
        </div>
        <button
          onClick={remove}
          aria-label="Remove file"
          className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "border-2 border-dashed rounded-lg p-6 flex flex-col items-center gap-2 cursor-pointer transition-all",
          isDragging
            ? "border-bizrent-blue bg-[#E0E7FF]"
            : "border-slate-300 hover:border-bizrent-navy hover:bg-slate-50"
        )}
      >
        <div className="text-slate-400">
          <FileImage className="h-8 w-8" />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-slate-600">{label}</p>
          <p className="text-xs text-slate-400 mt-0.5">Drag & drop or click to browse</p>
          <p className="text-xs text-slate-300 mt-0.5">PNG, JPG, PDF up to {maxSizeMB} MB</p>
        </div>
        <input ref={inputRef} type="file" accept={accept} className="hidden" onChange={handleChange} />
      </div>
      {error && <p className="text-sm text-[#991B1B]">{error}</p>}
    </div>
  );
}
