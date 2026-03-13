"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight, ChevronLeft, ShoppingCart, Sparkles } from "lucide-react"

type Step = "phone" | "protection" | "color" | "engraving" | "review"

const steps: { id: Step; label: string }[] = [
  { id: "phone", label: "Phone Model" },
  { id: "protection", label: "Protection Level" },
  { id: "color", label: "Color" },
  { id: "engraving", label: "Personalization" },
  { id: "review", label: "Review" },
]

const phoneModels = [
  { brand: "iPhone", models: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro"] },
  { brand: "Samsung", models: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra"] },
  { brand: "Google", models: ["Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro"] },
]

const protectionLevels = [
  { id: "essential", name: "Essential", protection: "95%", price: 59, description: "Everyday protection with slim profile" },
  { id: "pro", name: "Pro", protection: "99%", price: 89, description: "Maximum protection for power users", popular: true },
  { id: "ultra", name: "Ultra", protection: "99.5%", price: 129, description: "Ultimate protection with extended battery" },
]

const colors = [
  { id: "midnight", name: "Midnight Black", value: "#0a0a0a" },
  { id: "space", name: "Space Gray", value: "#3a3a3a" },
  { id: "silver", name: "Silver", value: "#c0c0c0" },
  { id: "carbon", name: "Carbon Fiber", value: "#1a1a1a" },
  { id: "titanium", name: "Titanium", value: "#878681" },
]

export function CaseBuilder() {
  const [currentStep, setCurrentStep] = useState<Step>("phone")
  const [selectedBrand, setSelectedBrand] = useState("")
  const [selectedModel, setSelectedModel] = useState("")
  const [selectedProtection, setSelectedProtection] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [engraving, setEngraving] = useState("")

  const currentStepIndex = steps.findIndex((s) => s.id === currentStep)
  const currentModels = phoneModels.find((p) => p.brand === selectedBrand)?.models || []
  const selectedProtectionData = protectionLevels.find((p) => p.id === selectedProtection)
  const selectedColorData = colors.find((c) => c.id === selectedColor)

  const canProceed = () => {
    switch (currentStep) {
      case "phone":
        return selectedBrand && selectedModel
      case "protection":
        return selectedProtection
      case "color":
        return selectedColor
      case "engraving":
        return true
      default:
        return true
    }
  }

  const goNext = () => {
    const nextIndex = currentStepIndex + 1
    if (nextIndex < steps.length) {
      setCurrentStep(steps[nextIndex].id)
    }
  }

  const goPrev = () => {
    const prevIndex = currentStepIndex - 1
    if (prevIndex >= 0) {
      setCurrentStep(steps[prevIndex].id)
    }
  }

  const totalPrice = (selectedProtectionData?.price || 0) + (engraving ? 15 : 0)

  return (
    <section className="pt-24 lg:pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Custom Builder</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Build Your Perfect Case
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Customize every detail of your ShieldCase for a truly personalized protection experience.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => index <= currentStepIndex && setCurrentStep(step.id)}
                  className={`flex items-center gap-2 ${index <= currentStepIndex ? "cursor-pointer" : "cursor-not-allowed"}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                      index < currentStepIndex
                        ? "bg-accent text-accent-foreground"
                        : index === currentStepIndex
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {index < currentStepIndex ? <Check className="w-4 h-4" /> : index + 1}
                  </div>
                  <span
                    className={`hidden md:block text-sm ${
                      index === currentStepIndex ? "text-foreground font-medium" : "text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <div className={`w-8 md:w-16 h-0.5 mx-2 ${index < currentStepIndex ? "bg-accent" : "bg-border"}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-square bg-card rounded-3xl border border-border p-8 flex items-center justify-center sticky top-32">
              <motion.div
                key={`${selectedColor}-${selectedProtection}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative"
              >
                {/* Case preview */}
                <div
                  className="w-48 h-72 rounded-3xl shadow-2xl relative overflow-hidden"
                  style={{ backgroundColor: selectedColorData?.value || "#1a1a1a" }}
                >
                  {/* Phone screen */}
                  <div className="absolute inset-3 bg-card rounded-2xl overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-secondary/50 to-muted/50 flex items-center justify-center">
                      {selectedModel && (
                        <span className="text-xs text-muted-foreground">{selectedModel}</span>
                      )}
                    </div>
                  </div>
                  {/* Camera bump */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-secondary/50 rounded-xl" />
                  {/* Engraving */}
                  {engraving && (
                    <div className="absolute bottom-8 left-0 right-0 text-center">
                      <span className="text-xs font-medium text-foreground/60 tracking-wider uppercase">
                        {engraving}
                      </span>
                    </div>
                  )}
                  {/* Protection badge */}
                  {selectedProtectionData && (
                    <div className="absolute top-4 right-4 px-2 py-1 bg-accent/20 rounded-full">
                      <span className="text-[10px] text-accent font-medium">
                        {selectedProtectionData.protection}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Configuration Panel */}
          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              {currentStep === "phone" && (
                <motion.div
                  key="phone"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-foreground">Select Your Phone</h2>
                  
                  {/* Brand Selection */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground">Brand</label>
                    <div className="flex flex-wrap gap-3">
                      {phoneModels.map((phone) => (
                        <button
                          key={phone.brand}
                          onClick={() => {
                            setSelectedBrand(phone.brand)
                            setSelectedModel("")
                          }}
                          className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
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

                  {/* Model Selection */}
                  {selectedBrand && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <label className="text-sm font-medium text-foreground">Model</label>
                      <div className="grid grid-cols-1 gap-2">
                        {currentModels.map((model) => (
                          <button
                            key={model}
                            onClick={() => setSelectedModel(model)}
                            className={`px-4 py-3 rounded-xl text-left text-sm transition-all border ${
                              selectedModel === model
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-secondary/50 text-foreground border-border hover:border-accent/50"
                            }`}
                          >
                            {model}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {currentStep === "protection" && (
                <motion.div
                  key="protection"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-foreground">Choose Protection Level</h2>
                  
                  <div className="space-y-4">
                    {protectionLevels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setSelectedProtection(level.id)}
                        className={`w-full p-6 rounded-xl text-left transition-all border relative ${
                          selectedProtection === level.id
                            ? "bg-primary/10 border-primary"
                            : "bg-secondary/30 border-border hover:border-accent/50"
                        }`}
                      >
                        {level.popular && (
                          <span className="absolute top-4 right-4 px-2 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                            Popular
                          </span>
                        )}
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">{level.name}</h3>
                          <span className="text-xl font-bold text-foreground">${level.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{level.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-accent font-medium">{level.protection} EMF Protection</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === "color" && (
                <motion.div
                  key="color"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-foreground">Select Color</h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {colors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color.id)}
                        className={`p-4 rounded-xl text-left transition-all border ${
                          selectedColor === color.id
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-border hover:border-accent/50"
                        }`}
                      >
                        <div
                          className="w-full aspect-video rounded-lg mb-3"
                          style={{ backgroundColor: color.value }}
                        />
                        <span className="text-sm font-medium text-foreground">{color.name}</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === "engraving" && (
                <motion.div
                  key="engraving"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-foreground">Add Personalization</h2>
                  <p className="text-muted-foreground">Add custom engraving to make your case unique. (+$15)</p>
                  
                  <div className="space-y-4">
                    <input
                      type="text"
                      value={engraving}
                      onChange={(e) => setEngraving(e.target.value.slice(0, 15))}
                      placeholder="Enter text (max 15 characters)"
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      maxLength={15}
                    />
                    <p className="text-sm text-muted-foreground">{engraving.length}/15 characters</p>
                  </div>

                  <button
                    onClick={() => setEngraving("")}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Skip personalization
                  </button>
                </motion.div>
              )}

              {currentStep === "review" && (
                <motion.div
                  key="review"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-foreground">Review Your Case</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Phone Model</p>
                      <p className="text-foreground font-medium">{selectedModel}</p>
                    </div>
                    <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Protection Level</p>
                      <p className="text-foreground font-medium">
                        ShieldCase {selectedProtectionData?.name} - {selectedProtectionData?.protection} Protection
                      </p>
                    </div>
                    <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                      <p className="text-sm text-muted-foreground mb-1">Color</p>
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-full border border-border"
                          style={{ backgroundColor: selectedColorData?.value }}
                        />
                        <span className="text-foreground font-medium">{selectedColorData?.name}</span>
                      </div>
                    </div>
                    {engraving && (
                      <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                        <p className="text-sm text-muted-foreground mb-1">Engraving</p>
                        <p className="text-foreground font-medium">"{engraving}"</p>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-muted-foreground">Base Price</span>
                      <span className="text-foreground">${selectedProtectionData?.price}</span>
                    </div>
                    {engraving && (
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">Engraving</span>
                        <span className="text-foreground">$15</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-lg font-semibold text-foreground">Total</span>
                      <span className="text-2xl font-bold text-foreground">${totalPrice}</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <Button
                variant="outline"
                onClick={goPrev}
                disabled={currentStepIndex === 0}
                className={currentStepIndex === 0 ? "invisible" : ""}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              {currentStep === "review" ? (
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart - ${totalPrice}
                </Button>
              ) : (
                <Button
                  onClick={goNext}
                  disabled={!canProceed()}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
