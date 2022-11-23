import { Season, SeasonInfo } from "../types";
import { useFetch } from "./useFetch";

const buildSeason = (info: SeasonInfo) => {
  const { id, number, image: _image } = info
  const name = `Season ${number}`
  const image = _image?.medium || ""
  const season = { id, name, image }
  return season
}

export const useSeasonAPI = (showId: string) => {
  const url = `https://api.tvmaze.com/shows/${showId}/seasons`
  const { data, error, loading } = useFetch<SeasonInfo[]>(url)
  const list: Season[] = data && data.map(buildSeason) || []
  const response = { data: list, error, loading }
  return response  
}