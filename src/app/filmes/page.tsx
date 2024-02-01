import { getHerosDetails } from "@/api-functions/heros/getDetails"
import { getAllMovies } from "@/api-functions/movies/getAll"
import { InformationCard } from "@/components/Cards/InformationCard"
import { HeroMoreDetails } from "@/components/Cards/components/HeroMoreDetails"
import { ScrollableContainer } from "@/components/ScrollableContainer"

type Props = {
  searchParams: { slug: string } | undefined
}

export default async function MoviesPage({ searchParams }: Props) {
  const response = await getAllMovies()
  const allMovies = response.data

  const slug = searchParams?.slug
  const isSomeCardOpen = !!slug

  // const movieMoreDetailsRequest = isSomeCardOpen
  //   ? await getHerosDetails({ slug: slug })
  //   : undefined

  // const movieDetails = movieMoreDetailsRequest?.data.detail

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
              TESTEE
              {/* <HeroMoreDetails
                isOpen={isCurrentCardOpen}
                title={movie.name}
                heroDetails={isCurrentCardOpen ? heroDetails : undefined}
              /> */}
            </InformationCard>
          )
        })}
      </ScrollableContainer>
    </main>
  )
}
