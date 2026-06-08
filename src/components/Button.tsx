import clsx from "clsx"
import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
    variant: "login" | "register" | "trial"
    type?: "submit" | "reset" | "button"
    onClick?: () => void
}

export default function Button({ children, variant }: ButtonProps) {
    const style = clsx(
        "px-4 py-2 rounded-lg font-semibold",
        variant === "login" && "text-[#9CA3AF]",
        variant === "register" && "text-[#E5E7EB] bg-[#3B82F6]",
        variant === "trial" && "text-[#E5E7EB] bg-[#3B82F6] px-6 py-3 text-lg flex justify-center items-center gap-3"
    )

    return (
        <button className={style}>{children}</button>
    )
}