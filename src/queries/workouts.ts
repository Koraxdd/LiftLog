import { WorkoutInput } from "@/components/Layout/log/WorkoutForm";
import { type Workout } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function createWorkout(workout: WorkoutInput, userId: string): Promise<Workout> {
    const { name, date, exercises } = workout

    return await prisma.workout.create({
        data: {
            name,
            date: new Date(date),
            userId,
            exercises: {
                create: exercises.map((exercise, exerciseIndex) => ({
                    exerciseTemplateId: exercise.templateId,
                    order: exerciseIndex,
                    sets: {
                        create: exercise.sets.map((set, setIndex) => ({
                            reps: set.reps,
                            weight: set.weight,
                            order: setIndex
                        }))
                    }
                }))
            }
        }
    })
}

export async function getAllWorkoutsByUserId(userId: string) {
    return await prisma.workout.findMany({
        where: { userId },
        include: {
            exercises: {
                include: {
                    exerciseTemplate: true,
                    sets: true
                }
            }
        },
        orderBy: { date: "desc" }
    })
}

export async function deleteWorkoutById(workoutId: string) {
    return await prisma.workout.delete({
        where: { id: workoutId }
    })
}

export async function updateWorkout(workout: WorkoutInput, workoutId: string) {
    const { name, date, exercises } = workout

    return await prisma.workout.update({
        where: { id: workoutId },
        data: {
            name,
            date: new Date(date),
            exercises: {
                deleteMany: {},
                create: exercises.map((exercise, exerciseIndex) => ({
                    exerciseTemplateId: exercise.templateId,
                    order: exerciseIndex,
                    sets: {
                        create: exercise.sets.map((set, setIndex) => ({
                            reps: set.reps,
                            weight: set.weight,
                            order: setIndex
                        }))
                    }
                }))
            }
        }
    })
}

export async function getRecentWorkouts(userId: string) {
    return await prisma.workout.findMany({
        where: { userId },
        include: {
            exercises: {
                include: {
                    exerciseTemplate: true,
                    sets: true
                }
            }
        },
        orderBy: { createdAt: "desc" },
        take: 3
    })
}

export async function getWorkoutById(id: string) {
    return await prisma.workout.findUnique({
        where: { id },
        include: {
            exercises: {
                include: {
                    exerciseTemplate: true,
                    sets: true
                }
            }
        }
    })
}

export async function getThisWeekWorkouts(userId: string) {
    const startOfWeek = new Date()
    const day = startOfWeek.getDay()
    const diff = day === 0 ? -6 : 1 - day

    startOfWeek.setDate(startOfWeek.getDate() + diff)
    startOfWeek.setHours(0, 0, 0, 0)

    const endOfWeek = new Date(startOfWeek)
    endOfWeek.setDate(endOfWeek.getDate() + 6)
    endOfWeek.setHours(23, 59, 59, 999)

    console.log(startOfWeek, endOfWeek)

    return await prisma.workout.findMany({
        where: {
            userId,
            date: {
                gte: startOfWeek,
                lt: endOfWeek
            }
        },
        include: {
            exercises: {
                include: {
                    exerciseTemplate: true,
                    sets: true
                }
            }
        }
    })
}