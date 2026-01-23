import React from "react"

interface CheckboxProps extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  label?: string
  error?: string
  size?: "sm" | "md" | "lg"
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, size = "md", className = "", ...props }, ref) => {
    const sizeStyles = {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    }

    const labelSizeStyles = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    }

    const checkboxStyles =
      "rounded border-soft-periwinkle bg-cloud-white text-mindly-purple focus:ring-2 focus:ring-mindly-purple focus:ring-offset-0 transition-all duration-200 cursor-pointer"

    const borderStyles = error ? "border-red-500" : ""

    return (
      <div className="w-full">
        <div className="flex items-center gap-2">
          <input
            ref={ref}
            type="checkbox"
            className={`${checkboxStyles} ${sizeStyles[size]} ${borderStyles} ${className}`}
            {...props}
          />
          {label && (
            <label
              className={`font-medium text-black cursor-pointer ${labelSizeStyles[size]}`}
              onClick={(e) => {
                if (ref && "current" in ref && ref.current) {
                  ref.current.click()
                  e.preventDefault()
                }
              }}
            >
              {label}
            </label>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"
