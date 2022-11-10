import { FC } from "react"

export type SummaryProps = {
  name: string,
  image: string,
  summary: string
}

export const Summary: FC<SummaryProps> = (props) => {
  const {
    name,
    image,
    summary,
  } = props

  return (
    <article className="col-span-3 grid grid-cols-3 auto-rows-min">
      <figure>
        <img className="rounded-lg col-span-1" src={image} alt={name} />
      </figure>
      <figcaption className="col-span-2 flex flex-col justify-end">
        <p className="pl-8 text-5xl">{name}</p>
      </figcaption>
      <summary className="col-span-3 py-4" dangerouslySetInnerHTML={{ __html: summary }} />
    </article>
  )
}