import type { ReactNode } from "react"
import Button from "./Button/Button"

type ModalProps = {
    children: ReactNode
    onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
            <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none">
                <div className="bg-card border border-subtle rounded-lg px-6 pt-6 pb-5 flex flex-col items-center gap-5 pointer-events-auto w-full max-w-sm mx-6">
                    {children}
                </div>
            </div>
        </>
    )
}