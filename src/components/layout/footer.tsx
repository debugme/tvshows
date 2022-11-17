import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
  TvIcon
} from "@heroicons/react/24/outline"

export const Breakpoints = () => {
  return (
    <section className="flex cursor-pointer text-footer-fgi">
      <figure className="flex xl:text-footer-fga" title="desktop (1280px to ∞)">
        <TvIcon className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex lg:text-footer-fga xl:text-footer-fgi" title="laptop (1024px to 1279px)">
        <ComputerDesktopIcon className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex md:text-footer-fga lg:text-footer-fgi" title="tablet (768px to 1023px)">
        <DeviceTabletIcon className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex text-footer-fga md:text-footer-fgi" title="cellphone (0px to 767px)">
        <DevicePhoneMobileIcon className="w-6 h-6 ml-2" />
      </figure>
    </section>
  )
}

export const Footer = () => {
  return (
    <footer className="bg-footer-bg text-footer-bg flex justify-end items-center px-4">
      <section className="flex text-footer-fga">
        <p className="md:hidden">Cellphone</p>
        <p className="hidden md:block lg:hidden">Tablet</p>
        <p className="hidden lg:block xl:hidden">Laptop</p>
        <p className="hidden xl:block">Desktop</p>
      </section>
      <Breakpoints />
    </footer>
  )
}
