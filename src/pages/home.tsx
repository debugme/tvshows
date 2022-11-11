import { ShowList, Search } from "../components"
import { useShow } from "../providers"

export const Home = () => {
  const { showList, searchTerm, setSearchTerm, isLoading, failure } = useShow()

  return (
    <section className="flex flex-col w-3/4 mx-auto">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ShowList searchTerm={searchTerm} showList={showList} isLoading={isLoading} failure={failure} />
    </section>
  )
}