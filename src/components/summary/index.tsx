import { FC } from "react"
import { Back } from "..";

export type CoverArtProps = {
  name: string;
  image: string
}

export const CoverArt: FC<CoverArtProps> = (props) => {
  const { name, image } = props
  return (image
    ? <img className="rounded-lg min-w-[210px]" src={image} alt={name} />
    : <article className="rounded-lg grid place-content-center bg-slate-600 h-full">
      <h2 className="rounded-lg text-5xl text-slate-400">?</h2>
    </article>
  )
}

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

  const markUp = (
    <article className="flex flex-row">
      <section className="flex basis-[5rem] shrink-0 relative">
        <Back />
      </section>
      <section className="flex-grow">
        <section className="flex flex-wrap">

          <div className="flex-grow-0 min-w-[250px] mb-10">
            <figure>
              <CoverArt name={name} image={image} />
            </figure>
          </div>

          <div className="basis-0 flex-grow min-w-[60%]">
            <section className="p-4 bg-slate-200 rounded-lg basis-1">
              <figcaption className="bg-red-200 inline-block mb-2 py-2 px-4 text-xs font-semibold uppercase justify-end rounded-lg">
                {name}
              </figcaption>
              <summary className="first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-bold first-letter:text-slate-400" dangerouslySetInnerHTML={{ __html: summary }} />
            </section>
          </div>

        </section>
      </section>
    </article>
  )

  return markUp

}


