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
      className="text-search-fg placeholder-search-placeholder-fg selection:bg-search-selection-bg bg-search-bg w-full py-4 pl-11 rounded-md border-none outline-search-focus-outline"
      type="search"
      placeholder="Search titles"
      title="Type in a search term"
      value={value}
      onChange={onChange}
    />
  )
}