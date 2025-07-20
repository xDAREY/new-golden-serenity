"use client"
import { useEffect, useState } from "react"

declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: any
  }
}

const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "it", label: "Italian" },
  { code: "pt", label: "Portuguese" },
  { code: "zh-CN", label: "Chinese (Simplified)" },
  { code: "zh-TW", label: "Chinese (Traditional)" },
  { code: "ar", label: "Arabic" },
  { code: "hi", label: "Hindi" },
  { code: "yo", label: "Yoruba" },
  { code: "sw", label: "Swahili" },
  { code: "ja", label: "Japanese" },
  { code: "ko", label: "Korean" },
  { code: "ru", label: "Russian" },
  { code: "nl", label: "Dutch" },
  { code: "tr", label: "Turkish" },
  { code: "pl", label: "Polish" },
  { code: "sv", label: "Swedish" },
  { code: "da", label: "Danish" },
  { code: "no", label: "Norwegian" },
  { code: "fi", label: "Finnish" },
  { code: "el", label: "Greek" },
  { code: "he", label: "Hebrew" },
  { code: "th", label: "Thai" },
  { code: "vi", label: "Vietnamese" },
  { code: "id", label: "Indonesian" },
  { code: "ms", label: "Malay" },
  { code: "tl", label: "Filipino" },
  { code: "bn", label: "Bengali" },
  { code: "ur", label: "Urdu" },
  { code: "fa", label: "Persian" },
  { code: "uk", label: "Ukrainian" },
  { code: "cs", label: "Czech" },
  { code: "hu", label: "Hungarian" },
  { code: "ro", label: "Romanian" },
  { code: "bg", label: "Bulgarian" },
  { code: "hr", label: "Croatian" },
  { code: "sk", label: "Slovak" },
  { code: "sl", label: "Slovenian" },
  { code: "et", label: "Estonian" },
  { code: "lv", label: "Latvian" },
  { code: "lt", label: "Lithuanian" },
  { code: "mt", label: "Maltese" },
  { code: "is", label: "Icelandic" },
  { code: "ga", label: "Irish" },
  { code: "cy", label: "Welsh" },
  { code: "eu", label: "Basque" },
  { code: "ca", label: "Catalan" },
  { code: "gl", label: "Galician" },
  { code: "af", label: "Afrikaans" },
  { code: "zu", label: "Zulu" },
  { code: "xh", label: "Xhosa" },
  { code: "st", label: "Sesotho" },
  { code: "sn", label: "Shona" },
  { code: "ig", label: "Igbo" },
  { code: "ha", label: "Hausa" },
  { code: "am", label: "Amharic" },
  { code: "so", label: "Somali" },
  { code: "rw", label: "Kinyarwanda" },
  { code: "ny", label: "Chichewa" },
  { code: "mg", label: "Malagasy" },
]

export default function GoogleTranslate() {
  const [currentLang, setCurrentLang] = useState("en")

  useEffect(() => {
    // Check URL hash on mount to sync with existing translation
    const checkCurrentLanguage = () => {
      const hash = window.location.hash
      if (hash.includes('googtrans')) {
        const match = hash.match(/googtrans\(en\|([^)]+)\)/)
        if (match && match[1]) {
          setCurrentLang(match[1])
        }
      } else {
        setCurrentLang("en")
      }
    }

    // Initialize Google Translate
    const initGoogleTranslate = () => {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: languages.map(l => l.code).join(","),
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        )
        
        // Check current language after initialization
        setTimeout(checkCurrentLanguage, 1000)
      }

      // Load the script if not already loaded
      if (!document.getElementById("google-translate-script")) {
        const script = document.createElement("script")
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        script.id = "google-translate-script"
        document.head.appendChild(script)
      }
    }

    initGoogleTranslate()
    checkCurrentLanguage()

    // Listen for hash changes to sync state
    const handleHashChange = () => {
      checkCurrentLanguage()
    }
    
    window.addEventListener('hashchange', handleHashChange)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const translatePage = (targetLang: string) => {
    if (targetLang === "en") {
      // Reset to original language
      window.location.hash = ""
      window.location.reload()
      return
    }

    // Method 1: Try using Google's translate function directly
    if (window.google?.translate?.TranslateService) {
      try {
        const translateService = new window.google.translate.TranslateService()
        translateService.translatePage("en", targetLang, () => {
          console.log("Translation completed")
        })
        return
      } catch (error) {
        console.log("Direct translation failed, trying alternative method")
      }
    }

    // Method 2: Manipulate the URL hash (Google Translate's URL method)
    const googleTranslateUrl = `#googtrans(en|${targetLang})`
    if (window.location.hash !== googleTranslateUrl) {
      window.location.hash = googleTranslateUrl
      window.location.reload()
    }
  }

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value
    if (!selectedLang) return

    // Don't update state here - let the hash change handler do it
    // This prevents the select from getting out of sync
    
    if (selectedLang === "en") {
      // Reset to original language
      window.location.hash = ""
      window.location.reload()
      return
    }
    
    // Force Google Translate to be visible temporarily
    const googleElement = document.getElementById("google_translate_element")
    if (googleElement) {
      // Make it visible but off-screen
      googleElement.style.position = "fixed"
      googleElement.style.top = "-100px"
      googleElement.style.left = "0"
      googleElement.style.opacity = "0"
      googleElement.style.pointerEvents = "none"
      googleElement.style.zIndex = "-1"
      
      // Wait for Google's widget to render
      setTimeout(() => {
        const googleSelect = document.querySelector(".goog-te-combo") as HTMLSelectElement
        if (googleSelect) {
          googleSelect.value = selectedLang
          googleSelect.dispatchEvent(new Event("change"))
          
          // Update state after successful translation trigger
          setTimeout(() => {
            setCurrentLang(selectedLang)
            if (googleElement) {
              googleElement.style.position = "absolute"
              googleElement.style.left = "-9999px"
              googleElement.style.top = "-9999px"
            }
          }, 1000)
        } else {
          // Fallback to URL method
          translatePage(selectedLang)
        }
      }, 500)
    }
  }

  // Alternative method: Create a visible but styled Google Translate element
  const triggerGoogleTranslate = (langCode: string) => {
    // Make Google's element temporarily visible
    const googleElement = document.getElementById("google_translate_element")
    if (googleElement) {
      googleElement.style.position = "absolute"
      googleElement.style.left = "-9999px"
      googleElement.style.display = "block"
      
      setTimeout(() => {
        const select = document.querySelector(".goog-te-combo") as HTMLSelectElement
        if (select) {
          select.value = langCode
          select.dispatchEvent(new Event("change"))
          // Hide it again
          googleElement.style.display = "none"
        }
      }, 500)
    }
  }

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-white px-3 py-2 rounded-md shadow-xl border border-gray-200 flex items-center space-x-2">
          <span className="text-sm font-semibold text-slate-700">🌍</span>
          <select
            value={currentLang}
            onChange={handleLanguageChange}
            className="text-sm bg-transparent outline-none appearance-none font-medium text-slate-800"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Google Translate Element - positioned off-screen but accessible */}
      <div 
        id="google_translate_element" 
        style={{
          position: "absolute",
          left: "-9999px",
          top: "-9999px",
          opacity: 0,
          pointerEvents: "none"
        }}
      />
      
      {/* Global styles to hide Google's UI */}
      <style jsx global>{`
        /* Hide Google Translate banner and elements */
        .goog-te-banner-frame.skiptranslate,
        .goog-te-gadget-icon,
        .goog-te-banner-frame,
        #goog-gt-tt,
        .goog-te-balloon-frame {
          display: none !important;
        }
        
        /* Prevent body margin that Google Translate adds */
        body {
          top: 0 !important;
          margin-top: 0 !important;
        }
        
        /* Hide the translate element but keep it functional */
        .goog-te-gadget {
          font-size: 0 !important;
          color: transparent !important;
        }
        
        .goog-te-gadget .goog-te-combo {
          margin: 0 !important;
        }
      `}</style>
    </>
  )
}