import { LoadingCast } from "./loadingCast"

export const LoadingCastList = () => {
  const loadingCastList = "abcdefghij".split("").map((value) => <LoadingCast key={value} />)

  return (
    <section className="col-span-4 mt-8">
      <header>
        <h2 className="text-3xl text-heading-fg">Cast</h2>
      </header>
      <main className="mt-10 grid gap-14 justify-around grid-cols-cast">
        {loadingCastList}
      </main>
    </section>
  )
}