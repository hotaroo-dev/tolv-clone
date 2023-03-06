import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { tokenState, userState } from '../atom'
import axiosClient from '../axios-client'
import Header from '../components/header'

const Root: React.FC = () => {
  const token = useRecoilValue(tokenState)
  const setUser = useSetRecoilState(userState)

  // prettier-ignore
  useEffect(() => {
    if (!token) return 
    (async () => {
      const { data } = await axiosClient.get('/user')
      setUser(data)
    })()
  }, [])

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Root
