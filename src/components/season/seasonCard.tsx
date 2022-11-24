import { FC } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Season } from "../../types"

export type SeasonCardProps = Season

export const SeasonCard: FC<SeasonCardProps> = (props) => {
  const { name, image } = props

  return (
    <figure className="rounded-lg">
      {image
        ? <LazyLoadImage effect="blur" className="rounded-lg w-infoCardWidth h-infoCardHeight" src={image} loading="lazy" alt={name} />
        : <article className="rounded-lg grid place-content-center bg-bgc-6 w-infoCardWidth h-infoCardHeight">
          <h2 className="rounded-lg text-5xl text-bgc-4">?</h2>
        </article>
      }
      <figcaption className="flex px-1 py-1 rounded-lg mt-2">
        {name}
      </figcaption>
    </figure>
  )
}