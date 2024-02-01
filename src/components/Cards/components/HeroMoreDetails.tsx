import { HeroDetails } from "@/@types/types"
import { axiformaBold } from "@/components/Fonts/Axiforma"
import { RateSection } from "./RateSection"
import { CloseCardButton } from "./CloseCardButton"

type Props = {
  isOpen: boolean
  title: string
  heroDetails: HeroDetails | undefined
}
export const HeroMoreDetails = ({ isOpen, title, heroDetails }: Props) => {
  const rate = heroDetails?.rate ?? 0
  return (
    <section
      className={`
          bg-gradient-to-b from-red-400 to-red-700
          absolute top-0 bottom-0 left-48 right-0
          z-40
          pr-8 pl-36 py-14
          ${isOpen ? "visible " : "invisible"} 
        `}
    >
      <h3
        className={`
            text-left mb-4 text-3xl line-clamp-1 text-ellipsis
            ${axiformaBold.className}
          `}
      >
        {title}
      </h3>
      <div>
        <h4>Aparições:</h4>
        <ul className="text-left">
          {heroDetails?.movies.slice(0, 6).map((movie) => {
            return (
              <li key={movie} className="line-clamp-1 text-ellipsis">
                {movie}
              </li>
            )
          })}
        </ul>
      </div>

      <RateSection title="Avaliação dos Fãs" rate={rate} />

      <CloseCardButton className="flex w-full justify-end mt-2" />
    </section>
  )
}
