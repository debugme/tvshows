import { Link } from "react-router-dom"

import { Avatar, Menu } from "../images"

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 bg-header-bg font-cursive">
      <Menu className="h-9 text-header-fg" />
      <span className="flex gap-2 justify-center items-center">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">Tom Grunge</h3>
        <Avatar className="h-10 w-10 bg-header-fg rounded-full border border-header-avatar" />
      </span>
    </header>
  )
}
