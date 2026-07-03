import Chip from "@/components/UI/Chip";
import CustomLink from "@/components/UI/CustomLink";
import { authOptions } from "@/lib/auth";
import { getRecentWorkouts } from "@/queries/workouts";
import { calculateVolume } from "@/utils/calculateVolume";
import { formatDate } from "@/utils/formatDate";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RecentWorkoutCard from "./RecentWorkoutCard";

export default async function RecentWorkoutsList() {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId) {
        redirect("/login")
    }

    const recentWorkouts = await getRecentWorkouts(userId)

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-2xl">Recent Workouts</h2>
                    <p className="text-sm font-medium">Your latest training sessions</p>
                </div>
                <CustomLink href="/dashboard/history" className="text-brand text-sm font-medium">View All</CustomLink>
            </div>
            {recentWorkouts.map(workout => (
                <RecentWorkoutCard key={workout.id} workout={workout} />
            ))}
        </div>
    )
}