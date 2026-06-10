import Button from "@/components/UI/Button/Button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
    return (
        <section className="mt-30 px-6 md:mt-40">
            <div className="bg-linear-to-br from-brand to-brand-dark flex flex-col justify-center items-center text-center rounded-xl gap-7 px-14 py-12 md:w-2/3 md:mx-auto md:py-16">
                <h2 className="text-4xl font-semibold md:text-5xl">Ready to Start Your Journey?</h2>
                <span className="text-text-primary text-xl font-medium opacity-90">Join thousands of athletes transforming their fitness with LiftLog.</span>
                <Button variant="prominent" size="lg" href="/register">Get Started for Free <ArrowRight size={20} className="inline-flex" /></Button>
            </div>
        </section>
    )
}