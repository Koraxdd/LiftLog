import RecentWorkoutsList from "@/components/Layout/dashboard/RecentWorkoutsList";
import RecordsList from "@/components/Layout/dashboard/RecordsList";
import StatsList from "@/components/Layout/dashboard/StatsList";
import { authOptions } from "@/lib/auth";
import { getAllWorkoutsByUserId } from "@/queries/workouts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId) {
        redirect("/login")
    }

    const workouts = await getAllWorkoutsByUserId(userId)

    return (
        <div className="flex flex-col gap-8 px-4 pt-2 pb-7 md:px-45 md:pt-8">
            <div>
                <h1 className="font-semibold text-3xl md:text-4xl">Welcome back, {session.user.name}!</h1>
                <p className="font-medium">Here's your fitness summary for today</p>
            </div>
            <StatsList workouts={workouts} />
            <RecentWorkoutsList />
            <RecordsList userId={userId} />
        </div>
    )
}