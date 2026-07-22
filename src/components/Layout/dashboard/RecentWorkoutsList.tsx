import CustomLink from "@/components/UI/CustomLink";
import { authOptions } from "@/lib/auth";
import { getRecentWorkouts } from "@/queries/workouts";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import RecentWorkoutCard from "./RecentWorkoutCard";
import { Dumbbell } from "lucide-react";
import Button from "@/components/UI/Button/Button";

export default async function RecentWorkoutsList() {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId) {
        redirect("/login")
    }

    const recentWorkouts = await getRecentWorkouts(userId)
    const recentWorkoutCards = recentWorkouts.map(workout => (
                                <RecentWorkoutCard key={workout.id} workout={workout} />
                            ))

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-2xl">Recent Workouts</h2>
                    <p className="text-sm font-medium">Your latest training sessions</p>
                </div>
                <CustomLink href="/dashboard/history" className="text-brand text-sm font-medium hover:underline">View All</CustomLink>
            </div>
            {recentWorkouts.length === 0 ? (
                <div className="flex flex-col items-center gap-4 text-center bg-card border border-subtle rounded-lg py-30 px-20">
                    <Dumbbell size={30} className="rotate-y-180 text-text-muted" />
                    <div className="flex flex-col gap-2">
                        <h3 className="text-text-primary font-semibold text-xl">No workouts yet</h3>
                        <p className="font-medium">Start logging your workouts to see them here</p>
                    </div>
                    <Button 
                        variant="primary" 
                        size="sm" 
                        href="/dashboard/log"
                    >
                        Log Your First Workout
                    </Button>
                </div>
            ) :  recentWorkoutCards}
        </div>
    )
}