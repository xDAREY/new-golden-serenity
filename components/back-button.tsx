"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface BackButtonProps {
  href?: string
  label?: string
}

export function BackButton({ href, label = "Back to Services" }: BackButtonProps) {
  const router = useRouter()

  const handleClick = () => {
    if (href) {
      router.push(href)
    } else {
      router.back()
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleClick}
      className="mb-6 text-slate-600 hover:text-primary hover:bg-slate-100"
    >
      <ChevronLeft className="mr-1 h-4 w-4" />
      {label}
    </Button>
  )
}
