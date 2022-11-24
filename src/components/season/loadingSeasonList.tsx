import { LoadingSeason } from "./loadingSeason"

export const LoadingSeasonList = () => {
  const loadingSeasonList = "abcdefghij".split("").map((value) => <LoadingSeason key={value} />)

  return (
    <section className="col-span-4 mt-8">
      <header>
        <h2 className="text-3xl text-bgc-6">Seasons</h2>
      </header>
      <main className="mt-10 grid gap-14 justify-around grid-cols-cast">
        {loadingSeasonList}
      </main>
    </section>
  )
}