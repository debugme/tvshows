import useSWR from "swr";

import { Show, ShowInfo } from "../../types";

const buildShow = (info: ShowInfo) => {
  const { show: { id, name, summary, genres, image: { medium: image } } } = info
  const show = { id, name, genres, image, summary }
  return show
}

const fetcher = async (endpoint: string): Promise<Show[]> => {
  const response = await fetch(endpoint)
  const infoList: ShowInfo[] = await response.json()
  const showList = infoList.map(buildShow)
  return showList
}

export const useShowsAPI = (searchTerm: string) => {
  const url = "https://api.tvmaze.com/search/shows"
  const queryString = `?q=${encodeURIComponent(searchTerm)}`
  const endpoint = `${url}${queryString}`
  const response = useSWR(endpoint, fetcher)
  const { data, error } = response
  const loading = Boolean(data && !error)
  const results = { data, error, loading }  
  return results
}