import { Dumbbell } from "lucide-react"
import Button from "./Button"

export default function Navbar() {
    return (
        <div className="border-b border-[#374151] bg-[#0F1117] py-4 px-6 flex justify-around items-center">
            <div className="flex items-center gap-2">
                <Dumbbell
                    size={40} 
                    className="text-white inline-flex rotate-y-180 bg-linear-to-br from-[#3B82F6] to-[#2563EB] px-2 py-1 rounded-lg" 
                />
                <h1 className="font-semibold text-xl">LiftLog</h1>
            </div>
            <div className="flex gap-2">
                <Button variant="login">Login</Button>
                <Button variant="register">Get Started</Button>
            </div>
        </div>
    )
}