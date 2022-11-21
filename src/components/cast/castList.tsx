import { FC } from "react"

import { useCastAPI } from "../../hooks"
import { CastCard } from "./castCard"
import { LoadingCastList } from "./loadingCastList"

export type CastListProps = {
  showId: string
}

export const CastList: FC<CastListProps> = (props) => {
  const { showId } = props

  const { data, error, loading } = useCastAPI(showId)

  if (loading)
    return <LoadingCastList />

  if (error)
    return null

  if (data.length === 0)
    return null

  const cardList = data.map((info) => <CastCard key={info.id} {...info} />)

  return (
    <section className="mt-8">
      <header>
        <h2 className="text-3xl text-heading-fg">Cast</h2>
      </header>
      <main className="pl-20 mt-10 grid gap-14 justify-between grid-cols-cast">
        {cardList}
      </main>
    </section>
  )
}
