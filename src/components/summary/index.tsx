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
        {image
          ? <img className="rounded-lg col-span-1" src={image} alt={name} />
          : <article className="rounded-lg grid place-content-center bg-slate-600 col-span-1 h-[295px]">
            <h2 className="rounded-lg text-5xl text-slate-400">?</h2>
          </article>
        }
      </figure>
      <figcaption className="col-span-2 flex flex-col justify-end">
        <p className="pl-8 text-5xl">{name}</p>
      </figcaption>
      <summary className="col-span-3 py-4" dangerouslySetInnerHTML={{ __html: summary }} />
    </article>
  )
}