import { Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { ScrollLink } from "@/components/scroll-link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:404-823-4521"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(404) 823-4521</span>
              </a>
              <a
                href="mailto:info@goldenserenityhomecare.org"
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@goldenserenityhomecare.org</span>
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent mb-4">Address</h3>
            <div className="flex items-start space-x-2 text-gray-300">
              <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
              <div>
                <p>Golden Serenity Home Care</p>
                <p>Buford, Georgia</p>
              </div>
            </div>
          </div>

          {/* Clinic Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent mb-4">Clinic Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon - Fri: 8:00 AM - 5:30 PM</span>
              </div>
              <p className="ml-6">Sat - Sun: Closed</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-accent mb-4">Quick Links</h3>
            <div className="space-y-2">
              <ScrollLink href="/gapp" className="block text-gray-300 hover:text-accent transition-colors">
                Georgia Pediatric Program (GAPP)
              </ScrollLink>
              <ScrollLink href="/services#careers" className="block text-gray-300 hover:text-accent transition-colors">
                We are hiring
              </ScrollLink>
              <ScrollLink href="/services" className="block text-gray-300 hover:text-accent transition-colors">
                Our Services
              </ScrollLink>
              <ScrollLink href="/about" className="block text-gray-300 hover:text-accent transition-colors">
                About Us
              </ScrollLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/images/android-chrome-512x512.png"
                  alt="Golden Serenity Home Care"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <div className="text-center md:text-right text-gray-400 text-sm">
              <p>&copy; {currentYear} Golden Serenity Home Care. All rights reserved.</p>
              <p className="mt-1">GAPP-Approved Provider | Veteran-Owned | Licensed & Insured</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
