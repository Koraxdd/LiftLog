"use client"

import ProgressChart from "@/components/charts/ProgressChart"
import ProgressDropdown from "./ProgressDropdown"
import { Award, Dumbbell, TrendingUp } from "lucide-react"
import { ExerciseTemplate } from "@/generated/prisma/client"
import { useEffect, useState } from "react"
import { getProgressData } from "@/actions/progress"
import { formatDate } from "@/utils/formatDate"
import Button from "@/components/UI/Button/Button"
import Spinner from "@/components/UI/Spinner"
import ProgressOverview from "./ProgressOverview"
import clsx from "clsx"

type ProgressClientProps = {
    exercises: ExerciseTemplate[]
}

export default function ProgressClient({ exercises }: ProgressClientProps) {
    const [exerciseName, setExerciseName] = useState<string>(exercises[0]?.name ?? "")
    const [data, setData] = useState<{ 
        weight: number, 
        shortDate: string, 
        fullDate: Date 
    }[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!exerciseName) {
            return
        }
        
        setIsLoading(true)

        const fetchData = async () => {
            const result = await getProgressData(exerciseName)
            setData(result)
            setIsLoading(false)
        }

        fetchData()
    }, [exerciseName])

    const pr = data.length > 0 ? Math.max(...data.map(d => d.weight)) : null
    const prDate = data.find(d => d.weight === pr)?.fullDate
    const formattedDate = prDate ? formatDate(prDate) : ""

    const totalSessions = data.length
    const avgWeight = data.length ? (data.reduce((total, d) => d.weight + total, 0) / data.length).toFixed(1) : 0
    const maxWeight = data.length ? Math.max(...data.map(d => d.weight)) : 0
    const firstLogged = data.length ? formatDate(data[0].fullDate) : null

    const firstWeight = data[0]?.weight ?? 0
    const lastWeight = data[data.length - 1]?.weight ?? 0
    const percentageIncrease = firstWeight > 0 ? (((lastWeight - firstWeight) / firstWeight) * 100).toFixed(1) : 0

    return (
        <div className="flex flex-col gap-8">
            <ProgressDropdown 
                exercises={exercises} 
                exerciseName={exerciseName}
                onChange={(e) => setExerciseName(e.target.value)}
            />
            <div className="bg-card border border-subtle rounded-lg p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold">Weight Progress</h2>
                        <p className="font-medium">Track your strength gains over time</p>
                    </div>
                    {pr && (
                        <div className="bg-linear-to-br from-[#22C55E]/10 to-card border border-[#22C55E]/20 px-6 py-4 rounded-xl flex items-center gap-3">
                            <Award className="text-white bg-[#22C55E] rounded-xl h-12 w-12 p-3" />
                            <div className="flex flex-col">
                                <span className="text-text-muted text-sm font-medium">Personal Record</span>
                                <span className="text-text-primary text-xl font-semibold">{pr} kg</span>
                                <span className="text-text-muted text-xs font-medium">{formattedDate}</span>
                            </div>
                        </div>
                    )}
                </div>
                {isLoading ? (
                    <div className="flex flex-col items-center gap-4">
                        <Spinner className="w-10 h-10 border-8 border-brand border-t-brand-dark/40" />
                    </div>
                ) : data.length < 2 ? (
                    <div className="flex flex-col items-center gap-4 text-center rounded-lg py-30 px-20">
                        <Dumbbell size={30} className="rotate-y-180 text-text-muted" />
                        <div className="flex flex-col gap-2">
                            <h3 className="text-text-primary font-semibold text-xl">Not enough data</h3>
                            <p className="font-medium">Log at least 2 sessions to see progress</p>
                        </div>
                        <Button 
                            variant="primary" 
                            size="sm" 
                            href="/dashboard/log"
                        >
                            Log A Workout
                        </Button>
                    </div>
                ) : (
                    <>
                        <ProgressChart data={data} />
                        <ProgressOverview
                            totalSessions={totalSessions}
                            avgWeight={avgWeight}
                            maxWeight={maxWeight}
                            firstLogged={firstLogged}
                        />
                    </>
                )}
            </div>
            {!isLoading && !(data.length < 2) && (
                <div className="bg-card border border-subtle rounded-lg p-6 flex flex-col gap-6">
                    <h3 className="text-text-primary font-semibold text-xl">Overall Trend</h3>
                    <div className={clsx(
                        "border bg-linear-to-r to-card rounded-lg flex items-center px-4 py-4 gap-5",
                        Number(percentageIncrease) >= 0 ? "from-[#22C55E]/10 to-card border-[#22C55E]/20" : "from-[#EF4444]/10 to-card border-[#EF4444]/20"
                    )}>
                        <TrendingUp className={clsx(
                            "h-12 w-12",
                            Number(percentageIncrease) >= 0 ? "text-[#22C55E]" : "text-[#EF4444]"
                        )} />
                        <div className="text-text-muted font-medium flex flex-col gap-0.5">
                            <span>Weight Increase</span>
                            <span className={clsx(
                                "font-semibold text-3xl",
                                Number(percentageIncrease) >= 0 ? "text-[#22C55E]" : "text-[#EF4444]"
                            )}>
                                {Number(percentageIncrease) >= 0 ? `+${percentageIncrease}%` : `-${percentageIncrease}%`}
                            </span>
                            <span className="text-sm">Since you started tracking</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}