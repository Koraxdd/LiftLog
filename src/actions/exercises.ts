"use server"

import { authOptions } from "@/lib/auth"
import { createExerciseTemplate } from "@/queries/exercises"
import { getServerSession } from "next-auth"

export async function createCustomExercise(name: string, muscleGroup: string) {
    const session = await getServerSession(authOptions)
    if (!session?.user.id) {
      throw new Error("Not authenticated")  
    } 

    return await createExerciseTemplate(name, muscleGroup, session.user.id)
}