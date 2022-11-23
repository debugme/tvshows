import { FC } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Cast } from "../../types"

export const BlankCard = () => (
  <article className="rounded-lg grid place-content-center bg-cast-1 w-infoCardWidth h-infoCardHeight">
    <h2 className="rounded-lg text-5xl text-cast-2">?</h2>
  </article>
)

export type CastCardProps = Cast

export const CastCard: FC<CastCardProps> = (props) => {
  const { name, image } = props

  return (
    <figure className="rounded-lg">
      {image
        ? <LazyLoadImage effect="blur" className="rounded-lg w-infoCardWidth h-infoCardHeight" src={image} loading="lazy" alt={name} />
        : <BlankCard />
      }
      <figcaption className="flex px-1 py-1 rounded-lg mt-2">
        {name}
      </figcaption>
    </figure>
  )
}