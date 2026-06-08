import Button from "../Button";
import { ArrowRight } from "lucide-react"

export default function CTA() {
    return (
        <div className="mt-30 px-6">
            <div className="bg-linear-to-br from-[#3B82F6] to-[#2563EB] flex flex-col justify-center items-center text-center rounded-lg gap-7 px-14 py-12">
                <h2 className="text-4xl font-semibold">Ready to Start Your Journey?</h2>
                <span className="text-[#E5E7EB] text-xl font-medium">Join thousands of athletes transforming their fitness with LiftLog.</span>
                <Button variant="cta">Get Started for Free <ArrowRight size={20} className="inline-flex" /></Button>
            </div>
        </div>
    )
}