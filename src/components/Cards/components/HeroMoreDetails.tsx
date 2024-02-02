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
        <div className="mb-auto">
          <h4>Aparições:</h4>
          <ul className="text-left text-sm md:text-base list-disc list-inside md:list-none">
            {heroDetails?.movies.slice(0, 6).map((movie) => {
              return (
                <li key={movie} className="md:line-clamp-1 text-ellipsis">
                  {movie}
                </li>
              )
            })}
          </ul>
        </div>

        <RateSection title="Avaliação dos Fãs" rate={rate} />
      </section>
      {isOpen && <CloseCardButton />}
    </>
  )
}
