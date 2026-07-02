import type { Workout } from "@/app/dashboard/history/page"
import Button from "@/components/UI/Button/Button"
import Chip from "@/components/UI/Chip"
import { calculateSets } from "@/utils/calculateSets"
import { calculateVolume } from "@/utils/calculateVolume"
import { ChevronDown, ChevronUp, Pen, Trash2 } from "lucide-react"
import { useState } from "react"
import WorkoutCardDropdown from "./WorkoutCardDropdown"
import { formatDate } from "@/utils/formatDate"
import { deleteWorkout } from "@/actions/workouts"
import { useRouter } from "next/navigation";
import Modal from "@/components/UI/Modal"
import WorkoutForm, { type Exercises } from "../log/WorkoutForm"

type WorkoutCardProps = {
    initialExercises: Exercises
    workout: Workout
}

export default function WorkoutCard({ initialExercises, workout }: WorkoutCardProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false)
    const router = useRouter()
    const setAmount = calculateSets(workout)

    return (
        <>
            <div className="flex flex-col gap-4 bg-card border border-subtle rounded-lg px-6 pt-6 transition-colors hover:bg-surface">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between cursor-pointer" onClick={() => setIsDropdownOpen(prev => !prev)}>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-4">
                            <h2 className="text-xl font-semibold">{workout.name}</h2>
                            {isDropdownOpen ? <ChevronUp size={20} className="text-text-muted" /> :
                                    <ChevronDown size={20} className="text-text-muted" />}
                        </div>
                        <div className="flex gap-3 text-text-muted text-sm">
                            <p>{formatDate(workout.date)}</p>
                            <span>•</span>
                            <p>{workout.exercises.length} {workout.exercises.length === 1 ? "exercise" : "exercises"}</p>
                            <span>•</span>
                            <p>{setAmount} {setAmount === 1 ? "set" : "sets"}</p>
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
                    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                        <Button 
                            variant="ghost" 
                            size="xs" 
                            className="hover:bg-card px-3 py-1.5"
                            onClick={() => setIsEditModalOpen(true)}
                        >
                            <Pen size={16} />
                        </Button>
                        <Button 
                            size="xs" 
                            className="transition-colors hover:bg-[#EF4444]/10 text-[#EF4444] hover:text-white px-3 py-1.5"
                            onClick={() => setIsDeleteModalOpen(true)}
                        >
                            <Trash2 size={16} />
                        </Button>
                    </div>
                </div>
                <WorkoutCardDropdown workout={workout} isOpen={isDropdownOpen} />
            </div>
            {isDeleteModalOpen && 
                <Modal onClose={() => setIsDeleteModalOpen(false)}>
                    <div className="flex flex-col text-center gap-2">
                        <h2 className="font-semibold text-xl">Delete Workout</h2>
                        <p className="font-medium">Are you sure? This can't be undone.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button 
                            variant="danger"
                            size="sm"
                            className="hover:bg-[#DC2626]"
                            onClick={async () => {
                                await deleteWorkout(workout.id)
                                router.refresh()
                                setIsDeleteModalOpen(false)
                            }}
                        >
                            Delete
                        </Button>
                        <Button 
                            variant="ghost"
                            size="sm"
                            className="border border-subtle"
                            onClick={() => setIsDeleteModalOpen(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </Modal>}
            {isEditModalOpen && 
                <Modal onClose={() => setIsEditModalOpen(false)}>
                    <WorkoutForm initialExercises={initialExercises} workout={workout} onClose={() => setIsEditModalOpen(false)} />
                </Modal>}                               
        </>
    )
}