import { Zap } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { Check } from "lucide-react"
import Button from "../Button"

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center text-center px-6 gap-7">
            <div className="flex justify-center items-center gap-2 text-[#3B82F6] bg-[#3B82F6]/10 text-sm font-medium border border-[#2563EB] rounded-full px-4 py-2 mt-20">
                <Zap size={16} />
                <span>The Future of Fitness Tracking</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
                <h1 className="text-5xl/15 font-semibold">Transform Your <span className="text-[#3B82F6]">Fitness Journey</span></h1>
                <p className="font-medium text-xl/8">The most powerful and intuitive workout tracking platform. Log exercises, monitor progress, and achieve your goals with data-driven insights.</p>
            </div>
            <Button variant="secondary">Start Free Trial <ArrowRight size={20} className="inline flex" /></Button>
            <div className="flex gap-6">
                <div className="flex justify-center items-center gap-3">
                    <Check size={16} className="text-[#22C55E]" />
                    <p className="text-sm">No credit card required</p>
                </div>
                <div className="flex justify-center items-center gap-3">
                    <Check size={16} className="text-[#22C55E]" />
                    <p className="text-sm">Free forever plan</p>
                </div>
            </div>
        </div>
    )
}