import { FC } from "react"

import { useCastAPI } from "../../hooks"

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

  const castList = data!.map((info) => {
    const { id, name, image } = info
    return (
      <div className="rounded-lg" key={id}>
        {image
          ? <img className="rounded-lg" src={image} alt={name} />
          : <div className="rounded-lg grid place-content-center bg-slate-800 w-[210px] h-[295px]">
            <span className="text-5xl text-slate-400">?</span>
          </div>
        }
        <p className="flex justify-center px-1 py-1 rounded-lg mt-2">{name}</p>
      </div>
    )
  })

  return (
    <section>
      <h2 className="text-2xl text-slate-600 w-20">Cast</h2>
      <div className="mt-6 flex flex-wrap gap-8 justify-around">
        {castList}
      </div>
    </section>
  )
}