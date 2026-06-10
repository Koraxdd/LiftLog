"use client"

import { z } from "zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
import { Input } from "../UI/Input"
import Button from "../UI/Button/Button"
import { signIn } from "next-auth/react"
import { zodResolver } from "@hookform/resolvers/zod"

const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

type LoginInput = z.infer<typeof LoginSchema>

export default function LoginForm() {
    const router = useRouter()
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<LoginInput>({
        resolver: zodResolver(LoginSchema)
    })
    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        try {
            const result = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false
            })
            if (result?.error) {
                setError("root", { message: "Invalid email or password" })
            } else {
                router.push("/dashboard")
            }
        } catch (err) {
            throw new Error(`Failed to login: ${err}`)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <Input {...register("email")} label="Email" type="text" placeholder="Email" />
            <Input {...register("password")} label="Password" type="password" placeholder="••••••••" />
            {errors.root && <span className="text-[#EF4444] text-sm">{errors.root.message}</span>}
            <Button variant="primary" type="submit" disabled={isSubmitting}>Sign In</Button>
        </form>
    )
}