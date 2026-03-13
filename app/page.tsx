import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ProductShowcase } from "@/components/home/product-showcase"
import { EMFExplanation } from "@/components/home/emf-explanation"
import { HowItWorks } from "@/components/home/how-it-works"
import { ScienceSection } from "@/components/home/science-section"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <EMFExplanation />
      <HowItWorks />
      <ScienceSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
