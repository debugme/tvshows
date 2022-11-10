import { FC } from "react"

import { useCastAPI } from "../../hooks"
import { Cast } from "../../types"

export type CastCardProps = Cast

export const CastCard: FC<CastCardProps> = (props) => {
  const { id, name, image } = props

  return (
    <figure className="rounded-lg" key={id}>
      {image
        ? <img className="rounded-lg" src={image} alt={name} />
        : <article className="rounded-lg grid place-content-center bg-slate-800 w-[210px] h-[295px]">
          <article className="rounded-lg text-5xl text-slate-400">?</article>
        </article>
      }
      <figcaption className="flex px-1 py-1 rounded-lg mt-2">{name}</figcaption>
    </figure>
  )
}

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

  const castList = data.map((info) => <CastCard key={info.id} {...info} />)

  return (
    <section className="col-span-4 mt-8">
      <header><h2 className="text-3xl text-slate-600 w-20">Cast</h2></header>
      <main className="mt-6 grid grid-cols-cast justify-around gap-8">
        {castList}
      </main>
    </section>
  )
}
