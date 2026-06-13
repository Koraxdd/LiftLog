import { prisma } from "../src/lib/prisma";

async function main() {
    await prisma.exerciseTemplate.createMany({
        data: [
            { name: "Incline Bench Press", muscleGroup: "Chest" },
            { name: "Dips", muscleGroup: "Chest" },
            { name: "Deadlift", muscleGroup: "Back" },
            { name: "Pull Ups", muscleGroup: "Back" },
            { name: "Barbell Row", muscleGroup: "Back" },
            { name: "Leg Press", muscleGroup: "Legs" },
            { name: "Romanian Deadlift", muscleGroup: "Legs" },
            { name: "Overhead Press", muscleGroup: "Shoulders" },
            { name: "Lateral Raises", muscleGroup: "Shoulders" },
            { name: "Bicep Curl", muscleGroup: "Arms" },
            { name: "Tricep Pushdown", muscleGroup: "Arms" },
        ],
        skipDuplicates: true
    })
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect())