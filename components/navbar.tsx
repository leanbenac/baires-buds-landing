"use client"

import Image from "next/image"
import { NAV_ITEMS } from "@/lib/data"

interface NavbarProps {
  scrolled: boolean
  activeSection: string
  scrollToSection: (id: string) => void
}

export function Navbar({ scrolled, activeSection, scrollToSection }: NavbarProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a1628]/95 backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/baires-buds-logo-iso.png"
              alt="Baires Buds"
              width={40}
              height={40}
              className="hover:opacity-80 transition-opacity cursor-pointer"
              onClick={() => scrollToSection("hero")}
            />
          </div>
          <div className="hidden md:flex gap-6">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-[#00ffff] cursor-pointer ${
                  activeSection === item.id ? "text-[#00ffff]" : "text-white/80"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
