import { FC } from "react"
import { isEmpty } from "lodash-es"

import { useSeasonAPI } from "../../hooks"
import { SeasonCard } from ".."

import { LoadingSeasonList } from "./loadingSeasonList"

export type SeasonListProps = {
  showId: string
}

export const SeasonList: FC<SeasonListProps> = (props) => {
  const { showId } = props

  const { data, error, loading } = useSeasonAPI(showId)

  if (loading) {
    return <LoadingSeasonList />
  }

  if (error) {
    return <h1>Error {String(error)}</h1>
  }

  if (isEmpty(data))
    return null

  const cardList = data.map((info) => <SeasonCard key={info.id} {...info} />)

  return (
    <section className="col-span-4 mt-8">
      <header>
        <h2 className="text-3xl text-slate-600 w-20">Seasons</h2>
      </header>
      <main className="mt-10 grid gap-14 justify-around grid-cols-season">
        {cardList}
      </main>
    </section>
  )
}