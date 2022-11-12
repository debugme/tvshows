import { FC, PropsWithChildren } from "react";

export type MessageProps = PropsWithChildren & {
  title: string;
  subtitle: string;
}

export const Message: FC<MessageProps> = (props) => {
  const { title, subtitle, children } = props

  return (
    <section className="p-8 md:p-12 lg:p-20 mt-10 bg-slate-400 rounded-xl min-h-[220px] grid place-content-center">
      <div className="grid grid-cols-message w-full">
        <div className="pr-4 flex flex-col justify-center items-end text-slate-600">
          <h5 className="text-xs md:text-base lg:text-lg uppercase">{subtitle}</h5>
          <h3 className="text-2xl md:text-4xl lg:text-5xl">{title}</h3>
        </div>
        <div className="">{children}</div>
      </div>
    </section>
  )
}