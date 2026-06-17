import { Input } from "@/components/UI/Input";
import clsx from "clsx";
import Button from "@/components/UI/Button/Button";
import type { UseFieldArrayRemove, UseFormRegister } from "react-hook-form";
import { WorkoutInput } from "./WorkoutForm";
import { X } from "lucide-react";

type SetRowProps = {
    index: number
    exerciseIndex: number
    register: UseFormRegister<WorkoutInput>
    removeSet: UseFieldArrayRemove
    canDelete: boolean
}

export default function SetRow({ index, exerciseIndex, register, removeSet, canDelete }: SetRowProps) {
    return (
        <div className={clsx("border-t border-subtle pt-3 grid grid-cols-[2rem_1fr_1fr] items-center gap-6 md:gap-20", canDelete && "grid-cols-[2rem_1fr_1fr_2rem]")}>
            <div className="text-brand bg-brand/10 border border-brand-dark/40 font-medium text-sm w-6 h-6 rounded-full ml-2 flex justify-center items-center">
                {index + 1}
            </div>
            <Input {...register(`exercises.${exerciseIndex}.sets.${index}.reps`, { valueAsNumber: true })} type="number" placeholder="0" className="min-w-0 md:w-30" />
            <Input {...register(`exercises.${exerciseIndex}.sets.${index}.weight`, { valueAsNumber: true })} type="number" placeholder="0" className="min-w-0 md:w-30" />
            {canDelete && <Button variant="ghost/danger" size="xs" className="hover:bg-card px-2 py-1" onClick={() => removeSet(index)}><X size={20} className="text-[#EF4444]" /></Button>}
        </div>
    )
}