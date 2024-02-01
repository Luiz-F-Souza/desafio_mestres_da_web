import { Movie } from "@/@types/types"

const allMoviesMock: Movie[] = [
  {
    id: 1,
    name: "Homem de Ferro",
    nameSlug: "homem-de-ferro",
    launchedIn: "2008-04-30T03:00:00.000Z",
    chronologyOrder: 3,
    description:
      "Tony Stark (Robert Downey Jr.) é um industrial bilionário, que também é um brilhante inventor, ao ser sequestrado, ele é obrigado a construir uma arma devastadora, mas ao invés disso, cria uma armadura capaz de mudar a história.",
  },
  {
    id: 2,
    name: "Homem de Ferro 2",
    nameSlug: "homem-de-ferro-2",
    launchedIn: "2010-04-30T03:00:00.000Z",
    chronologyOrder: 4,
    description:
      "O mundo já sabe que o inventor bilionário Tony Stark (Robert Downey Jr.) é o super-herói blindado Homem de Ferro. Sofrendo pressão do governo, da mídia e do público para compartilhar sua tecnologia com as forças armadas.",
  },
  {
    id: 3,
    name: "Thor",
    nameSlug: "thor",
    launchedIn: "2011-04-29T03:00:00.000Z",
    chronologyOrder: 5,
    description:
      "Quando é banido do reino de Asgard e exilado na Terra, o arrogante guerreiro Thor (Chris Hemsworth) é obrigado a lutar para reaver seus poderes perdidos.",
  },
  {
    id: 4,
    name: "Capitão América",
    nameSlug: "captao-america",
    launchedIn: "2011-07-19T03:00:00.000Z",
    chronologyOrder: 1,
    description:
      "Em Capitão América: O Primeiro Vingador, conhecemos a história de Steve Rogers (Chris Evans) e como ele se tornou o melhor soldado do mundo",
  },
  {
    id: 5,
    name: "Capitã Marvel",
    nameSlug: "capta-marvel",
    launchedIn: "2019-02-07T03:00:00.000Z",
    chronologyOrder: 2,
    description:
      "Capitã Marvel, parte do exército de elite dos Kree, uma raça alienígena, encontra-se no meio de uma batalha entre seu povo e os Skrulls.",
  },
]

export async function GET(request: Request) {
  const allMovies: Movie[] = allMoviesMock.map((movie) => {
    const imageUrl = `/assets/movies/${movie.id}.webp`

    return { ...movie, imageUrl }
  })

  return Response.json({ data: allMovies })
}
