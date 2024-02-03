import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/react"

import StyledComponentsRegistry from "@/lib/registry"
import { axiformaLight } from "@/components/Fonts/Axiforma"
import { BodyOverlay } from "@/components/BodyOverlay/BodyOverlay"

import "./globals.css"
import { Notification } from "@/components/Notification"

export const metadata: Metadata = {
  title: "Marvel - Explore o universo",
  description: "Explore um universo cheio de heróis e ação",
  keywords: ["marvel", "heróis", "hqs", "filmes"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`relative overflow-x-hidden flex flex-col flex-1 min-h-screen ${axiformaLight.className}`}
      >
        <StyledComponentsRegistry>
          {children}
          <BodyOverlay />
        </StyledComponentsRegistry>

        <Analytics />
      </body>
    </html>
  )
}
