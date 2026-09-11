import React from "react";
import { cn } from "lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {}

function GradientText({ className, children, ...props }: GradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer",
        "bg-[linear-gradient(90deg,hsl(var(--primary))_0%,hsl(var(--accent))_25%,hsl(var(--foreground))_50%,hsl(var(--accent))_75%,hsl(var(--primary))_100%)]",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default GradientText;
