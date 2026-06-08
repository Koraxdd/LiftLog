import type { ReactNode } from "react"

type IconProps = {
    children: ReactNode
}

export default function Icon({ children }: IconProps) {
    return (
        <div className="text-white inline-flex bg-linear-to-br from-[#3B82F6] to-[#2563EB] p-3 rounded-lg">
            {children}
        </div>
    )
}