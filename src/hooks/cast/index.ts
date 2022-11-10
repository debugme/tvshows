import useSWR from "swr";
import { uniqBy } from "lodash-es"

import { Cast, CastInfo } from "../../common";

const buildCast = (info: CastInfo) => {
  const { person: { id, name, image: { medium: image } } } = info
  const cast = { id, name, image }
  return cast
}

const fetcher = async (endpoint: string): Promise<Cast[]> => {
  const response = await fetch(endpoint)
  const infoList: CastInfo[] = await response.json()
  const castList = uniqBy(infoList.map(buildCast), 'id')
  return castList
}

export const useCastAPI = (showId: string) => {
  const endpoint = `https://api.tvmaze.com/shows/${showId}/cast`
  const response = useSWR(endpoint, fetcher)
  const { data, error } = response
  const loading = Boolean(!data && !error)
  const results = { data, error, loading }
  return results
}