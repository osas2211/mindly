"use client"
import React from "react"
import { WelcomeCards } from "@/components/dashboard/WelcomeCards"
import { UpcomingSessions } from "@/components/dashboard/UpcomingSessions"
import { Recommendations } from "@/components/dashboard/Recommendations"

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Cards Section */}
      <WelcomeCards />

      {/* Upcoming Sessions Section */}
      <UpcomingSessions />

      {/* Recommendations Section */}
      <Recommendations />
    </div>
  )
}

export default DashboardPage
