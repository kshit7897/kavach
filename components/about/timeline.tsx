"use client"

import { motion } from "framer-motion"

const milestones = [
  {
    year: "2021",
    title: "The Beginning",
    description: "ShieldCase founded with a mission to make EMF protection accessible to everyone.",
  },
  {
    year: "2022",
    title: "First Product Launch",
    description: "Released our first anti-radiation case, achieving 95% EMF reduction.",
  },
  {
    year: "2023",
    title: "99% Protection Achieved",
    description: "Breakthrough in shielding technology enables our Pro line with 99% protection.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Now serving customers in 15+ countries with over 50,000 cases sold.",
  },
  {
    year: "2025",
    title: "Next Generation",
    description: "Developing revolutionary thin-film technology for even slimmer, more effective protection.",
  },
]

export function Timeline() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From a simple idea to global protection.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent md:-translate-x-1/2 mt-1.5" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <span className="text-sm text-accent font-semibold">{milestone.year}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
