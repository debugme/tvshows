import { FC, Fragment } from "react"

export type SummaryProps = {
  id: string,
  name: string,
  image: string,
  summary: string
}

export const Summary: FC<SummaryProps> = (props) => {
  const {
    id,
    name,
    image,
    summary,
  } = props  

  return (
    <Fragment>
      <h1>Info</h1>
      <h3>{id}</h3>
      <h3>{name}</h3>
      <h3>{image}</h3>
      <h3 dangerouslySetInnerHTML={{ __html: summary }}></h3>
    </Fragment>
  )
}