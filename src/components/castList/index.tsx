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
      <div key={id}>
        <h1>{name}</h1>
        <img src={image} alt={name} />
      </div>
    )
  })

  return (
    <section>
      {castList}
    </section>
  )
}