"use client"

import { motion } from "framer-motion"

export function ContactHero() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Get in Touch
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have questions about our products or need support? We are here to help. 
            Reach out and our team will get back to you within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
