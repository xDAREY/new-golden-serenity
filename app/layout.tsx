import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "sonner"
import GoogleTranslate from "@/components/google-translate"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Golden Serenity Home Care - GAPP-Approved Home Care in Georgia",
  description:
    "Trusted GAPP-approved home care services in Georgia. Veteran-owned company providing compassionate personal care, pediatric support, and companionship services.",
  metadataBase: new URL("https://www.goldenserenityhomecare.org"),
  openGraph: {
    title: "Golden Serenity Home Care - GAPP-Approved",
    description:
      "Veteran-owned GAPP-approved agency delivering personal care, pediatric and companionship services across Georgia.",
    url: "https://www.goldenserenityhomecare.org",
    siteName: "Golden Serenity Home Care",
    images: [
      {
        url: "/elderly8.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Serenity Home Care cover image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="android-chrome" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
        <GoogleTranslate /> {/* ✅ Place it here at the bottom of the body */}
      </body>
    </html>
  )
}
