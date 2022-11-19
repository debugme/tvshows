import { ShowInfo } from "../types";
import { useFetch } from "./useFetch";

const buildShow = (info: ShowInfo) => {
  const { show: { id, name, summary, genres, image: _image } } = info
  const image = _image?.medium || ""
  const show = { id, name, genres, image, summary }
  return show
}

export const useShowAPI = (searchTerm: string) => {
  const endpoint = "https://api.tvmaze.com/search/shows"
  const query = `?q=${encodeURIComponent(searchTerm)}`
  const url = `${endpoint}${query}`
  const { data, error, loading } = useFetch<ShowInfo[]>(url)
  const list = data && data.map(buildShow) || []
  const response = { data: list, error, loading }
  return response
}