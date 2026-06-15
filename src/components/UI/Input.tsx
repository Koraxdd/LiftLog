import { forwardRef } from "react";
import clsx from "clsx";

type InputProps = {
    label?: string
    type: "text" | "email" | "password" | "number" | "date"
    placeholder?: string
    className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, type, placeholder, className, ...props }, ref) => {
    return (
        <div className={clsx("flex flex-col gap-2", className)}>
            {label && <label className="text-text-primary font-medium">{label}</label>}
            <input 
                {...props} 
                type={type} 
                placeholder={placeholder} 
                ref={ref} 
                className="bg-card border border-subtle rounded-lg text-text-primary font-medium px-4 py-3 outline-none focus:ring-2 focus:ring-brand transition-shadow duration-300" 
            />
        </div>
    )
})

export { Input }