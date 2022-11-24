import {
  Cellphone,
  Tablet,
  Laptop,
  Desktop
} from "../images"

export const Breakpoints = () => {
  return (
    <section className="flex cursor-pointer text-bgc-5">
      <figure className="flex xl:text-fgc-3" title="desktop (1280px to ∞)">
        <Desktop className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex lg:text-fgc-3 xl:text-bgc-5" title="laptop (1024px to 1279px)">
        <Laptop className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex md:text-fgc-3 lg:text-bgc-5" title="tablet (768px to 1023px)">
        <Tablet className="w-6 h-6 ml-2" />
      </figure>
      <figure className="flex text-fgc-3 md:text-bgc-5" title="cellphone (0px to 767px)">
        <Cellphone className="w-6 h-6 ml-2" />
      </figure>
    </section>
  )
}

export const Footer = () => {
  return (
    <footer className="bg-bgc-7 text-bgc-7 flex justify-end items-center px-6">
      <section className="flex text-fgc-3">
        <p className="md:hidden">Cellphone</p>
        <p className="hidden md:block lg:hidden">Tablet</p>
        <p className="hidden lg:block xl:hidden">Laptop</p>
        <p className="hidden xl:block">Desktop</p>
      </section>
      <Breakpoints />
    </footer>
  )
}
