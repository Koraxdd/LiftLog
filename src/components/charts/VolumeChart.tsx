"use client"

import { Line, LineChart, ResponsiveContainer, XAxis } from "recharts";
import { Zap } from "lucide-react";

type VolumeChartProps = {
    data: {
        day: string
        volume: number
    }[]
}

export default function VolumeChart({ data }: VolumeChartProps) {
    return (
        <div className="bg-card border border-subtle rounded-lg p-6 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-semibold">Weekly Activity</h2>
                    <p className="font-medium text-sm">Volume lifted this week</p>
                </div>
                <Zap size={20} className="text-brand" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart 
                    data={data} 
                    accessibilityLayer={false}
                    margin={{ left: 20, right: 20 }}
                >
                    <XAxis 
                        dataKey="day" 
                        tick={{ fill: "#9CA3AF", fontSize: 13, fontWeight: 400 }}
                        axisLine={{ stroke: "#374151" }}
                        tickLine={false} 
                    />
                    <Line 
                        type="monotone" 
                        dataKey="volume" 
                        stroke="#3B82F6" 
                        fill="#3B82F6"
                        strokeWidth={3}
                        activeDot={false}
                        dot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}