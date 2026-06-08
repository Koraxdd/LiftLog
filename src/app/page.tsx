import CTA from "@/components/LandingPage/CTA";
import Features from "@/components/LandingPage/Features/Features";
import Footer from "@/components/LandingPage/Footer";
import Hero from "@/components/LandingPage/Hero";
import Navbar from "@/components/LandingPage/Navbar";
import SocialProof from "@/components/LandingPage/Social/SocialProof";

export default function LandingPage() {
  return (
    <div className="bg-linear-to-b from-0% from-[#3B82F6]/10 to-20% to-transparent min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
