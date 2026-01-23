import React from "react"
import { CgChevronDown } from "react-icons/cg"

interface SelectProps extends Omit<React.ComponentPropsWithoutRef<"select">, "size"> {
  label?: string
  error?: string
  size?: "sm" | "md" | "lg"
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, size = "md", className = "", children, ...props }, ref) => {
    const baseStyles =
      "w-full bg-cloud-white border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-mindly-purple focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"

    const sizeStyles = {
      sm: "px-3 py-1.5 pr-8 text-sm",
      md: "px-4 py-2 pr-10 text-base",
      lg: "px-5 py-3 pr-12 text-lg",
    }

    const labelSizeStyles = {
      sm: "text-sm mb-1",
      md: "text-base mb-1.5",
      lg: "text-lg mb-2",
    }

    const iconSizes = {
      sm: 18,
      md: 20,
      lg: 24,
    }

    const iconPositionStyles = {
      sm: "right-2",
      md: "right-3",
      lg: "right-3.5",
    }

    const borderStyles = error ? "border-red-500" : "border-soft-periwinkle"

    return (
      <div className="w-full">
        {label && (
          <label
            className={`block font-medium text-black ${labelSizeStyles[size]}`}
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`${baseStyles} ${sizeStyles[size]} ${borderStyles} ${className}`}
            {...props}
          >
            {children}
          </select>
          <CgChevronDown
            className={`absolute ${iconPositionStyles[size]} top-1/2 -translate-y-1/2 text-grey-400 pointer-events-none`}
            size={iconSizes[size]}
          />
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Select.displayName = "Select"
