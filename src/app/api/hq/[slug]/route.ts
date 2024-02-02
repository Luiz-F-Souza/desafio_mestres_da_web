import { HqDetails } from "@/@types/types"
import { NextRequest } from "next/server"

const detailsMocked: HqDetails[] = [
  {
    hqId: 1,
    slug: "thor-vikings",
    rate: 3,
    description:
      "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.",
    sellers: [
      {
        sellerName: "Americanas",
        sellerImageUrl: "/assets/sellers/americanas.webp",
        sellerUrl: "https://www.americanas.com.br/produto/3677570312",
      },
      {
        sellerName: "Amazon",
        sellerImageUrl: "/assets/sellers/amazon.webp",
        sellerUrl:
          "https://www.amazon.com.br/Thor-Vikings-Garth-Ennis/dp/8583682674",
      },
    ],
  },
  {
    hqId: 2,
    slug: "surfista-prateado-parabola",
    rate: 5,
    description:
      "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?",
    sellers: [
      {
        sellerName: "Americanas",
        sellerImageUrl: "/assets/sellers/americanas.webp",
        sellerUrl:
          "https://www.americanas.com.br/produto/7460252277/hq-surfista-prateado-parabola-grandes-tesouros-marvel",
      },
      {
        sellerName: "Amazon",
        sellerImageUrl: "/assets/sellers/amazon.webp",
        sellerUrl:
          "https://www.amazon.com.br/Surfista-Prateado-Par%C3%A1bola-Grandes-Tesouros/dp/6525912342",
      },
    ],
  },
  {
    hqId: 3,
    slug: "wolverine-origens",
    rate: 5,
    description:
      "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine. ",
    sellers: [
      {
        sellerName: "Amazon",
        sellerImageUrl: "/assets/sellers/amazon.webp",
        sellerUrl:
          "https://www.amazon.com.br/Wolverine-Inimigo-Estado-Mark-Millar/dp/8573515775",
      },
    ],
  },
]

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params

  const requestedMovieDetails = detailsMocked.find(
    (heroDetail) => heroDetail.slug === slug
  )
    
  return Response.json({
    data: {
      detail: requestedMovieDetails,
    },
  })
}
