import { Link } from "react-router-dom"
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline"

import { Film } from "./film"

export const Header = () => {
  return (
    <header className="bg-slate-700 drop-shadow-2xl flex justify-between px-4">
      <section className="flex justify-start items-center w-32">
        <Link className="flex relative" to="/">
          <Film className="w-10 opacity-80 absolute bottom-[-22px]" />
          <p className="absolute bottom-[-13px] left-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 pt-2 tracking-[2px] uppercase rotate-[-15deg]">showz</p>
        </Link>
      </section>

      <section className="relative">
        <Bars3BottomRightIcon className="absolute bottom-[16px] right-0 h-9 text-slate-400 cursor-pointer" />
      </section>
    </header >
  )
}
