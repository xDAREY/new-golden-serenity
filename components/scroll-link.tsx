"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"

interface ScrollLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function ScrollLink({ href, children, className, onClick }: ScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick()

    // Check if it's a hash link to a section on the current page
    if (href.includes("#")) {
      const [path, hash] = href.split("#")

      // If it's the same page or no path specified, scroll to section
      if (!path || window.location.pathname === path) {
        e.preventDefault()
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
        return
      }

      // If it's a different page with hash, navigate then scroll
      e.preventDefault()
      router.push(path)
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
      return
    }

    // For regular page navigation, scroll to top after navigation
    if (href !== window.location.pathname) {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 100)
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
