"use client"
import { useEffect } from "react"

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
  { code: "zh-CN", label: "Chinese" },
  { code: "ar", label: "Arabic" },
  { code: "hi", label: "Hindi" },
  { code: "yo", label: "Yoruba" },
  { code: "sw", label: "Swahili" },
]

export default function GoogleTranslate() {
  useEffect(() => {
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
    }

    const script = document.createElement("script")
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    script.async = true
    script.id = "google-translate-script"
    document.body.appendChild(script)
  }, [])

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement
    if (select) {
      select.value = lang
      select.dispatchEvent(new Event("change"))
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white px-3 py-2 rounded-md shadow-xl border border-gray-200 flex items-center space-x-2">
        <span className="text-sm font-semibold text-slate-700">🌍</span>
        <select
          onChange={handleLanguageChange}
          className="text-sm bg-transparent outline-none appearance-none font-medium text-slate-800"
        >
          <option value="">Select Language</option>
          {languages.map(lang => (
            <option key={lang.code} value={lang.code}>
              {lang.label}
            </option>
          ))}
        </select>
      </div>
      <div id="google_translate_element" className="hidden" />
    </div>
  )
}
