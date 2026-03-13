import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CaseBuilder } from "@/components/builder/case-builder"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Case Builder | Create Your ShieldCase",
  description: "Design your perfect anti-radiation phone case. Choose your phone model, color, protection level, and personalization options.",
}

export default function BuilderPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <CaseBuilder />
      <Footer />
    </main>
  )
}
