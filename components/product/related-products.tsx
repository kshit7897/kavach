"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const products = [
  {
    name: "ShieldCase Essential",
    price: "$59",
    description: "Everyday protection with a slim profile",
  },
  {
    name: "ShieldCase Ultra",
    price: "$129",
    description: "Maximum protection with built-in battery",
  },
  {
    name: "ShieldCase Mini",
    price: "$49",
    description: "Compact design for minimalists",
  },
]

export function RelatedProducts() {
  return (
    <section className="py-24 bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            You May Also Like
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/30 rounded-2xl border border-border p-6 hover:border-accent/50 transition-colors group"
            >
              {/* Product Image */}
              <div className="aspect-square bg-secondary/50 rounded-xl mb-4 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-24 h-36 bg-gradient-to-b from-muted to-secondary rounded-2xl shadow-lg"
                />
              </div>

              <h3 className="font-semibold text-foreground mb-1">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-foreground">{product.price}</span>
                <Button asChild variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  <Link href="/product">View</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
