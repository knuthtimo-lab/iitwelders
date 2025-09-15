import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-smooth focus-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-accent text-ink shadow-subtle hover:bg-accent/90 active:bg-accent/80",
        destructive: "bg-destructive text-destructive-foreground shadow-subtle hover:bg-destructive/90",
        outline: "border border-border bg-transparent shadow-subtle hover:bg-bg-elevated hover:border-accent/50 text-foreground",
        secondary: "bg-bg-elevated text-foreground shadow-subtle hover:bg-bg-elevated/80 border border-border",
        ghost: "hover:bg-bg-elevated hover:text-foreground text-muted",
        link: "text-link underline-offset-4 hover:underline",
        hero: "bg-accent text-ink shadow-elevated hover:bg-accent/90 active:bg-accent/80 font-semibold",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8 text-base font-semibold",
        xl: "h-14 rounded-xl px-10 text-lg font-semibold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
