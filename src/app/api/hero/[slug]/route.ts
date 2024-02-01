import { HeroDetails } from "@/@types/types"
import { NextRequest } from "next/server"

const detailsMocked: HeroDetails[] = [
  {
    heroId: 1,
    slug: "homem-aranha",
    rate: 5,
    movies: [
      "Homem-Aranha (2002)",
      "Homem-Aranha 2 (2004)",
      "Homem-Aranha 3 (2007)",
      "O Espetacular Homem-Aranha (2012)",
      "O Espetacular Homem-Aranha 2 (2014)",
      "Homem-Aranha: De Volta Ao Lar (2017)",
      "Homem-Aranha no Aranhaverso (2018)",
      "Homem-Aranha: Longe de casa (2019)",
      "Homem-Aranha: Sem Volta para Casa (2019)",
      "Homem-Aranha: Através do Aranhaverso (2023)",
    ],
  },
  {
    heroId: 2,
    slug: "wanda-maximoff",
    rate: 4,
    movies: [
      "Vingadores - Era de Ultron",
      "Capitão América - Guerra Civil",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
      "WandaVision",
    ],
  },
  {
    heroId: 3,
    slug: "thanos",
    rate: 5,
    movies: [
      "Guardiões da Galáxia - vol. I",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
  },
  {
    heroId: 4,
    slug: "hulk",
    rate: 4,
    movies: [
      "Vingadores",
      "Vingadores - Era de Ultron",
      "Thor - Ragnarok",
      "Vingadores - Guerra Infinita",
      "Vingadores - Ultimato",
    ],
  },
]

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params

  const requestedHeroDetail = detailsMocked.find(
    (heroDetail) => heroDetail.slug === slug
  )

  return Response.json({
    data: {
      detail: requestedHeroDetail,
    },
  })
}
