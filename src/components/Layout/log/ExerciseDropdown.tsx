import clsx from "clsx"
import type { Exercises } from "./WorkoutForm"
import { Input } from "@/components/UI/Input"
import { ChangeEvent, useEffect, useState } from "react"
import Button from "@/components/UI/Button/Button"

type ExerciseDropdownProps = {
    isOpen: boolean
    exercises: Exercises
    onSelect: (id: string) => void
}

export default function ExerciseDropdown({ isOpen, exercises, onSelect }: ExerciseDropdownProps) {
    const [searchText, setSearchText] = useState<string>("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)
    const filteredExercises = exercises.filter(exercise => exercise.name.toLowerCase().includes(searchText.toLowerCase()))

    useEffect(() => {
        if (!isOpen) {
            setSearchText("")
        }
    }, [isOpen])

    return (
        <div className={clsx(
            "absolute top-15 left-0 right-0 z-50 overflow-hidden bg-card border border-subtle rounded-lg transition-all duration-400 ease-out",
            isOpen ? "max-h-77 opacity-100" : "max-h-0 opacity-0"
        )}>
            <div className="max-h-80 overflow-y-auto">
                <div className="p-3 border-b border-subtle sticky top-0 bg-card">
                    <Input type="text" placeholder="Search exercises..." value={searchText} onChange={handleChange} />
                </div>
                <div className="px-5 pt-4 pb-6 flex flex-col gap-4">
                    {filteredExercises.map(exercise => (
                        <div key={exercise.id} className="flex flex-col transition-colors hover:bg-surface" onClick={() => onSelect(exercise.id)}>
                            <h3 className="text-text-primary font-medium">{exercise.name}</h3>
                            <p className="text-xs font-medium">{exercise.muscleGroup}</p>
                        </div>
                    ))}
                    {filteredExercises.length === 0 && (
                        <Button variant="primary">
                            Create "{searchText}"
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}