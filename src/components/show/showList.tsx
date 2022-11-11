import { FC } from "react"
import { isEmpty } from "lodash-es"

import { Nullable, Show } from "../../types"
import { ShowCard, LoadingShowList, NoResult, NoSearch, NoServer } from ".."

export type ShowListProps = {
  searchTerm: string
  showList: Show[]
  isLoading: boolean
  failure: Nullable<Error>
}

export const ShowList: FC<ShowListProps> = (props) => {
  const { searchTerm, showList, isLoading, failure } = props

  if (isLoading) {
    return <LoadingShowList />
  }

  if (failure) {
    return <NoServer />
  }

  if (isEmpty(searchTerm)) {
    return <NoSearch />
  }

  if (isEmpty(showList)) {
    return <NoResult />
  }

  const cardList = showList.map((show) => <ShowCard key={show.id} {...show} />)

  return (
    <section className="mt-10 grid gap-14 justify-around grid-cols-home">
      {cardList}
    </section>
  )
}