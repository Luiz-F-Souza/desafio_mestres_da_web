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
        `grid grid-flow-col
         gap-32
         my-auto
         px-40 
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
