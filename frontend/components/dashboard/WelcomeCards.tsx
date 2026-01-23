import React from "react"
import { Button, Card } from "@/components/shared/ui"

export const WelcomeCards = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Check-in Card */}
      <Card padding="sm" className="bg-white!">
        <div className="space-y-2">
          <p className="text-grey-800 text-xl lg:text-xl leading-tight font-medium">
            Let&apos;s check in Maria, How have you been feeling this week?
          </p>
          <p className="text-sm text-grey-600 mb-7">
            You logged 4 emotions this week, mostly calm and focused.
          </p>
          <Button>Track Mood</Button>
        </div>
      </Card>

      {/* Mindfulness Card */}
      <div className="flex gap-4 h-full bg-white p-4 rounded-xl">
        <div className="w-62 h-full! rounded-xl overflow-hidden bg-grey-200">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=200&fit=crop"
            alt="Mindfulness"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-1 mt-4">
          <h3 className="text-grey-800 text-xl lg:text-xl leading-tight font-medium">
            Take a moment to breathe and reconnect with yourself
          </h3>
          <p className="text-sm text-grey-500">4 min mindfulness meditation</p>
        </div>
      </div>

      <Card padding="sm" className="bg-white!">
        <div className="space-y-2 flex flex-col justify-between h-full">
          <p className="text-grey-800 text-xl lg:text-xl leading-tight font-medium">
            Prioritize your mental health. Time to have a session with an
            expert?
          </p>
          <p className="text-sm text-grey-600 mb-7">
            Let go of tension and find calm within
          </p>
        </div>
        <Button variant="outline">Create session</Button>
      </Card>
    </div>
  )
}
