import { FC } from "react"
import { Link } from "react-router-dom"

import { Show } from "../../types"
import { ChipList } from ".."

export type ShowCardProps = Show

export const ShowCard: FC<ShowCardProps> = (props) => {
  const {
    id,
    name,
    summary,
    genres,
    image,
  } = props

  const pathname = `/${id}`

  const state = {
    id,
    name,
    summary,
    image
  }

  return (
    <Link to={pathname} state={state}>
      <article className="w-80 rounded-lg">
        <figure>
          {image 
            ? <img className="cursor-pointer rounded-lg object-cover object-top w-80 h-80 hover:drop-shadow-2xl" src={image} alt={name} />
            : <article className="cursor-pointer rounded-lg grid place-content-center bg-slate-600 w-80 h-80 hover:drop-shadow-2xl">
                <h2 className="rounded-lg text-5xl text-slate-400">?</h2>
              </article>
          }
        </figure>
        <figcaption className="text-xl mt-4 mb-1">{name}</figcaption>
        <ChipList textList={genres} />
      </article>
    </Link>
  )
}
