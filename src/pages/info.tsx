import { useLocation } from "react-router-dom"

import { Back, CastList, SeasonList, Summary } from "../components"

export const Info = () => {
  const location = useLocation()
  const { id, ...rest } = location.state

  return (
    <section className="grid grid-cols-4 w-3/4 mx-auto">
      <Back />
      <Summary {...rest} />
      <CastList showId={id} />
      <SeasonList showId={id} />
    </section>
  )
}

