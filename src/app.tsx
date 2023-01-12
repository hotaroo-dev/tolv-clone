import React, { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './components/header'
import Router from './router'

const App: React.FC = () => {
  return (
    <Container>
      <div className="app h-[150vh]">
        <Header />
        <Router />
      </div>
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
