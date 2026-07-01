"use client"

import { Workout } from "@/app/dashboard/history/page"
import WorkoutCard from "@/components/Layout/history/WorkoutCard";
import { Input } from "@/components/UI/Input";
import { formatDate } from "@/utils/formatDate";
import { useState } from "react";
import { type Exercises } from "../log/WorkoutForm";
import Button from "@/components/UI/Button/Button";

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
            {filteredWorkouts.length === 0 && (
                <div className="flex flex-col items-center gap-4 text-center py-20">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-text-primary font-semibold text-xl">No workouts yet</h3>
                        <p>Start logging your workouts to see them here</p>
                    </div>
                    <Button variant="primary" size="sm" href="/dashboard/log">
                        Log Your First Workout
                    </Button>
                </div>
            )}
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