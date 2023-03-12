import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userState } from '../atom'

const AdminLayout: React.FC = () => {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const user = useRecoilValue(userState)

  useEffect(() => {
    if (!user) return

    if (user.email.split('@')[0] !== import.meta.env.VITE_ADMIN) {
      navigate('/')
    } else {
      setShow(true)
    }
  }, [user])

  return (
    <>
      {show && (
        <div className="py-14">
          <Outlet />
        </div>
      )}
    </>
  )
}

export default AdminLayout
