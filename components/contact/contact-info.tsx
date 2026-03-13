"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general inquiries and support",
    value: "support@shieldcase.com",
    action: "mailto:support@shieldcase.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri, 9am-6pm EST",
    value: "+1 (555) 123-4567",
    action: "tel:+15551234567",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    value: "Available 24/7",
    action: "#",
  },
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Other Ways to Reach Us</h2>
        <div className="space-y-4">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.action}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="block bg-secondary/30 rounded-xl border border-border p-6 hover:border-accent/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <method.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                  <p className="text-sm text-foreground">{method.value}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Office Info */}
      <div className="bg-secondary/30 rounded-xl border border-border p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
            <MapPin className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Headquarters</h3>
            <p className="text-sm text-muted-foreground">
              123 Innovation Drive<br />
              San Francisco, CA 94107<br />
              United States
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
            <Clock className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Business Hours</h3>
            <p className="text-sm text-muted-foreground">
              Monday - Friday: 9:00 AM - 6:00 PM EST<br />
              Saturday: 10:00 AM - 4:00 PM EST<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>

      {/* Response time */}
      <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
        <p className="text-sm text-foreground">
          <strong>Average Response Time:</strong> We typically respond to all inquiries within 24 hours during business days.
        </p>
      </div>
    </motion.div>
  )
}
