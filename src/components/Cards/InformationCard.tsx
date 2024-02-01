import Image from "next/image"
import { axiformaBold, axiformaLight } from "../Fonts/Axiforma"
import { Hero } from "@/@types/types"
import Link from "next/link"
import { getHerosDetails } from "@/api-functions/heros/getDetails"
import { BodyOverlay } from "../BodyOverlay/BodyOverlay"
import { CloseCardButton } from "./components/CloseCardButton"
import { RateSection } from "./components/RateSection"
import { ReactNode } from "react"

type Props = {
  imageURL: string | undefined
  title: string
  description: string
  cardSlug: string
  buttonText?: string
  pageSlug?: string
  children: ReactNode
}

/**
 *
 * O componente é a base de card de detalhamentos iniciais do site.
 *
 * @component
 * @children type: ReactNode. componente de mais detalhes.
 * @param description type: string.
 * @param imageURL type: string | undefined.
 * @param title type: string.
 * @param cardSlug type: string. O slug que será usado para saber se o card atual está aberto quando comparado ao @pageSlug .
 * @param isOpen type: boolean.
 * @see [Docs](./README.md) - Link to additional documentation.
 */
export const InformationCard = async ({
  description,
  imageURL,
  title,
  cardSlug,
  buttonText = "ver detalhes",
  pageSlug = undefined,
  children,
}: Props) => {
  const isSomeCardOpen = !!pageSlug
  const isCurrentCardOpen = pageSlug === cardSlug

  return (
    <article
      className={`
        relative
        rounded-3xl overflow-hidden
        snap-center
        ${isSomeCardOpen ? (isCurrentCardOpen ? "z-30" : "z-0") : "z-10"}
        ${isCurrentCardOpen ? "flex w-160" : "block w-72"}
         h-110 
      `}
    >
      <Image
        src={imageURL ?? ""}
        alt="teste alt"
        width={290}
        height={440}
        className="
            object-cover object-center z-50
        "
        loading="lazy"
      />

      {!isCurrentCardOpen && (
        <section
          className={`
            flex flex-col
            absolute 
            bottom-0 top-1/2 left-0 right-0
            rounded-3xl
            bg-gradient-to-b from-red-500 to-white-500/0 text-white-500
            p-5
            ${axiformaLight}
        `}
        >
          <h3 className={`text-center mb-4 text-xl ${axiformaBold.className}`}>
            {title}
          </h3>
          <p className="text-xs">{description}</p>
          <Link
            href={`?slug=${cardSlug}`}
            className="block mt-auto text-xl drop-shadow-x h-8"
          >
            Ver detalhes
          </Link>
        </section>
      )}

      {children}
    </article>
  )
}
