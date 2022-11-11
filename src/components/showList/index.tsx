import { FC } from "react"
import { isEmpty } from "lodash-es"

import { Show } from "../../types"
import { Card } from ".."
import { Begin } from "./begin"
import { Empty } from "./empty"

export const NoSearch = () => {
  return (
    <section className="border border-red-400 h-[25vh] md:h-[35vh] lg:h-[40vh] xl:h-[45vh] mt-[-100px] lg:mt-[-80px] xl:mt-12 w-full sm:w-3/4 mx-auto flex justify-around align-middle">
      <Begin className="mt-40 w-1/2 flex-grow h-auto border border-blue-400" />
      <div className="w-1/2 flex-grow grid place-content-center place-items-start">
        <h2 className="text-sm md:text-md lg:text-base mt-3 text-slate-700 uppercase border border-green-400">Type something</h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl border border-orange-400">Feeling lost?</h1>
      </div>
    </section>
  )
}

export const NoResult = () => {
  return (
    <section className="border border-red-400 h-[25vh] md:h-[35vh] lg:h-[40vh] xl:h-[45vh] mt-[-100px] lg:mt-[-80px] xl:mt-12 w-full sm:w-3/4 mx-auto flex justify-around align-middle">
      <Empty className="mt-40 w-1/2 flex-grow h-auto border border-blue-400" />
      <div className="w-1/2 flex-grow grid place-content-center place-items-start">
        <h2 className="text-sm md:text-md lg:text-base mt-3 text-slate-700 uppercase border border-green-400">Search again</h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl border border-orange-400">Oh dear!</h1>
      </div>
    </section>
  )
}

export type ShowListProps = {
  searchTerm: string
  showList: Show[]
  isLoading: boolean
}

export const ShowList: FC<ShowListProps> = (props) => {
  const { searchTerm, showList } = props

  if (isEmpty(searchTerm)) {
    return <NoSearch />
  }

  if (isEmpty(showList)) {
    return <NoResult />
  }

  const cardList = showList.map((show) => <Card key={show.id} {...show} />)

  return (
    <section
      className="mt-10 w-3/4 mx-auto grid gap-14 align-top justify-center grid-cols-home">
      {cardList}
    </section>
  )
}