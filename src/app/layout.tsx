import type { Metadata } from "next"
import Image from "next/image"
import { MainHeader } from "@/components/Header/MainHeader"
import bgImage from "@/assets/all-guardians.webp"
import { Analytics } from '@vercel/analytics/react';

import "./globals.css"
import { BodyOverlay } from "@/components/BodyOverlay/BodyOverlay"

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
      <body className="relative overflow-x-hidden flex flex-col flex-1 min-h-screen">
        <MainHeader />
        <div className="-z-10 fixed right-0 left-1/2 bottom-0 top-[96px] lg:top-[130px] ">
          <Image
            src={bgImage}
            alt="Rostos de todos os vingadores"
            className="w-full h-full object-cover"
            priority
            // className="fixed object-cover w-screen h-screen -z-50"
          />
        </div>

        <BodyOverlay />
        {children}

        <Analytics />
      </body>
    </html>
  )
}
