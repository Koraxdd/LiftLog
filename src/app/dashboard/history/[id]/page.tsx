import WorkoutCard from "@/components/Layout/history/WorkoutCard"
import { authOptions } from "@/lib/auth"
import { getExercisesFromTemplate } from "@/queries/exercises"
import { getWorkoutById } from "@/queries/workouts"
import { getServerSession } from "next-auth"
import { notFound, redirect } from "next/navigation"

type WorkoutPageProps = {
    params: Promise<{ id: string }>
}

export default async function WorkoutPage({ params }: WorkoutPageProps) {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId) {
        redirect("/login")
    }

    const { id } = await params

    const workout = await getWorkoutById(id)
    if (!workout) {
        notFound()
    }

    const exercises = await getExercisesFromTemplate(userId)

    return (
        <div className="px-4 pt-4 pb-7 md:px-65 md:pt-8">
            <WorkoutCard initialExercises={exercises} workout={workout} isOpen={true} />
        </div>
    )
}