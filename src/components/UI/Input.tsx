import { forwardRef } from "react";

type InputProps = {
    label: string
    type: "text" | "email" | "password" | "number" | "date"
    placeholder?: string
    defaultValue?: string | number
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, type, placeholder, defaultValue, ...props }, ref) => {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-text-primary font-medium">{label}</label>
            <input 
                {...props} 
                type={type} 
                placeholder={placeholder} 
                ref={ref} 
                defaultValue={defaultValue}
                className="border border-subtle rounded-lg text-text-primary font-medium px-4 py-3 outline-none focus:ring-2 focus:ring-brand transition-shadow duration-300" 
            />
        </div>
    )
})

export { Input }