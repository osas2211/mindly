import React from "react"

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  title?: string
  subtitle?: string
  footer?: React.ReactNode
  variant?: "default" | "outlined" | "elevated"
  padding?: "none" | "sm" | "md" | "lg"
  hoverable?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      title,
      subtitle,
      footer,
      variant = "default",
      padding = "md",
      hoverable = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "rounded-xl transition-all duration-200 bg-cloud-white"

    const variantStyles = {
      default: "border border-soft-periwinkle",
      outlined: "border-2 border-soft-periwinkle",
      elevated: "shadow-lg border border-soft-periwinkle/50",
    }

    const paddingStyles = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    }

    const hoverStyles = hoverable
      ? "hover:shadow-xl hover:border-mindly-purple/30 hover:-translate-y-1 cursor-pointer"
      : ""

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${hoverStyles} ${className}`}
        {...props}
      >
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-4">
            {title && (
              <h3 className="text-xl font-bold text-black">{title}</h3>
            )}
            {subtitle && (
              <p className="text-sm text-grey-500 mt-1">{subtitle}</p>
            )}
          </div>
        )}

        {/* Body */}
        <div>{children}</div>

        {/* Footer */}
        {footer && (
          <div className="mt-4 pt-4 border-t border-soft-periwinkle">
            {footer}
          </div>
        )}
      </div>
    )
  }
)

Card.displayName = "Card"
