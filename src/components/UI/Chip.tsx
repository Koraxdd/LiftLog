import clsx from "clsx"
import type { ReactNode } from "react"

type ChipProps = {
    variant: "exercise" | "stat"
    children: ReactNode
}

export default function Chip({ variant, children }: ChipProps) {
    return (
        <div className={clsx(
            "border text-xs font-medium rounded-full px-2 py-0.5 flex items-center",
            variant === "exercise" && "border-subtle bg-surface text-text-muted",
            variant === "stat" && "border-brand-dark/40 bg-brand/10 text-brand"
        )}>
            {children}
        </div>
    )
}