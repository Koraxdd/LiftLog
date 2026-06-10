"use client"

import { z } from "zod"
import { Input } from "../UI/Input";
import Button from "../UI/Button/Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "@/actions/auth";
import { signIn } from "next-auth/react";

const RegisterSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
})

type RegisterInput = z.infer<typeof RegisterSchema>

export default function RegisterForm() {
    const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm<RegisterInput>({
        resolver: zodResolver(RegisterSchema)
    })
    const onSubmit: SubmitHandler<RegisterInput> = async (data) => {
        const result = await signup(data.username, data.email, data.password)
        if (!result.success) {
            if (result.emailError) {
                setError("email", { message: result.emailError })
            }
            if (result.userError) {
                setError("username", { message: result.userError })
            }
        } else {
            await signIn("credentials", {
                email: data.email,
                password: data.password,
                callbackUrl: "/dashboard"
            })
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
            <Input {...register("username")} label="Username" type="text" placeholder="Username" />
            {errors.username && <span className="text-[#EF4444] text-sm">{errors.username.message}</span>}
            <Input {...register("email")} label="Email" type="text" placeholder="Email" />
            {errors.email && <span className="text-[#EF4444] text-sm">{errors.email.message}</span>}
            <Input {...register("password")} label="Password" type="password" placeholder="••••••••" />
            {errors.password && <span className="text-[#EF4444] text-sm">{errors.password.message}</span>}
            <Input {...register("confirmPassword")} label="Confirm Password" type="password" placeholder="••••••••" />
            {errors.confirmPassword && <span className="text-[#EF4444] text-sm">{errors.confirmPassword.message}</span>}
            <Button variant="primary" type="submit" disabled={isSubmitting}>Create Account</Button>
        </form>
    )
}