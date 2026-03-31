"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, ChevronDown, X } from "lucide-react"

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

function clearGoogTransCookies() {
  const hostname = window.location.hostname
  const domains = [
    hostname,
    `.${hostname}`,
    hostname.replace(/^www\./, ""),
    `.${hostname.replace(/^www\./, "")}`,
    "",
  ]
  const paths = ["/", ""]
  domains.forEach((domain) => {
    paths.forEach((path) => {
      const domainPart = domain ? `; domain=${domain}` : ""
      const pathPart = path ? `; path=${path}` : ""
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT${domainPart}${pathPart}`
      document.cookie = `googtrans=/en/en; expires=Thu, 01 Jan 1970 00:00:00 GMT${domainPart}${pathPart}`
    })
  })
}

function setGoogTransCookie(langCode: string) {
  const hostname = window.location.hostname
  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()
  const value = `/en/${langCode}`
  document.cookie = `googtrans=${value}; path=/; domain=${hostname}; expires=${expires}`
  document.cookie = `googtrans=${value}; path=/; domain=.${hostname}; expires=${expires}`
  const bare = hostname.replace(/^www\./, "")
  if (bare !== hostname) {
    document.cookie = `googtrans=${value}; path=/; domain=${bare}; expires=${expires}`
    document.cookie = `googtrans=${value}; path=/; domain=.${bare}; expires=${expires}`
  }
}

function getCurrentLangFromCookie(): string {
  const cookies = document.cookie.split(";")
  const googtrans = cookies.find((c) => c.trim().startsWith("googtrans="))
  if (googtrans) {
    const value = decodeURIComponent(googtrans.split("=").slice(1).join("=")).trim()
    const match = value.match(/\/en\/([a-z-]+)/)
    if (match && match[1] && match[1] !== "en") return match[1]
  }
  return "en"
}

// ─── Embeddable button (used inside Navbar) ───────────────────────────────────
export function LanguageTranslatorButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("en")
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTranslating, setIsTranslating] = useState(false)

  useEffect(() => {
    setCurrentLanguage(getCurrentLangFromCookie())
  }, [])

  useEffect(() => {
    if (document.querySelector('script[src*="translate.google.com"]')) {
      setIsLoaded(true)
      return
    }

    window.googleTranslateElementInit = () => {
      if (!window.google?.translate?.TranslateElement) return
      try {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: languages.map((l) => l.code).join(","),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true,
          },
          "google_translate_element"
        )
        setIsLoaded(true)
        setTimeout(hideGoogleElements, 100)
      } catch (e) {
        console.error("Google Translate init error:", e)
      }
    }

    const script = document.createElement("script")
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    document.body.appendChild(script)

    const interval = setInterval(hideGoogleElements, 1000)
    setTimeout(() => clearInterval(interval), 30000)
    return () => clearInterval(interval)
  }, [])

  function hideGoogleElements() {
    try {
      const selectors = [
        ".goog-te-banner-frame",
        ".goog-te-ftab",
        ".goog-te-spinner-pos",
        ".goog-te-balloon-frame",
        "#goog-gt-tt",
        ".goog-te-gadget-icon",
        'iframe[src*="translate.google"]',
      ]
      selectors.forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => {
          if (el instanceof HTMLElement) el.style.display = "none"
        })
      })
      document.body.style.top = "0px"
      document.documentElement.style.top = "0px"
    } catch (e) {}
  }

  const translateTo = (langCode: string) => {
    if (isTranslating) return
    setIsTranslating(true)
    setIsOpen(false)
    clearGoogTransCookies()

    if (langCode === "en") {
      setTimeout(() => window.location.reload(), 100)
      return
    }

    setGoogTransCookie(langCode)
    setCurrentLanguage(langCode)

    setTimeout(() => {
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null
      if (select) {
        select.value = langCode
        select.dispatchEvent(new Event("change", { bubbles: true }))
        setTimeout(hideGoogleElements, 1000)
        setTimeout(() => setIsTranslating(false), 3000)
      } else {
        window.location.reload()
      }
    }, 150)
  }

  const currentLang = languages.find((l) => l.code === currentLanguage) || languages[0]

  return (
    <>
      {/* Hidden Google Translate mount point — rendered once anywhere in the tree */}
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
      />

      {/* Inline wrapper — positions the dropdown BELOW the button */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 text-white hover:text-accent transition-colors font-medium px-2 py-1 rounded-md hover:bg-white/10"
          aria-label="Language Translator"
        >
          <Globe className="h-4 w-4" />
          <span className="text-xs font-medium">{currentLang.flag} {currentLang.code.toUpperCase()}</span>
          <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 z-[9999]">
            <Card className="bg-white shadow-2xl border-0 w-56">
              <CardContent className="p-3">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-slate-800 text-sm flex items-center gap-1.5">
                    <Globe className="h-3.5 w-3.5" />
                    Select Language
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6 flex items-center justify-center rounded hover:bg-slate-100"
                  >
                    <X className="h-3.5 w-3.5 text-slate-500" />
                  </button>
                </div>

                {!isLoaded ? (
                  <div className="text-center py-4">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary mx-auto mb-2" />
                    <p className="text-xs text-slate-500">Loading...</p>
                  </div>
                ) : (
                  <div className="max-h-64 overflow-y-auto space-y-0.5">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => translateTo(language.code)}
                        disabled={isTranslating}
                        className={`w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md text-left text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                          currentLanguage === language.code
                            ? "bg-primary/10 text-primary font-medium"
                            : "hover:bg-slate-100 text-slate-700"
                        }`}
                      >
                        <span>{language.flag}</span>
                        <span>{language.name}</span>
                        {currentLanguage === language.code && (
                          <div className="ml-auto w-1.5 h-1.5 bg-primary rounded-full" />
                        )}
                      </button>
                    ))}
                  </div>
                )}

                <div className="mt-3 pt-2 border-t border-slate-100">
                  <p className="text-[10px] text-slate-400 text-center">Powered by Google Translate</p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      <style jsx global>{`
        .goog-te-banner-frame,
        .goog-te-banner-frame.skiptranslate,
        .goog-te-ftab,
        .goog-te-menu-frame,
        .goog-te-spinner-pos,
        .goog-te-balloon-frame,
        #goog-gt-tt,
        .goog-te-gadget-icon,
        iframe[src*="translate.google.com"],
        iframe[name*="google_translate"] {
          display: none !important;
          visibility: hidden !important;
          position: absolute !important;
          left: -99999px !important;
          top: -99999px !important;
          width: 0 !important;
          height: 0 !important;
          pointer-events: none !important;
        }
        body, html { top: 0px !important; margin-top: 0 !important; padding-top: 0 !important; }
        body.translated-ltr, body.translated-rtl { top: 0px !important; margin-top: 0 !important; }
        .goog-te-combo { position: absolute !important; left: -99999px !important; opacity: 0 !important; pointer-events: none !important; }
        .skiptranslate { display: none !important; }
      `}</style>
    </>
  )
}

// Keep the old export name so layout.tsx doesn't break (it renders nothing now — translator lives in Navbar)
export function LanguageTranslator() {
  return null
}