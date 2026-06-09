import RegisterForm from "@/components/Auth/RegisterForm"
import Button from "@/components/UI/Button";
import { Dumbbell, MoveLeft } from "lucide-react"
import Link from "next/link";

export default function RegisterPage() {
    return (
        <main className="bg-linear-to-br from-0% from-brand/6 to-40% to-transparent min-h-screen flex justify-center items-center p-4">
            <div className="bg-card border border-subtle rounded-2xl w-full flex flex-col gap-6 px-9">
                <div className="mt-8 flex flex-col justify-center items-center gap-3">
                    <Dumbbell 
                        size={65} 
                        className="text-white inline-flex rotate-y-180 bg-linear-to-br from-brand to-brand-dark px-3.5 rounded-2xl" 
                    />
                    <h1 className="text-3xl font-semibold">Create Account</h1>
                    <p className="font-medium text-center">Start your fitness journey today</p>
                </div>
                <div className="flex flex-col gap-6 border-b border-subtle">
                    <RegisterForm />
                    <p className="font-medium text-center mb-7">Already have an account? <Link href="/login" className="text-brand">Sign in</Link></p>
                </div>
                <div className="flex justify-center mb-6">
                    <Button variant="ghost" size="sm" href="/"><MoveLeft size={13} className="inline-flex" /> Back to Home</Button>
                </div>
            </div>
        </main>
    )
}