"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { StrainsSection } from "@/components/strains-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function BairesBudsLanding() {
  const { scrolled, activeSection, visibleElements, scrollToSection } = useScrollAnimation()

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <Navbar scrolled={scrolled} activeSection={activeSection} scrollToSection={scrollToSection} />
      <HeroSection scrolled={scrolled} scrollToSection={scrollToSection} />
      <AboutSection visibleElements={visibleElements} />
      <StrainsSection visibleElements={visibleElements} />
      <GallerySection visibleElements={visibleElements} />
      <ContactSection visibleElements={visibleElements} />
      <Footer scrollToSection={scrollToSection} />
      <WhatsAppButton />
    </div>
  )
}
