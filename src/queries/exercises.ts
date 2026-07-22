import { ExerciseTemplate } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function getExercisesFromTemplate(userId: string): Promise<ExerciseTemplate[]> {
    return await prisma.exerciseTemplate.findMany({
        where: {
            OR: [
                { userId: null },
                { userId }
            ]
        }
    })
}

export async function createExerciseTemplate(name: string, muscleGroup: string, userId: string): Promise<ExerciseTemplate> {
    return await prisma.exerciseTemplate.create({
        data: {
            name,
            muscleGroup,
            isCustom: true,
            userId
        }
    })
}

export async function getLoggedExercises(userId: string) {
    const workouts = await prisma.workout.findMany({
        where: { userId },
        select: { id: true }
    })

    const workoutIds = workouts.map(workout => workout.id)

    const exercises = await prisma.exerciseTemplate.findMany({
        where: {
            exercises: {
                some: {
                    workoutId: {
                        in: workoutIds
                    }
                }
            }
        }
    })

    return exercises
}