import { ShowList, Search } from "../../components"
import { useShows } from "../../providers"

export const Home = () => {
  const { showList, searchTerm, setSearchTerm, isLoading } = useShows()

  return (
    <section className="flex flex-col w-3/4 mx-auto border">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ShowList searchTerm={searchTerm} showList={showList} isLoading={isLoading}/>
    </section>
  )
}