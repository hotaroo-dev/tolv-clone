import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Router from './router'
import ScrollToTop from './scrollToTop'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RecoilRoot>
        <BrowserRouter basename="/tolv-clone/">
          <ScrollToTop />
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>
)
