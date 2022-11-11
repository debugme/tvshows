import { Link } from "react-router-dom"
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"

import Logo from "../../images/logo.png"

export const Header = () => {
  return (
    <header className="bg-slate-700 drop-shadow-2xl flex justify-between px-4">
      <section className="flex justify-center items-center">
        <Link to="/">
          <img className="w-8" src={Logo} alt="logo" />
        </Link>
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 pt-2 tracking-[2px] ml-3 h-100 text-sm uppercase">showz</p>
      </section>
      <section className="relative">
        <Bars3BottomRightIcon className="absolute top-5 right-0 h-8 text-slate-300 cursor-pointer" />
      </section>
    </header >
  )
}


