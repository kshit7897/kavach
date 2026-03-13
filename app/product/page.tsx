import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProductGallery } from "@/components/product/product-gallery"
import { ProductInfo } from "@/components/product/product-info"
import { ProductFeatures } from "@/components/product/product-features"
import { RadiationExplainer } from "@/components/product/radiation-explainer"
import { RelatedProducts } from "@/components/product/related-products"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ShieldCase Pro | Premium Anti-Radiation Protection",
  description: "Our flagship anti-radiation phone case with 99% EMF blocking technology. Premium materials, sleek design, and scientifically proven protection.",
}

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Product Section */}
      <section className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ProductGallery />
            <ProductInfo />
          </div>
        </div>
      </section>

      <ProductFeatures />
      <RadiationExplainer />
      <RelatedProducts />
      <Footer />
    </main>
  )
}
