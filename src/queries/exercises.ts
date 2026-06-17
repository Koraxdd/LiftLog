import { prisma } from "@/lib/prisma";

export async function getExercisesFromTemplate(): Promise<{name: string, muscleGroup: string}[]> {
    return await prisma.exerciseTemplate.findMany({
        select: { name: true, muscleGroup: true }
    })
}