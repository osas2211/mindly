import React from "react"
import { BiUser } from "react-icons/bi"

interface AvatarProps extends Omit<React.ComponentPropsWithoutRef<"div">, "size"> {
  src?: string
  alt?: string
  initials?: string
  size?: "sm" | "md" | "lg" | "xl"
  shape?: "circle" | "rounded"
  status?: "online" | "offline" | "away" | "busy"
  showBorder?: boolean
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = "Avatar",
      initials,
      size = "md",
      shape = "circle",
      status,
      showBorder = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const sizeStyles = {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10 text-sm",
      lg: "w-12 h-12 text-base",
      xl: "w-16 h-16 text-lg",
    }

    const shapeStyles = {
      circle: "rounded-full",
      rounded: "rounded-lg",
    }

    const statusSizeStyles = {
      sm: "w-2 h-2 border-[1.5px]",
      md: "w-2.5 h-2.5 border-2",
      lg: "w-3 h-3 border-2",
      xl: "w-4 h-4 border-[3px]",
    }

    const statusColorStyles = {
      online: "bg-green-500",
      offline: "bg-grey-400",
      away: "bg-yellow-500",
      busy: "bg-red-500",
    }

    const borderStyles = showBorder
      ? "ring-2 ring-soft-periwinkle ring-offset-2"
      : ""

    const baseStyles =
      "relative inline-flex items-center justify-center bg-soft-periwinkle text-black font-medium overflow-hidden"

    const getInitials = () => {
      if (initials) {
        return initials.slice(0, 2).toUpperCase()
      }
      if (alt) {
        const names = alt.split(" ")
        if (names.length >= 2) {
          return (names[0][0] + names[names.length - 1][0]).toUpperCase()
        }
        return alt.slice(0, 2).toUpperCase()
      }
      return null
    }

    const iconSizes = {
      sm: 16,
      md: 20,
      lg: 24,
      xl: 32,
    }

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${sizeStyles[size]} ${shapeStyles[shape]} ${borderStyles} ${className}`}
        {...props}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none"
            }}
          />
        ) : getInitials() ? (
          <span>{getInitials()}</span>
        ) : (
          <BiUser size={iconSizes[size]} className="text-grey-500" />
        )}

        {/* Status Indicator */}
        {status && (
          <span
            className={`absolute bottom-0 right-0 ${statusSizeStyles[size]} ${statusColorStyles[status]} ${shapeStyles[shape]} border-white`}
            aria-label={`Status: ${status}`}
          />
        )}
      </div>
    )
  }
)

Avatar.displayName = "Avatar"
