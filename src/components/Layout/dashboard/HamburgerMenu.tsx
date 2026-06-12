import CustomLink from "@/components/UI/CustomLink"
import clsx from "clsx"
import { LayoutDashboard, CirclePlus, History, TrendingUp, LogOut } from "lucide-react";

type HamburgerMenuProps = {
    isOpen: boolean
}

export default function HamburgerMenu({ isOpen }: HamburgerMenuProps) {
    return (
        <div className={clsx(
            "absolute top-full left-0 right-0 overflow-hidden transition-all duration-500 ease-out flex flex-col bg-card border-b border-subtle p-4 gap-6 origin-top",
            isOpen ? "opacity-100 max-h-96 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
        )}>
            <CustomLink href="/dashboard" variant="desktop">
                <LayoutDashboard size={20} />
                Dashboard
            </CustomLink>
            <CustomLink href="/log" variant="desktop">
                <CirclePlus size={20} />
                Log Workout
            </CustomLink>
            <CustomLink href="/history" variant="desktop">
                <History size={20} />
                History
            </CustomLink>
            <CustomLink href="/progress" variant="desktop">
                <TrendingUp size={20} />
                Progress
            </CustomLink>
            <CustomLink href="/" variant="desktop">
                <LogOut size={20} />
                Logout
            </CustomLink>
        </div>
    )
}