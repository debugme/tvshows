import { FC } from "react";

export type ChipProps = {
  text: string;
  tooltip: string;
}

export const Chip: FC<ChipProps> = (props) => {
  const { text, tooltip } = props

  return (
    <span 
      title={tooltip}
      className="text-sm rounded-md text-chip-fg bg-chip-bg px-3 py-2 mr-2 cursor-pointer"> 
      {text}
    </span>
  )
}