import { ChangeEventHandler, FC, useMemo, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { debounce } from "lodash-es"

import { Nullable } from "../../types";
import { Field } from './field'
import { Spinner } from './spinner'
import { Status } from './status'

export type SearchProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void
  failure: Nullable<Error>
  hits: number
}

export const Search: FC<SearchProps> = (props) => {
  const { searchTerm, setSearchTerm, failure, hits } = props

  const timerId = useRef(0)
  const [showSpinner, setShowSpinner] = useState(false)

  const showOrHideLoadingIndicator = () => {
    clearTimeout(timerId.current)
    setShowSpinner(true)
    timerId.current = setTimeout(() => {
      setShowSpinner(false)
    }, 1000)
  }

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const searchTerm = event.target.value.trim().toLocaleLowerCase()
    setSearchTerm(searchTerm)
    showOrHideLoadingIndicator()
  }

  const onChange = useMemo(
    () => debounce(changeHandler, 300)
    , [searchTerm, setSearchTerm]);

  return (
    <label className="relative w-full sm:mx-auto" htmlFor="searchBox">
      <Field defaultValue={searchTerm} onChange={onChange}/>
      <MagnifyingGlassIcon className="absolute top-4 left-3 w-6 h-6 text-slate-700" />
      <Spinner showSpinner={showSpinner} />
      <Status searchTerm={searchTerm} failure={failure} hits={hits} />
    </label>
  )
}
