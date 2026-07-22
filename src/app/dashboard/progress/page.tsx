import ProgressClient from "@/components/Layout/progress/ProgressClient";
import { authOptions } from "@/lib/auth";
import { getLoggedExercises } from "@/queries/exercises";
import { TrendingUp } from "lucide-react";
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
            <ProgressClient exercises={exercises} />
        </div>
    )
}