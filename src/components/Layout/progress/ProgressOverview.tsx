import { Calendar, ChartColumn, Target, TrendingUp } from "lucide-react"
import StatCard from "../dashboard/StatCard"

type ProgressOverviewProps = {
    totalSessions: number
    avgWeight: string | number
    maxWeight: number
    firstLogged: string | null
}

export default function ProgressOverview({ totalSessions, avgWeight, maxWeight, firstLogged }: ProgressOverviewProps) {
    return (
        <div className="grid grid-cols-2 gap-y-4 md:grid-cols-4 mt-2">
            <StatCard 
                icon={<ChartColumn className="text-brand bg-brand/10 rounded-lg px-2.5 w-10 h-10" />}
                title="Total Sessions"
                data={totalSessions}
                variant="progress"
                text="md"
            />
            <StatCard 
                icon={<Target className="text-[#F59E0B] bg-[#F59E0B]/10 rounded-lg px-2.5 w-10 h-10" />}
                title="Average Weight"
                data={`${avgWeight} kg`}
                variant="progress"
                text="md"
            />
            <StatCard 
                icon={<TrendingUp className="text-[#22C55E] bg-[#22C55E]/10 rounded-lg px-2.5 w-10 h-10" />}
                title="Max Weight"
                data={`${maxWeight} kg`}
                variant="progress"
                text="md"
            />
            <StatCard 
                icon={<Calendar className="text-brand bg-brand/10 rounded-lg px-2.5 w-10 h-10" />}
                title="First Logged"
                data={firstLogged}
                variant="progress"
                text="sm"
            />
        </div>
    )
}