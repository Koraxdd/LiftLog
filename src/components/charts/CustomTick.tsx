type CustomTickProps = {
    x?: number
    y?: number
    payload?: {
        value: string
    }
    data?: {
        day: string
        volume: number
    }[]
}

export default function CustomTick({ x=0, y=0, payload, data }: CustomTickProps) {
    const hasVolume = (data?.find(item => item.day === payload?.value)?.volume ?? 0) > 0

    return (
        <g>
            <text
                x={x}
                y={y + 50}
                textAnchor="middle"
                fill="#9CA3AF"
                fontSize={12}
                fontWeight={500}
            >
                {payload?.value}
            </text>
            <circle cx={x} cy={y + 65} r={4.5} fill={hasVolume ? "#3B82F6" : "#374151"} />
        </g>
    )
}