import { FC } from "react";
import { isEmpty } from "lodash-es";

import { Nullable } from "../../types";
import { NoResult, NoSearch, NoServer } from "..";

export type StatusProps = {
  searchTerm: string;
  failure: Nullable<Error>
  hits: number
}

export const Status: FC<StatusProps> = (props) => {
  const { failure, searchTerm, hits } = props
  if (failure)
    return <NoServer />
  if (isEmpty(searchTerm))
    return <NoSearch />
  if (hits === 0)
    return <NoResult />
  return null
}

