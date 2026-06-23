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

export async function getExerciseByTemplateId(templateId: string): Promise<ExerciseTemplate | null> {
    return await prisma.exerciseTemplate.findFirst({
        where: { id: templateId }
    })
}