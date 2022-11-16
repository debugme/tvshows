import { ChangeEventHandler, FC, useRef, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

import { Nullable } from "../../types";
import { Field } from './field'
import { Spinner } from './spinner'
import { Popular } from './popular'
import { Status } from './status'

export type SearchProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void
  failure: Nullable<Error>
  resultCount: number
}

export const Search: FC<SearchProps> = (props) => {
  const { searchTerm, setSearchTerm, failure, resultCount } = props

  const timerId = useRef(0)
  const [showSpinner, setShowSpinner] = useState(false)

  const showOrHideLoadingIndicator = () => {
    clearTimeout(timerId.current)
    setShowSpinner(true)
    timerId.current = setTimeout(() => {
      setShowSpinner(false)
    }, 500)
  }

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const searchTerm = event.target.value.trim().toLocaleLowerCase()
    setSearchTerm(searchTerm)
    showOrHideLoadingIndicator()
  }

  return (
    <label className="relative w-full sm:mx-auto" htmlFor="searchBox">
      <Field value={searchTerm} onChange={onChange}/>
      <Popular setSearchTerm={setSearchTerm} resultCount={resultCount}/>
      <MagnifyingGlassIcon className="absolute top-4 left-3 w-6 h-6 text-slate-700" />
      <Spinner showSpinner={showSpinner} />
      <Status searchTerm={searchTerm} failure={failure} resultCount={resultCount} />
    </label>
  )
}
