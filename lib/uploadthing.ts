"use client"

import { generateUploadButton } from "@uploadthing/react"
import type { UploadThingRouter } from "@/app/api/uploadthing/core"

export const UploadButton = generateUploadButton<UploadThingRouter>()
