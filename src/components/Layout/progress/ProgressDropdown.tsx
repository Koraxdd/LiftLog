"use client"

import type { ExerciseTemplate } from "@/generated/prisma/client"
import { useState } from "react"

type ProgressDropdownProps = {
    exercises: ExerciseTemplate[]
}

export default function ProgressDropdown({ exercises }: ProgressDropdownProps) {
    const [exerciseName, setExerciseName] = useState<string>("")

    return (
        <div className="bg-card border border-subtle rounded-lg p-6 flex flex-col gap-2">
            <h3 className="text-text-primary font-medium">Select Exercise</h3>
            <select 
                className="bg-surface border border-subtle rounded-lg text-text-primary px-4 py-3"
                value={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
            >
                {exercises.map(exercise => (
                    <option key={exercise.id}>{exercise.name}</option>
                ))}
            </select>
        </div>
    )
}