"use client"

import { motion } from "framer-motion"

export function OurStory() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-secondary/30 rounded-3xl border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-4xl font-bold text-accent">S</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Founded in 2021</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              How It Started
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                ShieldCase began when our founder, a materials engineer and concerned parent, 
                noticed her children spending hours on tablets and smartphones. The research 
                she uncovered about potential EMF health effects sparked a mission.
              </p>
              <p>
                After two years of R&D, working with radiation physicists and materials scientists, 
                we developed our proprietary 5-layer shielding technology. Unlike competitors who 
                simply block all signals, our directional shielding redirects radiation away from 
                your body while maintaining full device functionality.
              </p>
              <p>
                Today, ShieldCase protects over 50,000 customers worldwide. But we are just getting 
                started. Our commitment to innovation and health drives us to continuously improve 
                our products and expand our protection solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              {[
                { value: "50K+", label: "Happy Customers" },
                { value: "15+", label: "Countries Served" },
                { value: "99%", label: "Protection Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
