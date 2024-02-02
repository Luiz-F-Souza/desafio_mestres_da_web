import { Hero } from "@/@types/types"
import { env } from "@/env"

export async function getAllHeros(): Promise<{data: Hero[]}> {
    const response = await fetch(
      `${env.NEXT_PUBLIC_VERCEL_URL}/api/hero/get-all`,
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