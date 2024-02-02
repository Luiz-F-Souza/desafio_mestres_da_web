import { Movie } from "@/@types/types"
import { BASE_API_URL } from "@/env/CONSTANTS"
// import { env } from "@/env"

type Props = {
  orderBy: string
}

type ResponseType = { data: Movie[] } | null
export async function getAllMovies({ orderBy }: Props): Promise<ResponseType> {
  if (!BASE_API_URL) return null
  const response = await fetch(`${BASE_API_URL}/api/movie/get-all`, {
    headers: {
      Accept: "application/json",
      method: "GET",
    },
  })

  if (!response.ok) {
    throw new Error("Erro ao consultar os dados dos filmes")
  }

  const data: ResponseType = await response.json()

  const movies = data?.data

  if (!movies) return null

  const doesOrderByHasValidValue =
    orderBy === "chronologyOrder" || orderBy === "launchedIn"
  if (!doesOrderByHasValidValue) orderBy = "launchedIn"

  const filteredMovies = movies?.sort((movieA, movieB) => {
    if (orderBy === "chronologyOrder")
      return movieA.chronologyOrder - movieB.chronologyOrder

    if (orderBy === "launchedIn") {
      const dateMovieA = new Date(movieA.launchedIn).getMilliseconds()
      const dateMovieB = new Date(movieB.launchedIn).getMilliseconds()

      return dateMovieA - dateMovieB
    }

    return 0
  })

  return { data: filteredMovies }
}
