import { FC } from "react"

import { Chip } from ".."

export type ChipListProps = {
  textList: string[]
}

export const ChipList: FC<ChipListProps> = (props) => {
  const { textList } = props
  const tooltip = textList.join(", ")
  const list = textList.slice(0, Math.min(3, textList.length))

  return (
    <div className="flex align-middle">
      {list.map(text => <Chip key={text} text={text} tooltip={tooltip}/>)}
    </div>
  )
}