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
    <article className="grid grid-cols-3 auto-rows-min ">
      <figure><img className="col-span-1" src={image} alt={name} /></figure>
      <figcaption><p className="col-span-2">{name}</p></figcaption>
      <summary className="col-span-3" dangerouslySetInnerHTML={{ __html: summary }} />
    </article>
  )
}