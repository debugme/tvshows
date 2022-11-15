import { FC } from "react"

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

  return (
    <section className="mt-10 grid gap-14 justify-around grid-cols-home">
      {cardList}
    </section>
  )
}