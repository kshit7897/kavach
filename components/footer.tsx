"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Twitter, Instagram, Linkedin, Youtube, Shield } from "lucide-react"

const footerLinks = {
  products: [
    { label: "iPhone Cases", href: "/product" },
    { label: "Samsung Cases", href: "/product" },
    { label: "Custom Builder", href: "/builder" },
    { label: "Accessories", href: "/product" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Science", href: "/radiation" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/about" },
  ],
  support: [
    { label: "FAQ", href: "/contact" },
    { label: "Shipping", href: "/contact" },
    { label: "Returns", href: "/contact" },
    { label: "Warranty", href: "/contact" },
  ],
}

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border relative">
      {/* Subtle top gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
              >
                <Shield className="w-5 h-5 text-primary-foreground" />
              </motion.div>
              <span className="text-xl font-semibold tracking-tight text-foreground">
                ShieldCase
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-8">
              Pioneering radiation protection technology. Our cases combine cutting-edge 
              EMF shielding with premium design, keeping you safe without compromise.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-card border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5 tracking-wide">Products</h4>
            <ul className="space-y-3.5">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5 tracking-wide">Company</h4>
            <ul className="space-y-3.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-5 tracking-wide">Support</h4>
            <ul className="space-y-3.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground order-2 md:order-1">
            {new Date().getFullYear()} ShieldCase. All rights reserved.
          </p>
          <div className="flex items-center gap-6 order-1 md:order-2">
            <Link 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
