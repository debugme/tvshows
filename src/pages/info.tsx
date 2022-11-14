import { useLocation } from "react-router-dom"

import { CastList, SeasonList, Summary } from "../components"

export const Info = () => {
  const location = useLocation()
  const { id, ...rest } = location.state

  return (
    <section className="w-3/4 mx-auto">
        <Summary {...rest} />
        <CastList showId={id} />
        <SeasonList showId={id} />
    </section>
  )
}
