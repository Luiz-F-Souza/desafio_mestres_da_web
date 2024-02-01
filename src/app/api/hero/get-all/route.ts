import { Hero } from "@/@types/types"

const allHerosMock: Hero[] = [
  {
    id: 1,
    name: "Homem-Aranha",
    nameSlug: "homem-aranha",
    description:
      "Após ser mordido por uma aranha radioativa, Peter Parker se torna o amigo da vizinhança, o Homem-Aranha.",
  },
  {
    id: 2,
    name: "Wanda Maximoff",
    nameSlug: "wanda-maximoff",
    description:
      "Wanda Maximoff foi sequestrada da Sérvia e trazida para a Montanha Wundagore, base do Alto Evolucionário. Durante anos, ela e seu irmão gêmeo, Pietro, acreditavam que eram filhos de um casal de ciganos.",
  },
  {
    id: 3,
    name: "Thanos",
    nameSlug: "thanos",
    description:
      "A lua Titã era governada por Mentor (A'Lars), quando então reinava paz e tecnologia. Mentor tinha dois filhos: Eros e Thanos. Ao contrário do irmão, Thanos, era bem mais poderoso e almejava ainda mais.",
  },
  {
    id: 4,
    name: "Hulk",
    nameSlug: "hulk",
    description:
      "Na história original dos quadrinhos, o Hulk é um selvagem e poderoso alter ego do Dr. Robert Bruce Banner, um cientista que foi atingido por raios gama enquanto salvava um adolescente durante o teste militar.",
  },
]

export async function GET(request: Request) {
  const allHeros: Hero[] = allHerosMock.map((hero) => {
    const imageUrl = `/assets/heros/${hero.id}.webp`

    return { ...hero, imageUrl }
  })

  return Response.json({ data: allHeros })
}
