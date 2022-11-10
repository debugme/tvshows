import { useLocation } from "react-router-dom"

import { Back, CastList, SeasonList, Summary } from "../../components"

export const Info = () => {
  const location = useLocation()
  const props = location.state
  const showId = props.id

  return (
    <section className="border h-full">
      <Back />
      <Summary {...props} />
      <CastList showId={showId} />
      <SeasonList showId={showId} />
    </section>
  )
}

