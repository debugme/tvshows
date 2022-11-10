import { FC } from "react"

import { useSeasonsAPI } from "../../hooks"

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

  const seasonsList = data!.map((info) => {
    const { id, name, image } = info
    return (
      <figure className="rounded-lg"key={id}>
        {image
          ? <img className="rounded-lg" src={image} alt={name} />
          : <article className="rounded-lg grid place-content-center bg-slate-800 w-[210px] h-[295px]">
            <article className="rounded-lg text-5xl text-slate-400">?</article>
          </article>
        }
        <figcaption className="flex justify-center px-1 py-1 rounded-lg mt-2">{name}</figcaption>
      </figure>
    )
  })

  return (
    <section className="mt-8">
      <header><h2 className="text-3xl text-slate-600 w-20">Seasons</h2></header>
      <main className="mt-6 grid grid-cols-cast justify-around gap-8">
        {seasonsList}
      </main>
    </section>
  )
}