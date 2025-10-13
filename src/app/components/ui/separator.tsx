import * as React from "react";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("w-full h-[1px] bg-gray-200 my-4", className)}
      {...props}
    />
  )
);
Separator.displayName = "Separator";

export { Separator };
