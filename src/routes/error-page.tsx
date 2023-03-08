import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage: React.FC = () => {
  const error = useRouteError() as any

  return (
    <div className="font-sans h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-2xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-gray-400">{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage
