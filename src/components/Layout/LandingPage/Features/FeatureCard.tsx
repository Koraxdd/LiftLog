import type { ReactElement, ReactNode } from "react"
import Icon from "@/components/UI/Icon"

type FeatureCardProps = {
    children: ReactNode
    title: string
    icon: ReactElement
}

export default function FeatureCard({ children, title, icon }: FeatureCardProps) {
    return (
        <div className="bg-card border border-subtle rounded-lg px-8 py-7 flex flex-col gap-4">
            <div>
                <Icon>{icon}</Icon>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-text-primary text-xl font-semibold">{title}</h3>
                <p className="font-medium">{children}</p>
            </div>
        </div>
    )
}