"use client"

import { Input } from "@/components/UI/Input"
import Button from "@/components/UI/Button/Button"
import { type Control, useFieldArray, UseFieldArrayRemove, UseFormRegister } from "react-hook-form"
import type { WorkoutInput } from "./WorkoutForm"
import { CirclePlus, Trash2 } from "lucide-react"

type ExerciseRowProps = {
    index: number
    control: Control<WorkoutInput>
    register: UseFormRegister<WorkoutInput>
    remove: UseFieldArrayRemove
    canDelete: boolean
}

export default function ExerciseRow({ index, control, register, remove, canDelete }: ExerciseRowProps) {
    const { fields, append } = useFieldArray<WorkoutInput>({
        control,
        name: `exercises.${index}.sets`
    })

    return (
        <div className="bg-surface border border-subtle rounded-lg px-6 py-4">
            <div className="flex items-center gap-4">
                <Input type="text" placeholder="Select or type exercise name" className="flex-1 min-w-0" />
                {canDelete && <Button variant="danger" size="sm" onClick={() => remove(index)}><Trash2 size={20} /></Button>}
            </div>
            <div className="text-text-muted text-sm font-semibold grid grid-cols-3 border-b border-subtle pt-5 pb-2">
                <span className="pl-3">Set</span>
                <span>Reps</span>
                <span>Weight (kg)</span>
            </div>
            <div>
                
            </div>
            <Button 
                variant="ghost" 
                size="xs"
                onClick={() => append({ reps: 0, weight: 0 })}
            >
                <CirclePlus size={16} />
                Add Set
            </Button>
        </div>
    )
}