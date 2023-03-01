import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { RecoilRoot } from 'recoil'
import Header from './components/header'
import Router from './router'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <HelmetProvider>
        <Header />
        <Router />
      </HelmetProvider>
    </RecoilRoot>
  )
}

export default App
