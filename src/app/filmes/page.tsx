import { getAllMovies } from "@/api-functions/movies/getAll"
import { getMovieDetails } from "@/api-functions/movies/getDetails"
import { InformationCard } from "@/components/Cards/InformationCard"
import { MovieMoreDetails } from "@/components/Cards/components/MovieMoreDetails"
import { ScrollableContainer } from "@/components/ScrollableContainer"
import { SelectInputToQueryParams } from "@/components/SelectInputToQueryParams"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marvel - Filmes",
  description: "Descubra onde assistir seus filmes favoritos.",
}

type Props = {
  searchParams: { slug: string; ordem: "canonica" | "lancamento" } | undefined
}

export default async function MoviesPage({ searchParams }: Props) {
  const orderBySlug = searchParams?.ordem ?? "lancamento"
  const orderBy =
    orderBySlug === "lancamento" ? "launchedIn" : "chronologyOrder"
  const response = await getAllMovies({ orderBy })
  const allMovies = response?.data

  const slug = searchParams?.slug
  const isSomeCardOpen = !!slug

  const movieMoreDetailsRequest = isSomeCardOpen
    ? await getMovieDetails({ slug: slug })
    : undefined

  const movieDetails = movieMoreDetailsRequest?.data.detail

  return (
    <main className="flex flex-col flex-1">
      <SelectInputToQueryParams>
        <option value="lancamento">Lançamento</option>
        <option value="canonica">Canonica</option>
      </SelectInputToQueryParams>
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
              <MovieMoreDetails
                isOpen={isCurrentCardOpen}
                title={movie.name}
                movieDetails={isCurrentCardOpen ? movieDetails : undefined}
              />
            </InformationCard>
          )
        })}
      </ScrollableContainer>
    </main>
  )
}
