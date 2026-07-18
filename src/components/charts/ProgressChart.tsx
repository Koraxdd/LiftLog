"use client"

import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, XAxis, YAxis } from "recharts"

export default function ProgressChart() {
    const data = [
        { weight: 80, date: "Jan 15" },
        { weight: 90, date: "Feb 15" },
        { weight: 100, date: "Mar 15" },
        { weight: 100, date: "Apr 15" },
        { weight: 110, date: "May 15" },
        { weight: 120, date: "Jun 15" }
    ]

    return (
        <ResponsiveContainer width="100%" height={350} className="border-b border-subtle">
            <AreaChart 
                data={data} 
                accessibilityLayer={false}
                margin={{ top: 20, bottom: 25, right: 5 }}
            >
                <defs>
                    <linearGradient id="progressGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid 
                    stroke="#374151"
                    strokeWidth={2}
                    strokeDasharray="3 3"
                />
                <XAxis 
                    dataKey="date" 
                    stroke="#9CA3AF"
                    strokeWidth={1.5}
                    fontSize={12}
                />
                <YAxis 
                    dataKey="weight"
                    stroke="#9CA3AF" 
                    strokeWidth={1.5}   
                    fontSize={12}
                    label={{
                        value: "Weight (kg)",
                        angle: -90,
                        position: "insideLeft",
                        stroke: "#9CA3AF",
                        fontWeight: 100,
                        fontSize: 16
                    }}
                />
                <Area 
                    type="monotone"
                    dataKey="weight"
                    stroke="none"
                    fill="url(#progressGradient)"
                />
                <Line 
                    type="monotone"
                    dataKey="weight"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    strokeWidth={3}
                />
            </AreaChart>
        </ResponsiveContainer>
    )
}