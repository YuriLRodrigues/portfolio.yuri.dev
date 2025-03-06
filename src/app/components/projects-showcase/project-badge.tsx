import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ProjectBadgeProps {
  children: ReactNode;
  className?: string;
}

export function ProjectBadge({ children, className }: ProjectBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full",
        "bg-primary/10 text-primary hover:bg-primary/15 transition-colors",
        "border border-primary/20",
        className,
      )}
    >
      {children}
    </div>
  );
}
