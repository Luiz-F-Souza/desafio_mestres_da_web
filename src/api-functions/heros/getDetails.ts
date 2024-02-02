import { HeroDetails } from "@/@types/types"
import { BASE_API_URL } from "@/env/CONSTANTS"
// import { env } from "@/env"

type Params = {
  slug: string
}
export async function getHerosDetails({
  slug,
}: Params): Promise<{ data: { detail: HeroDetails } }> {
  const response = await fetch(
    `${BASE_API_URL}/api/hero/${slug}/`,
    {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    }
  )
  if (!response.ok) {
    throw new Error("Erro ao consultar os dados dos heróis")
  }

  return response.json()
}
