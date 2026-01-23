import React from "react"

interface ToggleProps extends Omit<React.ComponentPropsWithoutRef<"input">, "type"> {
  label?: string
  error?: string
  size?: "sm" | "md" | "lg"
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, error, size = "md", className = "", ...props }, ref) => {
    const getSizeClasses = () => {
      switch (size) {
        case "sm":
          return {
            container: "w-9 h-5",
            thumb: "w-4 h-4",
            translateChecked: "peer-checked:[&>span]:translate-x-4",
          }
        case "lg":
          return {
            container: "w-14 h-7",
            thumb: "w-6 h-6",
            translateChecked: "peer-checked:[&>span]:translate-x-7",
          }
        default:
          return {
            container: "w-11 h-6",
            thumb: "w-5 h-5",
            translateChecked: "peer-checked:[&>span]:translate-x-5",
          }
      }
    }

    const sizeClasses = getSizeClasses()

    const labelSizeStyles = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    }

    const containerBaseStyles =
      "relative inline-flex items-center rounded-full transition-all duration-200 cursor-pointer border-2 p-0.5"

    const containerColorStyles = error
      ? "border-red-500 bg-red-100"
      : "border-soft-periwinkle bg-soft-periwinkle"

    const thumbBaseStyles =
      "inline-block rounded-full bg-white shadow-sm transition-transform duration-200"

    return (
      <div className="w-full">
        <div className="flex items-center gap-3">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              ref={ref}
              type="checkbox"
              className="sr-only peer"
              {...props}
            />
            <div
              className={`${containerBaseStyles} ${sizeClasses.container} ${sizeClasses.translateChecked} ${containerColorStyles} peer-checked:bg-mindly-purple peer-checked:border-mindly-purple peer-focus:ring-2 peer-focus:ring-mindly-purple peer-focus:ring-offset-1 peer-disabled:opacity-50 peer-disabled:cursor-not-allowed ${className}`}
            >
              <span className={`${thumbBaseStyles} ${sizeClasses.thumb}`} />
            </div>
          </label>
          {label && (
            <span className={`font-medium text-black ${labelSizeStyles[size]}`}>
              {label}
            </span>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    )
  }
)

Toggle.displayName = "Toggle"
