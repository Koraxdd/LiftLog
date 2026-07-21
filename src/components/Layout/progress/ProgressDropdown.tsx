import type { ExerciseTemplate } from "@/generated/prisma/client"
import clsx from "clsx"
import type { ChangeEventHandler } from "react"

type ProgressDropdownProps = {
    exercises: ExerciseTemplate[]
    exerciseName: string
    onChange: ChangeEventHandler<HTMLSelectElement>
}

export default function ProgressDropdown({ exercises, exerciseName, onChange }: ProgressDropdownProps) {
    return (
        <div className="bg-card border border-subtle rounded-lg p-6 flex flex-col gap-2">
            <h3 className="text-text-primary font-medium">Select Exercise</h3>
            <select 
                className={clsx(
                    "bg-surface border border-subtle rounded-lg px-4 py-3 md:w-1/6",
                    exercises.length === 0 ? "text-text-primary/40" : "text-text-primary"
                )}
                value={exerciseName}
                onChange={onChange}
                disabled={exercises.length === 0}
            >
                {exercises.length === 0 ? (
                    <option value="">No exercise history</option>
                ) : (
                    exercises.map(exercise => (
                        <option key={exercise.id} value={exercise.name}>{exercise.name}</option>
                    )) 
                )}
            </select>
        </div>
    )
}