"use client"
import React, { useState } from "react"

interface TooltipProps {
  content: React.ReactNode
  position?: "top" | "bottom" | "left" | "right"
  delay?: number
  children: React.ReactNode
  className?: string
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  position = "top",
  delay = 200,
  children,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  const showTooltip = () => {
    const id = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    setTimeoutId(id)
  }

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setIsVisible(false)
  }

  const positionStyles = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  }

  const arrowPositionStyles = {
    top: "top-full left-1/2 -translate-x-1/2 -mt-1",
    bottom: "bottom-full left-1/2 -translate-x-1/2 -mb-1",
    left: "left-full top-1/2 -translate-y-1/2 -ml-1",
    right: "right-full top-1/2 -translate-y-1/2 -mr-1",
  }

  const arrowBorderStyles = {
    top: "border-t-grey-900 border-l-transparent border-r-transparent border-b-transparent",
    bottom:
      "border-b-grey-900 border-l-transparent border-r-transparent border-t-transparent",
    left: "border-l-grey-900 border-t-transparent border-b-transparent border-r-transparent",
    right:
      "border-r-grey-900 border-t-transparent border-b-transparent border-l-transparent",
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute z-50 ${positionStyles[position]} ${className}`}
          role="tooltip"
        >
          <div className="relative bg-grey-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap animate-in fade-in zoom-in-95 duration-150">
            {content}
            {/* Arrow */}
            <div
              className={`absolute w-0 h-0 border-4 ${arrowPositionStyles[position]} ${arrowBorderStyles[position]}`}
            />
          </div>
        </div>
      )}
    </div>
  )
}

Tooltip.displayName = "Tooltip"
