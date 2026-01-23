import React from "react"

interface SpinnerProps extends Omit<React.ComponentPropsWithoutRef<"div">, "size"> {
  size?: "sm" | "md" | "lg" | "xl"
  color?: "primary" | "white" | "black" | "danger"
  label?: string
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "md", color = "primary", label, className = "", ...props }, ref) => {
    const sizeStyles = {
      sm: "w-4 h-4 border-2",
      md: "w-6 h-6 border-2",
      lg: "w-8 h-8 border-[3px]",
      xl: "w-12 h-12 border-4",
    }

    const colorStyles = {
      primary: "border-mindly-purple/20 border-t-mindly-purple",
      white: "border-white/20 border-t-white",
      black: "border-black/20 border-t-black",
      danger: "border-red-500/20 border-t-red-500",
    }

    const labelSizeStyles = {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
      xl: "text-lg",
    }

    const labelColorStyles = {
      primary: "text-mindly-purple",
      white: "text-white",
      black: "text-black",
      danger: "text-red-500",
    }

    return (
      <div
        ref={ref}
        className={`inline-flex flex-col items-center gap-2 ${className}`}
        role="status"
        aria-live="polite"
        aria-label={label || "Loading"}
        {...props}
      >
        <div
          className={`${sizeStyles[size]} ${colorStyles[color]} rounded-full animate-spin`}
        />
        {label && (
          <span
            className={`font-medium ${labelSizeStyles[size]} ${labelColorStyles[color]}`}
          >
            {label}
          </span>
        )}
      </div>
    )
  }
)

Spinner.displayName = "Spinner"
