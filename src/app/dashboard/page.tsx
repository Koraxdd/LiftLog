import VolumeChart from "@/components/charts/VolumeChart";
import RecentWorkoutsList from "@/components/Layout/dashboard/RecentWorkoutsList";
import RecordsList from "@/components/Layout/dashboard/RecordsList";
import StatsList from "@/components/Layout/dashboard/StatsList";
import { authOptions } from "@/lib/auth";
import { getAllSetsByUserId } from "@/queries/sets";
import { getAllWorkoutsByUserId, getThisWeekWorkouts } from "@/queries/workouts";
import { calculateVolume } from "@/utils/calculateVolume";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard - LiftLog"
};

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId) {
        redirect("/login")
    }

    const [workouts, sets, thisWeekWorkouts] = await Promise.all([
        await getAllWorkoutsByUserId(userId),
        await getAllSetsByUserId(userId),
        await getThisWeekWorkouts(userId)
    ])

    const data = [
        { day: "Mon", volume: 0 },
        { day: "Tue", volume: 0 },
        { day: "Wed", volume: 0 },
        { day: "Thu", volume: 0 },
        { day: "Fri", volume: 0 },
        { day: "Sat", volume: 0 },
        { day: "Sun", volume: 0 },
    ]

    for (const workout of thisWeekWorkouts) {
        const index = (workout.date.getDay() + 6) % 7
        data[index].volume = calculateVolume(workout)
    }

    return (
        <div className="flex flex-col gap-8 px-4 pt-2 pb-7 md:px-45 md:pt-8">
            <div>
                <h1 className="font-semibold text-3xl md:text-4xl">Welcome back, {session.user.name}!</h1>
                <p className="font-medium">Here's your fitness summary for today</p>
            </div>
            <StatsList workouts={workouts} sets={sets} />
            <VolumeChart data={data} />
            <RecentWorkoutsList />
            <RecordsList userId={userId} />
        </div>
    )
}