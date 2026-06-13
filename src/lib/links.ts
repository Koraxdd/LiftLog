import { CirclePlus, History, LayoutDashboard, TrendingUp } from "lucide-react";

export const navLinks = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/log", label: "Log Workout", icon: CirclePlus },
    { href: "/dashboard/history", label: "History", icon: History },
    { href: "/dashboard/progress", label: "Progress", icon: TrendingUp }
]