import { Hero } from "@/@types/types"
import { BASE_API_URL } from "@/env/CONSTANTS"


export async function getAllHeros(): Promise<{data: Hero[]}> {
    const response = await fetch(
      `${BASE_API_URL}/api/hero/get-all`,
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