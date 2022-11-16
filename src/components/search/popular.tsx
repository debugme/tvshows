import { FC, Fragment, MouseEventHandler } from "react"

export type PopularProps = {
  setSearchTerm: (searchTerm: string) => void
}

export const Popular: FC<PopularProps> = (props) => {
  const { setSearchTerm } = props

  const onClick: MouseEventHandler<HTMLElement> = (event) => {
    const searchTerm = event.currentTarget.innerText
    setSearchTerm(searchTerm)
  }

  return (
    <Fragment>
      <h2 className="text-3xl text-slate-600 w-20 mt-8">Popular</h2>
      <dl className="flex gap-6 items-start pt-1">
        <dd className="mt-3 py-2 px-3 bg-yellow-400 text-yellow-800 inline-block rounded-lg cursor-pointer" onClick={onClick}>The Flash</dd>
        <dd className="mt-3 py-2 px-3 bg-yellow-400 text-yellow-800 inline-block rounded-lg cursor-pointer" onClick={onClick}>Supergirl</dd>
        <dd className="mt-3 py-2 px-3 bg-yellow-400 text-yellow-800 inline-block rounded-lg cursor-pointer" onClick={onClick}>Batman</dd>
        <dd className="mt-3 py-2 px-3 bg-yellow-400 text-yellow-800 inline-block rounded-lg cursor-pointer" onClick={onClick}>Gentleman Jack</dd>
      </dl>
    </Fragment>
  )
}