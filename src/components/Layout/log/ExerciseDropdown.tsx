import clsx from "clsx"
import type { Exercises } from "./WorkoutForm"
import { Input } from "@/components/UI/Input"
import { useEffect, useState } from "react"
import Button from "@/components/UI/Button/Button"
import { createCustomExercise } from "@/actions/exercises"
import type { ExerciseTemplate } from "@/generated/prisma/client"

type ExerciseDropdownProps = {
    isOpen: boolean
    exercises: Exercises
    onSelect: (id: string) => void
    onExerciseCreated: (newExercise: ExerciseTemplate) => void
}

export default function ExerciseDropdown({ isOpen, exercises, onSelect, onExerciseCreated }: ExerciseDropdownProps) {
    const [searchText, setSearchText] = useState<string>("")
    const [muscleGroup, setMuscleGroup] = useState<string>("Chest")
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
                    <Input 
                        type="text" 
                        placeholder="Search exercises..." 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)} 
                    />
                </div>
                <div className="px-5 pt-4 pb-6 flex flex-col gap-4 md:px-2 md:pt-2 md:gap-1">
                    {filteredExercises.map(exercise => (
                        <div key={exercise.id} className="flex flex-col transition-colors hover:bg-surface cursor-pointer rounded-lg md:px-3 md:py-2" onClick={() => onSelect(exercise.id)}>
                            <h3 className="text-text-primary font-medium">{exercise.name}</h3>
                            <p className="text-xs font-medium">{exercise.muscleGroup}</p>
                        </div>
                    ))}
                    {filteredExercises.length === 0 && (
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <Button variant="primary" size="sm" onClick={async () => {
                                const newExercise = await createCustomExercise(searchText, muscleGroup)
                                onExerciseCreated(newExercise)
                                onSelect(newExercise.id)
                            }}>
                                Create "{searchText}"
                            </Button>
                            <select 
                                className="text-text-primary font-medium bg-card border border-subtle rounded-lg px-2 py-1 outline-none" 
                                value={muscleGroup} 
                                onChange={(e) => setMuscleGroup(e.target.value)}
                            >
                                <option value="" disabled>Select a muscle group</option>
                                <option value="Chest">Chest</option>
                                <option value="Back">Back</option>
                                <option value="Legs">Legs</option>
                                <option value="Arms">Arms</option>
                                <option value="Shoulders">Shoulders</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}