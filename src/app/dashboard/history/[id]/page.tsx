import { getWorkoutById } from "@/queries/workouts"

type WorkoutPageProps = {
    params: Promise<{ id: string }>
}

export default async function WorkoutPage({ params }: WorkoutPageProps) {
    const { id } = await params

    const workout = await getWorkoutById(id)

    return (
        <div>
            <h2>yesy</h2>
        </div>
    )
}