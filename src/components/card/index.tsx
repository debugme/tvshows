import { FC } from "react"
import { Link } from "react-router-dom"

import { Show } from "../../types"
import { ChipList } from ".."

export type CardProps = Show

export const Card: FC<CardProps> = (props) => {
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
      <section className="w-72 h-96 rounded-lg cursor-pointer">
        <img className="rounded-lg object-cover object-top w-72 h-72 hover:drop-shadow-2xl " src={image} alt={name} />
        <h3 className="text-xl mt-4 mb-1">{name}</h3>
        <ChipList textList={genres} />
      </section>
    </Link>
  )
}


