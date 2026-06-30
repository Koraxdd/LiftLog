"use client"

import { Workout } from "@/app/dashboard/history/page"
import WorkoutCard from "@/components/Layout/history/WorkoutCard";
import { Input } from "@/components/UI/Input";
import { formatDate } from "@/utils/formatDate";
import { useState } from "react";
import { type Exercises } from "../log/WorkoutForm";

type WorkoutListProps = {
    initialExercises: Exercises
    workouts: Workout[]
}

export default function WorkoutList({ initialExercises, workouts }: WorkoutListProps) {
    const [searchText, setSearchText] = useState<string>("")
    const [dateFilter, setDateFilter] = useState<string>("")
    const filteredWorkouts = workouts.filter(workout => {
        const matchedText = workout.name.toLowerCase().includes(searchText.toLowerCase())
        const matchedDate = dateFilter ? formatDate(workout.date) === dateFilter : true

        return matchedText && matchedDate
    })

    return (
        <>
            <div className="bg-card border border-subtle p-4 rounded-lg flex flex-col gap-4 md:flex-row">
                <Input 
                    type="text" 
                    placeholder="Search workouts..." 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full"
                />
                <Input 
                    type="date" 
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                />
            </div>
            <div className="flex flex-col gap-4">
                {filteredWorkouts.map(workout => (
                    <WorkoutCard 
                        key={workout.id} 
                        initialExercises={initialExercises}
                        workout={workout}
                    />
                ))}
            </div>
        </>
    )
}