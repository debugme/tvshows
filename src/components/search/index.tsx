import { ChangeEventHandler, FC, useMemo, useRef, useState } from "react";
import { MagnifyingGlassIcon, ArrowPathIcon } from "@heroicons/react/24/outline"
import { debounce } from "lodash-es"

export type SearchProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void
}

export const Search: FC<SearchProps> = (props) => {
  const { searchTerm, setSearchTerm } = props

  const timerId = useRef(0)
  const [indicator, setIndicator] = useState(false)

  const showOrHideLoadingIndicator = () => {
    clearTimeout(timerId.current)
    setIndicator(true)
    timerId.current = setTimeout(() => {
      setIndicator(false)
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
        <input
          id="searchBox"
          className="placeholder-slate-400 selection:bg-yellow-300 bg-slate-100 w-full py-4 pl-11 rounded-md border-none outline-slate-400"
          type="search"
          placeholder="Search titles"
          title="Type in a search term"
          defaultValue={searchTerm}
          onChange={onChange}
        />
        <MagnifyingGlassIcon className="absolute top-4 left-3 w-6 h-6 text-slate-700" />
        {indicator && <ArrowPathIcon className="absolute top-4 right-3 w-6 h-6 text-slate-700 animate-spin bg-slate-100" />}
      </label>
  )
}


