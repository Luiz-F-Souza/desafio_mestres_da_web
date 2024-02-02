import { Movie } from "@/@types/types"
// import { env } from "@/env"

export async function getAllMovies(): Promise<{ data: Movie[] }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/movie/get-all`,
    {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    }
  )

  if (!response.ok) {
    throw new Error("Erro ao consultar os dados dos filmes")
  }

  return response.json()
}
