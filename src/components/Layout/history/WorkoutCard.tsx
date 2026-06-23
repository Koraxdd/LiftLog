import { Workout } from "@/app/dashboard/history/page"
import Chip from "@/components/UI/Chip"
import { getExerciseByTemplateId } from "@/queries/exercises"
import { calculateSets } from "@/utils/calculateSets"
import { calculateVolume } from "@/utils/calculateVolume"

type WorkoutCardProps = {
    workout: Workout
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
    return (
        <div className="bg-card border border-subtle rounded-lg p-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">{workout.name}</h2>
                <div className="flex gap-3 text-text-muted text-sm">
                    <p>{new Date(workout.date).toISOString().split("T")[0]}</p>
                    <span>•</span>
                    <p>{workout.exercises.length} exercises</p>
                    <span>•</span>
                    <p>{calculateSets(workout)} sets</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {workout.exercises.map(async (exercise) => {
                        const exerciseTemplate = await getExerciseByTemplateId(exercise.exerciseTemplateId)
                        return (
                            <Chip key={exercise.id} variant="exercise">{exerciseTemplate?.name}</Chip>
                        )
                    })}
                    <Chip variant="stat">{calculateVolume(workout)} kg total</Chip>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}