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
      <dl className="flex justify-start items-center pt-1 flex-wrap gap-0 md:gap-3 md:pb-2">
        <dd className="mt-3 py-2 px-3 bg-yellow-400 text-yellow-800 inline-block rounded-lg cursor-pointer w-full md:w-auto text-center" onClick={onClick}>The Flash</dd>
        <dd className="mt-3 py-2 px-3 bg-yellow-400 text-yellow-800 inline-block rounded-lg cursor-pointer w-full md:w-auto text-center" onClick={onClick}>Supergirl</dd>
        <dd className="mt-3 py-2 px-3 bg-yellow-400 text-yellow-800 inline-block rounded-lg cursor-pointer w-full md:w-auto text-center" onClick={onClick}>Batman</dd>
        <dd className="mt-3 py-2 px-3 bg-yellow-400 text-yellow-800 inline-block rounded-lg cursor-pointer w-full md:w-auto text-center" onClick={onClick}>Gentleman Jack</dd>
      </dl>
    </Fragment>
  )
}