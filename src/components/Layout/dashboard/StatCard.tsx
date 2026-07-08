import type { ReactElement } from "react"

type DashboardCardProps = {
    icon: ReactElement
    title: string
    data: string | number
}

export default function StatCard({ icon, title, data }: DashboardCardProps) {
    return (
        <div className="bg-card border border-subtle rounded-lg p-6 flex flex-col gap-4">
            {icon}
            <div className="flex flex-col gap-1">
                <span className="text-text-muted text-sm font-medium">{title}</span>
                <span className="text-text-primary font-semibold text-2xl md:text-3xl">{data}</span>
            </div>
        </div>
    )
}