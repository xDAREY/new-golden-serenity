"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  href: string
}

export function ServiceCard({ title, description, icon: Icon, href }: ServiceCardProps) {
  return (
    <Card className="bg-white shadow-lg border-0 hover:shadow-xl transition-shadow h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="bg-slate-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
          <Icon className="h-7 w-7 text-slate-700" />
        </div>
        <CardTitle className="text-lg font-bold text-slate-800">{title}</CardTitle>
      </CardHeader>

      <CardContent className="text-slate-600 grow">{description}</CardContent>

      <CardFooter>
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
          <Link href={href}>
            Learn More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
