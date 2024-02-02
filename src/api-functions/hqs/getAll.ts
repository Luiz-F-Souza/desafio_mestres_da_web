import { Hq } from "@/@types/types"
// import { env } from "@/env"

export async function getAllHqs(): Promise<{ data: Hq[] }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/hq/get-all`,
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
