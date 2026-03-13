"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  { id: 1, angle: "Front View" },
  { id: 2, angle: "Back View" },
  { id: 3, angle: "Side View" },
  { id: 4, angle: "Detail View" },
]

export function ProductGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-card rounded-2xl border border-border overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center p-8"
          >
            {/* Product visualization */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative w-48 h-72 bg-gradient-to-b from-muted to-secondary rounded-3xl shadow-2xl"
            >
              {/* Phone screen */}
              <div className="absolute inset-3 bg-card rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary/50 to-muted/50" />
              </div>
              {/* Camera bump */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-secondary rounded-xl" />
              {/* ShieldCase branding */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <span className="text-xs font-semibold text-muted-foreground tracking-wider">SHIELDCASE</span>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Zoom button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
        >
          <ZoomIn className="w-5 h-5" />
        </Button>

        {/* Image indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-foreground" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={`aspect-square bg-card rounded-xl border transition-all overflow-hidden ${
              index === currentIndex
                ? "border-accent ring-2 ring-accent/20"
                : "border-border hover:border-muted-foreground"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center p-2">
              <div className="w-8 h-12 bg-gradient-to-b from-muted/50 to-secondary/50 rounded-lg" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
