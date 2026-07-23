import { Dumbbell } from "lucide-react"
import Button from "@/components/UI/Button/Button"

export default function Navbar() {
    return (
        <header className="sticky top-0 backdrop-blur-md opacity-90 z-50">
            <nav className="border-b border-subtle bg-surface py-4 px-6 flex justify-around items-center">
                <div className="flex items-center gap-2 md:w-1/4">
                    <Dumbbell
                        size={40} 
                        className="text-white inline-flex rotate-y-180 bg-linear-to-br from-brand to-brand-dark px-2 py-1 rounded-lg" 
                    />
                    <h1 className="font-semibold text-xl">LiftLog</h1>
                </div>
                <div className="flex gap-2">
                    <Button variant="ghost" size="sm" href="/login">Login</Button>
                    <Button variant="primary" size="sm" href="/register">Get Started</Button>
                </div>
            </nav>
        </header>
    )
}