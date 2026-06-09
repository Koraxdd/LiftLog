import CTA from "@/components/Layout/LandingPage/CTA";
import Features from "@/components/Layout/LandingPage/Features/Features";
import Footer from "@/components/Layout/LandingPage/Footer";
import Hero from "@/components/Layout/LandingPage/Hero";
import Navbar from "@/components/Layout/LandingPage/Navbar";
import SocialProof from "@/components/Layout/LandingPage/Social/SocialProof";

export default function LandingPage() {
  return (
    <div className="bg-linear-to-b from-0% from-brand/10 to-20% to-transparent min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
