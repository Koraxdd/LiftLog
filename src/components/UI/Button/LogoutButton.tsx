"use client"

import type { ReactNode } from "react";
import Button from "./Button";
import { signOut } from "next-auth/react";

type LogoutButtonProps = {
    children: ReactNode
}

export default function LogoutButton({ children }: LogoutButtonProps) {
    return (
        <Button variant="primary" onClick={() => signOut({ callbackUrl: "/" })}>{children}</Button>
    )
}