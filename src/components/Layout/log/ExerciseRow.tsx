import { Input } from "@/components/UI/Input"
import Button from "@/components/UI/Button/Button"
import { type Control, Controller, useFieldArray, type UseFieldArrayRemove, type UseFormRegister } from "react-hook-form"
import type { Exercises, WorkoutInput } from "./WorkoutForm"
import { CirclePlus, Trash2 } from "lucide-react"
import SetRow from "./SetRow"
import clsx from "clsx"
import { useState } from "react"
import ExerciseDropdown from "./ExerciseDropdown"
import { ExerciseTemplate } from "@/generated/prisma/client"

type ExerciseRowProps = {
    exerciseIndex: number
    control: Control<WorkoutInput>
    register: UseFormRegister<WorkoutInput>
    removeExercise: UseFieldArrayRemove
    canDelete: boolean
    exercises: Exercises
    onExerciseCreated: (newExercise: ExerciseTemplate) => void
}

export default function ExerciseRow({ exerciseIndex, control, register, removeExercise, canDelete, exercises, onExerciseCreated }: ExerciseRowProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const { fields, append, remove } = useFieldArray<WorkoutInput>({
        control,
        name: `exercises.${exerciseIndex}.sets`
    })

    return (
        <div className="bg-surface border border-subtle rounded-lg px-6 py-4">
            <Controller 
                control={control}
                name={`exercises.${exerciseIndex}.templateId`}
                render={({ field }) => {
                    const selected = exercises.find(exercise => field.value === exercise.id)

                    return (
                        <div className="flex flex-col relative">
                        <div className="flex items-center gap-4">
                            <Input 
                                type="text" 
                                placeholder="Select or type exercise name" 
                                value={selected?.name || ""}
                                readOnly={true} 
                                onClick={() => setIsOpen(prev => !prev)} 
                                className="flex-1 min-w-0" 
                            />
                            {canDelete && <Button 
                                            variant="danger" 
                                            size="sm" 
                                            className="hover:bg-[#DC2626]" 
                                            onClick={() => removeExercise(exerciseIndex)}
                                          >
                                                <Trash2 size={20} />
                                          </Button>}
                        </div>
                        <ExerciseDropdown 
                            isOpen={isOpen} 
                            exercises={exercises} 
                            onSelect={(id) => {
                                field.onChange(id)
                                setIsOpen(false)
                            }} 
                            onExerciseCreated={onExerciseCreated}
                        />
                    </div>
                    )
                }}
            />
            <div className={clsx(
                "text-text-muted text-sm font-semibold grid grid-cols-[2rem_1fr_1fr] pt-5 pb-2 gap-6 md:gap-20",
                fields.length > 1 && "grid-cols-[2rem_1fr_1fr_2rem]"
            )}>
                <span className="ml-2">Set</span>
                <span>Reps</span>
                <span>Weight (kg)</span>
            </div>
            <div className="flex flex-col gap-3">
                {fields.map((field, index) => (
                    <SetRow 
                        key={field.id} 
                        index={index} 
                        exerciseIndex={exerciseIndex} 
                        register={register} 
                        removeSet={remove} 
                        canDelete={fields.length > 1} 
                    />
                ))}
            </div>
            <Button 
                variant="ghost" 
                size="xs"
                onClick={() => append({ reps: 0, weight: 0 })}
                className="mt-4 ml-2"
            >
                <CirclePlus size={16} />
                Add Set
            </Button>
        </div>
    )
}