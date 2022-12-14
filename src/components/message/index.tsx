import { Begin, Broke, Empty } from "../images"
import { Message } from "./message"

export const NoSearch = () => {
  return (
    <Message title="Let's go!" subtitle="Search for a show">
      <Begin className="w-full flex-grow h-auto" />
    </Message>
  )
}

export const NoResult = () => {
  return (
    <Message title="No luck!" subtitle="Try another show">
      <Empty className="w-full flex-grow h-auto" />
    </Message>
  )
}

export const NoServer = () => {
  return (
    <Message title="Oh gosh!" subtitle="We're broke">
      <Broke className="w-3/4 flex-grow h-auto" />
    </Message>
  )
}

