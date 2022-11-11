import { Empty } from "./empty"

export const NoResult = () => {
  return (
    <section className="border border-red-400 h-[25vh] md:h-[35vh] lg:h-[40vh] xl:h-[45vh] mt-[-100px] lg:mt-[-80px] xl:mt-12 w-full sm:w-3/4 mx-auto flex justify-around align-middle">
      <Empty className="mt-40 w-1/2 flex-grow h-auto border border-blue-400" />
      <div className="w-1/2 flex-grow grid place-content-center place-items-start">
        <h2 className="text-sm md:text-md lg:text-base mt-3 text-slate-700 uppercase border border-green-400">Search again</h2>
        <h1 className="text-3xl md:text-4xl lg:text-5xl border border-orange-400">Oh dear!</h1>
      </div>
    </section>
  )
}