import WorkoutForm from "@/components/Layout/log/WorkoutForm"
import { authOptions } from "@/lib/auth"
import { getExercisesFromTemplate } from "@/queries/exercises"
import { Dumbbell } from "lucide-react"
import { getServerSession } from "next-auth"

export default async function LogPage() {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id as string
    const exercises = await getExercisesFromTemplate(userId)

    return (
        <div className="flex flex-col gap-8 px-4 pt-2 pb-7 md:px-80 md:pt-8">
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
            <WorkoutForm initialExercises={exercises} />
        </div>
    )
}