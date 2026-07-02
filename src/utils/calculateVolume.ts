import { Workout } from "@/app/dashboard/history/page";

export function calculateVolume(workout: Workout): number {
    return workout.exercises.reduce((total, exercise) => {
        return total + exercise.sets.reduce((setTotal, set) => {
            const reps = set.reps ?? 0
            const weight = set.weight ?? 0
            return setTotal + (reps * weight)
        }, 0)
    }, 0)
}