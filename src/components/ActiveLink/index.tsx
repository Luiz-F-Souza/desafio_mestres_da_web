import Link, { LinkProps } from "next/link"
import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
  isActive: boolean
  children: ReactNode
  className?: HTMLAttributes<HTMLAnchorElement>["className"]
} & LinkProps

/**
 *
 * O componente é um Link que altera sua cor quando está ativo. Indicando assim para o usuário em qual rota ele está.
 *
 * @component
 * @children type: ReactNode.
 * @param isActive type: boolean.
 * @param className type: undefined | string
 */
export const ActiveLink = ({
  isActive,
  children,
  href,
  className,
  ...props
}: Props) => {
  return (
    <Link
      href={href}
      {...props}
      className={twMerge(
        `${isActive ? "text-white-500" : "text-gray-500"}`,
        className
      )}
    >
      {children}
    </Link>
  )
}
