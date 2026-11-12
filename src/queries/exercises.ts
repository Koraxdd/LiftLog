import { ExerciseTemplate } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function getExercisesFromTemplate(userId: string): Promise<ExerciseTemplate[]> {
    return await prisma.exerciseTemplate.findMany({
        where: {
            OR: [
                { users: { none: {} } },
                { users: { some: { id: userId } } }
            ]
        }
    })
}

export async function createExerciseTemplate(name: string, muscleGroup: string, userId: string): Promise<ExerciseTemplate> {
    return await prisma.exerciseTemplate.upsert({
        where: { name },
        update: {
            user: { connect: { id: userId }}
        },
        create: {
            name,
            muscleGroup,
            isCustom: true,
            user: { connect: { id: userId }}
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