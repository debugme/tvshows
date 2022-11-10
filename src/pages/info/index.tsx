import { useLocation } from "react-router-dom"

import { Back, CastList, SeasonList, Summary } from "../../components"

export const Info = () => {
  const location = useLocation()
  const { id, ...rest} = location.state

  return (
    <section className="grid grid-cols-4 w-3/4 mx-auto">
      <div className="col-span-1"><Back /></div>
      <div className="col-span-3"><Summary {...rest} /></div>
      <div className="col-span-4"><CastList showId={id} /></div>
      <div className="col-span-4"><SeasonList showId={id} /></div>
    </section>
  )
}

