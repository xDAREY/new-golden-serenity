import { createUploadthing, type FileRouter } from "uploadthing/next"
import { UTApi } from "uploadthing/server"

const f = createUploadthing()

export const uploadRouter = {
  resumeUploader: f({ pdf: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ file, metadata }) => {
      console.log("Upload complete", file.ufsUrl)
    }),
} satisfies FileRouter

export type UploadThingRouter = typeof uploadRouter
export const utapi = new UTApi()
