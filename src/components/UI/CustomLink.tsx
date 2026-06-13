"use client"

import type { MouseEventHandler, ReactNode } from "react"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

type CustomLinkProps = {
    children: ReactNode
    href: string
    variant: "mobile" | "desktop"
    onClick?: MouseEventHandler<HTMLAnchorElement>
}

export default function CustomLink({ children, href, variant, onClick }: CustomLinkProps) {
    const path = usePathname()
    const isActive = path === href

    const style = clsx(
        variant === "mobile" && `flex flex-col justify-around gap-1 items-center font-semibold text-xs ${isActive ? "text-brand" : "text-text-muted"}`,
        variant === "desktop" && `transition-colors flex items-center gap-3 rounded-lg px-4 py-3 font-semibold ${isActive ? "text-text-primary bg-brand" : "text-text-muted hover:bg-surface"}`
    )

    return (
        <Link href={href} className={style} onClick={onClick}>{children}</Link>
    )
}