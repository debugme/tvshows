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
      <div key={id}>
        <h1>{name}</h1>
        {image
          ? <img src={image} alt={name} />
          : <div className="grid place-content-center bg-slate-800 w-[210px] h-[295px]">
            <span className="text-5xl text-slate-400">?</span>
          </div>
        }
      </div>
    )
  })

  return (
    <section>
      {seasonsList}
    </section>
  )
}