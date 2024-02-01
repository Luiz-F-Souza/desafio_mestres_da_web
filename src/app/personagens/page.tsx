import { getAllHeros } from "@/api-functions/heros/getAllHeros"
import { IntroCard } from "@/components/Cards/IntroCard"
import { ScrollableContainer } from "@/components/ScrollableContainer"

type Props = {
  searchParams: { slug: string } | undefined
}

export default async function HerosPage({ searchParams }: Props) {
  const response = await getAllHeros()
  const allHeros = response.data

  return (
    <main className="flex flex-col flex-1">
      <ScrollableContainer>
        {allHeros?.map((hero) => {
          return (
            <IntroCard key={hero.id} hero={hero} slug={searchParams?.slug} />
          )
        })}
      </ScrollableContainer>
    </main>
  )
}
