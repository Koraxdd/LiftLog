import type { ReactNode } from "react"

type SocialProofCardProps = {
    children: ReactNode
    title: string
}

export default function SocialProofCard({ children, title }: SocialProofCardProps) {
    return (
        <div className="bg-[#1A1D29] border border-[#374151] text-center rounded-lg px-8 py-5">
            <h3 className="text-[#3B82F6] text-3xl font-semibold">{title}</h3>
            <p className="font-medium">{children}</p>
        </div>
    )
}