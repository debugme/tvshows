import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { Application } from './application';
import { ShowsProvider } from './providers';

import './index.css'

const root = createRoot(document.getElementById('root')!)

const node = (
  <StrictMode>
    <BrowserRouter>
      <ShowsProvider>
        <Application />
      </ShowsProvider>
    </BrowserRouter>
  </StrictMode>
)

root.render(node)
