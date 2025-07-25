"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { ScrollLink } from "@/components/scroll-link"
import { Menu, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "GAPP", href: "/gapp" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Check if Google Translate is currently active
  const isTranslated = () => {
    if (typeof window === 'undefined') return false
    
    // Check for Google Translate cookie
    const cookies = document.cookie.split(";")
    const googtransCookie = cookies.find((cookie) => cookie.trim().startsWith("googtrans="))
    
    if (googtransCookie) {
      const value = googtransCookie.split("=")[1]
      return value && !value.includes("/en/en") && value !== "/en/"
    }
    
    // Also check URL hash for Google Translate
    return window.location.hash.includes('googtrans')
  }

  // Safe navigation function that handles Google Translate
  const handleNavigation = (href: string, closeSheet = false) => {
    if (closeSheet) {
      setIsOpen(false)
    }

    // If translation is active, use window.location instead of Next.js router
    if (isTranslated()) {
      // For translated pages, we need to do a full page navigation
      // to preserve the translation context
      window.location.href = href
      return
    }

    // Normal navigation for untranslated pages - let ScrollLink handle it
  }

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            onClick={() => handleNavigation("/")}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <Image
              src="/images/android-chrome-512x512.png"
              alt="Golden Serenity Home Care"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

              return isTranslated() ? (
                // Use regular anchor tag for translated pages
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-white hover:text-accent transition-colors font-medium relative ${
                    isActive ? "text-accent" : ""
                  }`}
                >
                  {item.name}
                  {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full"></span>}
                </a>
              ) : (
                // Use ScrollLink for normal navigation
                <ScrollLink
                  key={item.name}
                  href={item.href}
                  className={`text-white hover:text-accent transition-colors font-medium relative ${
                    isActive ? "text-accent" : ""
                  }`}
                >
                  {item.name}
                  {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent rounded-full"></span>}
                </ScrollLink>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-white border-primary">
              <div className="flex flex-col space-y-6 mt-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))

                  return isTranslated() ? (
                    // Use regular anchor tag for translated pages
                    <a
                      key={item.name}
                      href={item.href}
                      className={`text-white hover:text-accent transition-colors font-medium text-lg flex items-center ${
                        isActive ? "text-accent" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {isActive && <span className="w-1 h-6 bg-accent rounded-full mr-2"></span>}
                      {item.name}
                    </a>
                  ) : (
                    // Use ScrollLink for normal navigation
                    <ScrollLink
                      key={item.name}
                      href={item.href}
                      className={`text-white hover:text-accent transition-colors font-medium text-lg flex items-center ${
                        isActive ? "text-accent" : ""
                      }`}
                      onClick={() => handleNavigation(item.href, true)}
                    >
                      {isActive && <span className="w-1 h-6 bg-accent rounded-full mr-2"></span>}
                      {item.name}
                    </ScrollLink>
                  )
                })}
                <div className="pt-6 border-t border-white/20 space-y-4">
                  <a href="tel:404-823-4521" className="flex items-center space-x-2 text-white">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">(404) 823-4521</span>
                  </a>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                    <a 
                      href="https://coachli.co/goldenserenity/SV-x0WIa"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      Book Appointment
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}