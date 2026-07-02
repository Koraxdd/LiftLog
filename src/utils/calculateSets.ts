import { Workout } from "@/app/dashboard/history/page";

export function calculateSets(workout: Workout): number {   
    return workout.exercises.reduce((total, exercise) => total + exercise.sets.length, 0)
}