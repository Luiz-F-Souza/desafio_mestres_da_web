import { Hq } from "@/@types/types"
import { BASE_API_URL } from "@/env/CONSTANTS"
// import { env } from "@/env"

export async function getAllHqs(): Promise<{ data: Hq[] } | null> {
  if (!BASE_API_URL) return null
  const response = await fetch(`${BASE_API_URL}/api/hq/get-all`, {
    headers: {
      Accept: "application/json",
      method: "GET",
    },
  })

  if (!response.ok) {
    throw new Error("Erro ao consultar os dados das hqs")
  }

  return response.json()
}
