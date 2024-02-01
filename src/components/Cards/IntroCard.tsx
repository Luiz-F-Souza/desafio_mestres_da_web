import Image from "next/image"
import { axiformaBold, axiformaLight } from "../Fonts/Axiforma/axiforma"
import { Hero } from "@/@types/types"
import Link from "next/link"
import { getHerosDetails } from "@/api-functions/heros/getDetails"
import { FaStar } from "react-icons/fa"
import { BodyOverlay } from "../BodyOverlay/BodyOverlay"
import { CloseCardButton } from "./CloseCardButton"

type Props = {
  hero: Hero
  slug?: string
}

export const IntroCard = async ({ hero, slug = undefined }: Props) => {
  const isSomeCardOpen = !!slug
  const isCurrentCardOpen = slug === hero.nameSlug

  const isQueryEnabled = isCurrentCardOpen

  const request = isQueryEnabled
    ? await getHerosDetails({ slug: hero.nameSlug })
    : undefined

  const details = request?.data.detail
  const rate = details?.rate ?? 0

  return (
    <article
      className={`
        relative
        rounded-3xl overflow-hidden
        snap-center
        ${isSomeCardOpen ? (isCurrentCardOpen ? "z-30" : "z-0") : "z-10"}
        ${details ? "flex w-160" : "block w-72"}
         h-110 
      `}
    >
      <Image
        src={hero.imageUrl!}
        alt="teste alt"
        width={290}
        height={440}
        className="
            object-cover object-center z-50
        "
        loading="lazy"
      />

      {!details && (
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
            {hero.name}
          </h3>
          <p className="text-xs">{hero.description}</p>
          <Link
            href={`?slug=${hero.nameSlug}`}
            className="block mt-auto text-xl drop-shadow-x h-8"
          >
            Ver detalhes
          </Link>
        </section>
      )}

      <section
        className={`
          bg-gradient-to-b from-red-400 to-red-700
          absolute top-0 bottom-0 left-48 right-0
          z-40
          pr-8 pl-36 py-14
          ${details ? "visible " : "invisible"} 
        `}
      >
        <h3
          className={`
            text-left mb-4 text-3xl line-clamp-1 text-ellipsis
            ${axiformaBold.className}
          `}
        >
          {hero.name}
        </h3>
        <div>
          <h4>Aparições:</h4>
          <ul className="text-left">
            {details?.movies.slice(0, 6).map((movie) => {
              return (
                <li key={movie} className="line-clamp-1 text-ellipsis">
                  {movie}
                </li>
              )
            })}
          </ul>
        </div>

        <p className="text-2xl my-4">Avaliação dos Fãs</p>

        <div className="flex gap-1">
          <FaStar
            size={20}
            className={`${rate >= 1 ? "fill-orange-500" : "fill-gray-500"}`}
          />
          <FaStar
            size={20}
            className={`${rate >= 2 ? "fill-orange-500" : "fill-gray-500"}`}
          />
          <FaStar
            size={20}
            className={`${rate >= 3 ? "fill-orange-500" : "fill-gray-500"}`}
          />
          <FaStar
            size={20}
            className={`${rate >= 4 ? "fill-orange-500" : "fill-gray-500"}`}
          />
          <FaStar
            size={20}
            className={`${rate >= 5 ? "fill-orange-500" : "fill-gray-500"}`}
          />
        </div>

        <CloseCardButton className="flex w-full justify-end mt-2" />
      </section>
    </article>
  )
}
