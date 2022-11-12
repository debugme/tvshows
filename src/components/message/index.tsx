import { Message } from "./message"
import { Begin } from "./begin"
import { Empty } from "./empty"
import { Broke } from "./broke"

export const NoSearch = () => {
  return (
    <Message title="Let's go!" subtitle="Search for a show">
      <Begin className="w-full flex-grow h-auto" />
    </Message>
  )
}

export const NoResult = () => {
  return (
    <Message title="No hotdog!" subtitle="Try again">
      <Empty className="w-full flex-grow h-auto" />
    </Message>
  )
}

export const NoServer = () => {
  return (
    <Message title="Oh gosh!" subtitle="We're broke">
      <Broke className="w-full flex-grow h-auto" />
    </Message>
  )
}

