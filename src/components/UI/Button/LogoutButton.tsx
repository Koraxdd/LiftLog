"use client"

import type { ReactNode } from "react";
import Button from "./Button";
import { signOut } from "next-auth/react";

type LogoutButtonProps = {
    children: ReactNode
    size?: "sm" | "md" | "lg"
}

export default function LogoutButton({ children, size="md" }: LogoutButtonProps) {
    return (
        <Button variant="ghost/danger" size={size} onClick={() => signOut({ callbackUrl: "/" })}>{children}</Button>
    )
}