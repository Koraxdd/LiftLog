import type { Workout } from "@/app/dashboard/history/page";
import type { Set } from "@/generated/prisma/client";

export function calculateVolume(workout: Workout): number {
    return workout.exercises.reduce((total, exercise) => {
        return total + exercise.sets.reduce((setTotal, set) => {
            const weight = set.weight ?? 0
            return setTotal + (set.reps * weight)
        }, 0)
    }, 0)
}

export function calculateSetsVolume(sets: Set[]): number {
    return sets.reduce((total, set) => {
        const weight = set.weight ?? 0
        return total + (set.reps * weight)
    }, 0)
}