import type { Workout } from "@/app/dashboard/history/page"
import { Calendar, Dumbbell, TrendingUp, Weight } from "lucide-react"
import StatCard from "./StatCard"
import type { Set } from "@/generated/prisma/client"
import { calculateSetsVolume } from "@/utils/calculateVolume"
import { formatNumber } from "@/utils/formatNumber"

type StatsListProps = {
    workouts: Workout[]
    sets: Set[]
}

export default function StatsList({ workouts, sets }: StatsListProps) {
    const workoutsThisMonth = workouts.filter(workout => {
        const date = new Date(workout.date)

        return (
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear()
        )
    })

    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                <StatCard 
                    icon={<Dumbbell className="text-brand rotate-y-180 bg-brand/10 rounded-xl px-3 w-12 h-12" />} 
                    title="Total Workouts" 
                    data={workouts.length.toString()}
                />
                <StatCard 
                    icon={<Calendar className="text-[#22C55E] bg-[#22C55E]/10 rounded-xl px-3 w-12 h-12" />} 
                    title="Current Streak" 
                    data=""
                />
                <StatCard 
                    icon={<TrendingUp className="text-brand bg-brand/10 rounded-xl px-3 w-12 h-12" />} 
                    title="This Month" 
                    data={workoutsThisMonth.length.toString()}
                />
                <StatCard 
                    icon={<Weight className="text-[#F59E0B] bg-[#F59E0B]/10 rounded-xl px-3 w-12 h-12" />} 
                    title="Total Volume" 
                    data={`${formatNumber(calculateSetsVolume(sets))} kg`}
                />
            </div>
    )
}