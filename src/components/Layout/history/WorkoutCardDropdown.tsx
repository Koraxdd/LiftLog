import type { Workout } from "@/app/dashboard/history/page"
import clsx from "clsx"

type WorkoutCardDropdownProps = {
    workout: Workout
    isOpen: boolean
}

export default function WorkoutCardDropdown({ workout, isOpen }: WorkoutCardDropdownProps) {
    return (
        <div className={clsx(
            "overflow-hidden transition-all ease-out duration-400 bg-card border-t border-subtle -mx-6",
            isOpen ? "max-h-1000 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        )}>
            <div className="flex flex-col gap-4 p-6">
                {workout.exercises.map(exercise => (
                    <div key={exercise.id}>
                        <h2 className="font-semibold text-lg mb-3">{exercise.exerciseTemplate.name}</h2>
                        <div className="grid grid-cols-[3rem_3rem_3rem_1fr] gap-6 text-text-muted font-medium text-sm bg-surface items-center px-4 py-3">
                            <span className="ml-2">Set</span>
                            <span>Reps</span>
                            <span>Weight (kg)</span>
                            <span>Volume</span>
                        </div>
                        {exercise.sets.map(set => {
                            const reps = set.reps ?? 0
                            const weight = set.weight ?? 0
                            return (
                                <div key={set.id} className="grid grid-cols-[3rem_3rem_3rem_1fr] gap-6 font-semibold border-t border-subtle py-6 px-4">
                                    <div className="text-brand bg-brand/10 border border-brand-dark/40 font-medium text-sm w-6 h-6 rounded-full ml-2 flex justify-center items-center">
                                        {set.order + 1}
                                    </div>
                                    <p>{set.reps}</p>
                                    <p>{set.weight}</p>
                                    <p>{reps * weight} kg</p>
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}