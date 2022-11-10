import { useLocation } from "react-router-dom"

import { Back, CastList, SeasonList, Summary } from "../../components"

export const Info = () => {
  const location = useLocation()
  const { id, ...rest} = location.state

  return (
    <section className="grid grid-cols-4border w-3/4 mx-auto">
      <div className="col-span-1 border border-red-400"><Back /></div>
      <div className="col-span-3 border border-green-400"><Summary {...rest} /></div>
      <div className="col-span-4 border border-blue-400"><CastList showId={id} /></div>
      <div className="col-span-4 border border-orange-400"><SeasonList showId={id} /></div>
    </section>
  )
}

