import { DevicePhoneMobileIcon, DeviceTabletIcon, ComputerDesktopIcon, TvIcon } from "@heroicons/react/24/outline"

export const Footer = () => {
  return (
    <footer className="bg-slate-700 border flex justify-end items-center px-4 text-slate-400">      
      <figure className="flex md:hidden w-24">
        <DevicePhoneMobileIcon className="w-6 h-6 mr-2" />
        <figcaption className="text text-slate-400">sm</figcaption>
      </figure>
      <figure className="hidden md:flex lg:hidden w-24">
        <DeviceTabletIcon className="w-6 h-6 mr-2" />
        <figcaption className="text text-slate-400">md</figcaption>
      </figure>
      <figure className="hidden lg:flex xl:hidden w-24">
        <ComputerDesktopIcon className="w-6 h-6 mr-2" />
        <figcaption className="text text-slate-400">lg</figcaption>
      </figure>
      <figure className="hidden xl:flex w-24">
        <TvIcon className="w-6 h-6 mr-2" />
        <figcaption className="text text-slate-400">xl</figcaption>
      </figure>
    </footer>
  )
}

