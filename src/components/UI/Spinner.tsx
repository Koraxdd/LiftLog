import clsx from "clsx"

type SpinnerProps = {
    className?: string
}

export default function Spinner({ className }: SpinnerProps) {
    return (
        <div 
            className={clsx(
                "w-5 h-5 border-4 rounded-full animate-spin",
                className
            )} 
        />
    )
}