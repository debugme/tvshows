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
      className="text-bgc-6 placeholder-bgc-4 selection:bg-fgc-1 bg-bgc-1 w-full py-4 pl-11 rounded-md border-none outline-bgc-4"
      type="search"
      placeholder="Search titles"
      title="Type in a search term"
      value={value}
      onChange={onChange}
    />
  )
}