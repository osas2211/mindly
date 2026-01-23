import React from "react"
import { BiSearch } from "react-icons/bi"

interface SearchInputProps extends Omit<React.ComponentPropsWithoutRef<"input">, "size"> {
  iconPosition?: "left" | "right"
  size?: "sm" | "md" | "lg"
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ iconPosition = "left", size = "md", className = "", ...props }, ref) => {
    const baseStyles =
      "w-full bg-cloud-white border border-soft-periwinkle rounded-lg text-black placeholder:text-grey-400 focus:outline-none focus:ring-2 focus:ring-mindly-purple focus:border-transparent transition-all duration-200"

    const sizeStyles = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-5 py-3 text-lg",
    }

    const iconSizes = {
      sm: 16,
      md: 20,
      lg: 24,
    }

    const iconPositionStyles = {
      sm: { left: "left-2.5", right: "right-2.5" },
      md: { left: "left-3", right: "right-3" },
      lg: { left: "left-3.5", right: "right-3.5" },
    }

    const inputPaddingStyles = {
      sm: iconPosition === "left" ? "pl-8" : iconPosition === "right" ? "pr-8" : "",
      md: iconPosition === "left" ? "pl-10" : iconPosition === "right" ? "pr-10" : "",
      lg: iconPosition === "left" ? "pl-12" : iconPosition === "right" ? "pr-12" : "",
    }

    return (
      <div className="relative w-full">
        {iconPosition === "left" && (
          <BiSearch
            className={`absolute ${iconPositionStyles[size].left} top-1/2 -translate-y-1/2 text-grey-400`}
            size={iconSizes[size]}
          />
        )}
        <input
          ref={ref}
          type="search"
          className={`${baseStyles} ${sizeStyles[size]} ${inputPaddingStyles[size]} ${className}`}
          placeholder={props.placeholder ?? "Search anything..."}
          {...props}
        />
        {iconPosition === "right" && (
          <BiSearch
            className={`absolute ${iconPositionStyles[size].right} top-1/2 -translate-y-1/2 text-grey-400`}
            size={iconSizes[size]}
          />
        )}
      </div>
    )
  },
)

SearchInput.displayName = "SearchInput"
