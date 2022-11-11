import { LoadingShow } from ".."

export const LoadingShowList = () => {
  const loadingShowList = "abcdefghij".split("").map((value) => <LoadingShow key={value}/>)
  return (
    <section className="bg-slate-300 mt-10 w-3/4 mx-auto grid gap-14 align-top justify-center grid-cols-home">
      {loadingShowList}
    </section>
  )
}