"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, ChevronUp, X } from "lucide-react"

declare global {
  interface Window {
    google: any
    googleTranslateElementInit: () => void
  }
}

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "pl", name: "Polski", flag: "🇵🇱" },
  { code: "nl", name: "Nederlands", flag: "🇳🇱" },
  { code: "sv", name: "Svenska", flag: "🇸🇪" },
  { code: "da", name: "Dansk", flag: "🇩🇰" },
  { code: "no", name: "Norsk", flag: "🇳🇴" },
  { code: "fi", name: "Suomi", flag: "🇫🇮" },
]

export function LanguageTranslator() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("en")
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTranslating, setIsTranslating] = useState(false)

  // Check for existing translation on mount
  useEffect(() => {
    const checkCurrentLanguage = () => {
      // Check cookie for current language
      const cookies = document.cookie.split(";")
      const googtransCookie = cookies.find((cookie) => cookie.trim().startsWith("googtrans="))

      if (googtransCookie) {
        const value = googtransCookie.split("=")[1]
        const match = value.match(/\/en\/([a-z-]+)/)
        if (match && match[1] !== "en") {
          setCurrentLanguage(match[1])
        }
      }
    }

    checkCurrentLanguage()
  }, [])

  useEffect(() => {
    // Prevent multiple script loads
    if (document.querySelector('script[src*="translate.google.com"]')) {
      setIsLoaded(true)
      return
    }

    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) {
        console.error("Google Translate not available")
        return
      }

      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: languages.map((lang) => lang.code).join(","),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true,
          },
          "google_translate_element",
        )

        setIsLoaded(true)

        // Hide all Google UI elements immediately after initialization
        setTimeout(() => {
          hideGoogleElements()
        }, 100)
      } catch (error) {
        console.error("Error initializing Google Translate:", error)
      }
    }

    document.body.appendChild(script)

    // Continuously hide Google elements
    const hideInterval = setInterval(hideGoogleElements, 500)

    return () => {
      clearInterval(hideInterval)
    }
  }, [])

  const hideGoogleElements = () => {
    // Hide the top banner frame
    const bannerFrames = document.querySelectorAll(".goog-te-banner-frame, .goog-te-ftab")
    bannerFrames.forEach((frame) => {
      if (frame instanceof HTMLElement) {
        frame.style.display = "none !important"
        frame.style.visibility = "hidden !important"
        frame.remove()
      }
    })

    // Hide rating popup
    const ratingElements = document.querySelectorAll('[id*="rating"], [class*="rating"], .goog-te-spinner-pos')
    ratingElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.display = "none !important"
        el.remove()
      }
    })

    // Reset body top position
    document.body.style.top = "0px !important"
    document.documentElement.style.top = "0px !important"

    // Hide any other Google UI
    const googleElements = document.querySelectorAll(".goog-te-gadget, .goog-te-menu-value, .skiptranslate")
    googleElements.forEach((el) => {
      if (el instanceof HTMLElement && !el.closest("#google_translate_element")) {
        el.style.display = "none !important"
        el.remove()
      }
    })
  }

  const translateTo = async (languageCode: string) => {
    if (isTranslating) return
    setIsTranslating(true)
    setIsOpen(false)

    try {
      if (languageCode === "en") {
        // Clear translation cookie and reload
        document.cookie = `googtrans=; path=/; domain=${window.location.hostname}; expires=Thu, 01 Jan 1970 00:00:00 GMT`
        document.cookie = `googtrans=/en/en; path=/; domain=${window.location.hostname}`
        setCurrentLanguage("en")
        window.location.reload()
        return
      }

      // Set translation cookie
      document.cookie = `googtrans=/en/${languageCode}; path=/; domain=${window.location.hostname}`
      setCurrentLanguage(languageCode)

      // Try to trigger translation via select element
      setTimeout(() => {
        const selectElement = document.querySelector(".goog-te-combo") as HTMLSelectElement
        if (selectElement) {
          selectElement.value = languageCode
          selectElement.dispatchEvent(new Event("change", { bubbles: true }))

          // Hide elements after translation starts
          setTimeout(hideGoogleElements, 1000)
          setTimeout(hideGoogleElements, 3000)
        } else {
          // Fallback: reload with cookie
          window.location.reload()
        }
      }, 100)
    } finally {
      setTimeout(() => {
        setIsTranslating(false)
        hideGoogleElements()
      }, 2000)
    }
  }

  const getCurrentLanguageInfo = () => {
    return languages.find((lang) => lang.code === currentLanguage) || languages[0]
  }

  const currentLang = getCurrentLanguageInfo()

  return (
    <>
      {/* Google Translate Element - completely hidden */}
      <div
        id="google_translate_element"
        style={{
          position: "fixed",
          left: "-99999px",
          top: "-99999px",
          width: "1px",
          height: "1px",
          opacity: 0,
          visibility: "hidden",
          pointerEvents: "none",
          zIndex: -9999,
        }}
      ></div>

      {/* Floating Language Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <Card className="mb-4 bg-white shadow-2xl border-0 max-w-xs">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-800 flex items-center">
                  <Globe className="h-4 w-4 mr-2" />
                  Select Language
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="h-6 w-6 p-0 hover:bg-slate-100"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {!isLoaded && (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary mx-auto mb-2"></div>
                  <p className="text-xs text-slate-500">Loading translator...</p>
                </div>
              )}

              {isLoaded && (
                <div className="max-h-64 overflow-y-auto space-y-1">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => translateTo(language.code)}
                      disabled={isTranslating}
                      className={`w-full flex items-center space-x-3 p-2 rounded-lg text-left hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                        currentLanguage === language.code ? "bg-primary/10 text-primary" : "text-slate-700"
                      }`}
                    >
                      <span className="text-lg">{language.flag}</span>
                      <span className="text-sm font-medium">{language.name}</span>
                      {currentLanguage === language.code && (
                        <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                      )}
                      {isTranslating && (
                        <div className="ml-auto">
                          <div className="animate-spin rounded-full h-3 w-3 border-b border-slate-400"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              <div className="mt-4 pt-3 border-t border-slate-200">
                <p className="text-xs text-slate-500 text-center">Powered by Google Translate</p>
              </div>
            </CardContent>
          </Card>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary hover:bg-primary/90 text-white shadow-2xl rounded-full w-14 h-14 p-0 transition-all duration-300 hover:scale-110"
          aria-label="Language Translator"
        >
          <div className="flex flex-col items-center">
            <span className="text-lg mb-0.5">🌍</span>
            <span className="text-xs font-medium">{currentLang.code.toUpperCase()}</span>
          </div>
          {isOpen && <ChevronUp className="absolute -top-1 -right-1 h-3 w-3" />}
        </Button>
      </div>

      {/* Aggressive CSS to hide ALL Google Translate UI */}
      <style jsx global>{`
        /* Completely hide Google Translate banner and UI */
        .goog-te-banner-frame,
        .goog-te-ftab,
        .goog-te-menu-frame,
        .goog-te-spinner-pos,
        .goog-te-balloon-frame,
        [id*="goog-te"],
        [class*="goog-te"]:not(#google_translate_element):not(.goog-te-combo) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          position: absolute !important;
          left: -99999px !important;
          top: -99999px !important;
          width: 0 !important;
          height: 0 !important;
          z-index: -99999 !important;
        }
        
        /* Keep body at normal position */
        body {
          top: 0px !important;
          position: static !important;
        }
        
        html {
          top: 0px !important;
          position: static !important;
        }
        
        /* Hide rating and feedback elements */
        [id*="rating"],
        [class*="rating"],
        [id*="feedback"],
        [class*="feedback"] {
          display: none !important;
        }
        
        /* Ensure the select element is accessible but hidden */
        .goog-te-combo {
          position: absolute !important;
          left: -99999px !important;
          top: -99999px !important;
          opacity: 0 !important;
          visibility: hidden !important;
        }
        
        /* Hide any iframe that might contain Google UI */
        iframe[src*="translate.google"] {
          display: none !important;
        }
        
        /* Remove any margin/padding added by Google */
        body.translated-ltr,
        body.translated-rtl {
          margin-top: 0 !important;
          padding-top: 0 !important;
        }
        
        /* Hide skiptranslate elements */
        .skiptranslate {
          display: none !important;
        }
        
        /* Ensure no Google branding shows */
        .goog-logo-link,
        .goog-te-gadget-icon {
          display: none !important;
        }
      `}</style>
    </>
  )
}
