import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Permanent_Marker } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Baires Buds - Cannabis Medicinal de Calidad Premium",
  description:
    "Club de cultivo de cannabis medicinal en Buenos Aires. Registrados en REPROCANN. Genéticas premium y asesoramiento personalizado.",
  generator: "v0.app",
  keywords: ["cannabis medicinal", "REPROCANN", "cultivo cannabis", "Buenos Aires", "cannabis legal Argentina"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport = {
  themeColor: "#0a1628",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased ${_permanentMarker.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
