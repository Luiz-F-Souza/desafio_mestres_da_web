"use client"

import Image from "next/image"
import { axiformaBold, axiformaLight } from "../Fonts/Axiforma"
import Link from "next/link"
import { BodyOverlay } from "../BodyOverlay/BodyOverlay"
import { ReactNode, useEffect, useRef } from "react"
import { useSetDetailsDirection } from "./hooks/useSetDetailsDirection"
import { useScrollCardIntoView } from "./hooks/useScrollCardIntoView"

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
 * @param cardSlug type: string. O slug que será usado para saber se o card atual está aberto quando comparado ao pageSlug .
 * @param pageSlug type: string | undefined. O slug que será usado para saber se o card atual está aberto quando comparado ao cardSlug .
 * @param isOpen type: boolean.
 * @see [Docs](./README.md) - Link to additional documentation.
 */
export const InformationCard = ({
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

  const containerRef = useRef<HTMLElement>(null)

  const { detailsDirection } = useSetDetailsDirection({
    elementRef: containerRef,
    effectUpdater: isCurrentCardOpen,
  })

  useEffect(() => {
    if (isCurrentCardOpen) {
      containerRef.current?.scrollIntoView({
        block: "nearest",
        inline: "center",
      })
    }
  }, [isCurrentCardOpen])

  return (
    <>
      <article
        ref={containerRef}
        className={`
        relative
        rounded-3xl overflow-hidden
        shrink-0
        mx-4 md:mx-20
        snap-center
        max-w-[calc(100vw-20px)]
        ${isSomeCardOpen ? (isCurrentCardOpen ? "z-30" : "-z-10") : "z-10"}
        ${
          isCurrentCardOpen
            ? ` grid md:flex w-160 md:h-110  ${detailsDirection}`
            : "block w-72 h-110"
        }
           
      `}
      >
        <Image
          src={imageURL ?? ""}
          alt={`Imagem de: ${title}`}
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          className={`
            object-cover object-top md:object-center  
            h-full aspect-video md:aspect-auto
            z-10
            ${
              isCurrentCardOpen
                ? "w-full max-h-60 md:max-h-none  md:max-w-72 rounded-3xl"
                : "max-w-72"
            }
          `}
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
            <h3
              className={`text-center mb-4 text-xl ${axiformaBold.className}`}
            >
              {title}
            </h3>
            <p className="text-xs">{description}</p>
            <Link
              href={`?slug=${cardSlug}`}
              className="block mt-auto text-xl drop-shadow-x h-8 text-center"
            >
              {buttonText}
            </Link>
          </section>
        )}

        {children}

        <div
          className={`
            absolute 
            top-0 bottom-0 left-0
            ${
              isCurrentCardOpen
                ? "right-0 transition-[right] duration-200"
                : "right-[100%]"
            } 
            bg-gradient-to-b from-red-400 to-red-700
          `}
        />
      </article>
      {isCurrentCardOpen && <BodyOverlay className="fixed z-10]" />}
    </>
  )
}
