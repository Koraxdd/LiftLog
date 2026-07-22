"use server"

import { authOptions } from "@/lib/auth"
import { getBestResults } from "@/queries/progress"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export async function getProgressData(exerciseName: string) {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId) {
        redirect("/login")
    }

    return await getBestResults(exerciseName, userId)
}