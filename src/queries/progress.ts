import { prisma } from "@/lib/prisma";

export async function getBestResults(exerciseName: string, userId: string) {
    const exercises = await prisma.exercise.findMany({
        where: {
            exerciseTemplate: { name: exerciseName },
            workout: { userId }
        },
        include: {
            workout: true,
            sets: true
        },
        orderBy: {
            workout: { date: "asc" }
        }
    })

    return exercises.map(exercise => ({
        weight: Math.max(...exercise.sets.map(set => set.weight ?? 0)),
        shortDate: exercise.workout.date.toLocaleDateString("en", {
            month: "short",
            day: "numeric"
        }),
        fullDate: exercise.workout.date
    })).slice(-6)
}