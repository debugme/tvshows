import { FC, PropsWithChildren } from "react";

export type MessageProps = PropsWithChildren & {
  title: string;
  subtitle: string;
}

export const Message: FC<MessageProps> = (props) => {
  const { title, subtitle, children } = props

  return (
    <section className="p-8 md:p-12 lg:p-20 mt-10 bg-bgc-4 rounded-xl h-[330px] grid place-content-center cursor-pointer">
      <div className="flex flex-wrap">
        <div className="max-h-[200px]">{children}</div>
        <div className="pr-4 text-bgc-6">
          <h5 className="text-xs md:text-base lg:text-lg uppercase">{subtitle}</h5>
          <h3 className="text-2xl md:text-4xl lg:text-5xl">{title}</h3>
        </div>
      </div>
    </section>
  )
}