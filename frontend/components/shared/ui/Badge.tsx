import React from "react"

interface BadgeProps extends Omit<React.ComponentPropsWithoutRef<"span">, "size"> {
  variant?: "default" | "success" | "warning" | "danger" | "info" | "outline"
  size?: "sm" | "md" | "lg"
  dot?: boolean
  children: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    { variant = "default", size = "md", dot = false, className = "", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-200"

    const sizeStyles = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-1 text-sm",
      lg: "px-3 py-1.5 text-base",
    }

    const dotSizeStyles = {
      sm: "w-1.5 h-1.5",
      md: "w-2 h-2",
      lg: "w-2.5 h-2.5",
    }

    const variantStyles = {
      default: "bg-mindly-purple text-white",
      success: "bg-green-500 text-white",
      warning: "bg-yellow-500 text-black",
      danger: "bg-red-500 text-white",
      info: "bg-soft-periwinkle text-black",
      outline:
        "bg-transparent text-mindly-purple border-2 border-mindly-purple",
    }

    const dotColorStyles = {
      default: "bg-white",
      success: "bg-white",
      warning: "bg-black",
      danger: "bg-white",
      info: "bg-black",
      outline: "bg-mindly-purple",
    }

    return (
      <span
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {dot && (
          <span
            className={`inline-block rounded-full ${dotSizeStyles[size]} ${dotColorStyles[variant]}`}
          />
        )}
        {children}
      </span>
    )
  }
)

Badge.displayName = "Badge"
