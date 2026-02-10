"use server"

import { imageSchema, ProjectSchema, validateWithZod } from "@/utils/schema"
import { deleteProjectImage, uploadFile } from "@/utils/supabase"
import { currentUser } from "@clerk/nextjs/server"
import { cache } from "react"
import db from "@/utils/db"
import { revalidatePath } from "next/cache"


const getAuthUser = cache(async () => {
  const user = await currentUser()
  if (!user) throw new Error("User not authenticated")
  return user
})
// validation schema
export type FormState = { message: string, success?: boolean }
const renderError = (error: unknown): FormState => {
  return {
    message: error instanceof Error ? error.message : "An unknown error occurred",
    success: false,
  }
}

export const createProjectAction = async (
  _prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  try {
    const rawData = Object.fromEntries(formData.entries())
    const file = formData.get("image") as File | null
    const validatedFile = validateWithZod(imageSchema, { image: file })
    const validatedData = validateWithZod(ProjectSchema, rawData)
    const fullPath = await uploadFile(validatedFile.image)
    await db.kP_Project.create({
      data: {
        ...validatedData,
        image: fullPath,
      }
    })
    return { message: "Project created successfully", success: true }
  } catch (errors) {
    return renderError(errors)
  }
}

export const fetchProject = cache(async () => {
  try {
    const product = await db.kP_Project.findMany({
      orderBy: { createdAt: "desc" },
    })
    return product
  } catch (errors) {
    return []
  }
})

export const deleteProjectAction = async (
  prevState: FormState,
  formData: FormData
): Promise<FormState> => {
  try {
    const user = await getAuthUser()
    if (!user.privateMetadata.isAdmin) {
      return { message: "Unauthorized", success: false }
    }

    const projectId = formData.get("projectId") as string
    const pathname = formData.get("pathname") as string

    if (!projectId) {
      return { message: "projectId is required", success: false }
    }

    // 1) ดึง project record มาก่อนเพื่อลบรูป
    const project = await db.kP_Project.findUnique({
      where: { id: projectId },
    })

    if (!project) {
      return { message: "Project not found", success: false }
    }

    // 2) ถ้ามี image → ลบออกจาก Supabase
    if (project.image) {
      await deleteProjectImage(project.image)
    }

    // 3) ลบ record จาก DB
    await db.kP_Project.delete({
      where: { id: projectId },
    })

    revalidatePath(pathname || "/project")
    return { message: "Project deleted successfully", success: true }
  } catch (error) {
    return renderError(error)
  }
}

export const fetchProjectDetail = cache(async ({ id }: { id: string }) => {
  try {
    return db.kP_Project.findFirst({
      where: { id },
    })
  } catch (errors) {
    return []
  }
})