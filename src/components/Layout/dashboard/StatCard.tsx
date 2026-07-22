import clsx from "clsx"
import type { ReactElement } from "react"

type DashboardCardProps = {
    icon: ReactElement
    title: string
    data: string | number | null
    variant: "stat" | "progress"
    text: "sm" | "md" | "lg"
}

export default function StatCard({ icon, title, data, variant, text }: DashboardCardProps) {
    return (
        <div className={clsx(
            "flex flex-col",
            variant === "stat" && "bg-card border border-subtle rounded-lg p-6 gap-4",
            variant === "progress" && "gap-2.5 items-center text-center"
        )}>
            {icon}
            <div className="flex flex-col gap-1">
                <span className="text-text-muted text-sm font-medium">{title}</span>
                <span className={clsx(
                    "text-text-primary font-semibold",
                    text === "lg" && "text-2xl md:text-3xl",
                    text === "md" && "text-2xl",
                    text === "sm" && "text-sm"
                )}>{data}</span>
            </div>
        </div>
    )
}