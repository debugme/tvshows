import { Avatar, Menu } from "../images"

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 bg-secondary-700 font-cursive">
      <Menu className="h-9 text-secondary-400" />
      <span className="flex gap-2 justify-center items-center">
        <h3 className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500">Tom Grunge</h3>
        <Avatar className="h-10 w-10 bg-secondary-700 rounded-full border border-primary-600" />
      </span>
    </header>
  )
}
