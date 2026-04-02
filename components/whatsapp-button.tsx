"use client"

import { MessageCircle } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/data"

export function WhatsAppButton() {
  return (
    <button
      onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")}
      className="fixed bottom-20 right-4 md:bottom-8 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center z-50 transition-all hover:scale-110 cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8 text-white" />
    </button>
  )
}
