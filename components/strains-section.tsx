"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { STRAINS } from "@/lib/data"

interface StrainsSectionProps {
  visibleElements: Set<string>
}

export function StrainsSection({ visibleElements }: StrainsSectionProps) {
  return (
    <section id="strains" className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4">
        <h2
          id="strains-title"
          data-animate
          className={`font-display text-5xl md:text-6xl font-bold text-center mb-12 text-[#00ffff] transition-all duration-700 ${
            visibleElements.has("strains-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Nuestras Cepas
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
          {STRAINS.map((strain, index) => (
            <Card
              key={index}
              id={`strain-card-${index}`}
              data-animate
              className={`bg-white/5 border-[#00ffff]/30 hover:border-[#00ffff] hover:bg-white/10 hover:shadow-lg hover:shadow-[#00ffff]/20 transition-all duration-500 hover:scale-105 overflow-hidden p-0 ${
                visibleElements.has(`strain-card-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-44 w-full">
                <Image
                  src={strain.image || "/placeholder.svg"}
                  alt={strain.name}
                  fill
                  className="object-cover"
                  style={{ borderRadius: "calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-[#00ffff] text-[#0a1628] text-xs font-bold px-2 py-0.5 rounded-full">
                  THC {strain.thc}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-display text-lg font-bold mb-1 text-[#00ffff]">{strain.name}</h3>
                <p className="text-[#00ffff]/70 text-xs mb-2">{strain.type}</p>
                <p className="text-white/70 text-xs leading-relaxed">{strain.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div
          id="catalog-button"
          data-animate
          className={`text-center transition-all duration-700 ${
            visibleElements.has("catalog-button") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a href="/catalogo-baires-buds.pdf" download>
            <Button
              size="lg"
              variant="outline"
              className="border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a1628] text-lg px-8 py-6 bg-transparent cursor-pointer"
            >
              Descargar Catálogo Completo (PDF)
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
