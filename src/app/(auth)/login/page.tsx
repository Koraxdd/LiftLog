import { Dumbbell, MoveLeft } from "lucide-react"
import Link from "next/link"
import LoginForm from "@/components/Auth/LoginForm"
import Button from "@/components/UI/Button"

export default function LoginPage() {
    return (
        <main className="bg-linear-to-br from-0% from-brand/6 to-40% to-transparent min-h-screen flex justify-center items-center p-4">
            <div className="bg-card border border-subtle rounded-2xl w-full flex flex-col gap-6 px-9">
                <div className="mt-8 flex flex-col justify-center items-center gap-3">
                    <Dumbbell 
                        size={65} 
                        className="text-white inline-flex rotate-y-180 bg-linear-to-br from-brand to-brand-dark px-3.5 rounded-2xl" 
                    />
                    <h1 className="text-3xl font-semibold">Welcome Back</h1>
                    <p className="font-medium text-center">Sign in to continue your fitness journey</p>
                </div>
                <div className="flex flex-col gap-6 border-b border-subtle">
                    <LoginForm />
                    <p className="font-medium text-center mb-7">Don't have an account? <Link href="/register" className="text-brand">Create one</Link></p>
                </div>
                <div className="flex justify-center mb-6">
                    <Button variant="ghost" size="sm" href="/"><MoveLeft size={13} className="inline-flex" /> Back to Home</Button>
                </div>
            </div>
        </main>
    )
}