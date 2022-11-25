import { FC, Fragment } from "react"

import { Show } from "../../types"
import { ShowCard, LoadingShowList } from ".."

export type ShowListProps = {
  showList: Show[]
  isLoading: boolean
  searchTerm: string
}

export const ShowList: FC<ShowListProps> = (props) => {
  const { showList, isLoading, searchTerm } = props

  if (isLoading && searchTerm) {
    return <LoadingShowList />
  }

  const cardList = showList.map((show) => <ShowCard key={show.id} {...show} searchTerm={searchTerm}/>)

  if (cardList.length === 0)
    return null

  return (
    <Fragment>
      <h2 className="block text-3xl text-secondary-600 mt-10">Results</h2>
      <section className="mt-8 grid gap-14 justify-around grid-cols-home">
        {cardList}
      </section>
    </Fragment>
  )
}