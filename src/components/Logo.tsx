import { marvelFont } from "./Fonts/Marvel/marvel"

export const Logo = () => {
  return (
    <div className="relative hover:animate-pulse hover:duration-500">
      <div className="bg-red-500 w-40 h-16 absolute -z-10 hover:animate-pulse hover:duration-500" />
      <h2 className={`text-8xl ml-7 tracking-widest  ${marvelFont.className}`}>MARVEL</h2>
    </div>
  )
}
