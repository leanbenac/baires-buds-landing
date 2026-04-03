"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle, ChevronDown } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/data"

interface HeroSectionProps {
  scrolled: boolean
  scrollToSection: (id: string) => void
}

export function HeroSection({ scrolled, scrollToSection }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#00ffff]/20 to-transparent"
          style={{
            transform: `translateY(${scrolled ? "50px" : "0px"})`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div className="absolute inset-0 bg-[url('/cannabis-leaves-pattern-dark.jpg')] bg-cover bg-center opacity-10" />
      </div>

      <div className="container mx-auto px-4 text-center z-10 mt-12 md:mt-20">
        <div className="animate-fade-in-up">

          <div className="mb-8 inline-block">
            <Image
              src="/baires-buds-logo.png"
              alt="Baires Buds Logo"
              width={200}
              height={200}
              className="animate-float drop-shadow-2xl"
              priority
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Cannabis Medicinal Premium
          </h2>

          <div className="mb-8 space-y-2">
            <p className="text-xl md:text-2xl text-white/80 text-balance max-w-2xl mx-auto">
              Club de Cultivo Registrado en REPROCANN
            </p>

            <p className="text-sm md:text-base text-[#00ffff]/80 tracking-wide">
              Marco regulatorio del Ministerio de Salud de la Nación
            </p>
          </div>

          <Button
            size="lg"
            className="relative bg-[#00ffff] text-[#0a1628] hover:bg-[#00ffff]/90 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 font-bold mb-10 md:mb-12 cursor-pointer transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,255,0.5)]"
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Contactanos por WhatsApp
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden [@media(min-height:700px)]:block">
        <ChevronDown
          className="h-12 w-12 text-[#00ffff] animate-pulse cursor-pointer"
          onClick={() => scrollToSection("about")}
        />
      </div>
    </section>
  )
}