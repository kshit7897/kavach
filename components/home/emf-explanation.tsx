"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Smartphone, Brain, Zap } from "lucide-react"

const risks = [
  {
    icon: Smartphone,
    title: "Constant Exposure",
    description: "The average person spends 4+ hours daily on their phone, with constant EMF exposure to the head and body.",
  },
  {
    icon: Brain,
    title: "Potential Health Risks",
    description: "Studies suggest links between prolonged EMF exposure and headaches, sleep disruption, and cognitive effects.",
  },
  {
    icon: Zap,
    title: "Cumulative Effect",
    description: "EMF radiation exposure accumulates over time. The effects of years of smartphone use are still being studied.",
  },
]

export function EMFExplanation() {
  return (
    <section className="py-12 lg:py-16 bg-background relative overflow-hidden border-b border-border/40">
      {/* Background gradient accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.55 0.25 260 / 0.08) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-destructive/10 border border-destructive/20"
              >
                <AlertTriangle className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-destructive tracking-wide">Understanding the Risk</span>
              </motion.div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
                What is EMF Radiation?
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Electromagnetic Field (EMF) radiation is emitted by all wireless devices,
                including your smartphone. While convenient, these devices produce radio
                frequency radiation that penetrates the body, particularly when held close
                to the head during calls.
              </p>
            </div>

            <div className="space-y-4">
              {risks.map((risk, index) => (
                <motion.div
                  key={risk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5 p-5 rounded-2xl bg-card border border-border/60 hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <risk.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1.5 tracking-tight">{risk.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{risk.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square relative">
              {/* Animated radiation waves */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 2.5, 3],
                      opacity: [0.3, 0.1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.8,
                      ease: "easeOut",
                    }}
                    className="absolute w-24 h-24 rounded-full border-2 border-destructive/40"
                  />
                ))}
              </div>

              {/* Phone illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <div className="w-32 h-56 bg-gradient-to-b from-muted to-secondary rounded-[2.5rem] shadow-soft-lg flex items-center justify-center border border-border">
                    <div className="w-24 h-44 bg-card rounded-[2rem] relative overflow-hidden">
                      {/* Screen content indicator */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-3">
                        <div className="w-10 h-10 rounded-full bg-destructive/15 flex items-center justify-center">
                          <Zap className="w-5 h-5 text-destructive" />
                        </div>
                        <div className="w-full space-y-1.5">
                          <div className="h-1.5 bg-muted rounded" />
                          <div className="h-1.5 bg-muted rounded w-2/3 mx-auto" />
                        </div>
                      </div>
                    </div>
                    {/* Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-4 rounded-full bg-foreground/10" />
                  </div>

                  {/* Glow effect */}
                  <div className="absolute -inset-8 bg-destructive/10 rounded-full blur-3xl" />
                </motion.div>
              </div>

              {/* SAR value indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-12 right-8 bg-card border border-border/60 rounded-2xl p-5 shadow-soft-lg"
              >
                <p className="text-xs text-muted-foreground mb-1 tracking-wide uppercase">Average Phone SAR</p>
                <p className="text-3xl font-bold text-foreground tracking-tight">1.6 W/kg</p>
                <p className="text-xs text-destructive mt-1.5 font-medium">Near legal limit</p>
              </motion.div>

              {/* Additional info card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute top-12 left-8 bg-card border border-border/60 rounded-2xl p-4 shadow-soft"
              >
                <p className="text-xs text-muted-foreground tracking-wide uppercase">Daily Exposure</p>
                <p className="text-2xl font-bold text-foreground tracking-tight">4+ hrs</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
