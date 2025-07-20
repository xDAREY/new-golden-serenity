"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { UploadButton } from "@/lib/uploadthing"
import { FileText, X } from "lucide-react"

interface FileUploadProps {
  id: string
  label: string
  required?: boolean
  onChange?: (url: string | null) => void // Return uploaded file URL
}

export function FileUpload({ id, label, required = false, onChange }: FileUploadProps) {
  const [fileUrl, setFileUrl] = useState<string | null>(null)

  const handleRemoveFile = () => {
    setFileUrl(null)
    if (onChange) onChange(null)
  }

  return (
    <div className="space-y-2">
      {/* Label and hidden input for accessibility */}
      <label htmlFor={id} className="block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Hidden input just to support the id */}
      <input type="hidden" id={id} value={fileUrl ?? ""} readOnly />

      {!fileUrl ? (
        <UploadButton
          endpoint="resumeUploader"
          onClientUploadComplete={(res) => {
            const url = res?.[0]?.url || null
            setFileUrl(url)
            if (onChange) onChange(url)
          }}
          onUploadError={(error: Error) => {
            console.error("Upload failed:", error.message)
            alert("Upload failed. Please try again.")
          }}
          appearance={{
            button: "bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium",
            container: "mt-2",
          }}
        />
      ) : (
        <div className="border rounded-lg p-4 bg-slate-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-primary" />
              <div>
                <p className="text-sm font-medium text-slate-700 truncate max-w-[200px]">Resume Uploaded</p>
                <a
                  href={fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 underline"
                >
                  View File
                </a>
              </div>
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleRemoveFile}
              className="text-slate-500 hover:text-red-500"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove file</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
