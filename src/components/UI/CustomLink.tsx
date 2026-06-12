"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import clsx from "clsx"
import { usePathname } from "next/navigation"

type CustomLinkProps = {
    children: ReactNode
    href: string
    variant: "mobile" | "desktop" | "hamburger"
}

export default function CustomLink({ children, href, variant }: CustomLinkProps) {
    const path = usePathname()
    const isActive = path === href

    const style = clsx(
        variant === "mobile" && `flex flex-col justify-around gap-1 items-center font-semibold text-xs ${isActive ? "text-brand" : "text-text-muted"}`,
        variant === "hamburger" && `flex items-center gap-3 rounded-lg px-4 py-3 font-medium ${isActive ? "text-text-primary bg-brand" : "text-text-muted"}`
    )

    return (
        <Link href={href} className={style}>{children}</Link>
    )
}