"use client"

import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactSectionProps {
  visibleElements: Set<string>
}

export function ContactSection({ visibleElements }: ContactSectionProps) {
  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    setCargando(true)

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, 
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, 
        formRef.current!, 
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setEnviado(true)
      formRef.current.reset()
    } catch (error) {
      console.error("Error al enviar:", error)
      alert("No se pudo enviar el mensaje. Probá contactarnos por WhatsApp.")
    } finally {
      setCargando(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-[#0a1628]">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-center mb-12 text-[#00ffff]">
          Contactanos
        </h2>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/5 border-[#00ffff]/30">
            <CardContent className="p-8">
              {enviado ? (
                <div className="text-center py-10 space-y-4">
                  <div className="text-5xl">🌿</div>
                  <h3 className="text-[#00ffff] text-2xl font-bold font-display">¡Mensaje Recibido!</h3>
                  <p className="text-white/80">Gracias por contactar a Baires Buds. Te responderemos pronto.</p>
                  <Button variant="outline" className="border-[#00ffff] text-[#00ffff]" onClick={() => setEnviado(false)}>
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">Nombre</label>
                    <Input name="user_name" required placeholder="Tu nombre" className="bg-white/10 border-[#00ffff]/30 text-white" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">Email</label>
                    <Input name="user_email" type="email" required placeholder="tu@email.com" className="bg-white/10 border-[#00ffff]/30 text-white" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">WhatsApp</label>
                    <Input name="user_phone" required placeholder="+54 9 11 ..." className="bg-white/10 border-[#00ffff]/30 text-white" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-white/90">Mensaje</label>
                    <Textarea name="message" required placeholder="Contanos sobre tu interés..." rows={5} className="bg-white/10 border-[#00ffff]/30 text-white" />
                  </div>

                  <Button type="submit" disabled={cargando} className="w-full bg-[#00ffff] text-[#0a1628] font-bold">
                    {cargando ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}