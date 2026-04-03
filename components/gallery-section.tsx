"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { GALLERY_IMAGES } from "@/lib/data"

interface GallerySectionProps {
  visibleElements: Set<string>
}

export function GallerySection({ visibleElements }: GallerySectionProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % GALLERY_IMAGES.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-[#0a1628] to-[#0f1f3a]">
      <div className="container mx-auto px-4">
        <h2
          id="gallery-title"
          data-animate
          className={`font-display text-4xl md:text-5xl font-bold text-center mb-12 text-[#00ffff] transition-all duration-700 ${
            visibleElements.has("gallery-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Nuestra Galería
        </h2>

        <div
          id="gallery-carousel"
          data-animate
          className={`max-w-5xl mx-auto transition-all duration-700 ${
            visibleElements.has("gallery-carousel") ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden">
            {GALLERY_IMAGES.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {GALLERY_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  index === currentImageIndex ? "bg-[#00ffff] w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
