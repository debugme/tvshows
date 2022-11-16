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
      className="placeholder-slate-400 selection:bg-yellow-300 bg-slate-100 w-full py-4 pl-11 rounded-md border-none outline-slate-400"
      type="search"
      placeholder="Search titles"
      title="Type in a search term"
      value={value}
      onChange={onChange}
    />
  )
}