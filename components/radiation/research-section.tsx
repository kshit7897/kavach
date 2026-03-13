"use client"

import { motion } from "framer-motion"
import { FileText, ExternalLink, CheckCircle2 } from "lucide-react"

const research = [
  {
    title: "ShieldCase Lab Testing Report",
    institution: "Independent EMF Testing Laboratory",
    year: "2024",
    finding: "99.2% reduction in RF radiation transmission through ShieldCase material",
    type: "Product Testing",
  },
  {
    title: "RF Shielding Material Analysis",
    institution: "Materials Science Institute",
    year: "2023",
    finding: "Multi-layer composite demonstrates superior RF attenuation across 700MHz-6GHz spectrum",
    type: "Material Science",
  },
  {
    title: "SAR Reduction Study",
    institution: "Radiation Safety Research Group",
    year: "2024",
    finding: "Directional shielding technology reduces SAR values by 98.7% without signal degradation",
    type: "Safety Research",
  },
  {
    title: "Long-term Durability Assessment",
    institution: "Product Testing Consortium",
    year: "2023",
    finding: "Shield effectiveness maintained at 98%+ after 2 years of simulated use",
    type: "Durability Testing",
  },
]

const certifications = [
  "FCC Certified",
  "CE Marked",
  "RoHS Compliant",
  "ISO 9001 Manufacturing",
  "EMF Safety Foundation Approved",
  "Patent Pending Technology",
]

export function ResearchSection() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Research & Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our technology is backed by independent research and certified by recognized authorities.
          </p>
        </motion.div>

        {/* Research Papers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {research.map((paper, index) => (
            <motion.div
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/30 rounded-xl border border-border p-6 hover:border-accent/50 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-accent" />
                    <span className="text-xs text-accent font-medium">{paper.type}</span>
                    <span className="text-xs text-muted-foreground">{paper.year}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{paper.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{paper.institution}</p>
                  <p className="text-sm text-foreground/80 italic">"{paper.finding}"</p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors flex-shrink-0" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary/30 rounded-2xl border border-border p-8"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Certifications & Compliance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 border border-border"
              >
                <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-xs text-foreground">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
