import { FC, Fragment } from "react"
import { Route, Routes } from "react-router-dom";

import { Home, Info } from "./pages";

export const Application: FC = () => {
  return (
    <Fragment>
      <header className="bg-slate-700 drop-shadow-2xl" />
      <main className="bg-slate-300 overflow-scroll px-8 py-8 flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Info />} />
        </Routes>
      </main>
      <footer className="bg-slate-700" />
    </Fragment>
  )
}

 