import React from "react"

interface IconButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "default" | "outline" | "text" | "danger"
  size?: "sm" | "md" | "lg"
  shape?: "circle" | "rounded"
  children: React.ReactNode
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      variant = "default",
      size = "md",
      shape = "circle",
      className = "",
      children,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"

    const sizeStyles = {
      sm: "w-8 h-8 text-base",
      md: "w-10 h-10 text-xl",
      lg: "w-12 h-12 text-2xl",
    }

    const shapeStyles = {
      circle: "rounded-full",
      rounded: "rounded-lg",
    }

    const variantStyles = {
      default:
        "bg-mindly-purple text-white hover:bg-mindly-purple/90 active:bg-mindly-purple/80",
      outline:
        "bg-transparent text-black border-2 border-mindly-purple hover:bg-mindly-purple/10 active:bg-mindly-purple/20",
      text: "bg-transparent text-black hover:bg-mindly-purple/10 active:bg-mindly-purple/20",
      danger: "bg-red-500 text-white hover:bg-red-600 active:bg-red-700",
    }

    const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${shapeStyles[shape]} ${variantStyles[variant]} ${className}`

    return (
      <button ref={ref} className={combinedClassName} {...props}>
        {children}
      </button>
    )
  },
)

IconButton.displayName = "IconButton"
