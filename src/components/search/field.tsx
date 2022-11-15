import { ChangeEventHandler, FC } from "react";

export type FieldProps = {
  defaultValue: string;
  onChange: ChangeEventHandler<HTMLInputElement>
}

export const Field: FC<FieldProps> = (props) => {
  const { defaultValue, onChange } = props
  return (
    <input
      id="searchBox"
      className="placeholder-slate-400 selection:bg-yellow-300 bg-slate-100 w-full py-4 pl-11 rounded-md border-none outline-slate-400"
      type="search"
      placeholder="Search titles"
      title="Type in a search term"
      defaultValue={defaultValue}
      onChange={onChange}
    />
  )
}