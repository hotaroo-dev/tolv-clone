import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, Navigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { tokenState, userState } from '../atom'
import axiosClient from '../helpers/axios-client'

const User: React.FC = () => {
  const [user, setUser] = useRecoilState(userState)
  const [token, setToken] = useRecoilState(tokenState)
  const isAdmin = user?.email.split('@')[0] === import.meta.env.VITE_ADMIN

  if (!token) {
    return <Navigate to="/login" />
  }

  const handleLogout = async () => {
    await axiosClient.post('/logout')
    setUser(null)
    setToken(null)
  }

  return (
    <>
      <Helmet>
        <title>Tolv - Account</title>
      </Helmet>
      <div className="h-screen max-w-screen-sm mx-auto flex flex-col justify-between py-14 px-10 normal-text">
        <div className="mt-4 flex gap-4">
          <div className="order-1 w-28 h-28 bg-indigo-500 rounded-full">
            <img
              className="w-full rounded-full object-cover -translate-y-1"
              src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${
                Number(user?.id) + 12
              }`}
              alt="avatar"
            />
          </div>
          <div className="flex-1 mt-2">
            <h2 className="text-2xl font-semibold mb-[2px]">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>
            {isAdmin && (
              <p className="text-gray-500 font-semibold uppercase">admin</p>
            )}
          </div>
        </div>
        <div className="flex gap-4 md:gap-8">
          {isAdmin && (
            <Link to="/users" className="w-full md:flex-1">
              <button className="button">Manage Users</button>
            </Link>
          )}
          <button className="md:max-w-xs mx-auto button" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      </div>
    </>
  )
}

export default User
