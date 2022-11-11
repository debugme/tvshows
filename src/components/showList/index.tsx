import { FC } from "react"
import { isEmpty } from "lodash-es"

import { Show } from "../../types"
import { Card, LoadingShowList, NoResult, NoSearch } from ".."

export type ShowListProps = {
  searchTerm: string
  showList: Show[]
  isLoading: boolean
}

export const ShowList: FC<ShowListProps> = (props) => {
  const { searchTerm, showList, isLoading } = props

  if (isEmpty(searchTerm)) {
    return <NoSearch />
  }

  if (isEmpty(showList)) {
    return <NoResult />
  }

  if (isLoading) {
    return <LoadingShowList />
  }

  const cardList = showList.map((show) => <Card key={show.id} {...show} />)

  return (
    <section
      className="mt-10 w-3/4 mx-auto grid gap-14 align-top justify-center grid-cols-home">
      {cardList}
    </section>
  )
}