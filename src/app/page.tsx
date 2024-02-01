import { Hero } from "@/@types/types"


async function getAllHeros(): Promise<{ data: Hero[] }> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-heros`,
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


export default async function Home() {
  const response = await getAllHeros()
  const allHeros = response.data

  return (
    <main className="flex flex-col flex-1">
      
    </main>
  )
}
