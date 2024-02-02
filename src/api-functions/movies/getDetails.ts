import { MovieDetails } from "@/@types/types"
import { env } from "@/env"

type Params = {
  slug: string
}
export async function getMovieDetails({
  slug,
}: Params): Promise<{ data: { detail: MovieDetails } }> {
  const response = await fetch(
    `${env.NEXT_PUBLIC_BASE_URL}/api/movie/${slug}/`,
    {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    }
  )
  if (!response.ok) {
    throw new Error("Erro ao consultar os dados do filme")
  }

  return response.json()
}
