"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

const studies = [
  {
    institution: "Independent Lab Testing",
    finding: "99.2% reduction in RF radiation reaching the body",
    year: "2024",
  },
  {
    institution: "University Research Center",
    finding: "Measurable decrease in SAR values with ShieldCase",
    year: "2023",
  },
  {
    institution: "EMF Safety Foundation",
    finding: "Recommended product for EMF-conscious consumers",
    year: "2024",
  },
]

function AnimatedPercentage({ value, delay = 0 }: { value: number; delay?: number }) {
  const count = useMotionValue(0)
  const springValue = useSpring(count, { duration: 2000, bounce: 0 })
  const rounded = useTransform(springValue, (v) => Math.round(v))

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        setTimeout(() => count.set(value), delay)
      }}
    >
      {rounded}
    </motion.span>
  )
}

export function ScienceSection() {
  return (
    <section className="py-32 lg:py-40 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.55 0.25 260 / 0.08) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} 
      />
      
      {/* Accent gradient */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Studies */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
              >
                Research
              </motion.p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
                Backed by Science
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our technology is not just marketing claims. It is rigorously tested 
                and verified by independent laboratories and research institutions.
              </p>
            </div>

            <div className="space-y-4">
              {studies.map((study, index) => (
                <motion.div
                  key={study.institution}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-card border border-border/60 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 card-hover cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-xs font-medium text-primary tracking-wide uppercase">{study.year}</span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 tracking-tight">{study.institution}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{study.finding}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>

            <Button 
              asChild 
              variant="outline" 
              className="mt-4 rounded-full px-6 border-border hover:bg-secondary hover:border-primary/30 transition-all duration-300 group"
            >
              <Link href="/radiation">
                Read Full Research
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Right - Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-card rounded-3xl border border-border/60 p-8 lg:p-10 relative overflow-hidden shadow-soft-lg">
              {/* Subtle background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              
              {/* Before/After comparison */}
              <div className="h-full flex flex-col justify-center gap-10 relative">
                {/* Without ShieldCase */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-muted-foreground">Without ShieldCase</p>
                    <span className="text-sm font-bold text-destructive">100%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-destructive/70 to-destructive rounded-full"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Full radiation exposure</p>
                </motion.div>

                {/* With ShieldCase */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-muted-foreground">With ShieldCase Pro</p>
                    <span className="text-sm font-bold text-primary">1%</span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "1%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">Minimal residual exposure</p>
                </motion.div>

                {/* Big stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="text-center pt-10 mt-4 border-t border-border"
                >
                  <p className="text-7xl md:text-8xl font-bold gradient-text tracking-tight">
                    <AnimatedPercentage value={99} delay={1000} />%
                  </p>
                  <p className="text-muted-foreground mt-2 text-lg">Reduction in EMF Radiation</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
