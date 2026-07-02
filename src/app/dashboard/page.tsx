import LogoutButton from "@/components/UI/Button/LogoutButton";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await getServerSession(authOptions)
    if (!session?.user.id) {
        redirect("/login")
    }

    return (
        <div className="flex flex-col gap-8 px-4 pt-2 pb-7 md:px-65 md:pt-8">
            <div>
                <h1 className="font-semibold text-3xl">Welcome back, {session.user.name}!</h1>
                <p className="font-medium">Here's your fitness summary for today</p>
            </div>
        </div>
    )
}