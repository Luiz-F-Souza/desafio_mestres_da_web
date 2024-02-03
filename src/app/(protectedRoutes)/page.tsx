import oSuperDev from "@/assets/o-super-dev.webp"
import Image from "next/image"
import { axiformaBold, axiformaLight } from "@/components/Fonts/Axiforma"
import { BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { MdEmail } from "react-icons/md"

export default async function Home() {
  return (
    <main
      className={`flex flex-col flex-1 items-center px-4 text-lg ${axiformaLight}`}
    >
      <div className="z-0 rounded-md overflow-hidden  max-w-screen-sm bg-red-700 p-3 mt-5">
        <div className="flex gap-4 items-center mb-2">
          <h2 className={`${axiformaBold.className} text-2xl mt-2`}>
            O Super Dev JR
          </h2>
          <a href="https://www.linkedin.com/in/lf-souza98/" target="_blank">
            <BsLinkedin />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=5522998906871&text=Ei,%20Queremos%20te%20contratar&type=phone_number&app_absent=0"
            target="_blank"
          >
            <BsWhatsapp />
          </a>
          <a href="mailto:luizfelipesouza1998@outlook.com" target="_blank">
            <MdEmail />
          </a>
        </div>
        <Image
          src={oSuperDev}
          alt="Foto do super dev, Luiz Felipe de Souza Barbosa, na galáxia com sua armadura."
          // width={350}
          height={750}
          className="object-cover rounded-md"
          title="Apenas um meme pra complementar o projeto haha"
        />
        <p className="mt-4">Você já ouviu falar do lendário Super Dev JR?</p>
        <p>
          Ele luta contra bugs e enfrenta códigos malucos para salvar o dia!
          🦸‍♂️💻
        </p>

        <p className="mt-8">Só pelo meme haha</p>
        <p>As demais páginas estão como solicitadas ❤️</p>
      </div>
    </main>
  )
}
