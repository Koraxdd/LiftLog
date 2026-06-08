import type { ReactNode } from "react"

type IconProps = {
    children: ReactNode
}

export default function Icon({ children }: IconProps) {
    return (
        <div className="text-white inline-flex bg-linear-to-br from-brand to-brand-dark p-3 rounded-lg">
            {children}
        </div>
    )
}