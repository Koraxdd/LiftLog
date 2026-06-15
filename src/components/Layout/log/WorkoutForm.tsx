"use client"

import { z } from "zod"
import { CirclePlus } from "lucide-react"
import { Input } from "@/components/UI/Input"
import Button from "@/components/UI/Button/Button"
import { useForm, useFieldArray, type SubmitHandler } from "react-hook-form"
import ExerciseRow from "./ExerciseRow"

const WorkoutSchema = z.object({
    name: z.string(),
    date: z.string(),
    exercises: z.array(z.object({
        templateId: z.string(),
        sets: z.array(z.object({
            reps: z.number(),
            weight: z.number()
        }))
    }))
})

export type WorkoutInput = z.infer<typeof WorkoutSchema>

export default function WorkoutForm() {
    const today = new Date().toISOString().split("T")[0]

    const { register, handleSubmit, control, reset } = useForm<WorkoutInput>({
        defaultValues: {
            name: "",
            date: today,
            exercises: [
                {
                    templateId: "",
                    sets: [
                        { reps: 0, weight: 0 }
                    ]
                }
            ]
        }
    })
    const { fields, append, remove } = useFieldArray<WorkoutInput>({
        control,
        name: "exercises"
    })
    const onSubmit: SubmitHandler<WorkoutInput> = async (data) => {

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-subtle rounded-lg p-6 flex flex-col gap-6">
            <Input {...register("name")} label="Workout Name" type="text" placeholder="e.g., Upper Body Day" />
            <Input {...register("date")} label="Date" type="date" />
            <div className="flex justify-center items-center">
                <div>
                    <h3 className="text-text-primary font-semibold text-xl">Exercises</h3>
                    <p className="text-sm font-medium">Add exercises to your workout</p>
                </div>
                <Button
                    variant="primary" 
                    type="button" 
                    size="sm" 
                    onClick={() => append({ templateId: "", sets: [{ reps: 0, weight: 0 }]})}
                >
                    <CirclePlus />
                    Add Exercise
                </Button>
            </div>
            <div className="flex flex-col gap-6">
                {fields.map((field, index) => (
                    <ExerciseRow 
                        key={field.id} 
                        index={index} 
                        control={control} 
                        register={register} 
                        remove={remove} 
                        canDelete={fields.length > 1} 
                    />
                ))}
            </div>
            <div className="flex flex-col gap-3 border-t border-subtle pt-6">
                <Button 
                    variant="ghost" 
                    type="button" 
                    className="border 
                    border-subtle" 
                    onClick={() => reset()}
                >
                    Clear
                </Button>
                <Button 
                    variant="primary" 
                    type="submit"
                >
                    Log Workout
                </Button>
            </div>
        </form>
    )
}