import type { Workout } from "@/app/dashboard/history/page"
import { Calendar, Dumbbell, TrendingUp, Weight } from "lucide-react"
import DashboardCard from "./DashboardCard"


type StatsListProps = {
    workouts: Workout[]
}

export default function StatsList({ workouts }: StatsListProps) {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
                <DashboardCard 
                    icon={<Dumbbell className="text-brand rotate-y-180 bg-brand/10 rounded-xl px-3 w-12 h-12" />} 
                    title="Total Workouts" 
                    data={workouts.length.toString()}
                />
                <DashboardCard 
                    icon={<Calendar className="text-[#22C55E] bg-[#22C55E]/10 rounded-xl px-3 w-12 h-12" />} 
                    title="Current Streak" 
                    data=""
                />
                <DashboardCard 
                    icon={<TrendingUp className="text-brand bg-brand/10 rounded-xl px-3 w-12 h-12" />} 
                    title="This Month" 
                    data=""
                />
                <DashboardCard 
                    icon={<Weight className="text-[#F59E0B] bg-[#F59E0B]/10 rounded-xl px-3 w-12 h-12" />} 
                    title="Total Volume" 
                    data=""
                />
            </div>
    )
}