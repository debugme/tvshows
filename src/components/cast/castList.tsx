import { FC } from "react"
import { isEmpty } from "lodash-es"

import { useCastAPI } from "../../hooks"
import { CastCard } from "./castCard"

export type CastListProps = {
  showId: string
}

export const CastList: FC<CastListProps> = (props) => {
  const { showId } = props

  const { data, error, loading } = useCastAPI(showId)

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error {String(error)}</h1>
  }

  if (isEmpty(data))
    return null

  const cardList = data.map((info) => <CastCard key={info.id} {...info} />)

  return (
    <section className="col-span-4 mt-8">
      <header><h2 className="text-3xl text-slate-600 w-20">Cast</h2></header>
      <main className="mt-6 grid grid-cols-cast justify-between gap-8">
        {cardList}
      </main>
    </section>
  )
}