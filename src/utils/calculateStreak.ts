import type { Workout } from "@/app/dashboard/history/page";
import { formatDate } from "./formatDate";

export function calculateStreak(workouts: Workout[]): number {
    const uniqueDates = new Set(
        workouts.map(workout => formatDate(workout.date))
    )

    let streak = 0
    let currentDate = new Date()

    if (!uniqueDates.has(formatDate(currentDate))) {
        currentDate.setDate(currentDate.getDate() - 1)
    }

    while (uniqueDates.has(formatDate(currentDate))) {
        streak++
        currentDate.setDate(currentDate.getDate() - 1)
    }

    return streak
}