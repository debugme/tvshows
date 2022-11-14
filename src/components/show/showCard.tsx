import { FC } from "react"
import { Link } from "react-router-dom"
import { isEmpty } from "lodash-es"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Show } from "../../types"
import { ChipList } from ".."

export const BlankCard = () => (
  <article className="cursor-pointer rounded-lg grid place-content-center bg-slate-600 w-80 h-80 hover:drop-shadow-2xl">
    <h2 className="rounded-lg text-5xl text-slate-400">?</h2>
  </article>
)

export type ImageCardProps = {
  name: string
  image: string
}

export const ImageCard: FC<ImageCardProps> = (props) => {
  const { name, image } = props
  return (
    image
      ? <LazyLoadImage effect="blur" className="cursor-pointer rounded-lg object-cover object-top w-80 h-80 hover:drop-shadow-2xl" src={image} loading="lazy" alt={name} width={320} height={320} />
      : <BlankCard />
  )
}

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
      <article className="rounded-lg">
        <figure>
          <ImageCard name={name} image={image} />
        </figure>
        <figcaption className="text-xl mt-4">{name}</figcaption>
        {
          isEmpty(genres)
            ? null
            : <div className="mt-2"><ChipList textList={genres} /></div>
        }
      </article>
    </Link>
  )
}
