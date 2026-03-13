"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, Shield, Truck, RotateCcw, Check, ShoppingCart } from "lucide-react"

const phoneModels = [
  { brand: "iPhone", models: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14"] },
  { brand: "Samsung", models: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23"] },
  { brand: "Google", models: ["Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7"] },
]

const colors = [
  { name: "Midnight Black", value: "#0a0a0a" },
  { name: "Space Gray", value: "#3a3a3a" },
  { name: "Silver", value: "#c0c0c0" },
  { name: "Carbon", value: "#1a1a1a" },
]

export function ProductInfo() {
  const [selectedBrand, setSelectedBrand] = useState("iPhone")
  const [selectedModel, setSelectedModel] = useState("iPhone 15 Pro Max")
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [quantity, setQuantity] = useState(1)

  const currentModels = phoneModels.find((p) => p.brand === selectedBrand)?.models || []

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full">
        <Shield className="w-4 h-4 text-accent" />
        <span className="text-sm text-accent font-medium">Best Seller</span>
      </div>

      {/* Title & Rating */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          ShieldCase Pro
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">4.9 (2,847 reviews)</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-foreground">$89</span>
        <span className="text-lg text-muted-foreground line-through">$119</span>
        <span className="text-sm text-accent font-medium">Save 25%</span>
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        Our flagship anti-radiation case featuring 99% EMF blocking technology. 
        Engineered with a 5-layer shield system and premium materials for maximum 
        protection without compromising style or phone functionality.
      </p>

      {/* Phone Brand Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Phone Brand</label>
        <div className="flex flex-wrap gap-2">
          {phoneModels.map((phone) => (
            <button
              key={phone.brand}
              onClick={() => {
                setSelectedBrand(phone.brand)
                setSelectedModel(phone.models[0])
              }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedBrand === phone.brand
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {phone.brand}
            </button>
          ))}
        </div>
      </div>

      {/* Phone Model Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">Phone Model</label>
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
        >
          {currentModels.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>

      {/* Color Selection */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-foreground">
          Color: <span className="text-muted-foreground">{selectedColor.name}</span>
        </label>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColor.name === color.name
                  ? "border-accent scale-110"
                  : "border-transparent hover:scale-105"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Quantity & Add to Cart */}
      <div className="flex gap-4 pt-4">
        <div className="flex items-center border border-border rounded-lg">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            -
          </button>
          <span className="px-4 py-3 text-foreground font-medium">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            +
          </button>
        </div>
        <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </Button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
        {[
          { icon: Shield, label: "Lifetime Warranty" },
          { icon: Truck, label: "Free Shipping" },
          { icon: RotateCcw, label: "30-Day Returns" },
        ].map((badge) => (
          <div key={badge.label} className="text-center">
            <badge.icon className="w-5 h-5 mx-auto mb-2 text-accent" />
            <p className="text-xs text-muted-foreground">{badge.label}</p>
          </div>
        ))}
      </div>

      {/* Features checklist */}
      <div className="space-y-2 pt-4">
        {[
          "99% EMF radiation protection",
          "MagSafe compatible",
          "Military-grade drop protection",
          "Wireless charging compatible",
        ].map((feature) => (
          <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-accent" />
            {feature}
          </div>
        ))}
      </div>
    </motion.div>
  )
}
