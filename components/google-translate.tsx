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
    // Define the init function that Google calls automatically
    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,es,fr,de,it,pt,zh-CN,ar,hi,yo,sw", // customize as needed
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        )
      }
    }

    // Check if script is already loaded
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
    <div
      id="google_translate_element"
      className="fixed bottom-4 right-4 bg-white shadow-lg border rounded-md z-50 p-1"
    />
  )
}
