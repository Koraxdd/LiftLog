import { ExerciseTemplate } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

export async function getExercisesFromTemplate(): Promise<ExerciseTemplate[]> {
    return await prisma.exerciseTemplate.findMany()
}