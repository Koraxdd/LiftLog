"use client"

import Button from "@/components/UI/Button/Button";
import CustomLink from "@/components/UI/CustomLink";
import { ArrowLeft, House } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter()

    return (
        <div className="min-h-screen flex flex-col text-center justify-center items-center bg-linear-to-br from-0% from-brand/6 to-40% to-transparent px-3.5 gap-6">
            <span className="text-brand font-semibold text-9xl md:text-[220px]">404</span>
            <div className="flex flex-col items-center justify-center gap-3">
                <span className="text-text-primary font-semibold text-xl md:text-3xl">Page Not Found</span>
                <span className="text-text-muted font-medium md:text-lg">The page you're looking for doesn't exist or has been moved.</span>
                <div className="flex flex-col items-center justify-center mt-4 gap-4 md:flex-row md:w-full">
                    <Button 
                        variant="primary" 
                        href="/dashboard" 
                        className="text-nowrap"
                    >
                        <House className="w-4 h-4" />
                        Go to Dashboard
                    </Button>
                    <Button 
                        href="/" 
                        className="border border-subtle rounded-md flex justify-center items-center gap-2 py-2 text-text-primary hover:bg-card"
                        onClick={() => router.back()}
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </Button>
                </div>
            </div>
        </div>
    )
}