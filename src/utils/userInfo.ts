import { User } from "@/@types/types"

const localKey = "userInfo"

export const getUserInfos = (): User | null => {
  const json = localStorage.getItem(localKey)
  if (!json) return null

  const user: User = JSON.parse(json)

  return user
}

export const setUserInfos = (userData: Partial<User>) => {
  const currentData = getUserInfos()

  if (currentData) {
    const userUpdated = { ...currentData, ...userData }
    const json = JSON.stringify(userUpdated)
    localStorage.setItem(localKey, json)
    return
  }

  const json = JSON.stringify(userData)
  localStorage.setItem(localKey, json)
}

export const removeLocalUser = () => {
  localStorage.removeItem(localKey)
}
