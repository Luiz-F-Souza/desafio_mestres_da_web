import { create } from "zustand"

interface NotificationInterface {
  message: string | null,
  toggleNotification: (message: string | null) => void,
}

export const useNotificationStore = create<NotificationInterface>( set => ({
  message: null,
  toggleNotification: (message: string | null) => set({message}),
}))