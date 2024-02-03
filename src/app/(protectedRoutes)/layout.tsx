"use client"

import { MainHeader } from "@/components/Header/MainHeader"
import { ReactNode, useEffect, useState } from "react"
import Image from "next/image"
import bgImage from "@/assets/all-guardians.webp"
import { useRouter } from "next/navigation"
import { getLocalJWT } from "@/utils/Jwt"
import { JWT } from "@/@types/types"
import { Logo } from "@/components/Logo"

type Props = {
  children: ReactNode
}

export default function ProtectedRoutesLayout({ children }: Props) {
  const navigation = useRouter()

  const [jwt, setJwt] = useState<JWT | null>(null)

  useEffect(() => {
    const localJwt = getLocalJWT()
    if (!localJwt) navigation.push("/entrar")
    setJwt(localJwt)
  }, [navigation])

  if (!jwt) {
    return (
      <div className="bg-black-900 z-50 flex flex-1 items-center justify-center">
        <Logo />
      </div>
    )
  }
  return (
    <>
      <MainHeader />
      <div className="-z-10 fixed right-0 left-1/2 bottom-0 top-[96px] lg:top-[130px] ">
        <Image
          src={bgImage}
          alt="Rostos de todos os vingadores"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="z-10 flex flex-col flex-1">{children}</div>
    </>
  )
}
