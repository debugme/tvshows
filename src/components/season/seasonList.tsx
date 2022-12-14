import { FC } from "react"

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
    return null
  }

  if (data.length === 0)
    return null

  const cardList = data.map((info) => <SeasonCard key={info.id} {...info} />)

  return (
    <section className="mt-8">
      <header>
        <h2 className="text-3xl text-secondary-600">Seasons</h2>
      </header>
      <main className="pl-20 mt-10 grid gap-14 justify-between grid-cols-season">
        {cardList}
      </main>
    </section>
  )
}