import { Hq } from "@/@types/types"

const allHerosMock: Hq[] = [
  {
    id: 1,
    name: "Thor: Vikings",
    nameSlug: "thor-vikings",
    description:
      "Garth Ennis e sua violência atacam novamente na HQ que leva a violência das histórias de Thor ao limite! Na minissérie de 2003 vemos vikings de um passado distante voltando a vida.",
  },
  {
    id: 2,
    name: "Surfista Prateado: Parábola",
    nameSlug: "surfista-prateado-parabola",
    description:
      "O único oponente do Devorador de Mundos é o herói que ele aprisionou na Terra: o Surfista Prateado, Galactus jurou não consumir o planeta, mas e se, em vez disso, ele transformar a civilização em seus adoradores?",
  },
  {
    id: 3,
    name: "Wolverine: Origens",
    nameSlug: "wolverine-origens",
    description:
      "Origem é uma minissérie em quadrinhos publicada pela Marvel Comics em seis edições, entre 2001 e 2002. A história conta a revelação do passado do personagem Wolverine.",
  },
]

export async function GET(request: Request) {
  const allHqs: Hq[] = allHerosMock.map((hq) => {
    const imageUrl = `/assets/hqs/${hq.id}.webp`

    return { ...hq, imageUrl }
  })

  return Response.json({ data: allHqs })
}
