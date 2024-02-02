import { getAllHqs } from "@/api-functions/hqs/getAll"
import { getHqDetails } from "@/api-functions/hqs/getDetails"
import { InformationCard } from "@/components/Cards/InformationCard"
import { HqMoreDetails } from "@/components/Cards/components/HqMoreDetails"
import { ScrollableContainer } from "@/components/ScrollableContainer"

type Props = {
  searchParams: { slug: string } | undefined
}

export default async function HqsPage({ searchParams }: Props) {
  const response = await getAllHqs()
  const allMovies = response.data

  const slug = searchParams?.slug
  const isSomeCardOpen = !!slug

  const hqMoreDetailsRequest = isSomeCardOpen
    ? await getHqDetails({ slug: slug })
    : undefined

  const hqDetails = hqMoreDetailsRequest?.data.detail

  return (
    <main className="flex flex-col flex-1">
      <ScrollableContainer>
        {allMovies?.map((movie) => {
          const isCurrentCardOpen = slug === movie.nameSlug
          return (
            <InformationCard
              key={movie.id}
              description={movie.description}
              cardSlug={movie.nameSlug}
              title={movie.name}
              imageURL={movie.imageUrl}
              pageSlug={searchParams?.slug}
            >
              <HqMoreDetails
                isOpen={isCurrentCardOpen}
                title={movie.name}
                hqDetails={isCurrentCardOpen ? hqDetails : undefined}
              />
            </InformationCard>
          )
        })}
      </ScrollableContainer>
    </main>
  )
}
