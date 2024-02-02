import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

export const ScrollableContainer = ({
  children,
  className,
  ...props
}: Props) => {
  return (
    <div
      className={twMerge(
        `flex flex-shrink-0
         z-10
         my-auto
         px-2 md:px-40 
         overflow-x-auto 
         snap-x
         no-scrollbar`,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
