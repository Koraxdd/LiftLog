import type { Workout } from "@/app/dashboard/history/page"
import { calculateVolume } from "@/utils/calculateVolume"
import Chip from "@/components/UI/Chip"
import { formatDate } from "@/utils/formatDate"

type RecentWorkoutCardProps = {
    workout: Workout
}

export default function RecentWorkoutCard({ workout }: RecentWorkoutCardProps) {
    return (
        <div className="flex flex-col gap-3 p-6 bg-card border border-subtle rounded-lg">
            <div className="flex justify-between">
                <h2 className="text-xl font-semibold">{workout.name}</h2>
                <Chip variant="stat">{calculateVolume(workout)} kg</Chip>
            </div>
            <div className="flex gap-3 text-text-muted text-sm">
                <p>{formatDate(workout.date)}</p>
                <span className="">•</span>
                <p>{workout.exercises.length} {workout.exercises.length === 1 ? "exercise" : "exercises"}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
                {workout.exercises.map(exercise => (
                    <Chip key={exercise.exerciseTemplateId} variant="exercise">{exercise.exerciseTemplate.name}</Chip>
                ))}
            </div>
        </div>
    )
}