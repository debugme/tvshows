import { FC } from "react";

import { Nullable } from "../../types";
import { NoResult, NoSearch, NoServer } from "..";

export type StatusProps = {
  searchTerm: string;
  failure: Nullable<Error>
  resultCount: number
}

export const Status: FC<StatusProps> = (props) => {
  const { failure, searchTerm, resultCount } = props
  if (failure)
    return <NoServer />
  if (searchTerm.length === 0)
    return <NoSearch />
  if (resultCount === 0)
    return <NoResult />
  return null
}

