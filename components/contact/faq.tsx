"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does ShieldCase protect against radiation?",
    answer: "ShieldCase uses a proprietary 5-layer shielding technology that redirects EMF radiation away from your body. Unlike full blockers that interfere with signal, our directional shielding maintains full phone connectivity while providing up to 99% protection.",
  },
  {
    question: "Will ShieldCase affect my phone's signal?",
    answer: "No. Our patented antenna-bypass technology ensures your phone maintains full signal strength. The shielding only affects the direction of radiation toward your body, not the antenna's ability to communicate with cell towers.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with your ShieldCase, return it within 30 days for a full refund. We also provide a lifetime warranty against manufacturing defects.",
  },
  {
    question: "How long does shipping take?",
    answer: "We offer free standard shipping (5-7 business days) on all orders. Express shipping (2-3 business days) is available for $9.99. International shipping typically takes 7-14 business days.",
  },
  {
    question: "Is ShieldCase compatible with wireless charging?",
    answer: "Yes! All ShieldCase models are fully compatible with Qi wireless charging and MagSafe accessories. You don't need to remove the case to charge wirelessly.",
  },
  {
    question: "How do I know ShieldCase is actually working?",
    answer: "Our products are independently tested and certified. Each case comes with lab test results showing EMF reduction levels. You can also use an EMF meter to verify the protection yourself.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Find quick answers to common questions about ShieldCase.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-card hover:bg-secondary/30 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 bg-secondary/10 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
