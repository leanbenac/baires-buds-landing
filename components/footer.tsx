"use client"

import Image from "next/image"
import { Instagram, MessageCircle } from "lucide-react"
import { NAV_ITEMS, WHATSAPP_NUMBER } from "@/lib/data"

interface FooterProps {
  scrollToSection: (id: string) => void
}

export function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="bg-[#0f1f3a] border-t border-[#00ffff]/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/baires-buds-logo.png"
              alt="Baires Buds Logo"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-white/70 text-sm">
              Club de Cultivo de Cannabis Medicinal. Registrado en REPROCANN.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#00ffff]">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/70 hover:text-[#00ffff] transition-colors text-sm cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-[#00ffff]">Redes Sociales</h3>
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.instagram.com/bairesbudsclub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00ffff] transition-colors flex items-center justify-center cursor-pointer group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-white group-hover:text-[#0a1628]" />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#00ffff] transition-colors flex items-center justify-center cursor-pointer group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5 text-white group-hover:text-[#0a1628]" />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-18"> 
              
              <div className="flex items-center">
                <Image 
                  src="/ministerio-salud.png" 
                  alt="Ministerio de Salud Argentina" 
                  width={130} 
                  height={45} 
                  className="object-contain brightness-125 opacity-90 hover:opacity-100 transition-opacity" 
                />
              </div>
              
              <div className="flex items-center">
                <Image 
                  src="/reprocan.png" 
                  alt="Registro REPROCANN" 
                  width={90} 
                  height={45} 
                  className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
              
              <div className="flex items-center -ml-2 -mt-2"> 
                <Image 
                  src="/fecca.png" 
                  alt="FECCA" 
                  width={60} 
                  height={60} 
                  className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" 
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/60 text-sm">
          <p>© 2026 Baires Buds. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}