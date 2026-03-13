"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function RadiationExplainer() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-card rounded-3xl border border-border overflow-hidden relative">
              {/* Before/After split view */}
              <div className="absolute inset-0 flex">
                {/* Without protection */}
                <div className="w-1/2 bg-secondary/30 flex flex-col items-center justify-center p-6 border-r border-border">
                  <p className="text-xs text-muted-foreground mb-4">Without Protection</p>
                  <div className="relative">
                    {/* Radiation waves hitting head */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.5, 2],
                          opacity: [0.5, 0.3, 0],
                          x: [0, 20, 40],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-destructive/50 -translate-y-1/2"
                      />
                    ))}
                    {/* Head silhouette */}
                    <div className="w-16 h-20 bg-muted rounded-t-full ml-8" />
                  </div>
                  <p className="text-destructive text-sm mt-4 font-medium">100% Exposure</p>
                </div>

                {/* With ShieldCase */}
                <div className="w-1/2 bg-secondary/10 flex flex-col items-center justify-center p-6">
                  <p className="text-xs text-muted-foreground mb-4">With ShieldCase</p>
                  <div className="relative">
                    {/* Blocked radiation */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                        className="absolute top-1/2 left-0 w-4 h-4 rounded-full bg-accent/30 -translate-y-1/2"
                      />
                    ))}
                    {/* Shield barrier */}
                    <div className="absolute left-6 top-0 bottom-0 w-1 bg-accent/50 rounded-full" />
                    {/* Head silhouette */}
                    <div className="w-16 h-20 bg-muted rounded-t-full ml-8" />
                  </div>
                  <p className="text-accent text-sm mt-4 font-medium">1% Exposure</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              How Our Shield Protects You
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              ShieldCase uses a revolutionary directional shielding technology. Instead of blocking 
              all radiation (which would interfere with your signal), it redirects harmful EMF 
              waves away from your body while maintaining full connectivity.
            </p>

            <div className="space-y-4">
              <div className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Radiation directed away from body</span>
                  <span className="text-sm font-semibold text-foreground">99%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "99%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-accent rounded-full"
                  />
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Signal strength maintained</span>
                  <span className="text-sm font-semibold text-foreground">100%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-foreground rounded-full"
                  />
                </div>
              </div>
            </div>

            <Button asChild variant="outline" className="mt-4">
              <Link href="/radiation">
                Learn More About EMF Protection
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
