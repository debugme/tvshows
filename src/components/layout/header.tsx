import { Avatar, Menu } from "../images"

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 bg-bgc-7 font-cursive">
      <Menu className="h-9 text-bgc-4" />
      <span className="flex gap-2 justify-center items-center">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">Tom Grunge</h3>
        <Avatar className="h-10 w-10 bg-bgc-7 rounded-full border border-fgc-3" />
      </span>
    </header>
  )
}
