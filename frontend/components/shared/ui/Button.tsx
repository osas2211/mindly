import React from "react"

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "default" | "outline" | "text" | "danger"
  size?: "sm" | "md" | "lg"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "default", size = "md", className = "", children, ...props },
    ref,
  ) => {
    const baseStyles =
      "rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    }

    const variantStyles = {
      default:
        "bg-mindly-purple text-white hover:bg-mindly-purple/90 active:bg-mindly-purple/80",
      outline:
        "bg-transparent text-mindly-purple border-1 border-mindly-purple hover:bg-mindly-purple/10 active:bg-mindly-purple/20",
      text: "bg-transparent text-mindly-purple hover:bg-mindly-purple/10 active:bg-mindly-purple/20",
      danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
    }

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"
