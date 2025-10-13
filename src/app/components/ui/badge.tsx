import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-semibold transition-colors",
        variant === "default" &&
          "",
        variant === "outline" &&
          "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50",
        className
      )}
      {...props}
    />
  );
}
