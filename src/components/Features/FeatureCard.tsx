import type { ReactNode } from "react"
import Icon from "../Icon"

type FeatureCardProps = {
    children: ReactNode
    title: string
    icon: ReactNode
}

export default function FeatureCard({ children, title, icon }: FeatureCardProps) {
    return (
        <div className="bg-[#1A1D29] border border-[#374151] rounded-lg px-8 py-7 flex flex-col gap-4">
            <div>
                <Icon>{icon}</Icon>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-[#E5E7EB] text-xl font-semibold">{title}</h3>
                <p className="font-medium">{children}</p>
            </div>
        </div>
    )
}