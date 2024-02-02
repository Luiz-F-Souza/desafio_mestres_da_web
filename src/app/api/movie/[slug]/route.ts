import { MovieDetails } from "@/@types/types"
import { NextRequest } from "next/server"

const detailsMocked: MovieDetails[] = [
  {
    movieId: 1,
    slug: "homem-de-ferro",
    rate: 3,
    description:
      "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
    availableAt: [
      {
        providerName: "Disney Plus",
        providerImageUrl: "/assets/movies/providers/disney_plus.webp",
        providerUrl:
          "https://www.disneyplus.com/pt-br/movies/homem-de-ferro-da-marvel-studios/6aM2a8mZATiu",
      },
    ],
  },
  {
    movieId: 2,
    slug: "homem-de-ferro-2",
    rate: 5,
    description:
      "Após confessar ao mundo ser o Homem de Ferro, Tony Stark passa a ser alvo do governo dos Estados Unidos, que deseja que ele entregue seu poderoso traje. Com a negativa, o governo passa a desenvolver um novo traje com o maior rival de Stark, Justin Hammer. Jim Rhodes, o braço direito de Tony, é colocado no centro deste conflito, o que faz com que assuma a identidade de Máquina de Combate.",
    availableAt: [
      {
        providerName: "Disney Plus",
        providerImageUrl: "/assets/movies/providers/disney_plus.webp",
        providerUrl:
          "https://www.disneyplus.com/pt-br/movies/homem-de-ferro-2-da-marvel-studios/lXjCr9QmGGQJ",
      },
    ],
  },
  {
    movieId: 3,
    slug: "thor",
    rate: 5,
    description:
      "Thor (Chris Hemsworth) estava prestes a receber o comando de Asgard das mãos de seu pai Odin (Anthony Hopkins) quando forças inimigas quebraram um acordo de paz. Disposto a se vingar do ocorrido, o jovem guerreiro desobedece as ordens do rei e quase dá início a uma nova guerra entre os reinos.",
    availableAt: [
      {
        providerName: "Disney Plus",
        providerImageUrl: "/assets/movies/providers/disney_plus.webp",
        providerUrl:
          "https://www.disneyplus.com/pt-br/movies/thor-da-marvel-studios/1p4vdKzTuhzr",
      },
    ],
  },
  {
    movieId: 4,
    slug: "captao-america",
    rate: 4,
    description:
      "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.",
    availableAt: [
      {
        providerName: "Disney Plus",
        providerImageUrl: "/assets/movies/providers/disney_plus.webp",
        providerUrl:
          "https://www.disneyplus.com/pt-br/movies/capitao-america-o-primeiro-vingador-da-marvel-studios/6xvB6xZ4r95O",
      },
    ],
  },
  {
    movieId: 5,
    slug: "capta-marvel",
    rate: 4,
    description:
      "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo.",
    availableAt: [
      {
        providerName: "Disney Plus",
        providerImageUrl: "/assets/movies/providers/disney_plus.webp",
        providerUrl:
          "https://www.disneyplus.com/pt-br/movies/capita-marvel/38xJGlLAQy9a",
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
