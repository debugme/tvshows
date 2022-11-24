import Skeleton from "react-loading-skeleton";

export const LoadingSeason = () => {
  return (
    <section className="py-6 w-infoCardWidth h-infoCardHeight rounded-lg bg-secondary-400 flex flex-col justify-start items-center">
      <Skeleton
        className="w-32 h-32"
        circle
        containerClassName="avatar-skeleton"
      />
      <div className="my-2"></div>
      <Skeleton className="mt-1 w-36 h-6 py-1" />
      <Skeleton className="mt-3 w-36 h-6 py-1" />
      <Skeleton className="mt-3 w-36 h-6 py-1" />
    </section>
  )
}