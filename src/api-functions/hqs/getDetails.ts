import { HqDetails } from "@/@types/types"
import { BASE_API_URL } from "@/env/CONSTANTS"
// import { env } from "@/env"

type Params = {
  slug: string
}

type ReturnType = { data: { detail: HqDetails } } | null

export async function getHqDetails({ slug }: Params): Promise<ReturnType> {
  if (!BASE_API_URL) return null
  const response = await fetch(`${BASE_API_URL}/api/hq/${slug}/`, {
    headers: {
      Accept: "application/json",
      method: "GET",
    },
  })
  if (!response.ok) {
    throw new Error("Erro ao consultar os dados da HQ")
  }

  return response.json()
}
