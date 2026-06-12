import type { ReactNode } from "react";
import type { Metadata } from "next";
import "../globals.css"
import FooterNav from "@/components/Layout/dashboard/FooterNav";
import Header from "@/components/Layout/dashboard/Header";

export const metadata: Metadata = {
  title: "LiftLog - Dashboard"
};

type DashboardLayoutProps = {
    children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <FooterNav />
        </div>
    )
}