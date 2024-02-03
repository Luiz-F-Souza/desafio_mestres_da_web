import { JWT } from "@/@types/types"

const JWTLocalKey = "userFakeJWT"

export const getLocalJWT = (): JWT | null => {
  const jwtJson = localStorage.getItem(JWTLocalKey)
  if (!jwtJson) return null

  const jwt: JWT = JSON.parse(jwtJson)

  const todayInMilisecconds = new Date().getMilliseconds()

  const isTokenValid = todayInMilisecconds < jwt.expiresIn

  if (!isTokenValid) {
    removeLocalJWT()
    return null
  }

  return jwt
}

export const setLocalJWT = (fakeJWT: JWT) => {
  const json = JSON.stringify(fakeJWT)
  localStorage.setItem(JWTLocalKey, json)
}

export const removeLocalJWT = () => {
  localStorage.removeItem(JWTLocalKey)
}
