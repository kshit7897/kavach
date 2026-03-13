"use client"

import { motion } from "framer-motion"
import { Radio, Wifi, Smartphone, Zap } from "lucide-react"

const sources = [
  {
    icon: Smartphone,
    title: "Mobile Phones",
    description: "Emit RF radiation during calls, data usage, and even when idle",
    sar: "0.5-1.6 W/kg",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Routers",
    description: "Constant RF emission for wireless connectivity throughout your home",
    sar: "Variable",
  },
  {
    icon: Radio,
    title: "Cell Towers",
    description: "High-powered transmitters that enable mobile network coverage",
    sar: "Environmental",
  },
  {
    icon: Zap,
    title: "Smart Devices",
    description: "Tablets, smartwatches, and IoT devices all emit varying levels",
    sar: "0.1-1.0 W/kg",
  },
]

export function WhatIsEMF() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              What is EMF Radiation?
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Electromagnetic Field (EMF) radiation is a form of energy emitted by all electronic 
                devices that use wireless technology. This includes your smartphone, which produces 
                Radio Frequency (RF) radiation to communicate with cell towers.
              </p>
              <p>
                When you hold your phone to your ear, RF radiation penetrates your skull and is 
                absorbed by brain tissue. The Specific Absorption Rate (SAR) measures how much 
                RF energy is absorbed by your body when using a wireless device.
              </p>
              <p>
                The FCC has set safety limits at 1.6 W/kg, but many researchers argue this 
                threshold may not account for the cumulative effects of long-term exposure.
              </p>
            </div>

            {/* SAR explanation */}
            <div className="bg-secondary/50 rounded-xl p-6 border border-border">
              <h3 className="font-semibold text-foreground mb-2">Understanding SAR Values</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Specific Absorption Rate (SAR) measures RF energy absorbed by your body, 
                expressed in watts per kilogram (W/kg).
              </p>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">FCC Safety Limit</span>
                    <span className="text-foreground font-medium">1.6 W/kg</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-full bg-destructive/70 rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">With ShieldCase</span>
                    <span className="text-accent font-medium">0.02 W/kg</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[1%] bg-accent rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sources grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {sources.map((source, index) => (
              <motion.div
                key={source.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/30 rounded-xl border border-border p-6 hover:border-accent/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <source.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{source.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{source.description}</p>
                <p className="text-xs text-accent font-medium">SAR: {source.sar}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
