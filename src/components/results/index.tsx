import { FC } from "react"

export type ResultsProps = {
  count: number
}

export const Results: FC<ResultsProps> = (props) => {
  const { count } = props
  return (
    <div className="py-4 w-3/4 mx-auto flex justify-end">
      <p className="text-xs">
        <span className="flex-inline justify-center bg-slate-400 py-1 px-2 rounded-md mr-1 align-baseline">{count}</span>shows
      </p>
    </div>
  )
}