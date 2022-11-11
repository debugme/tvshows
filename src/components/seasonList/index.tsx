import { FC } from "react"
import { isEmpty } from "lodash-es"

import { useSeasonsAPI } from "../../hooks"
import { SeasonCard } from ".."

export type SeasonsListProps = {
  showId: string
}

export const SeasonList: FC<SeasonsListProps> = (props) => {
  const { showId } = props

  const { data, error, loading } = useSeasonsAPI(showId)

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error {String(error)}</h1>
  }

  if (isEmpty(data))
    return null

  const cardList = data.map((info) => <SeasonCard key={info.id} {...info} />)

  return (
    <section className="col-span-4 mt-8">
      <header><h2 className="text-3xl text-slate-600 w-20">Seasons</h2></header>
      <main className="mt-6 grid grid-cols-cast justify-between gap-8">
        {cardList}
      </main>
    </section>
  )
}