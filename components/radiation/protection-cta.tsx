"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield } from "lucide-react"
import Link from "next/link"

export function ProtectionCTA() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-3xl border border-border p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Background accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

          <div className="relative space-y-6">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-accent" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
              Take the Precautionary Approach
            </h2>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              While research continues, you do not have to wait. ShieldCase provides proven 
              protection today, giving you peace of mind with every call.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                <Link href="/product">
                  Shop Protection
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/builder">
                  Build Custom Case
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
