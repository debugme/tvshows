import { LoadingShow } from ".."

export const LoadingShowList = () => {
  const loadingShowList = "abcdefghij".split("").map((value) => <LoadingShow key={value}/>)
  return (
    <section className="mt-10 grid gap-14 justify-around grid-cols-home">
      {loadingShowList}
    </section>
  )
}