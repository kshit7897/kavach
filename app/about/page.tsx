import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { OurValues } from "@/components/about/our-values"
import { TeamSection } from "@/components/about/team-section"
import { Timeline } from "@/components/about/timeline"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About ShieldCase | Our Mission to Protect",
  description: "Learn about ShieldCase's mission to protect people from harmful EMF radiation. Meet our team and discover our commitment to health and innovation.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
      <Timeline />
      <Footer />
    </main>
  )
}
