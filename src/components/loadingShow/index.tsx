import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const LoadingShow = () => {
  return (
    <section className="py-6 w-72 h-96 rounded-lg bg-slate-400 flex flex-col justify-start items-center">
      <Skeleton
        className="w-32 h-32"
        circle
        containerClassName="avatar-skeleton"
      />
      <div className="my-2"></div>
      <Skeleton className="w-52 h-6 py-3" />
      <Skeleton className="w-52 h-6 py-3" />
      <Skeleton className="w-52 h-6 py-3" />
      <Skeleton className="w-52 h-6 py-3" />
      <Skeleton className="w-52 h-6 py-3" />
      <Skeleton className="w-52 h-6 py-3" />
    </section>
  )
}