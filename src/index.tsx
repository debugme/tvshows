import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ShowProvider } from './providers';
import { Home, Info } from "./pages";
import { Layout } from './components';

import './index.css'

const HomeRoute = {
  path: '/',
  element: <Home />
}

const InfoRoute = {
  path: '/:id',
  element: <Info />
}

const routeList = [{
  element: <Layout />,
  children: [HomeRoute, InfoRoute]
}]

const router = createBrowserRouter(routeList)
const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <StrictMode>
    <ShowProvider>
      <RouterProvider router={router} />
    </ShowProvider>
  </StrictMode >
);