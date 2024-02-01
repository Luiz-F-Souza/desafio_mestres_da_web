import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

type Props = HTMLAttributes<HTMLDivElement>
export const BodyOverlay = ({ className, ...props }: Props) => {
  return (
    <div
      className={twMerge(
        `
                bg-gradient-to-r from-black-900 via-black-900 to-gray-500/55
                absolute top-0 bottom-0 right-0 left-0
                z-10
             `,
        className
      )}
      {...props}
    />
  )
}
