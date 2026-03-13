"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter } from "lucide-react"

const team = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder & CEO",
    bio: "Materials engineer with 15+ years in radiation shielding technology.",
  },
  {
    name: "Michael Foster",
    role: "Chief Technology Officer",
    bio: "Former Apple engineer, specializing in mobile device design.",
  },
  {
    name: "Dr. James Wilson",
    role: "Head of Research",
    bio: "PhD in Radiation Physics from MIT, published EMF researcher.",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    bio: "10+ years in consumer electronics, passionate about user experience.",
  },
]

export function TeamSection() {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team combines decades of expertise in materials science, engineering, and health research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              {/* Avatar */}
              <div className="w-32 h-32 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                <span className="text-3xl font-bold text-foreground">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-sm text-accent mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
              
              {/* Social links */}
              <div className="flex items-center justify-center gap-3">
                <button className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                </button>
                <button className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                  <Twitter className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
