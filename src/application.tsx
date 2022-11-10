import { FC, Fragment } from "react"
import { Route, Routes } from "react-router-dom";

import { Header } from "./components";
import { Home, Info } from "./pages";

export const Application: FC = () => {
  return (
    <Fragment>
      <Header />
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

 