import CustomLink from "@/components/UI/CustomLink";
import { LayoutDashboard, CirclePlus, History, TrendingUp } from "lucide-react";

export default function FooterNav() {
    return (
        <footer className="bg-card border-t border-subtle py-4 md:hidden">
            <nav className="flex justify-around items-center">
                <CustomLink href="/dashboard" variant="mobile">
                    <LayoutDashboard />
                    Dashboard
                </CustomLink>
                <CustomLink href="/dashboard/log" variant="mobile">
                    <CirclePlus />
                    Log
                </CustomLink>
                <CustomLink href="/dashboard/history" variant="mobile">
                    <History />
                    History
                </CustomLink>
                <CustomLink href="/dashboard/progress" variant="mobile">
                    <TrendingUp />
                    Progress
                </CustomLink>
            </nav>
        </footer>
    )
}