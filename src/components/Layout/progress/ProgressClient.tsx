"use client"

import ProgressChart from "@/components/charts/ProgressChart"
import ProgressDropdown from "./ProgressDropdown"
import { Award } from "lucide-react"
import { ExerciseTemplate } from "@/generated/prisma/client"
import { useEffect, useState } from "react"
import { getProgressData } from "@/actions/progress"
import { formatDate } from "@/utils/formatDate"

type ProgressClientProps = {
    exercises: ExerciseTemplate[]
}

export default function ProgressClient({ exercises }: ProgressClientProps) {
    const [exerciseName, setExerciseName] = useState<string>(exercises[0].name ?? "")
    const [data, setData] = useState<{ 
        weight: number, 
        shortDate: string, 
        fullDate: Date 
    }[]>([])

    useEffect(() => {
        if (!exerciseName) {
            return
        }
        
        const fetchData = async () => {
            const result = await getProgressData(exerciseName)
            setData(result)
        }

        fetchData()
    }, [exerciseName])

    const pr = Math.max(...data.map(d => d.weight))
    const prDate = data.find(d => d.weight === pr)?.fullDate
    const formattedDate = prDate ? formatDate(prDate) : ""

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
                    <div className="bg-linear-to-br from-[#22C55E]/10 to-card border border-[#22C55E]/20 px-6 py-4 rounded-xl flex items-center gap-3">
                        <Award className="text-white bg-[#22C55E] rounded-xl h-12 w-12 p-3" />
                        <div className="flex flex-col">
                            <span className="text-text-muted text-sm font-medium">Personal Record</span>
                            <span className="text-text-primary text-xl font-semibold">{pr} kg</span>
                            <span className="text-text-muted text-xs font-medium">{formattedDate}</span>
                        </div>
                    </div>
                </div>
                <ProgressChart data={data} />
            </div>
        </div>
    )
}