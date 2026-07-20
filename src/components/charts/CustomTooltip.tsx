type CustomTooltipProps = {
    active?: boolean
    payload?: {
        value: number
        dataKey: string
        payload: {
            weight: number
            date: string
        }
    }[]
    label?: string
}

export default function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
    if (!active || !payload?.length) {
        return null
    }

    return (
        <div className="bg-card border border-subtle flex flex-col px-2.5 py-3 rounded-lg gap-1.5">
            <span className="text-text-primary font-medium">{label}</span>
            <span className="text-brand font-medium">Weight: {payload[0].value} kg</span>
        </div>
    )
}