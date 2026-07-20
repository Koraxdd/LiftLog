import ProgressChart from "@/components/charts/ProgressChart";
import ProgressDropdown from "@/components/Layout/progress/ProgressDropdown";
import { authOptions } from "@/lib/auth";
import { getLoggedExercises } from "@/queries/exercises";
import { Award, TrendingUp } from "lucide-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProgressPage() {
    const session = await getServerSession(authOptions)
    const userId = session?.user.id
    if (!userId) {
        redirect("/login")
    }

    const exercises = await getLoggedExercises(userId)

    return (
        <div className="flex flex-col gap-8 px-4 pt-2 pb-7 md:px-45 md:pt-8">
            <div className="flex items-center gap-3">
                <TrendingUp
                    size={50} 
                    className="text-white inline-flex bg-linear-to-br from-brand to-brand-dark px-3 py-2 rounded-xl" 
                />
                <div>
                    <h1 className="font-semibold text-3xl">Progress Tracking</h1>
                    <p className="font-medium">Analyse your fitness journey</p>
                </div>
            </div>
            <ProgressDropdown exercises={exercises} />
            <div className="bg-card border border-subtle rounded-lg p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">Weight Progress</h2>
                        <p className="font-medium">Track your strength gains over time</p>
                    </div>
                    <div className="bg-linear-to-br from-[#22C55E]/10 to-card border border-[#22C55E]/20 px-6 py-4 rounded-xl flex items-center gap-3">
                        <Award className="text-white bg-[#22C55E] rounded-xl h-12 w-12 p-3" />
                        <div className="flex flex-col">
                            <span className="text-text-muted text-sm font-medium">Personal Record</span>
                            <span className="text-text-primary text-xl font-semibold">120 kg</span>
                            <span className="text-text-muted text-xs font-medium">2026-07-18</span>
                        </div>
                    </div>
                </div>
                <ProgressChart />
            </div>
        </div>
    )
}