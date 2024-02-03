import { getAllHeros } from "@/api-functions/heros/getAllHeros"
import { getHerosDetails } from "@/api-functions/heros/getDetails"
import { InformationCard } from "@/components/Cards/InformationCard"
import { HeroMoreDetails } from "@/components/Cards/components/HeroMoreDetails"
import { ScrollableContainer } from "@/components/ScrollableContainer"
import { Metadata } from "next"




export const metadata: Metadata = {
  title: "Marvel - Personagens",
  description: "Conheça cada herói do universo Marvel",
}

type Props = {
  searchParams: { slug: string } | undefined
}

export default async function HerosPage({ searchParams }: Props) {
  const response = await getAllHeros()
  const allHeros = response?.data

  const slug = searchParams?.slug
  const isSomeCardOpen = !!slug

  const heroMoreDetailsRequest = isSomeCardOpen
    ? await getHerosDetails({ slug: slug })
    : undefined

  const heroDetails = heroMoreDetailsRequest?.data.detail

  return (
    <main className="flex flex-col flex-1">
      <ScrollableContainer>
        {allHeros?.map((hero) => {
          const isCurrentCardOpen = slug === hero.nameSlug
          return (
            <InformationCard
              key={hero.id}
              description={hero.description}
              cardSlug={hero.nameSlug}
              title={hero.name}
              imageURL={hero.imageUrl}
              pageSlug={searchParams?.slug}
            >
              <HeroMoreDetails
                isOpen={isCurrentCardOpen}
                title={hero.name}
                heroDetails={isCurrentCardOpen ? heroDetails : undefined}
              />
            </InformationCard>
          )
        })}
      </ScrollableContainer>
    </main>
  )
}
