import { ChangeEventHandler, FC } from "react";

export type FieldProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const Field: FC<FieldProps> = (props) => {
  const { value, onChange } = props
  return (
    <input
      id="searchBox"
      className="text-search-5 placeholder-search-1 selection:bg-search-2 bg-search-3 w-full py-4 pl-11 rounded-md border-none outline-search-4"
      type="search"
      placeholder="Search titles"
      title="Type in a search term"
      value={value}
      onChange={onChange}
    />
  )
}