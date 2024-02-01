import Image, { ImageProps } from "next/image"

import { twMerge } from "tailwind-merge"

type Props = { alt?: string } & Omit<ImageProps, "alt">
export const ProfilePhoto = ({
  className,
  width = 55,
  height = 55,
  alt = "Sua imagem de perfil",
  ...props
}: Props) => {
  return (
    <div className={`w-[${width}px] h-[${height}px]`}>
      <Image
        alt={alt}
        width={width}
        height={height}
        {...props}
        className={twMerge(
          `
            rounded-full 
            shadow-md shadow-red-700
            w-10 md:w-full
            object-cover
          `,
          className
        )}
      />
    </div>
  )
}
