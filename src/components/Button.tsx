import clsx from "clsx"
import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
    variant: "login" | "register"
    type?: "submit" | "reset" | "button"
    onClick?: () => void
}

export default function Button({ children, variant }: ButtonProps) {
    const style = clsx(
        "px-4 py-2 rounded-lg font-semibold",
        variant === "login" && "text-[#9CA3AF]",
        variant === "register" && "text-[#E5E7EB] bg-linear-to-br from-[#3B82F6] to-[#2563EB]"
    )

    return (
        <button className={style}>{children}</button>
    )
}