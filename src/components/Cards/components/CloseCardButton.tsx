"use client"
import { IoIosCloseCircleOutline } from "react-icons/io"
import { useRouter, useSearchParams } from "next/navigation"
import { HTMLAttributes } from "react"

type Props = Omit<HTMLAttributes<HTMLButtonElement>, "onClick">

export const CloseCardButton = (props: Props) => {
  const navigation = useRouter()

  const handleClick = () => {
    navigation.replace("?")
  }

  return (
    <button onClick={handleClick} {...props}>
      <IoIosCloseCircleOutline size={30} />
    </button>
  )
}
