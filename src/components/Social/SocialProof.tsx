import SocialProofCard from "./SocialProofCard";

export default function SocialProof() {
    return (
        <div className="grid grid-cols-2 gap-6 px-6 mt-30">
            <SocialProofCard title="69">Active Users</SocialProofCard>
            <SocialProofCard title="420">Workouts Logged</SocialProofCard>
            <SocialProofCard title="67">Goals Achieved</SocialProofCard>
            <SocialProofCard title="4.9">App Rating</SocialProofCard>
        </div>
    )
}