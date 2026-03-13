import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RadiationHero } from "@/components/radiation/radiation-hero"
import { WhatIsEMF } from "@/components/radiation/what-is-emf"
import { HealthEffects } from "@/components/radiation/health-effects"
import { ResearchSection } from "@/components/radiation/research-section"
import { ProtectionCTA } from "@/components/radiation/protection-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Understanding EMF Radiation | ShieldCase Science",
  description: "Learn about electromagnetic field radiation, its potential health effects, and how ShieldCase technology provides scientifically-proven protection.",
}

export default function RadiationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <RadiationHero />
      <WhatIsEMF />
      <HealthEffects />
      <ResearchSection />
      <ProtectionCTA />
      <Footer />
    </main>
  )
}
