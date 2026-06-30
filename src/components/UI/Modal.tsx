import type { ReactNode } from "react"

type ModalProps = {
    children: ReactNode
    onClose: () => void
}

export default function Modal({ children, onClose }: ModalProps) {
    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
            <div className="fixed inset-0 flex justify-center items-center z-50 pointer-events-none">
                <div className="bg-card border border-subtle rounded-lg px-6 pt-6 pb-5 flex flex-col items-center gap-5 pointer-events-auto w-full max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
                    {children}
                </div>
            </div>
        </>
    )
}