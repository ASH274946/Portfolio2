import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-[#1e1e1e] px-2 py-0.5 text-[11px] font-medium text-[#777] ${className}`}
    >
      {children}
    </span>
  );
}
