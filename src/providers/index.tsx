import {
  createContext,
  useState,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";

import { Nullable, Show, ShowValue } from "../types";
import { useShowAPI, useDebounce } from "../hooks";

const initialValue = {
  searchTerm: "",
  setSearchTerm: (_: string) => { },
  showList: [],
  setShowList: (_: Show[]) => { },
  isLoading: false,
  failure: null
}

const ShowContext = createContext<ShowValue>(initialValue)

export const ShowProvider: FC<PropsWithChildren> = (props) => {
  const {
    searchTerm: initialSearchTerm,
    showList: initialShowList,
    isLoading: initialIsLoading,
    failure: initialFailure
  } = initialValue

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [showList, setShowList] = useState<Show[]>(initialShowList)
  const [isLoading, setIsLoading] = useState(initialIsLoading)
  const [failure, setFailure] = useState<Nullable<unknown>>(initialFailure)
  const debouncedSearchTerm = useDebounce(searchTerm.trim(), 300)

  const { data, error, loading } = useShowAPI(debouncedSearchTerm)

  useEffect(() => {
    setShowList(data || [])
    setFailure(error || null)
    setIsLoading(loading)
  }, [debouncedSearchTerm, error, loading])

  const value = {
    searchTerm,
    setSearchTerm,
    showList,
    setShowList,
    isLoading,
    failure
  }

  const { children } = props
  const { Provider } = ShowContext

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export const useShow = () => useContext(ShowContext);