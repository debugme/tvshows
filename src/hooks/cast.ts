import { Cast, CastInfo } from "../types";
import { useFetch } from "./useFetch";

type CastStats = {
  list: Cast[]
  hits: Record<string, boolean>
}

const reduceCast = (accumulator: CastStats, info: CastInfo) => {
  const { person: { id, name, image: _image } } = info
  const image = _image?.medium || ""
  if (accumulator.hits[id])
    return accumulator
  accumulator.hits[id] = true
  const cast = { id, name, image }
  accumulator.list.push(cast)
  return accumulator
}

export const useCastAPI = (showId: string) => {
  const stats = { list: [], hits: {} }
  const url = `https://api.tvmaze.com/shows/${showId}/cast`
  const { data, error, loading } = useFetch<CastInfo[]>(url)
  data?.reduce(reduceCast, stats)
  const response = { data: stats.list, error, loading }
  return response
}
