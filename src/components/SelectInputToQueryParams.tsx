"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, ReactNode } from "react"

type Props = {
  children: ReactNode
}

/**
 *
 * O componente serve para fazer filtros usando queryParams.
 * Foi desenado para ser usado junto com o ScrollableContainer.
 *
 * @component
 * @children type: ReactNode.
 */
export const SelectInputToQueryParams = ({ children }: Props) => {
  const searchParams = useSearchParams()
  const searchParamsAsString = searchParams.toString()
  const navigate = useRouter()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentElement = e.currentTarget
    const selectedValue = currentElement.value

    const hasAnyQuery = searchParamsAsString.length > 0
    const alreadyHasOrderSearchParam = searchParams.get("ordem")

    const scrollableContainer = document.querySelector(
      "[data-scrollable-container]"
    )

    const timeToStartScrolling = setTimeout(() => {
      scrollableContainer?.scrollTo({ left: 0, behavior: "smooth" })

      clearTimeout(timeToStartScrolling)
    }, 100)

    if (!hasAnyQuery) {
      navigate.replace(`?ordem=${selectedValue}`)
      return
    }

    if (alreadyHasOrderSearchParam) {
      const regex = new RegExp(`(ordem=)[^&]*`)

      const newSearchParams = searchParamsAsString.replace(
        regex,
        `ordem=${selectedValue}`
      )

      navigate.replace(`?${newSearchParams}`)

      return
    }

    navigate.replace(`?${searchParamsAsString}&ordem=${selectedValue}`)
  }

  return (
    <select
      className="
        mx-2 md:mx-40 
        mt-6 p-3
        rounded-md
        outline-none 
        border-[1px]
      border-red-500
      text-red-500 
        bg-white-500/0 
        w-fit
        z-10   
      "
      onChange={handleChange}
    >
      {children}
    </select>
  )
}
