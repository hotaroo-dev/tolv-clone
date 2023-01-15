import React, { useLayoutEffect } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import Header from './components/header'
import Router from './router'

const App: React.FC = () => {
  return (
    <Container>
      <HelmetProvider>
        <Header />
        <Router />
      </HelmetProvider>
    </Container>
  )
}

const Container = ({ children }: { children: JSX.Element }) => {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    window.scroll(0, 0)
  }, [pathname])

  return children
}

export default App
