import { ChangeEventHandler, FC, useMemo } from "react";
import { debounce } from "lodash-es"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export type SearchProps = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void
}

export const Search: FC<SearchProps> = (props) => {
  const { searchTerm, setSearchTerm } = props

  const changeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    const searchTerm = event.target.value.trim().toLocaleLowerCase()
    setSearchTerm(searchTerm)
  }

  const onChange = useMemo(
    () => debounce(changeHandler, 300)
  , [searchTerm, setSearchTerm]);

  return (
    <div className="relative w-full sm:w-3/4 sm:mx-auto mt-2">
      <input
        className="bg-slate-100 w-full py-3 pl-10 rounded-md border-none cursor-pointer outline-slate-400"
        type="search"
        placeholder="Search titles"
        title="Type in a search term"
        defaultValue={searchTerm}
        onChange={onChange}
      />
      <MagnifyingGlassIcon className="absolute top-3 left-2 w-6 h-6 color-slate-700" />
    </div>
  )
}