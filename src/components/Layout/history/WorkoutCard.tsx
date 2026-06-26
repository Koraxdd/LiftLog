"use client"

import type { Workout } from "@/app/dashboard/history/page"
import Button from "@/components/UI/Button/Button"
import Chip from "@/components/UI/Chip"
import { calculateSets } from "@/utils/calculateSets"
import { calculateVolume } from "@/utils/calculateVolume"
import { ChevronDown, ChevronUp, Pen, Trash2 } from "lucide-react"
import { useState } from "react"
import WorkoutCardDropdown from "./WorkoutCardDropdown"

type WorkoutCardProps = {
    workout: Workout
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <div className="flex flex-col gap-4 bg-card border border-subtle rounded-lg px-6 pt-6 transition-colors hover:bg-surface md:cursor-pointer">
            <div className="flex flex-col gap-4 md:flex-row md:justify-between" onClick={() => setIsOpen(prev => !prev)}>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4">
                        <h2 className="text-xl font-semibold">{workout.name}</h2>
                        {isOpen ? <ChevronUp size={20} className="text-text-muted" /> :
                                <ChevronDown size={20} className="text-text-muted" />}
                    </div>
                    <div className="flex gap-3 text-text-muted text-sm">
                        <p>{new Date(workout.date).toISOString().split("T")[0]}</p>
                        <span>•</span>
                        <p>{workout.exercises.length} exercises</p>
                        <span>•</span>
                        <p>{calculateSets(workout)} sets</p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {workout.exercises.map(exercise => {
                            return (
                                <Chip key={exercise.id} variant="exercise">{exercise.exerciseTemplate.name}</Chip>
                            )
                        })}
                        <Chip variant="stat">{calculateVolume(workout)} kg total</Chip>
                    </div>
                </div>
                <div className="flex" onClick={(e) => e.stopPropagation()}>
                    <Button variant="ghost" size="sm">
                        <Pen size={16} />
                    </Button>
                    <Button size="sm" className="transition-colors hover:bg-[#EF4444]/10 text-[#EF4444] hover:text-white">
                        <Trash2 size={16} />
                    </Button>
                </div>
            </div>
            <WorkoutCardDropdown workout={workout} isOpen={isOpen} />
        </div>
    )
}