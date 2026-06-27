"use client"

import { Workout } from "@/app/dashboard/history/page"
import WorkoutCard from "@/components/Layout/history/WorkoutCard";
import { Input } from "@/components/UI/Input";
import { useState } from "react";

type WorkoutListProps = {
    workouts: Workout[]
}

export default function WorkoutList({ workouts }: WorkoutListProps) {
    const [searchText, setSearchText] = useState<string>("")
    const [dateFilter, setDateFilter] = useState<string>("")
    const filteredWorkouts = workouts.filter(workout => workout.name.toLowerCase().includes(searchText.toLowerCase()))

    return (
        <>
            <div className="bg-card border border-subtle p-4 rounded-lg flex flex-col gap-4">
                <Input 
                    type="text" 
                    placeholder="Search workouts..." 
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
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
                        workout={workout}
                    />
                ))}
            </div>
        </>
    )
}