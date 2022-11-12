import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
  TvIcon
} from "@heroicons/react/24/outline"

export const Breakpoints = () => {
  return (
    <section className="flex cursor-pointer">
      <figure className="flex xl:text-yellow-600" title="desktop (1280px to ∞)">
        <TvIcon className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex lg:text-yellow-600 xl:text-slate-500" title="laptop (1024px to 1279px)">
        <ComputerDesktopIcon className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex md:text-yellow-600 lg:text-slate-500" title="tablet (768px to 1023px)">
        <DeviceTabletIcon className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex text-yellow-600 md:text-slate-500" title="cellphone (0px to 767px)">
        <DevicePhoneMobileIcon className="w-6 h-6 ml-2" />
      </figure>
    </section>
  )
}

export const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-500 flex justify-between items-center px-4">
      <section className="flex">
        <p className="md:hidden">Cellphone</p>
        <p className="hidden md:block lg:hidden">Tablet</p>
        <p className="hidden lg:block xl:hidden">Laptop</p>
        <p className="hidden xl:block">Desktop</p>
      </section>
      <Breakpoints />
    </footer>
  )
}
