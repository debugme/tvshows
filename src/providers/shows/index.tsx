import {
  createContext,
  useState,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
} from "react";

import { Show, ShowsValue } from "../../types";
import { useShowsAPI } from "../../hooks";

const initialValue = {
  searchTerm: "",
  setSearchTerm: (_: string) => { },
  showList: [],
  setShowList: (_: Show[]) => { },
  isLoading: false,
  failure: null
}

const ShowsContext = createContext<ShowsValue>(initialValue)

export const ShowsProvider: FC<PropsWithChildren> = (props) => {
  const {
    searchTerm: initialSearchTerm,
    showList: initialShowList,
    isLoading: initialIsLoading,
    failure: initialFailure
  } = initialValue

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [showList, setShowList] = useState<Show[]>(initialShowList)
  const [isLoading, setIsLoading] = useState(initialIsLoading)
  const [failure, setFailure] = useState(initialFailure)

  const { data, error, loading } = useShowsAPI(searchTerm)
  
  // console.group()
  // console.log("searchTerm is ", searchTerm);
  // console.log("data is ", data);
  // console.log("error is ", error);
  // console.log("loading is ", loading);
  // console.groupEnd()

  useEffect(() => {
    if (data)
      setShowList(data)
    if (error)
      setFailure(error)
    setIsLoading(loading)
  }, [loading])

  const value = {
    searchTerm,
    setSearchTerm,
    showList,
    setShowList,
    isLoading,
    failure
  }

  const { children } = props
  const { Provider } = ShowsContext

  return (
    <Provider value={value}>{children}</Provider>
  )
}

export const useShows = () => useContext(ShowsContext);