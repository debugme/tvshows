import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

import { Header } from "./header";
import { Footer } from "./footer";

export const Layout = () => (
  <Fragment>
    <Header />
    <SkeletonTheme
      baseColor="#CBD6E1"
      highlightColor="#94A3B8"
      borderRadius="0.5rem"
      duration={4}
    >
      <main className="bg-slate-300 overflow-scroll px-8 py-8 flex flex-col">
        <Outlet />
      </main>
    </SkeletonTheme>
    <Footer />
  </Fragment>
)