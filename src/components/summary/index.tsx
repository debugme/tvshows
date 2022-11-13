import { FC } from "react"
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Back, Chip } from "..";
import { Nullable } from "../../types";

export type CoverArtProps = {
  name: string;
  image: string
}

export const CoverArt: FC<CoverArtProps> = (props) => {
  const { name, image } = props
  return (image
    ? <LazyLoadImage effect="blur" className="rounded-lg min-w-[210px]" src={image} alt={name} loading="lazy" width={210} height={295} />
    : <article className="rounded-lg grid place-content-center bg-slate-600 w-[210px] h-[295px]">
        <h2 className="rounded-lg text-5xl text-slate-400">?</h2>
      </article>
  )
}

export type SummaryProps = {
  name: string,
  image: string,
  summary: Nullable<string>
}

export const Summary: FC<SummaryProps> = (props) => {
  const {
    name,
    image,
    summary,
  } = props

  const summaryText = { __html: summary || "Yikes! Looks like there is no description currently available for this show." }

  return (
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
            <section className="p-4 bg-slate-200 rounded-lg basis-1 min-h-[140px]">
              <figcaption className="mb-3 my-2 uppercase">
                <Chip text={name} tooltip={name} />
              </figcaption>
              <summary className="first-letter:float-left first-letter:text-7xl first-letter:pr-4 first-letter:font-bold first-letter:text-slate-400" dangerouslySetInnerHTML={summaryText} />
            </section>
          </div>

        </section>
      </section>
    </article>
  )
}


