"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactSectionProps {
  visibleElements: Set<string>
}

export function ContactSection({ visibleElements }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4">
        <h2
          id="contact-title"
          data-animate
          className={`font-display text-5xl md:text-6xl font-bold text-center mb-12 text-[#00ffff] transition-all duration-700 ${
            visibleElements.has("contact-title") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Contactanos
        </h2>

        <div
          id="contact-form"
          data-animate
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            visibleElements.has("contact-form") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="bg-white/5 border-[#00ffff]/30">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/90">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="bg-white/10 border-[#00ffff]/30 text-white placeholder:text-white/50 focus:border-[#00ffff]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/90">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="bg-white/10 border-[#00ffff]/30 text-white placeholder:text-white/50 focus:border-[#00ffff]"
                  />
                </div>

                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium mb-2 text-white/90">
                    WhatsApp
                  </label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="+54 9 11 1234-5678"
                    className="bg-white/10 border-[#00ffff]/30 text-white placeholder:text-white/50 focus:border-[#00ffff]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/90">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Contanos sobre tu interés en nuestro club..."
                    rows={5}
                    className="bg-white/10 border-[#00ffff]/30 text-white placeholder:text-white/50 focus:border-[#00ffff]"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#00ffff] text-[#0a1628] hover:bg-[#00ffff]/90 text-lg font-bold cursor-pointer"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
