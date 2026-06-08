import Features from "@/components/Features/Features";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SocialProof from "@/components/Social/SocialProof";

export default function LandingPage() {
  return (
    <div className="bg-linear-to-b from-[#3B82F6]/10 to-transparent min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
    </div>
  )
}
