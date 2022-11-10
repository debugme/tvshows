import { FC } from "react"
import { isEmpty } from "lodash-es"

import { Show } from "../../common"
import { Card } from ".."
import { Begin } from "./begin"
import { Empty } from "./empty"

export type CardListProps = {
  searchTerm: string;
  showList: Show[]
}

export const CardList: FC<CardListProps> = (props) => {
  const { searchTerm, showList } = props

  if (isEmpty(searchTerm)) {
    return (
      <section className="h-[25vh] md:h-[35vh] lg:h-[40vh] xl:h-[45vh] mt-[-100px] lg:mt-[-80px] xl:mt-12 w-full sm:w-3/4 mx-auto flex justify-around align-middle">
        <Begin className="mt-40 w-1/2 flex-grow h-auto" />
        <div className="w-1/2 flex-grow grid place-content-center place-items-end">
          <h2 className="text-sm md:text-md lg:text-base mt-3 text-slate-700 uppercase">Type something</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Feeling lost?</h1>
        </div>
      </section>
    )
  }

  if (isEmpty(showList)) {
    return (
      <section className="h-[25vh] md:h-[35vh] lg:h-[40vh] xl:h-[45vh] mt-[-100px] lg:mt-[-80px] xl:mt-12 w-full sm:w-3/4 mx-auto flex justify-around align-middle">
        <Empty className="mt-40 w-1/2 flex-grow h-auto" />
        <div className="w-1/2 flex-grow grid place-content-center place-items-end">
          <h2 className="text-sm md:text-md lg:text-base mt-3 text-slate-700 uppercase">Search again</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl">Oh dear!</h1>
        </div>
      </section>
    )
  }

  const cardList = showList.map((show) => <Card key={show.id} {...show} />)

  return (
    <section
      className="mt-10 w-3/4 mx-auto grid gap-14 align-top justify-center grid-cols-home">
      {cardList}
    </section>
  )
}