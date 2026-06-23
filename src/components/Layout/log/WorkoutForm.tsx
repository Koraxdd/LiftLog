"use client"

import { z } from "zod"
import { CirclePlus } from "lucide-react"
import { Input } from "@/components/UI/Input"
import Button from "@/components/UI/Button/Button"
import { useForm, useFieldArray, type SubmitHandler } from "react-hook-form"
import ExerciseRow from "./ExerciseRow"
import { useState } from "react"
import { addWorkout } from "@/actions/workouts"
import { zodResolver } from "@hookform/resolvers/zod"
import clsx from "clsx"

const WorkoutSchema = z.object({
    name: z.string().min(1, "Workout name is required"),
    date: z.string(),
    exercises: z.array(z.object({
        templateId: z.string().min(1, "Please select an exercise"),
        sets: z.array(z.object({
            reps: z.number("Please enter a number").min(1, "Must be at least 1"),
            weight: z.number("Please enter a number").min(0, "Can't be lower than 0")
        }))
    }))
})

export type WorkoutInput = z.infer<typeof WorkoutSchema>

export type Exercises = {
    name: string
    id: string
    muscleGroup: string
    isCustom: boolean
    userId: string | null
}[]

type WorkoutFormProps = {
    initialExercises: Exercises
}

export default function WorkoutForm({ initialExercises }: WorkoutFormProps) {
    const [exercises, setExercises] = useState<Exercises>(initialExercises)
    const today = new Date().toISOString().split("T")[0]

    const { register, handleSubmit, control, reset, setError, formState: { errors, isSubmitting } } = useForm<WorkoutInput>({
        resolver: zodResolver(WorkoutSchema),
        defaultValues: {
            name: "",
            date: today,
            exercises: [{
                templateId: "",
                sets: [
                    { reps: undefined, weight: undefined }
                ]
            }]
        }
    })
    const { fields, append, remove } = useFieldArray<WorkoutInput>({
        control,
        name: "exercises"
    })
    const onSubmit: SubmitHandler<WorkoutInput> = async (data) => {
        try {
            await addWorkout(data)
            reset()
        } catch (err) {
            setError("root", { message: "Failed to save workout. Please try again." })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-subtle rounded-lg p-6 flex flex-col gap-6 md:p-8">
            <div className={clsx("flex flex-col md:flex-row", errors.name ? "gap-3" : "gap-6")}>
                <div className="flex flex-col gap-3 w-full">
                    <Input {...register("name")} label="Workout Name" type="text" placeholder="e.g., Upper Body Day" className="w-full" />
                    {errors.name && <span className="text-[#EF4444] text-sm">{errors.name.message}</span>}
                </div>
                <Input {...register("date")} label="Date" type="date" className="w-full" />
            </div>
            <div className="flex justify-center items-center md:justify-between">
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
                    <CirclePlus className="md:w-5" />
                    Add Exercise
                </Button>
            </div>
            <div className="flex flex-col gap-6 md:pb-2">
                {fields.map((field, index) => (
                    <ExerciseRow 
                        key={field.id} 
                        exerciseIndex={index} 
                        control={control} 
                        register={register} 
                        removeExercise={remove} 
                        canDelete={fields.length > 1} 
                        exercises={exercises}
                        onExerciseCreated={(newExercise) => setExercises(prev => [...prev, newExercise])}
                        errors={errors}
                    />
                ))}
            </div>
            {errors.root && <span className="text-[#EF4444] text-sm">{errors.root.message}</span>}
            <div className="flex flex-col gap-3 border-t border-subtle pt-6 md:flex-row md:justify-end">
                <Button 
                    variant="ghost" 
                    type="button" 
                    className="border border-subtle"
                    onClick={() => reset()}
                >
                    Clear
                </Button>
                <Button 
                    variant="primary" 
                    type="submit"
                    disabled={isSubmitting}
                >
                    Log Workout
                </Button>
            </div>
        </form>
    )
}