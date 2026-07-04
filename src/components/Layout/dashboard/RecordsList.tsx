import CustomLink from "@/components/UI/CustomLink";
import { getRecentRecords } from "@/queries/sets";
import { formatDate } from "@/utils/formatDate";
import { Target } from "lucide-react";

type RecordsListProps = {
    userId: string
}

export default async function RecordsList({ userId }: RecordsListProps) {
    const recentRecords = await getRecentRecords(userId)

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col gap-1">
                    <h2 className="font-semibold text-2xl">Personal Records</h2>
                    <p className="text-sm font-medium">Your recent PRs</p>
                </div>
                <CustomLink href="/dashboard/progress" className="text-brand text-sm font-medium">View All</CustomLink>
            </div>
            <div className="border border-subtle rounded-lg overflow-x-auto">
                <div className="grid grid-cols-[2fr_1fr_1fr] gap-8 text-text-muted text-sm font-semibold px-6 py-4">
                    <span>Exercise</span>
                    <span>Weight</span>
                    <span>Date</span>
                </div>
                <div className="bg-card flex flex-col">
                    {recentRecords.map(record => (
                        <div key={record.name} className="border-t border-subtle px-6 py-4 grid grid-cols-[2fr_1fr_1fr] gap-8 font-medium items-center">
                            <div className="flex items-center gap-3">
                                <Target size={35} className="text-brand bg-brand/10 rounded-lg px-2" />
                                <span className="text-text-primary">{record.name}</span>
                            </div>
                            <span className="text-text-primary">{record.weight} kg</span>
                            <span className="text-text-muted">{formatDate(record.date)}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}