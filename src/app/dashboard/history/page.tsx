import WorkoutList from "@/components/Layout/history/WorkoutList";
import { authOptions } from "@/lib/auth";
import { getAllWorkoutsByUserId } from "@/queries/workouts";
import { History } from "lucide-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export type Workout = Awaited<ReturnType<typeof getAllWorkoutsByUserId>>[number]

export default async function HistoryPage() {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId) {
        redirect("/login")
    }

    const workouts = await getAllWorkoutsByUserId(userId)

    return (
        <div className="flex flex-col gap-8 px-4 pt-2 pb-7 md:px-80 md:pt-8">
            <div className="flex items-center gap-3">
                <History
                    size={50} 
                    className="text-white inline-flex bg-linear-to-br from-brand to-brand-dark px-3 py-2 rounded-xl" 
                />
                <div>
                    <h1 className="font-semibold text-3xl">Workout History</h1>
                    <p className="font-medium">View and manage all your workouts</p>
                </div>
            </div>
            <WorkoutList workouts={workouts} />
        </div>
    )
}