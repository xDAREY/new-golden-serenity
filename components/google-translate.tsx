"use client"
import { useEffect } from "react"

declare global {
  interface Window {
    googleTranslateElementInit: () => void
    google: any
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,it,pt,zh-CN,ar,hi,yo,sw", // you can add more
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element"
        )
      }
    }

    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script")
      script.id = "google-translate-script"
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.body.appendChild(script)
    } else {
      window.googleTranslateElementInit()
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white px-3 py-2 rounded-md shadow-xl border border-gray-200 hover:shadow-2xl transition-all">
        <span className="text-sm font-medium text-slate-700">🌐 Select Language</span>
        <div id="google_translate_element" className="mt-1" />
      </div>
    </div>
  )
}
