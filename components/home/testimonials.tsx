"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Software Engineer",
    content: "As someone who is on calls all day, I was worried about constant phone exposure. ShieldCase gives me peace of mind without sacrificing style or functionality.",
    rating: 5,
    image: null,
  },
  {
    name: "Dr. James Chen",
    role: "Physician",
    content: "I recommend ShieldCase to my patients who are concerned about EMF exposure. The science behind it is solid, and the build quality is exceptional.",
    rating: 5,
    image: null,
  },
  {
    name: "Emily Rodriguez",
    role: "Mother of Two",
    content: "My kids use tablets daily for school. ShieldCase was an easy decision. Knowing they have that extra layer of protection means everything to me.",
    rating: 5,
    image: null,
  },
  {
    name: "Michael Foster",
    role: "Tech Entrepreneur",
    content: "Premium feel, sleek design, and actual protection. I have recommended ShieldCase to my entire team. The quality speaks for itself.",
    rating: 5,
    image: null,
  },
]

const brands = ["Forbes", "TechCrunch", "Wired", "Healthline", "The Verge"]

export function Testimonials() {
  return (
    <section className="py-32 lg:py-40 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-primary tracking-widest uppercase mb-4"
          >
            Testimonials
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join over 50,000 customers who have made the switch to safer smartphone use.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card rounded-3xl border border-border/60 p-8 lg:p-10 hover:border-primary/30 transition-all duration-500 card-hover shadow-soft"
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary/50" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-8 text-lg">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground tracking-tight">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 pt-16 border-t border-border"
        >
          <p className="text-center text-sm text-muted-foreground mb-8 tracking-wide uppercase">
            As Featured In
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {brands.map((brand, index) => (
              <motion.span 
                key={brand} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-xl md:text-2xl font-bold text-muted-foreground/40 hover:text-primary/60 transition-colors duration-300 tracking-tight"
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
