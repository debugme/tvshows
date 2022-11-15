import { useEffect, useState } from "react"
import { ShowList, Search } from "../components"
import { useShowAPI } from "../hooks"
import { Nullable, Show } from "../types"

const initialValue = {
  searchTerm: "",
  setSearchTerm: (_: string) => { },
  showList: [],
  setShowList: (_: Show[]) => { },
  isLoading: false,
  failure: null
}

export const Home = () => {
  const {
    searchTerm: initialSearchTerm,
    showList: initialShowList,
    isLoading: initialIsLoading,
    failure: initialFailure
  } = initialValue

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm)
  const [showList, setShowList] = useState<Show[]>(initialShowList)
  const [isLoading, setIsLoading] = useState(initialIsLoading)
  const [failure, setFailure] = useState<Nullable<Error>>(initialFailure)  

  const { data, error, loading } = useShowAPI(searchTerm)

  useEffect(() => {
    setShowList(data || [])
    setFailure(error || null)
    setIsLoading(loading)
  }, [loading, error])

  return (
    <section className="flex flex-col w-3/4 mx-auto">
      <Search 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        failure={failure}
        hits={showList.length}
        />
      <ShowList showList={showList} isLoading={isLoading} />
    </section>
  )
}