import { ReactNode } from "react"
import Image from "next/image"
import bgImage from "@/assets/all-guardians.webp"

type Props = {
  children: ReactNode
}

export default function ProtectedRoutesLayout({ children }: Props) {
  return (
    <>
      <div className="-z-10 fixed right-0 left-1/2 bottom-0 top-0 ">
        <Image
          src={bgImage}
          alt="Rostos de todos os vingadores"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="z-20 flex flex-col flex-1">{children}</div>
    </>
  )
}
