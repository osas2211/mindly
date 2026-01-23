import React from "react"
import Link from "next/link"
import { SessionCard } from "./SessionCard"

export const UpcomingSessions = () => {
  const sessions = [
    {
      id: 1,
      sessionTitle: "Managing Anxiety in Daily Life",
      sessionDate: "Wednesday, Oct 8 at 8:45 AM (GMT +2)",
      therapistName: "Dr. Mette Andersen",
      therapistImage: "https://i.pravatar.cc/150?img=20",
      sessionType: "Individual Session",
      status: "confirmed" as const,
    },
    {
      id: 2,
      sessionTitle: "Finding Balance Through Experience",
      sessionDate: "Thursday, Oct 9 at 10:00 AM (GMT +2)",
      therapistName: "Dr. Peter Wilson",
      therapistImage: "https://i.pravatar.cc/150?img=21",
      sessionType: "Group Session",
      status: "cancelled" as const,
    },
    {
      id: 3,
      sessionTitle: "Managing Anxiety in Daily Life",
      sessionDate: "Wednesday, Oct 8 at 8:45 AM (GMT +2)",
      therapistName: "Dr. Mette Andersen",
      therapistImage: "https://i.pravatar.cc/150?img=20",
      sessionType: "Individual Session",
      status: "pending" as const,
    },
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-black">Your Upcoming Sessions</h2>
        <Link
          href="/sessions"
          className="text-sm text-mindly-purple hover:underline font-medium"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {sessions.map((session) => (
          <SessionCard
            key={session.id}
            sessionTitle={session.sessionTitle}
            sessionDate={session.sessionDate}
            therapistName={session.therapistName}
            therapistImage={session.therapistImage}
            sessionType={session.sessionType}
            status={session.status}
          />
        ))}
      </div>
    </section>
  )
}
