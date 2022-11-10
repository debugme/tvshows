import useSWR from "swr";

import { Season, SeasonInfo } from "../../types";

const buildSeason = (info: SeasonInfo) => {
  const { id, number, image: _image } = info
  const name = `Season ${number}`
  const image = _image?.medium || ""
  const season = { id, name, image }
  return season
}

const fetcher = async (endpoint: string): Promise<Season[]> => {
  const response = await fetch(endpoint)
  const infoList: SeasonInfo[] = await response.json()
  const seasonsList = infoList.map(buildSeason)
  return seasonsList
}

export const useSeasonsAPI = (showId: string) => {
  const endpoint = `https://api.tvmaze.com/shows/${showId}/seasons`
  const response = useSWR(endpoint, fetcher)
  const { data, error } = response
  const loading = Boolean(!data && !error)
  const results = { data: data || [], error, loading }
  return results
}