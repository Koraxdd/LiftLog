import clsx from "clsx"
import type { Exercises } from "./WorkoutForm"
import { Input } from "@/components/UI/Input"

type ExerciseDropdownProps = {
    isOpen: boolean
    exercises: Exercises
}

export default function ExerciseDropdown({ isOpen, exercises }: ExerciseDropdownProps) {
    return (
        <div className={clsx(
            "absolute top-15 left-0 right-0 z-50 overflow-hidden bg-card border border-subtle rounded-lg transition-all duration-400 ease-out",
            isOpen ? "max-h-77 opacity-100" : "max-h-0 opacity-0"
        )}>
            <div className="max-h-80 overflow-y-auto">
                <div className="p-3 border-b border-subtle sticky top-0 bg-card">
                    <Input type="text" placeholder="Search exercises..." />
                </div>
                <div className="px-5 pt-4 pb-8 flex flex-col gap-4">
                    {exercises.map(exercise => (
                        <div key={exercise.name} className="flex flex-col transition-colors hover:bg-surface">
                            <h3 className="text-text-primary font-medium">{exercise.name}</h3>
                            <p className="text-xs font-medium">{exercise.muscleGroup}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}