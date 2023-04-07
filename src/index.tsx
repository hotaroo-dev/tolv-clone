import React from 'react'
import ReactDOM from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import Token from './token'
import router from './router'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HelmetProvider>
      <RecoilRoot>
        <Token />
        <Toaster
          position="bottom-right"
          reverseOrder={true}
          toastOptions={{
            duration: 3000,
            style: {
              fontFamily: 'sans-serif',
              borderRadius: '6px',
              backgroundColor: '#fff6',
              backdropFilter: 'blur(6px)'
            }
          }}
        />
        <RouterProvider router={router} />
      </RecoilRoot>
    </HelmetProvider>
  </React.StrictMode>
)
