import React from "react"
import { Avatar } from "@/components/shared/ui"
import { BiUser } from "react-icons/bi"

export type EventType = "individual" | "group" | "self-guided"

export interface CalendarEventData {
  id: string
  title: string
  start: Date | string
  end: Date | string
  type: EventType
  therapist?: string
  participants?: { name: string; image?: string }[]
}

interface CalendarEventProps {
  event: CalendarEventData
}

export const CalendarEvent: React.FC<CalendarEventProps> = ({ event }) => {
  const getEventStyles = (type: EventType) => {
    switch (type) {
      case "individual":
        return "bg-yellow-50 border-l-4 border-yellow-400"
      case "group":
        return "bg-green-50 border-l-4 border-green-400"
      case "self-guided":
        return "bg-purple-50 border-l-4 border-purple-400"
      default:
        return "bg-grey-50 border-l-4 border-grey-400"
    }
  }

  const getTitleColor = (type: EventType) => {
    switch (type) {
      case "individual":
        return "text-yellow-700"
      case "group":
        return "text-green-700"
      case "self-guided":
        return "text-purple-700"
      default:
        return "text-grey-700"
    }
  }

  const formatTime = (date: Date | string) => {
    const d = new Date(date)
    return d.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div
      className={`p-2 rounded-lg h-full overflow-hidden ${getEventStyles(event.type)}`}
    >
      <p className={`text-sm font-semibold truncate ${getTitleColor(event.type)}`}>
        {event.title}
      </p>
      <p className="text-xs text-grey-600 mt-1">
        {formatTime(event.start)} - {formatTime(event.end)}
      </p>

      {/* Show therapist for individual sessions */}
      {event.type === "individual" && event.therapist && (
        <div className="flex items-center gap-1 mt-2">
          <BiUser size={12} className="text-yellow-600" />
          <span className="text-xs text-grey-600">{event.therapist}</span>
        </div>
      )}

      {/* Show self-guided indicator */}
      {event.type === "self-guided" && (
        <div className="flex items-center gap-1 mt-2">
          <BiUser size={12} className="text-purple-600" />
          <span className="text-xs text-grey-600">Self-guided</span>
        </div>
      )}

      {/* Show participants for group sessions */}
      {event.type === "group" && event.participants && (
        <div className="flex items-center mt-2 -space-x-1">
          {event.participants.slice(0, 3).map((participant, index) => (
            <Avatar
              key={index}
              src={participant.image}
              alt={participant.name}
              size="sm"
              showBorder
            />
          ))}
          {event.participants.length > 3 && (
            <span className="text-xs text-grey-500 ml-2">
              +{event.participants.length - 3}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
