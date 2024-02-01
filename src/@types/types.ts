export type Hero = {
  id: number
  name: string
  nameSlug: string
  description: string
  imageUrl?: string
}

export type HeroDetails = {
  heroId: number
  slug: string
  movies: string[]
  rate: 0 | 1 | 2 | 3 | 4 | 5
}

export type Movie = {
  id: number
  name: string
  nameSlug: string
  description: string
  launchedIn: string
  chronologyOrder: number
  imageUrl?: string
}
