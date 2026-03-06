import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "danger";

const variants: Record<Variant, string> = {
  primary:
    "bg-emerald-500 text-neutral-950 hover:bg-emerald-400",
  secondary:
    "border border-neutral-700 text-neutral-300 hover:border-neutral-500",
  danger:
    "bg-red-600 text-white hover:bg-red-500",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg px-4 py-2.5 font-semibold transition disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
