import { uniqBy } from "lodash-es"

import { CastInfo } from "../types";
import { useFetch } from "./useFetch";

const buildCast = (info: CastInfo) => {
  const { person: { id, name, image: _image } } = info
  const image = _image?.medium || ""
  const cast = { id, name, image }
  return cast
}

export const useCastAPI = (showId: string) => {
  const url = `https://api.tvmaze.com/shows/${showId}/cast`
  const { data, error, loading } = useFetch<CastInfo[]>(url)
  const list = data && uniqBy(data.map(buildCast), 'id') || []
  const response = { data: list, error, loading }
  return response
}