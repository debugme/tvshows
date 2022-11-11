import { FC } from "react"
import { Season } from "../../types"

export type SeasonCardProps = Season

export const SeasonCard: FC<SeasonCardProps> = (props) => {
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