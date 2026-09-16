import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled = false,
  ...rest
}) => {
  const baseStyles = [
    "inline-flex items-center justify-center gap-2",
    "font-bold uppercase tracking-widest",
    "transition-all duration-200 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#08090B]",
    "rounded-[0.375rem]",
    "cursor-pointer select-none",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    fullWidth ? "w-full" : "w-auto",
  ].join(" ");

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary: [
      "bg-gradient-to-br from-[#E50914] to-[#8a0510] text-white",
      "border border-[#E50914]",
      "shadow-[0_4px_14px_rgba(229,9,20,0.35)]",
      "hover:brightness-110 hover:shadow-[0_4px_18px_rgba(168,7,18,0.5)]",
      "active:brightness-90 active:shadow-none active:scale-[0.98]",
      "focus:ring-[#E50914]",
    ].join(" "),
    secondary: [
      "bg-[#A80712] text-white",
      "border border-[#A80712]",
      "shadow-[0_4px_10px_rgba(168,7,18,0.3)]",
      "hover:bg-[#8a0510] hover:border-[#8a0510] hover:shadow-[0_4px_14px_rgba(168,7,18,0.45)]",
      "active:bg-[#6e040d] active:shadow-none active:scale-[0.98]",
      "focus:ring-[#A80712]",
    ].join(" "),
    outline: [
      "bg-transparent text-[#E50914]",
      "border border-[#E50914]",
      "shadow-none",
      "hover:bg-[#E50914] hover:text-white hover:shadow-[0_4px_14px_rgba(229,9,20,0.35)]",
      "active:bg-[#A80712] active:border-[#A80712] active:text-white active:scale-[0.98]",
      "focus:ring-[#E50914]",
    ].join(" "),
  };

  return (
    <button
      className={[
        baseStyles,
        sizeStyles[size],
        variantStyles[variant],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled}
      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
      {...rest}
    >
      {leftIcon && (
        <span className="inline-flex items-center shrink-0">{leftIcon}</span>
      )}
      <span className="leading-none">{children}</span>
      {rightIcon && (
        <span className="inline-flex items-center shrink-0">{rightIcon}</span>
      )}
    </button>
  );
};

export default Button;