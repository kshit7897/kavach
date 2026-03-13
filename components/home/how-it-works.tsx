"use client"

import { motion } from "framer-motion"
import { Layers, Shield, Signal, CheckCircle2 } from "lucide-react"

const layers = [
  {
    icon: Layers,
    title: "Multi-Layer Shield",
    description: "Our proprietary 5-layer technology uses specially engineered materials that redirect and absorb EMF radiation away from your body.",
  },
  {
    icon: Shield,
    title: "FCC-Compliant Design",
    description: "Unlike blockers that interfere with signal, our cases use directional shielding to protect you while maintaining full connectivity.",
  },
  {
    icon: Signal,
    title: "Zero Signal Loss",
    description: "Our patented antenna-bypass technology ensures your calls, texts, and data work perfectly while you stay protected.",
  },
]

const specs = [
  { label: "Shield Effectiveness", value: "99%" },
  { label: "Weight Added", value: "28g" },
  { label: "Thickness", value: "2.5mm" },
  { label: "Durability Rating", value: "MIL-STD" },
]

const layerColors = [
  "from-primary to-primary/80",
  "from-accent to-accent/80",
  "from-primary/70 to-primary/50",
  "from-accent/60 to-accent/40",
  "from-muted to-muted/80",
]

export function HowItWorks() {
  return (
    <section className="py-12 lg:py-16 bg-secondary/30 relative overflow-hidden border-b border-border/40">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
          >
            Technology
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-6 text-balance">
            How ShieldCase Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Advanced engineering meets elegant design. See how our multi-layer
            technology provides maximum protection without compromise.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-auto min-h-[660px] lg:aspect-[4/5] bg-card rounded-3xl border border-border/60 overflow-hidden relative p-8 shadow-soft-lg">
              {/* Case layers visualization */}
              <div className="absolute top-12 left-8 right-8 flex items-center justify-center lg:inset-8 lg:flex">
                <div className="relative w-full max-w-[220px] h-[300px]">
                  {/* Layers stack with 3D effect */}
                  {[
                    { label: "Outer Shell", offset: 0 },
                    { label: "Shield Layer 1", offset: 50 },
                    { label: "Absorption Core", offset: 100 },
                    { label: "Shield Layer 2", offset: 150 },
                    { label: "Inner Lining", offset: 200 },
                  ].map((layer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      whileHover={{ x: 10, scale: 1.02 }}
                      style={{ top: `${layer.offset}px` }}
                      className={`absolute left-0 right-0 h-10 rounded-xl bg-gradient-to-r ${layerColors[index]} flex items-center justify-center cursor-pointer transition-all duration-300 shadow-soft hover:shadow-soft-lg`}
                    >
                      <span className="text-xs font-medium text-primary-foreground tracking-wide">{layer.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
                {specs.map((spec, index) => (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="bg-secondary/80 border border-border/60 rounded-xl p-4"
                  >
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{spec.label}</p>
                    <p className="text-xl font-bold text-foreground tracking-tight">{spec.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 lg:order-2"
          >
            {layers.map((layer, index) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex gap-5 group"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                  <layer.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2 tracking-tight">{layer.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{layer.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-8 mt-8 border-t border-border"
            >
              <p className="text-sm font-semibold text-foreground mb-4 tracking-wide">Certified & Tested By:</p>
              <div className="flex flex-wrap gap-2">
                {["FCC Certified", "CE Marked", "Lab Tested", "Patent Pending"].map((cert, index) => (
                  <motion.span
                    key={cert}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full text-xs text-muted-foreground border border-border/60 hover:border-primary/30 transition-colors duration-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    {cert}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
