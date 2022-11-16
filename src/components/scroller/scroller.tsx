import { FC, useEffect } from "react"
import { useLocation } from "react-router-dom"

export const Scroller: FC = () => {
  const { pathname } = useLocation()
  const position = { top: 0, left: 0 }
  const callback = () => document.querySelector("main")!.scrollTo(position)
  const dependencies = [pathname]

  useEffect(callback, dependencies);

  return null;
}