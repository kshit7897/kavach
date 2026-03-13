"use client"

import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, ShieldCheck, Wifi, WifiOff } from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

export function HeroSection() {
  const [showShield, setShowShield] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShowShield(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-mesh" />

      {/* Top radial gradient */}
      <div className="absolute inset-0 bg-gradient-radial" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.55 0.25 260 / 0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full opacity-30"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-3xl" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] rounded-full opacity-25"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-accent/20 via-primary/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="text-center lg:text-left">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 rounded-full bg-primary/5 border border-primary/20 shadow-soft"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80 tracking-wide">
                Lab-Tested EMF Protection
              </span>
            </motion.div>

            {/* Main headline with word-by-word animation */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl sm:text-6xl md:text-5xl font-bold tracking-tight text-foreground leading-[0.95] mb-8"
            >
              {["Protect", "Your", "Brain"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="gradient-text"
              >
                From Radiation
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
            >
              Scientifically engineered phone cases that reduce up to 99% of harmful
              EMF radiation. Premium design, zero compromise.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="h-14 px-8 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-soft-lg transition-all duration-300 hover:shadow-lg hover:glow-sm"
              >
                <Link href="/product">
                  Shop Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base font-medium text-foreground border-border/60 hover:bg-secondary hover:border-primary/30 rounded-full group transition-all duration-300"
              >
                <Link href="/radiation" className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <Play className="w-4 h-4 text-primary ml-0.5" />
                  </span>
                  Watch the Science
                </Link>
              </Button>
            </motion.div>

            {/* Stats row with animated counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-6 sm:gap-12"
            >
              {[
                { value: 99, suffix: "%", label: "Radiation Blocked" },
                { value: 50, suffix: "K+", label: "Happy Customers" },
                { value: 4.9, suffix: "", label: "Star Rating", isDecimal: true },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text tracking-tight whitespace-nowrap">
                    {stat.isDecimal ? stat.value : <AnimatedCounter value={stat.value} suffix={stat.suffix} />}
                    {stat.isDecimal && stat.suffix}
                  </p>
                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-1 tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Phone Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex items-center justify-center w-full lg:w-auto mt-12 lg:mt-0"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[3/4] sm:h-[420px]">
              {/* Radiation waves - danger state */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${showShield ? 'opacity-0' : 'opacity-100'}`}>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 2.5, 3],
                      opacity: [0.5, 0.2, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeOut",
                    }}
                    className="absolute w-20 h-20 rounded-full border-2 border-red-500/60"
                  />
                ))}
              </div>

              {/* Shield animation - protected state */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={showShield ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Protection shield rings */}
                {[140, 180, 220, 260].map((size, i) => (
                  <motion.div
                    key={size}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={showShield ? {
                      scale: 1,
                      opacity: [0.1, 0.3, 0.1],
                    } : {}}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                    className="absolute rounded-full border border-primary/40"
                    style={{ width: size, height: size }}
                  />
                ))}

                {/* Shield icon */}
                <motion.div
                  animate={showShield ? {
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-soft-lg z-20"
                >
                  <ShieldCheck className="w-8 h-8 text-primary-foreground" />
                </motion.div>
              </motion.div>

              {/* Phone mockup */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 mx-auto w-full h-full flex items-center justify-center"
              >
                {/* Phone case/frame */}
                <div className={`relative w-[160px] sm:w-[180px] h-[320px] sm:h-[360px] rounded-[2.5rem] sm:rounded-[3rem] transition-all duration-1000 ${showShield
                  ? 'bg-gradient-to-b from-primary/20 to-primary/10 shadow-soft-lg border-2 border-primary/30'
                  : 'bg-gradient-to-b from-gray-200 to-gray-300 shadow-lg border-2 border-gray-300'
                  }`}>
                  {/* Phone screen */}
                  <div className="absolute inset-3 bg-card rounded-[2.2rem] overflow-hidden">
                    {/* Screen content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                      {/* Status indicator */}
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors duration-1000 ${showShield ? 'bg-primary/20' : 'bg-red-500/20'
                          }`}
                      >
                        {showShield ? (
                          <WifiOff className="w-8 h-8 text-primary" />
                        ) : (
                          <Wifi className="w-8 h-8 text-red-500" />
                        )}
                      </motion.div>

                      {/* Status text */}
                      <motion.div
                        key={showShield ? 'protected' : 'exposed'}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                      >
                        <p className={`text-lg font-bold transition-colors duration-1000 ${showShield ? 'text-primary' : 'text-red-500'
                          }`}>
                          {showShield ? 'PROTECTED' : 'EXPOSED'}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {showShield ? 'EMF Radiation Blocked' : 'EMF Radiation Active'}
                        </p>
                      </motion.div>

                      {/* Radiation meter */}
                      <div className="w-full mt-6 px-4">
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: '90%' }}
                            animate={{ width: showShield ? '5%' : '90%' }}
                            transition={{ duration: 1, delay: showShield ? 0.5 : 0 }}
                            className={`h-full rounded-full transition-colors duration-500 ${showShield ? 'bg-primary' : 'bg-red-500'
                              }`}
                          />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-[10px] text-muted-foreground">Safe</span>
                          <span className="text-[10px] text-muted-foreground">Danger</span>
                        </div>
                      </div>
                    </div>

                    {/* Notch */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-5 rounded-full bg-foreground/10" />
                  </div>
                </div>

                {/* Glow effect when protected */}
                <motion.div
                  animate={showShield ? { opacity: [0.3, 0.5, 0.3] } : { opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -inset-4 bg-primary/20 rounded-[3.5rem] blur-xl -z-10"
                />
              </motion.div>

              {/* Feature callouts */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
                className="absolute left-[-60px] top-1/4 bg-card border border-border/60 rounded-xl p-3 shadow-soft hidden lg:block"
              >
                <p className="text-xs font-semibold text-foreground">5-Layer Shield</p>
                <p className="text-[10px] text-muted-foreground">Military-grade protection</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.2 }}
                className="absolute right-[-60px] top-1/2 bg-card border border-border/60 rounded-xl p-3 shadow-soft hidden lg:block"
              >
                <p className="text-xs font-semibold text-foreground">Zero Signal Loss</p>
                <p className="text-[10px] text-muted-foreground">Full connectivity</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4 }}
                className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 bg-card border border-border/60 rounded-xl p-3 shadow-soft"
              >
                <p className="text-xs font-semibold text-foreground text-center">FCC Certified</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary/60 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
