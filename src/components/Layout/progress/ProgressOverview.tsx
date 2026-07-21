import { Calendar, ChartColumn, Target, TrendingUp } from "lucide-react"
import StatCard from "../dashboard/StatCard"

export default function ProgressOverview() {
    return (
        <div className="grid grid-cols-2 gap-y-4 md:grid-cols-4 mt-2">
            <StatCard 
                icon={<ChartColumn className="text-brand bg-brand/10 rounded-lg px-2.5 w-10 h-10" />}
                title="Total Sessions"
                data="30"
                variant="progress"
            />
            <StatCard 
                icon={<Target className="text-[#F59E0B] bg-[#F59E0B]/10 rounded-lg px-2.5 w-10 h-10" />}
                title="Average Weight"
                data="80 kg"
                variant="progress"
            />
            <StatCard 
                icon={<TrendingUp className="text-[#22C55E] bg-[#22C55E]/10 rounded-lg px-2.5 w-10 h-10" />}
                title="Max Weight"
                data="100 kg"
                variant="progress"
            />
            <StatCard 
                icon={<Calendar className="text-brand bg-brand/10 rounded-lg px-2.5 w-10 h-10" />}
                title="First Logged"
                data="2026-07-12"
                variant="progress"
            />
        </div>
    )
}