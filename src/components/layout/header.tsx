import { Link } from "react-router-dom"

import { Film, Menu } from "../images"

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 bg-header-bg font-cursive">
      <Link to="/">
        <span className="flex gap-2 relative">
          <Film className="w-12 opacity-90" />
          <h1 className="opacity-90 absolute top-[2px] left-[48px] -rotate-12 text-header-fg text-2xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">Showz</h1>

        </span>
      </Link>
      <Menu className="h-9 text-header-fg" />
    </header>
  )
}
