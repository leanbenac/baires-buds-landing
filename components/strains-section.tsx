"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "./ui/button"
import { STRAINS, WHATSAPP_NUMBER } from "@/lib/data"

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
          className={`font-display text-4xl md:text-5xl font-bold text-center mb-12 text-[#00ffff] tracking-wide transition-all duration-700 ${
            visibleElements.has("strains-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Nuestros Productos
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-12">
          {STRAINS.map((strain, index) => (
            
            <Card
              key={index}
              id={`strain-card-${index}`}
              data-animate
              className={`group bg-white/5 border-[#00ffff]/30 hover:border-[#00ffff] hover:bg-white/10 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,255,255,0.25)] transition-all duration-500 ease-out overflow-hidden p-0 ${
                visibleElements.has(`strain-card-${index}`) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={strain.image || "/placeholder.svg"}
                  alt={strain.name}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{ borderRadius: "calc(var(--radius) - 1px) calc(var(--radius) - 1px) 0 0" }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/90 via-[#0a1628]/20 to-transparent" />

                <div className="absolute top-3 right-3 bg-[#00ffff]/90 backdrop-blur-sm text-[#0a1628] text-[10px] font-bold px-2 py-1 rounded-full max-w-[110px] text-center leading-tight">
                  THC {strain.thc}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-display text-lg font-bold mb-1 text-[#00ffff] line-clamp-1">
                  {strain.name}
                </h3>

                <p className="text-[#00ffff]/70 text-xs mb-2">
                  {strain.type}
                </p>

                <p className="text-white/70 text-xs leading-relaxed line-clamp-2">
                  {strain.description}
                </p>
                <Button
                  onClick={() =>
                    window.open(
                      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hola! Me interesa el producto "${strain.name}". ¿Me podés dar más info?`
                      )}`,
                      "_blank"
                    )
                  }
                  className="mt-3 w-full bg-[#00ffff] text-[#0a1628] hover:bg-[#00ffff]/80 text-xs font-semibold cursor-pointer"
                >
                  Consultar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}