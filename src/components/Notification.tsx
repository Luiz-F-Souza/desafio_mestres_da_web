import { useNotificationStore } from "@/stores/useNotificationStore"
import { useEffect } from "react"

export const Notification = () => {
  const { message, toggleNotification } = useNotificationStore()

  const isOpen = !!message

  useEffect(() => {
    if (!isOpen) return

    const timer = setTimeout(() => {
      toggleNotification(null)
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [isOpen, toggleNotification])

  return (
    <>
      <div
        onClick={() => toggleNotification(null)}
        className={`
          h-20 
          z-[9999] 
          py-3
          px-8 
          bg-gray-300  
          text-lg
          font-bold
          flex
          items-center
          fixed right-0 left-0
          ${isOpen ? "top-0" : "-top-[100%]"}
          transition-all duration-100
           `}
      >
        <p>{message}</p>
      </div>
    </>
  )
}
