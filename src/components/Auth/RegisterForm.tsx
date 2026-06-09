"use client"

import { Input } from "../UI/Input";
import Button from "../UI/Button";

export default function RegisterForm() {
    return (
        <form className="flex flex-col gap-5">
            <Input label="Username" type="text" placeholder="Username" />
            <Input label="Email" type="email" placeholder="Email" />
            <Input label="Password" type="password" placeholder="••••••••" />
            <Input label="Confirm Password" type="password" placeholder="••••••••" />
            <Button variant="primary" type="submit">Create Account</Button>
        </form>
    )
}