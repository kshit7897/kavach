"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm text-accent font-medium tracking-widest uppercase"
          >
            Our Story
          </motion.p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
            Pioneering Protection
            <br />
            for a Wireless World
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We believe technology should enhance your life without compromising your health. 
            ShieldCase was founded on a simple mission: make radiation protection accessible to everyone.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
