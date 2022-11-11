import { Message } from "./message"
import { Begin } from "./begin"
import { Empty } from "./empty"

export const NoSearch = () => {
  return (
    <Message title="Feeling lost?" subtitle="Type something">
      <Begin className="w-full flex-grow h-auto" />
    </Message>
  )
}

export const NoResult = () => {
  return (
    <Message title="Sweet pyjamas!" subtitle="Try again">
      <Empty className="w-full flex-grow h-auto" />
    </Message>
  )
}