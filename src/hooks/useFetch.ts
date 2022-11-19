import { useEffect, useState } from "react"

import { Nullable } from "../types"

export function useFetch<T>(url: string) {
  const [data, setData] = useState<Nullable<T>>(null)
  const [error, setError] = useState<unknown>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const fetcher = async () => {
    setData(null)
    setError(null)
    setLoading(true)
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
    } catch(error) {      
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetcher()
  }, [url])

  const response = { data, error, loading}
  return response
}