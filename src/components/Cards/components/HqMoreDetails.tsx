import { HqDetails } from "@/@types/types"
import { axiformaBold } from "@/components/Fonts/Axiforma"
import { RateSection } from "./RateSection"
import { CloseCardButton } from "./CloseCardButton"
import Image from "next/image"

type Props = {
  isOpen: boolean
  title: string
  hqDetails: HqDetails | undefined
}
export const HqMoreDetails = ({ isOpen, title, hqDetails }: Props) => {
  const rate = hqDetails?.rate ?? 0
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
          <p className="line-clamp-6 text-ellipsis">{hqDetails?.description}</p>
        </div>

        <div className="mt-auto">
          <h4>Disponível para compra:</h4>
          <div className="flex gap-2 flex-wrap">
            {hqDetails?.sellers.map((seller) => {
              return (
                <a
                  href={seller.sellerUrl}
                  target="_blank"
                  key={seller.sellerName}
                >
                  <Image
                    alt={`logo do vendedor: ${seller.sellerName}`}
                    src={seller.sellerImageUrl ?? ""}
                    title={seller.sellerName}
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
