"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Droplets, Smartphone, Fingerprint, Battery } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "99% EMF Blocking",
    description: "Our proprietary 5-layer shield technology blocks up to 99% of harmful electromagnetic radiation.",
  },
  {
    icon: Zap,
    title: "Wireless Charging",
    description: "Fully compatible with Qi wireless charging and MagSafe accessories. No need to remove the case.",
  },
  {
    icon: Droplets,
    title: "Water Resistant",
    description: "IPX4 rated water resistance protects against splashes and light rain exposure.",
  },
  {
    icon: Smartphone,
    title: "Precision Fit",
    description: "Engineered for exact device specifications with easy access to all ports and buttons.",
  },
  {
    icon: Fingerprint,
    title: "Premium Materials",
    description: "Soft-touch exterior with anti-fingerprint coating maintains a pristine look.",
  },
  {
    icon: Battery,
    title: "Signal Optimized",
    description: "Directional shielding technology maintains full signal strength while protecting you.",
  },
]

export function ProductFeatures() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Engineered for Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every detail of ShieldCase Pro is designed with protection and usability in mind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/30 rounded-2xl border border-border p-6 hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
