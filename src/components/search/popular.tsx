import { FC, Fragment, MouseEventHandler } from "react"

const popularTitles = ["The Flash", "Supergirl", "Batman", "Wonder Woman", "Spiderman", "X-Men"]

const className = "mt-3 py-2 px-3 bg-yellow-400 text-yellow-800 inline-block rounded-lg cursor-pointer w-auto text-center"

export type PopularProps = {
  setSearchTerm: (searchTerm: string) => void
  resultCount: number
}

export const Popular: FC<PopularProps> = (props) => {
  const { setSearchTerm, resultCount } = props

  const onClick: MouseEventHandler<HTMLElement> = (event) => {
    const searchTerm = event.currentTarget.innerText
    setSearchTerm(searchTerm)
  }

  const tagList = popularTitles.map(title => (
    <dd className={className} key={title} onClick={onClick}>{title}</dd>
  ))

  return (
    <Fragment>
      <h2 className="text-3xl text-slate-600 w-20 mt-8">Popular</h2>
      <dl className="flex justify-start items-center pt-1 flex-wrap gap-x-2 md:gap-2 md:pb-2">
        {tagList}
      </dl>
    </Fragment>
  )
}
