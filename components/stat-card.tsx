"use client"

import { Shield, Users, Award, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export interface StatCardProps {
  label: string
  value: string
  icon: "shield" | "users" | "award" | "heart" // Update as needed
}

const iconMap = {
  shield: Shield,
  users: Users,
  award: Award,
  heart: Heart,
}

export function StatCard({ label, value, icon }: StatCardProps) {
  const Icon = iconMap[icon]

  return (
    <Card className="bg-white shadow-md border-0 text-center hover:shadow-lg transition-shadow">
      <CardContent className="p-6 space-y-3">
        <div className="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto">
          {Icon && <Icon className="h-7 w-7 text-slate-700" />}
        </div>
        <div className="text-2xl font-bold text-slate-800">{value}</div>
        <p className="text-sm text-slate-600">{label}</p>
      </CardContent>
    </Card>
  )
}
