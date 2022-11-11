import { FC, PropsWithChildren } from "react";

export type MessageProps = PropsWithChildren & {
  title: string;
  subtitle: string;
}

export const Message: FC<MessageProps> = (props) => { 
  const { title, subtitle, children } = props

  return (
    <section className="mt-8 md:mt-16">
      <div className="grid grid-cols-message w-full">
        {children}
        <div className="flex flex-col justify-center">
          <h5 className="text-xs md:text-base lg:text-lg text-slate-700 uppercase text-right">{subtitle}</h5>
          <h3 className="text-2xl md:text-5xl lg:text-6xl text-right">{title}</h3>
        </div>
      </div>
    </section>  
  )
}