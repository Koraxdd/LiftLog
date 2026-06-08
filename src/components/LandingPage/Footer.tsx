import { Dumbbell } from "lucide-react"

export default function Footer() {
    return (
        <div className="border-t border-[#374151] mt-35 flex flex-col justify-center items-center gap-5">
            <div className="flex items-center gap-2 mt-12">
                <Dumbbell
                    size={32} 
                    className="text-white inline-flex rotate-y-180 bg-linear-to-br from-[#3B82F6] to-[#2563EB] px-1.5 rounded-lg" 
                />
                <h1 className="font-semibold">LiftLog</h1>
            </div>
            <p className="mb-12 font-medium">&copy; {new Date().getFullYear()} LiftLog. All rights reserved.</p>
        </div>
    )
}