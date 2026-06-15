import WorkoutForm from "@/components/Layout/log/WorkoutForm"
import { Dumbbell } from "lucide-react"

export default function LogPage() {
    return (
        <div className="flex flex-col gap-8 px-4 py-2">
            <div className="flex items-center gap-3">
                <Dumbbell
                    size={50} 
                    className="text-white inline-flex rotate-y-180 bg-linear-to-br from-brand to-brand-dark px-3 py-2 rounded-xl" 
                />
                <div>
                    <h1 className="font-semibold text-3xl">Log Workout</h1>
                    <p className="font-medium">Track your training session</p>
                </div>
            </div>
            <WorkoutForm />
        </div>
    )
}