import type { ReactNode } from "react";
import "../globals.css"
import FooterNav from "@/components/Layout/dashboard/FooterNav";
import Header from "@/components/Layout/dashboard/Header";
import Sidebar from "@/components/Layout/dashboard/Sidebar";

type DashboardLayoutProps = {
    children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen md:flex-row">
            <Header />
            <Sidebar />
            <main className="flex-1 md:ml-64">{children}</main>
            <FooterNav />
        </div>
    )
}