"use client"

import { motion } from "framer-motion"
import { Heart, Lightbulb, Shield, Users } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Health First",
    description: "Every decision we make prioritizes the health and well-being of our customers. We never compromise on protection for aesthetics.",
  },
  {
    icon: Lightbulb,
    title: "Science-Driven",
    description: "Our products are developed through rigorous scientific research and testing. We believe in data, not marketing claims.",
  },
  {
    icon: Shield,
    title: "Uncompromising Quality",
    description: "We use only premium materials and manufacturing processes. Every case undergoes extensive quality control before shipping.",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "We listen to our customers and continuously improve. Your feedback shapes our product development and innovation.",
  },
]

export function OurValues() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These principles guide everything we do at ShieldCase.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-8 hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <value.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
