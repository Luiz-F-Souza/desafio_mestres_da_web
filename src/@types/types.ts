type Rate = 0 | 1 | 2 | 3 | 4 | 5

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
  rate: Rate
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

export type MovieDetails = {
  movieId: number
  slug: string
  description: string
  availableAt: {
    providerName: string
    providerImageUrl: string
    providerUrl: string
  }[]
  rate: Rate
}

export type Hq = {
  id: number
  name: string
  nameSlug: string
  description: string
  imageUrl?: string
}

export type HqDetails = {
  hqId: number
  slug: string
  description: string
  rate: Rate
  sellers: {
    sellerName: string
    sellerImageUrl: string
    sellerUrl: string
  }[]
}

export type User = {
  email: string
  name: string
  phone: string
  city: string
  isPremium: boolean
  imageURL?: string
}

export type JWT = {
  expiresIn: number
  token: string
}
