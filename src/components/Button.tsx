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
        variant === "register" && "text-[#E5E7EB] bg-[#3B82F6]"
    )

    return (
        <button className={style}>{children}</button>
    )
}