import { FC } from "react"
import { ArrowPathIcon } from "@heroicons/react/24/outline"

export type SpinnerProps = {
  showSpinner: boolean
}

export const Spinner: FC<SpinnerProps> = (props) => {
  const { showSpinner } = props
  if (!showSpinner)
    return null
  return <ArrowPathIcon className="absolute top-4 right-3 w-6 h-6 text-slate-700 animate-spin bg-slate-100" />
}