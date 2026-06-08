import type { ReactNode } from "react"

type SocialProofCardProps = {
    children: ReactNode
    title: string
}

export default function SocialProofCard({ children, title }: SocialProofCardProps) {
    return (
        <div className="bg-card border border-subtle text-center rounded-lg px-8 py-5 md:py-7">
            <h3 className="text-brand text-3xl font-semibold">{title}</h3>
            <p className="font-medium">{children}</p>
        </div>
    )
}