import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { tokenState } from '../atom'

const Layout: React.FC = () => {
  const token = useRecoilValue(tokenState)

  if (token) {
    return <Navigate to="/" />
  }

  return (
    <>
      <div className="logo text-center pt-5">
        <Link to="/">
          T<span>o</span>lv
        </Link>
      </div>
      <Outlet />
    </>
  )
}

export default Layout
