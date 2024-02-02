import { HqDetails } from "@/@types/types"
import { BASE_API_URL } from "@/env/CONSTANTS"
// import { env } from "@/env"

type Params = {
  slug: string
}

type ReturnType = { data: { detail: HqDetails } }

export async function getHqDetails({ slug }: Params): Promise<ReturnType> {
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
