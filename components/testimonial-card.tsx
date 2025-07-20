"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export interface TestimonialCardProps {
  name: string
  content: string
  rating?: number
}

export function TestimonialCard({ name, content, rating = 5 }: TestimonialCardProps) {
  return (
    <Card className="bg-white shadow-md border-0 hover:shadow-lg transition-shadow h-full flex flex-col">
      <CardContent className="p-6 grow flex flex-col">
        <p className="text-slate-600 italic mb-4 flex-1">{`“${content}”`}</p>
        <div className="flex items-center space-x-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <p className="mt-2 font-semibold text-slate-800">{name}</p>
      </CardContent>
    </Card>
  )
}
