import { CardList, Search } from "../../components"
import { useShows } from "../../providers"

export const Home = () => {
  const { showList, searchTerm, setSearchTerm } = useShows()

  return (
    <section className="flex flex-col">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CardList searchTerm={searchTerm} showList={showList} />
    </section>
  )
}