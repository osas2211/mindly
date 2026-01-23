import React from "react"
import { Avatar, Badge, Button } from "@/components/shared/ui"

interface SessionCardProps {
  sessionTitle: string
  sessionDate: string
  therapistName: string
  therapistImage?: string
  sessionType?: string
  status?: "confirmed" | "pending" | "cancelled"
  buttonText?: string
  onOpenDetails?: () => void
}

export const SessionCard: React.FC<SessionCardProps> = ({
  sessionTitle,
  sessionDate,
  therapistName,
  therapistImage,
  sessionType = "Individual Session",
  status = "confirmed",
  buttonText = "Open details",
  onOpenDetails,
}) => {
  const statusStyles = {
    confirmed: "text-green-600 bg-green-300/20",
    pending: "text-yellow-600 bg-yellow-300/20",
    cancelled: "text-red-600 bg-red-300/20",
  }

  const sessionStyles: Record<string, string> = {
    "Individual Session": "text-pink-700 bg-pink-300/20",
    "Group Session": "text-yellow-600 bg-yellow-300/20",
  }

  const statusLabels = {
    confirmed: "Confirmed",
    pending: "Pending",
    cancelled: "Cancelled",
  }

  return (
    <div className="bg-white rounded-2xl p-5 space-y-4">
      {/* Header: Title + Status */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-black mb-1">
            {sessionTitle}
          </h3>
          <p className="text-sm text-grey-500">{sessionDate}</p>
        </div>
        <span
          className={`px-3 py-1 text-sm font-medium rounded-md ${statusStyles[status]}`}
        >
          {statusLabels[status]}
        </span>
      </div>

      {/* Therapist Info + Action */}
      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar
            src={therapistImage}
            alt={therapistName}
            size="xl"
            shape="rounded"
          />
          <div>
            <p className="text-base font-medium text-black">{therapistName}</p>
            <span
              className={`inline-block mt-1 px-3 py-1 text-sm font-medium rounded-md ${sessionStyles[sessionType]}`}
            >
              {sessionType}
            </span>
          </div>
        </div>
        <Button onClick={onOpenDetails}>{buttonText}</Button>
      </div>
    </div>
  )
}
