"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Shield, Users } from "lucide-react"

interface AboutSectionProps {
  visibleElements: Set<string>
}

const ABOUT_CARDS = [
  {
    id: "about-card-1",
    icon: Leaf,
    title: "Geneticas de Elite",
    description:
      "Cultivadas bajo condiciones ambientales controladas para garantizar maxima pureza y potencia en cada cosecha.",
    delay: "",
  },
  {
    id: "about-card-2",
    icon: Shield,
    title: "Marco Legal",
    description:
      "Marco regulatorio de la Ley N° 27.350 para la investigación, uso medicinal y terapéutico del cannabis y sus derivados.",
    delay: "delay-100",
  },
  {
    id: "about-card-3",
    icon: Users,
    title: "Acompanamiento",
    description:
      "Te guiamos paso a paso en tu registro y tratamiento para facilitar tu acceso a una medicina de calidad superior.",
    delay: "delay-200",
  },
]

export function AboutSection({ visibleElements }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0a1628] to-[#0f1f3a]">
      <div className="container mx-auto px-4">
        <h2
          id="about-title"
          data-animate
          className={`font-display text-4xl md:text-5xl font-bold text-center mb-12 text-[#00ffff] transition-all duration-700 ${
            visibleElements.has("about-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Sobre Nosotros
        </h2>

        <div className="max-w-4xl mx-auto mb-16">
          <p
            id="about-p1"
            data-animate
            className={`text-lg md:text-xl text-white/90 leading-relaxed transition-all duration-700 delay-100 ${
              visibleElements.has("about-p1") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            En Baires Buds somos un club de cultivo comprometido con el acceso responsable y seguro al cannabis
            medicinal. Creemos en una salud más natural, consciente y acompañada, trabajando bajo el marco legal
            vigente para garantizar medicina de excelencia. Nuestro compromiso va más allá del cultivo: buscamos
            profesionalizar la industria y asegurar que el bienestar de nuestros socios sea siempre la prioridad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ABOUT_CARDS.map(({ id, icon: Icon, title, description, delay }) => (
            <Card
              key={id}
              id={id}
              data-animate
              className={`bg-white/5 border-[#00ffff]/30 hover:border-[#00ffff] transition-all duration-700 hover:scale-105 ${delay} ${
                visibleElements.has(id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <CardContent className="p-8 text-center">
                <Icon className="h-16 w-16 text-[#00ffff] mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold mb-3 text-[#00ffff]">{title}</h3>
                <p className="text-white/80">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
