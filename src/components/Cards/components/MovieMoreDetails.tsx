import { MovieDetails } from "@/@types/types"
import { axiformaBold } from "@/components/Fonts/Axiforma"
import { RateSection } from "./RateSection"
import { CloseCardButton } from "./CloseCardButton"
import Image from "next/image"

type Props = {
  isOpen: boolean
  title: string
  movieDetails: MovieDetails | undefined
}
export const MovieMoreDetails = ({ isOpen, title, movieDetails }: Props) => {
  const rate = movieDetails?.rate ?? 0
  return (
    <>
      <section
        className={`
          z-10
          rounded-3xl rounded-tl-none rounded-bl-none
          px-5 py-14
          flex flex-col
          transition-[opacity] duration-1000
          ${isOpen ? "opacity-1 " : "opacity-0"} 
        `}
      >
        <h3
          className={`
            text-left text-xl md:text-3xl md:line-clamp-1 text-ellipsis
            ${axiformaBold.className}
          `}
        >
          {title}
        </h3>
        <div>
          <p className="line-clamp-6 text-ellipsis">
            {movieDetails?.description}
          </p>
        </div>

        <div className="mt-auto">
          <h4>Disponível em streaming:</h4>
          <div className="flex gap-2 flex-wrap">
            {movieDetails?.availableAt.map((provider) => {
              return (
                <a
                  href={provider.providerUrl}
                  target="_blank"
                  key={provider.providerName}
                >
                  <Image
                    alt={`logo do provedor: ${provider.providerName}`}
                    src={provider.providerImageUrl ?? ""}
                    title={provider.providerName}
                    width={40}
                    height={40}
                    className="w-auto"
                  />
                </a>
              )
            })}
          </div>
        </div>

        <RateSection title="Crítica" rate={rate} />
      </section>

      {isOpen && <CloseCardButton />}
    </>
  )
}
