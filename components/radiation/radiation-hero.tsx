"use client"

import { motion } from "framer-motion"
import { AlertTriangle } from "lucide-react"

export function RadiationHero() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-destructive/10 via-background to-background" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20">
            <AlertTriangle className="w-4 h-4 text-destructive" />
            <span className="text-sm text-destructive">Science & Research</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            The Science Behind
            <br />
            <span className="text-accent">EMF Radiation</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Understanding electromagnetic field radiation is the first step to protecting yourself. 
            Explore the research, learn the risks, and discover how ShieldCase technology works.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
