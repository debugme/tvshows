import { FC } from "react"

import { Show } from "../../common"

import { ChipList } from ".."

import { Info } from "./info"

export type CardProps = Show

export const Card: FC<CardProps> = (props) => {
  const {
    name,
    genres,
    image,
  } = props

  return (
    <section className="w-72 h-96 rounded-lg cursor-pointer">
      <img className="rounded-lg object-cover object-top w-72 h-72 hover:drop-shadow-2xl " src={image} alt={name} />
      <h3 className="text-xl mt-4 mb-1">{name}</h3>
      <ChipList textList={genres} />
    </section>
  )
}


