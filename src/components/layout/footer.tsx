import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
  TvIcon
} from "@heroicons/react/24/outline"

export const Breakpoints = () => {
  return (
    <section className="flex cursor-pointer text-footer-1">
      <figure className="flex xl:text-footer-3" title="desktop (1280px to ∞)">
        <TvIcon className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex lg:text-footer-3 xl:text-footer-1" title="laptop (1024px to 1279px)">
        <ComputerDesktopIcon className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex md:text-footer-3 lg:text-footer-1" title="tablet (768px to 1023px)">
        <DeviceTabletIcon className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex text-footer-3 md:text-footer-1" title="cellphone (0px to 767px)">
        <DevicePhoneMobileIcon className="w-6 h-6 ml-2" />
      </figure>
    </section>
  )
}

export const Footer = () => {
  return (
    <footer className="bg-footer-2 text-footer-2 flex justify-end items-center px-4">
      <section className="flex text-footer-3">
        <p className="md:hidden">Cellphone</p>
        <p className="hidden md:block lg:hidden">Tablet</p>
        <p className="hidden lg:block xl:hidden">Laptop</p>
        <p className="hidden xl:block">Desktop</p>
      </section>
      <Breakpoints />
    </footer>
  )
}
