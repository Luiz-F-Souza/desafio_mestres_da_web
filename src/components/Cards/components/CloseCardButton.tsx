"use client"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { useRouter, useSearchParams } from "next/navigation"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = Omit<HTMLAttributes<HTMLButtonElement>, "onClick">

export const CloseCardButton = ({ className, ...props }: Props) => {
  const navigation = useRouter()

  const handleClick = () => {
    navigation.replace("?")
  }

  return (
    <button
      onClick={handleClick}
      className={twMerge("absolute right-5 bottom-5 z-50", className)}
      {...props}
    >
      <IoIosCloseCircleOutline size={30} />
    </button>
  )
}
