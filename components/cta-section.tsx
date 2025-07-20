"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CTASectionProps {
  title: string
  description: string
  primaryButton: { text: string; href: string }
  secondaryButton?: { text: string; href: string }
}

export function CTASection({ title, description, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <section className="py-16 bg-primary text-white text-center">
      <div className="container mx-auto px-4 space-y-6">
        <h2 className="text-3xl lg:text-4xl font-bold">{title}</h2>
        <p className="max-w-2xl mx-auto text-lg">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link href={primaryButton.href}>
              {primaryButton.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          {secondaryButton && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 bg-transparent"
            >
              <Link href={secondaryButton.href}>
                {secondaryButton.text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
