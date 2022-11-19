import { Menu} from "../images"

export const Header = () => {
  return (
    <header className="flex justify-start items-center px-2 bg-header-bg">
      <Menu className="h-9 ml-2 text-header-fg" />
    </header>
  )
}
