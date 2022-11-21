import { FC } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Season } from "../../types"

export type SeasonCardProps = Season

export const SeasonCard: FC<SeasonCardProps> = (props) => {
  const { name, image } = props

  return (
    <figure className="rounded-lg">
      {image
        ? <LazyLoadImage effect="blur" className="rounded-lg" src={image} loading="lazy" alt={name} width={210} height={295} />
        : <article className="rounded-lg grid place-content-center bg-season-2 w-[210px] h-[295px]">
          <h2 className="rounded-lg text-5xl text-season-1">?</h2>
        </article>
      }
      <figcaption className="flex px-1 py-1 rounded-lg mt-2">
        {name}
      </figcaption>
    </figure>
  )
}