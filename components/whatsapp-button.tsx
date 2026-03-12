"use client"

import { MessageCircle } from "lucide-react"
import { WHATSAPP_NUMBER } from "@/lib/data"

export function WhatsAppButton() {
  return (
    <button
      onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, "_blank")}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-2xl flex items-center justify-center z-50 transition-all hover:scale-110 animate-pulse cursor-pointer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </button>
  )
}
