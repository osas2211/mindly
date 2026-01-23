"use client"
import React from "react"
import { CgChevronLeft, CgChevronRight } from "react-icons/cg"
import { BiSliderAlt } from "react-icons/bi"
import { Button, IconButton } from "@/components/shared/ui"

export type FilterType = "individual" | "group" | "events"

interface CalendarHeaderProps {
  title: string
  onPrev: () => void
  onNext: () => void
  activeFilters: FilterType[]
  onFilterToggle: (filter: FilterType) => void
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  title,
  onPrev,
  onNext,
  activeFilters,
  onFilterToggle,
}) => {
  const isActive = (filter: FilterType) => activeFilters.includes(filter)

  return (
    <div className="flex items-center justify-between mb-6">
      {/* Left: Navigation */}
      <div className="flex items-center gap-2">
        <IconButton
          variant="text"
          size="sm"
          shape="rounded"
          onClick={onPrev}
        >
          <CgChevronLeft />
        </IconButton>
        <IconButton
          variant="text"
          size="sm"
          shape="rounded"
          onClick={onNext}
        >
          <CgChevronRight />
        </IconButton>
      </div>

      {/* Center: View selector and filters */}
      <div className="flex items-center gap-3">
        <div className="px-4 py-2 bg-white rounded-full border border-grey-200 text-sm font-medium text-black flex items-center gap-2 cursor-pointer">
          {title}
          <CgChevronRight className="rotate-90 text-grey-500" size={16} />
        </div>

        <button
          onClick={() => onFilterToggle("individual")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            isActive("individual")
              ? "bg-mindly-purple text-white"
              : "bg-white text-grey-600 border border-grey-200 hover:bg-grey-50"
          }`}
        >
          Individual
        </button>

        <button
          onClick={() => onFilterToggle("group")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            isActive("group")
              ? "bg-yellow-500 text-white"
              : "bg-white text-grey-600 border border-grey-200 hover:bg-grey-50"
          }`}
        >
          Group
        </button>

        <button
          onClick={() => onFilterToggle("events")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            isActive("events")
              ? "bg-teal-500 text-white"
              : "bg-white text-grey-600 border border-grey-200 hover:bg-grey-50"
          }`}
        >
          Events
        </button>
      </div>

      {/* Right: Settings */}
      <IconButton variant="text" size="sm" shape="rounded">
        <BiSliderAlt />
      </IconButton>
    </div>
  )
}
