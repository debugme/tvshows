import { Bars3Icon } from "@heroicons/react/24/outline"

export const Header = () => {
  return (
    <header className="flex justify-start items-center px-2 bg-header-bg">
      <Bars3Icon className="h-9 ml-2 text-header-fg" />
    </header>
  )
}
