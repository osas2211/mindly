import React from "react"
import Link from "next/link"
import { RecommendationCard } from "./RecommendationCard"

export const Recommendations = () => {
  const recommendations = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
      category: "Breathing practice",
      title: "5-minute grounding technique for anxiety",
      description:
        "A short breathing exercise to help you feel more centered, calm, and grounded in the present moment. This technique is perfect for managing anxiety and reconnecting with your breath during stressful moments.",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=400&h=300&fit=crop",
      category: "Meditation",
      title: "Evening reflection: calm your thoughts",
      description:
        "Wind down your day with this gentle meditation practice, allowing your mind to relax and let go of stress. This session is ideal for creating a peaceful transition to a restful evening.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop",
      category: "Morning routine",
      title: "Start your morning with gratitude practice",
      description:
        "Begin each day with intention, positivity, and a focus on gratitude to set the tone for a productive day. This practice encourages mindfulness and helps you appreciate the small joys in life.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=400&h=300&fit=crop",
      category: "Sleep",
      title: "Deep sleep meditation for restful nights",
      description:
        "Prepare your mind and body for quality rest with this soothing deep sleep meditation, designed to help you unwind. This session promotes relaxation and supports a deeper, more restorative sleep.",
    },
  ]

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-black">Recommendation for You</h2>
        <Link
          href="/recommendations"
          className="text-sm text-mindly-purple hover:underline font-medium"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendations.map((item) => (
          <RecommendationCard
            key={item.id}
            image={item.image}
            category={item.category}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  )
}
