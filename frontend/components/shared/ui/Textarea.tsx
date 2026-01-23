import React from "react"

interface TextareaProps extends React.ComponentPropsWithoutRef<"textarea"> {
  label?: string
  error?: string
  size?: "sm" | "md" | "lg"
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, size = "md", className = "", ...props }, ref) => {
    const baseStyles =
      "w-full bg-cloud-white border rounded-lg text-black placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-mindly-purple focus:border-transparent transition-all duration-200 resize-y"

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm min-h-[80px]",
      md: "px-4 py-2 text-base min-h-[100px]",
      lg: "px-5 py-3 text-lg min-h-[120px]",
    }

    const labelSizeStyles = {
      sm: "text-sm mb-1",
      md: "text-base mb-1.5",
      lg: "text-lg mb-2",
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
        <textarea
          ref={ref}
          className={`${baseStyles} ${sizeStyles[size]} ${borderStyles} ${className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"
