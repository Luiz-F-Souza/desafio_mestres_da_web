import { Hq } from "@/@types/types"
import { env } from "@/env"

export async function getAllHqs(): Promise<{ data: Hq[] }> {
  const response = await fetch(
    `${env.NEXT_PUBLIC_BASE_URL}/api/hq/get-all`,
    {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    }
  )

  if (!response.ok) {
    throw new Error("Erro ao consultar os dados das hqs")
  }

  return response.json()
}
