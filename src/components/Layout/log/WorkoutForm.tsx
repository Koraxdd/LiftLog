"use client"

import { CirclePlus } from "lucide-react"
import { Input } from "@/components/UI/Input"
import Button from "@/components/UI/Button/Button"
import { useForm, type SubmitHandler } from "react-hook-form"

export default function WorkoutForm() {
    const today = new Date().toISOString().split("T")[0]

    return (
        <form className="bg-card border border-subtle rounded-lg p-6 flex flex-col gap-6">
            <Input label="Workout Name" type="text" placeholder="e.g., Upper Body Day" />
            <Input label="Date" type="date" defaultValue={today} />
            <div className="flex justify-center items-center">
                <div>
                    <h3 className="text-text-primary font-semibold text-xl">Exercises</h3>
                    <p className="text-sm font-medium">Add exercises to your workout</p>
                </div>
                <Button variant="primary" type="button" size="sm">
                    <CirclePlus />
                    Add Exercise
                </Button>
            </div>
            <div className="flex flex-col gap-3 border-t border-subtle pt-6">
                <Button variant="ghost" type="button" className="border border-subtle">Clear</Button>
                <Button variant="primary" type="submit">Log Workout</Button>
            </div>
        </form>
    )
}