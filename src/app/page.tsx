import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function LandingPage() {
  return (
    <div className="bg-linear-to-b from-[#3B82F6]/10 to-transparent min-h-screen">
      <Navbar />
      <Hero />
    </div>
  )
}
