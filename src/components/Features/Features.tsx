import FeatureCard from "./FeatureCard";
import { TrendingUp } from "lucide-react";
import { Calendar } from "lucide-react";
import { ChartColumnIncreasing } from "lucide-react";
import { Award } from "lucide-react";
import { Zap } from "lucide-react";
import { Users } from "lucide-react";

export default function Features() {
    return (
        <div className="px-6">
            <div className="flex flex-col justify-center items-center text-center mt-30 gap-4">
                <h2 className="text-4xl font-semibold">Everything You Need to Succeed</h2>
                <p className="text-xl font-medium">Powerful features designed to help you track, analyse, and optimise your fitness journey.</p>
            </div>
            <div className="mt-15 flex flex-col gap-6">
                <FeatureCard title="Track Progress" icon={<TrendingUp size={24} />}>
                    Monitor your strength gains with detailed charts and personal records. Visualise your fitness journey.
                </FeatureCard>
                <FeatureCard title="Log Workouts" icon={<Calendar size={24} />}>
                    Quick and easy workout logging. Track sets, reps, and weight effortlessly with our intuitive interface.
                </FeatureCard>
                <FeatureCard title="Advanced Analytics" icon={<ChartColumnIncreasing size={24} />}>
                    Access your complete workout history and analyse training patterns with powerful analytics tools.
                </FeatureCard>
                <FeatureCard title="Achievements" icon={<Award size={24} />}>
                    Unlock badges and milestones as you progress. Stay motivated with our achievement system.
                </FeatureCard>
                <FeatureCard title="Exercise Library" icon={<Zap size={24} />}>
                    Access a comprehensive library of exercises with muscle groups, equipment, and difficulty levels.
                </FeatureCard>
                <FeatureCard title="Social Features" icon={<Users size={24} />}>
                    Share achievements, compete with friends, and stay motivated with our community features.
                </FeatureCard>
            </div>
        </div>
    )
}