import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ProjectIconProps {
  children: ReactNode;
  className?: string;
}

export function ProjectIcon({ children, className }: ProjectIconProps) {
  return (
    <div className={cn("w-4 h-4 flex items-center justify-center", className)}>
      {children}
    </div>
  );
}
