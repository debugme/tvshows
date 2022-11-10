import { LoadingShow } from ".."

export const LoadingShowList = () => {
  const loadingShowList = Array(10).fill(null).map(() => <LoadingShow />)
  return (
    <section className="bg-slate-300 mt-10 w-3/4 mx-auto grid gap-14 align-top justify-center grid-cols-home">
      {loadingShowList}
    </section>
  )
}