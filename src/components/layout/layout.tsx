import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";

import { Header } from "./header";
import { Footer } from "./footer";
import { Scroller } from "..";

export const Layout = () => (
  <Fragment>
    <Header />
    <SkeletonTheme
      baseColor="#CBD6E1"
      highlightColor="#94A3B8"
      borderRadius="0.5rem"
      duration={4}
    >
      <main className="bg-bgc-3 overflow-scroll py-8">
        <section className="flex flex-col mx-auto pt-2 max-w-screen-2xl">
          <Outlet />
        </section>
      </main>
    </SkeletonTheme>
    <Footer />
    <Scroller />
  </Fragment>
)