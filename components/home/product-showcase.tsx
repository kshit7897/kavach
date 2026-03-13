"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Star } from "lucide-react"
import Link from "next/link"

const products = [
  {
    name: "ShieldCase Pro",
    description: "Maximum protection for power users",
    price: "$89",
    features: ["99% EMF Block", "MagSafe Compatible", "Premium Finish"],
    badge: "Best Seller",
    highlight: true,
  },
  {
    name: "ShieldCase Essential",
    description: "Everyday protection, elegant design",
    price: "$59",
    features: ["95% EMF Block", "Slim Profile", "Matte Finish"],
    badge: null,
    highlight: false,
  },
  {
    name: "ShieldCase Ultra",
    description: "Ultimate protection with extended battery",
    price: "$129",
    features: ["99.5% EMF Block", "Built-in Battery", "Carbon Fiber"],
    badge: "Premium",
    highlight: false,
  },
]

export function ProductShowcase() {
  return (
    <section className="py-32 lg:py-40 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.55 0.25 260 / 0.08) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
          >
            Our Collection
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
            Choose Your Protection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Every ShieldCase is engineered with precision, tested in labs, and designed 
            to seamlessly integrate into your lifestyle.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative rounded-3xl p-8 lg:p-10 transition-all duration-500 card-hover ${
                product.highlight 
                  ? "bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-soft-lg border-gradient" 
                  : "bg-card border border-border/60 hover:border-primary/30 shadow-soft"
              }`}
            >
              {product.badge && (
                <span className={`absolute top-6 right-6 px-3 py-1.5 text-xs font-semibold rounded-full tracking-wide ${
                  product.highlight 
                    ? "bg-primary-foreground/20 text-primary-foreground" 
                    : "bg-primary/10 text-primary"
                }`}>
                  {product.badge}
                </span>
              )}
              
              {/* Product Image Placeholder */}
              <div className={`aspect-[4/5] rounded-2xl mb-8 flex items-center justify-center overflow-hidden relative ${
                product.highlight ? "bg-primary-foreground/10" : "bg-secondary/50"
              }`}>
                <motion.div
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                  className={`w-28 h-44 rounded-[2rem] shadow-xl relative ${
                    product.highlight 
                      ? "bg-gradient-to-b from-primary-foreground/30 to-primary-foreground/10" 
                      : "bg-gradient-to-b from-primary/10 to-secondary"
                  }`}
                >
                  {/* Phone screen */}
                  <div className={`absolute inset-2 rounded-[1.5rem] ${
                    product.highlight ? "bg-primary-foreground/20" : "bg-card"
                  }`} />
                  {/* Notch */}
                  <div className={`absolute top-4 left-1/2 -translate-x-1/2 w-8 h-2 rounded-full ${
                    product.highlight ? "bg-primary-foreground/30" : "bg-muted"
                  }`} />
                </motion.div>
                
                {/* Glow effect */}
                {product.highlight && (
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-foreground/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
              </div>

              <h3 className={`text-2xl font-semibold mb-2 tracking-tight ${
                product.highlight ? "text-primary-foreground" : "text-foreground"
              }`}>
                {product.name}
              </h3>
              <p className={`text-sm mb-6 ${
                product.highlight ? "text-primary-foreground/70" : "text-muted-foreground"
              }`}>
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {product.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-3 text-sm ${
                    product.highlight ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}>
                    <Check className={`w-4 h-4 flex-shrink-0 ${
                      product.highlight ? "text-primary-foreground/70" : "text-primary"
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className={`flex items-center justify-between pt-6 border-t ${
                product.highlight ? "border-primary-foreground/20" : "border-border"
              }`}>
                <span className={`text-3xl font-bold tracking-tight ${
                  product.highlight ? "text-primary-foreground" : "text-foreground"
                }`}>
                  {product.price}
                </span>
                <Button 
                  asChild 
                  size="sm" 
                  className={`rounded-full px-6 transition-all duration-300 ${
                    product.highlight 
                      ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90" 
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <Link href="/product">
                    View
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button 
            asChild 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground group"
          >
            <Link href="/product" className="flex items-center gap-2">
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
