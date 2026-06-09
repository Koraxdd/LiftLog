"use client"

import { Input } from "../UI/Input"
import Button from "../UI/Button"

export default function LoginForm() {
    return (
        <form className="flex flex-col gap-3">
            <Input label="Email" type="email" placeholder="Email" />
            <Input label="Password" type="password" placeholder="••••••••" />
            <Button variant="primary" type="submit">Create Account</Button>
        </form>
    )
}