import type { Set } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function getRecentRecords(userId: string): Promise<{ name: string, weight: number, date: Date }[]> {
    const sets = await prisma.set.findMany({
        where: { 
            exercise: {
                workout: { userId }
            }
        },
        include: {
            exercise: {
                include: {
                    exerciseTemplate: true,
                    workout: true
                }
            }
        }
    })

    const recordMap = new Map<string, { name: string, weight: number, date: Date }>()

    for (const set of sets) {
        const templateId = set.exercise.exerciseTemplateId
        const existing = recordMap.get(templateId)

        if (!existing || set.weight! > existing.weight) {
            recordMap.set(templateId, {
                name: set.exercise.exerciseTemplate.name,
                weight: set.weight ?? 0,
                date: set.exercise.workout.date
            })
        }
    }

    return Array.from(recordMap.values())
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, 3)
}

export async function getAllSetsByUserId(userId: string): Promise<Set[]> {
    return await prisma.set.findMany({
        where: {
            exercise: {
                workout: { userId }
            }
        }
    })
}