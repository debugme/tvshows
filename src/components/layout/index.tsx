import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../header";

export const Layout = () => (
  <Fragment>
    <Header />
    <main className="bg-slate-300 overflow-scroll px-8 py-8 flex flex-col">
      <Outlet />
    </main>
    <footer className="bg-slate-700" />
  </Fragment>
)