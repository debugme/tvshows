import Skeleton from "react-loading-skeleton";

export const LoadingShow = () => {
  return (
    <section className="py-6 w-80 rounded-lg bg-bgc-4 flex flex-col justify-start items-center">
      <Skeleton
        className="w-32 h-32"
        circle
        containerClassName="avatar-skeleton"
      />
      <div className="my-2"></div>
      <Skeleton className="mt-1 w-52 h-6 py-3" />
      <Skeleton className="mt-3 w-52 h-6 py-3" />
      <Skeleton className="mt-3 w-52 h-6 py-3" />
    </section>
  )
}