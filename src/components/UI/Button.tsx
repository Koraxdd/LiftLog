import clsx from "clsx"
import Link from "next/link"
import type { MouseEventHandler, ReactNode } from "react"
import Spinner from "./Spinner"

type ButtonProps = {
    children: ReactNode
    variant: "ghost" | "primary" | "secondary" | "prominent"
    size?: "sm" | "md" | "lg"
    href?: string
    type?: "submit" | "reset" | "button"
    disabled?: boolean
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, variant, size="md", href, type="button", disabled=false, onClick }: ButtonProps) {
    const style = clsx(
        "rounded-lg font-semibold md:transition-colors flex justify-center items-center gap-2",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
        size === "sm" && "px-4 py-2",
        size === "md" && "px-6 py-3 text-lg",
        size === "lg" && "px-10 py-4",
        variant === "ghost" && "text-[#9CA3AF] md:hover:text-[#E5E7EB] md:hover:bg-card",
        variant === "primary" && "text-[#E5E7EB] bg-brand md:hover:bg-brand-dark",
        variant === "prominent" && "text-surface bg-[#E5E7EB] border border-surface md:hover:bg-white"
    )

    return (
        href ? 
            <Link href={href} className={style}>{children}</Link> :
            <button disabled={disabled} type={type} onClick={onClick} className={style}>
                {disabled ? <Spinner /> : null}
                {children}
            </button>
    )
}