"use client"

import { motion } from "framer-motion"
import { Brain, Moon, Heart, Thermometer, AlertCircle, Clock } from "lucide-react"

const effects = [
  {
    icon: Brain,
    title: "Cognitive Effects",
    description: "Studies suggest potential links between prolonged RF exposure and changes in brain activity, memory function, and concentration.",
    studies: "15+ peer-reviewed studies",
  },
  {
    icon: Moon,
    title: "Sleep Disruption",
    description: "Research indicates RF radiation may affect melatonin production and circadian rhythms, leading to sleep quality issues.",
    studies: "8+ clinical trials",
  },
  {
    icon: Heart,
    title: "Cardiovascular Impact",
    description: "Some studies show correlations between EMF exposure and changes in heart rate variability and blood pressure.",
    studies: "12+ research papers",
  },
  {
    icon: Thermometer,
    title: "Thermal Effects",
    description: "RF radiation causes tissue heating. While regulated by SAR limits, the long-term effects of low-level heating are still studied.",
    studies: "Well-documented",
  },
  {
    icon: AlertCircle,
    title: "Cellular Stress",
    description: "Laboratory studies have shown RF radiation can cause oxidative stress and DNA damage in certain cell types.",
    studies: "20+ laboratory studies",
  },
  {
    icon: Clock,
    title: "Cumulative Exposure",
    description: "The effects of decades of daily smartphone use remain unknown. Current safety standards may not account for lifetime exposure.",
    studies: "Ongoing research",
  },
]

export function HealthEffects() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Potential Health Considerations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            While research is ongoing, numerous studies have identified potential health 
            concerns associated with long-term EMF exposure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {effects.map((effect, index) => (
            <motion.div
              key={effect.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
                <effect.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{effect.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{effect.description}</p>
              <p className="text-xs text-accent font-medium">{effect.studies}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-secondary/30 rounded-xl border border-border p-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Note:</strong> The scientific community continues to study EMF health effects. 
            ShieldCase recommends a precautionary approach to EMF exposure, especially for children and pregnant women.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
