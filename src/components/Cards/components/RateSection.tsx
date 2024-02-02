import { FaStar } from "react-icons/fa6"

type Props = {
  title: string
  rate: number
}

export const RateSection = ({ title, rate }: Props) => {
  return (
    <>
      <p className="text-xl md:text-2xl my-2">{title}</p>

      <div className="flex gap-1">
        <FaStar
          size={20}
          className={`${rate >= 1 ? "fill-orange-500" : "fill-gray-500"}`}
        />
        <FaStar
          size={20}
          className={`${rate >= 2 ? "fill-orange-500" : "fill-gray-500"}`}
        />
        <FaStar
          size={20}
          className={`${rate >= 3 ? "fill-orange-500" : "fill-gray-500"}`}
        />
        <FaStar
          size={20}
          className={`${rate >= 4 ? "fill-orange-500" : "fill-gray-500"}`}
        />
        <FaStar
          size={20}
          className={`${rate >= 5 ? "fill-orange-500" : "fill-gray-500"}`}
        />
      </div>
    </>
  )
}
