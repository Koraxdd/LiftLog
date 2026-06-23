"use server"

import { WorkoutInput } from "@/components/Layout/log/WorkoutForm";
import { authOptions } from "@/lib/auth";
import { createWorkout } from "@/queries/workouts";
import { getServerSession } from "next-auth";

export async function addWorkout(workout: WorkoutInput) {
    const session = await getServerSession(authOptions)
    if (!session?.user.id) {
        throw new Error("Not authenticated")
    }

    try {
        await createWorkout(workout, session.user.id)
    } catch (err) {
        throw new Error("Invalid data")
    }
}