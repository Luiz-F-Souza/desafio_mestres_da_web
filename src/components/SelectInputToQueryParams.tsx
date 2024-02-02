"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, ReactNode } from "react"

type Props = {
  children: ReactNode
}
export const SelectInputToQueryParams = ({ children }: Props) => {
  const searchParams = useSearchParams()
  const searchParamsAsString = searchParams.toString()
  const navigate = useRouter()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const currentElement = e.currentTarget
    const selectedValue = currentElement.value

    const hasAnyQuery = searchParamsAsString.length > 0
    const alreadyHasOrderSearchParam = searchParams.get("ordem")

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
    <label
      className=" 
      mx-2 md:mx-40 
      mt-6
        outline-none 
      border-red-500
        border-2
        bg-white-500/0 
        text-red-500 
        w-fit
        z-10"
    >
      <select
        className="
        p-2 
            bg-white-500/0
            w-full
        "
        onChange={handleChange}
      >
        {children}
      </select>
    </label>
  )
}
