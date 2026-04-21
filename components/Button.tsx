import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary" &&
          "bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:outline-emerald-600",
        variant === "secondary" &&
          "bg-white text-zinc-900 ring-1 ring-zinc-300 hover:bg-zinc-100 focus-visible:outline-zinc-500",
        className,
      )}
      {...props}
    />
  );
}
