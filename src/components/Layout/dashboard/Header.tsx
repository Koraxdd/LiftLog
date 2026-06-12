"use client"

import { Dumbbell, Menu, X } from "lucide-react";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import Button from "@/components/UI/Button/Button";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <header className="bg-card border-b border-subtle p-4 relative">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Dumbbell
                            size={37} 
                            className="text-white inline-flex rotate-y-180 bg-linear-to-br from-brand to-brand-dark px-2 py-1 rounded-lg" 
                        />
                        <h1 className="font-semibold text-lg">LiftLog</h1>
                    </div>
                    {isOpen ? 
                        <Button variant="ghost" onClick={() => setIsOpen(prev => !prev)}>
                            <X className="text-white" />
                        </Button> :
                        <Button variant="ghost" onClick={() => setIsOpen(prev => !prev)}>
                            <Menu className="text-white" />
                        </Button>}
                </nav>
                <HamburgerMenu isOpen={isOpen} />
            </header>
        </>
    )
}