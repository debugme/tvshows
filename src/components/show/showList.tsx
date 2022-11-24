import { FC, Fragment } from "react"

import { Show } from "../../types"
import { ShowCard, LoadingShowList } from ".."

export type ShowListProps = {
  showList: Show[]
  isLoading: boolean
}

export const ShowList: FC<ShowListProps> = (props) => {
  const { showList, isLoading } = props

  if (isLoading) {
    return <LoadingShowList />
  }

  const cardList = showList.map((show) => <ShowCard key={show.id} {...show} />)

  if (cardList.length === 0)
    return null

  return (
    <Fragment>
      <h2 className="block text-3xl text-bgc-6 mt-10">Results</h2>
      <section className="mt-8 grid gap-14 justify-around grid-cols-home">
        {cardList}
      </section>
    </Fragment>
  )
}