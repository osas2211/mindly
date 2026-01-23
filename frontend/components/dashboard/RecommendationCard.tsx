import React from "react"

interface RecommendationCardProps {
  image: string
  category: string
  title: string
  description?: string
  onClick?: () => void
}

export const RecommendationCard: React.FC<RecommendationCardProps> = ({
  image,
  category,
  title,
  description,
  onClick,
}) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
      onClick={onClick}
    >
      {/* Image */}
      <div className="w-full h-44 overflow-hidden p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Content */}
      <div className="p-4 pt-0 space-y-2">
        <p className="text-sm text-teal-600 font-medium">{category}</p>
        <h3 className="text-base font-bold text-black leading-snug">{title}</h3>
        {description && (
          <p className="text-sm text-grey-500 line-clamp-4">{description}</p>
        )}
      </div>
    </div>
  )
}
