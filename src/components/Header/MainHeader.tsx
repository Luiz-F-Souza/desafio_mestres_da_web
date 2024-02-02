"use client"

import Link from "next/link"
import ProfilePath from "@/assets/eu.jpg"
import { axiformaBold, axiformaLight } from "@/components/Fonts/Axiforma"
import { Logo } from "../Logo"
import { ProfilePhoto } from "../ProfilePhoto/ProfilePhoto"
import { usePathname } from "next/navigation"
import { ActiveLink } from "../ActiveLink"
import { IoMenu, IoCloseOutline } from "react-icons/io5"
import { useState } from "react"
import { BodyOverlay } from "../BodyOverlay/BodyOverlay"

export const MainHeader = () => {
  const pathname = usePathname()

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className="
              flex justify-between 
              px-8 py-4 
              shadow-md shadow-red-700 
              bg-black-900
              z-20 md:z-10
            "
    >
      <Link href="/" className="w-auto md:w-64 ">
        <Logo />
      </Link>

      <button
        className="block md:hidden z-50"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {isMobileMenuOpen ? <IoCloseOutline size={30} /> : <IoMenu size={30} />}
      </button>

      <div
        className={`
            fixed md:relative
            opacity-1
            top-0 bottom-0
            transition-[right]
            w-2/3 md:w-auto
            z-50
            bg-red-700 md:bg-white-500/0
            flex flex-col flex-1 md:flex-row
            ${isMobileMenuOpen ? "right-0" : "-right-full md:right-0 "}
          `}
      >
        <nav
          className={`
            flex flex-col md:flex-row
            mt-20 md:mt-0
            md:justify-center items-center 
            gap-5 md:gap-10 lg:gap-20
            text-xl lg:text-3xl 
            flex-1

            ${axiformaBold.className}
        `}
        >
          <ActiveLink
            isActive={pathname === "/personagens"}
            href="personagens"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Personagens
          </ActiveLink>

          <ActiveLink
            isActive={pathname === "/filmes"}
            href="filmes"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Filmes
          </ActiveLink>

          <ActiveLink
            isActive={pathname === "/hqs"}
            href="hqs"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HQs
          </ActiveLink>
        </nav>

        <section
          className={`
            flex 
            justify-center md:justify-end 
            items-center
            gap-4 
            mb-8 md:mb-0
            text-xl
            ${axiformaLight.className}
        `}
        >
          <ProfilePhoto src={ProfilePath} />
          <p>Sair</p>
        </section>
      </div>
      {isMobileMenuOpen && (
        <BodyOverlay
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden bg-gradient-to-r from-gray-500/50 via-gray-300/50 backdrop-blur-[3px]"
        />
      )}
    </header>
  )
}
