"use client"

import { Star, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export interface TestimonialCardProps {
  name: string
  content: string
  rating?: number
  reviewUrl?: string
}

export function TestimonialCard({ name, content, rating = 5, reviewUrl }: TestimonialCardProps) {
  const inner = (
    <Card
      className={`bg-white shadow-md border-0 h-full flex flex-col transition-shadow ${
        reviewUrl ? "hover:shadow-xl cursor-pointer" : "hover:shadow-lg"
      }`}
    >
      <CardContent className="p-6 grow flex flex-col">
        <p className="text-slate-600 italic mb-4 flex-1">{`"${content}"`}</p>
        <div className="flex items-center space-x-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          ))}
          {reviewUrl && (
            <ExternalLink className="h-3.5 w-3.5 text-slate-400 ml-auto" />
          )}
        </div>
        <p className="mt-2 font-semibold text-slate-800">{name}</p>
      </CardContent>
    </Card>
  )

  if (reviewUrl) {
    return (
      <a href={reviewUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        {inner}
      </a>
    )
  }

  return inner
}