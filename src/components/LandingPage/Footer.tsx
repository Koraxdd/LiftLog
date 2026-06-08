import { Dumbbell } from "lucide-react"

export default function Footer() {
    return (
        <footer className="border-t border-subtle mt-35 flex flex-col justify-center items-center gap-5 md:mt-40 md:flex-row md:justify-around md:py-12">
            <div className="flex items-center gap-2 mt-12 md:mt-0 md:w-1/6">
                <Dumbbell
                    size={32} 
                    className="text-white inline-flex rotate-y-180 bg-linear-to-br from-brand to-brand-dark px-1.5 rounded-lg" 
                />
                <h1 className="font-semibold">LiftLog</h1>
            </div>
            <p className="mb-12 font-medium md:mb-0">&copy; {new Date().getFullYear()} LiftLog. All rights reserved.</p>
        </footer>
    )
}