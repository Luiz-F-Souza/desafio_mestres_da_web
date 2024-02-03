import { User } from "@/@types/types"
import { BASE_API_URL } from "@/env/CONSTANTS"

type Props = {
  email: string
  password: string
}

type ReturnType = { data: User | undefined } | null

export const LoginHandler = async ({
  email,
  password,
}: Props): Promise<ReturnType> => {
  if (!BASE_API_URL) return null

  const json = JSON.stringify({ email, password })

  const response = await fetch(`${BASE_API_URL}/api/login/`, {
    method: "POST",
    body: json,
    headers: {
      Accept: "application/json",
    },
  })

  if (!response.ok) return null

  return await response.json()
}
