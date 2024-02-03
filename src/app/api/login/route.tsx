import { User } from "@/@types/types"
import { z } from "zod"

interface MockType extends User {
  password: string
}

const mockedUsers: MockType[] = [
  {
    email: "luizfelipesouza1998@outlook.com",
    password: "senha000",
    name: "Luiz",
    phone: "22998906871",
    city: "Campos",
    isPremium: true,
    imageURL: "eu.jpg",
  },
  {
    email: "joao@email.com",
    password: "senha123",
    name: "João",
    phone: "22987654321",
    city: "São Paulo",
    isPremium: false,
  },
  {
    email: "maria@email.com",
    password: "senha456",
    name: "Maria",
    phone: "11987654321",
    city: "Rio de Janeiro",
    isPremium: true,
  },
  {
    email: "carlos@email.com",
    password: "senha789",
    name: "Carlos",
    phone: "11987654322",
    city: "Brasília",
    isPremium: true,
  },
]

const schema = z.object({
  email: z.string().email("Deve ser fornecido um email válido"),
  password: z.string().min(5),
})

export async function POST(request: Request) {
  const body = await request.json()

  const safeParse = schema.safeParse(body)

  if (!safeParse.success) {
    return Response.json(undefined, {
      status: 400,
      statusText: `Corpo da requisição com sintaxe incorreta: ${safeParse.error.message}`,
    })
  }

  const { email, password } = safeParse.data

  const cleanedEmail = email.toLowerCase().replace(" ", "")

  const currentUserIndex = mockedUsers.findIndex(
    (user) => user.email === cleanedEmail
  )
  if (currentUserIndex < 0) {
    return Response.json(undefined, {
      status: 400,
      statusText: `usuário não cadastrado ou senha incorreta.`,
    })
  }

  const user = mockedUsers[currentUserIndex]

  const doesPasswordMatch = user.password === password

  if (!doesPasswordMatch) {
    return Response.json(undefined, {
      status: 400,
      statusText: `usuário não cadastrado ou senha incorreta.`,
    })
  }

  const { city, isPremium, name, phone, imageURL } = user

  const userWithoutPassword: User = {
    city,
    email,
    isPremium,
    name,
    phone,
    imageURL,
  }

  return Response.json({ data: userWithoutPassword })
}
