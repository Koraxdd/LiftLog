import type { ReactNode } from "react";
import type { Metadata } from "next";
import "../globals.css"

export const metadata: Metadata = {
  title: "LiftLog | Dashboard"
};

type DashboardLayoutProps = {
    children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <main>{children}</main>
    )
}