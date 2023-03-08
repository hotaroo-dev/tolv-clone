import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { tokenState } from './atom'

const Token: React.FC = () => {
  const token = useRecoilValue(tokenState)

  useEffect(() => {
    if (token) {
      localStorage.setItem('ACCESS_TOKEN', token)
    } else {
      localStorage.removeItem('ACCESS_TOKEN')
    }
  }, [token])

  return null
}

export default Token
