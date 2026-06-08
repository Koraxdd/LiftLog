import clsx from "clsx"
import type { ReactNode } from "react"

type ButtonProps = {
    children: ReactNode
    variant: "ghost" | "primary" | "secondary" | "prominent"
    type?: "submit" | "reset" | "button"
    onClick?: () => void
}

export default function Button({ children, variant, type="button", onClick }: ButtonProps) {
    const style = clsx(
        "px-4 py-2 rounded-lg font-semibold",
        variant === "ghost" && "text-[#9CA3AF]",
        variant === "primary" && "text-[#E5E7EB] bg-[#3B82F6]",
        variant === "secondary" && "text-[#E5E7EB] bg-[#3B82F6] px-6 py-3 text-lg flex justify-center items-center gap-3",
        variant === "prominent" && "text-[#0F1117] bg-[#E5E7EB] border border-[#0F1117] px-10 py-4"
    )

    return (
        <button className={style}>{children}</button>
    )
}