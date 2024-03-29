import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { AnimatePresence, motion } from 'framer-motion'
import { useSetRecoilState } from 'recoil'
import { tokenState, userState } from '../atom'
import axiosClient from '../helpers/axios-client'

const Login: React.FC = () => {
  const setToken = useSetRecoilState(tokenState)
  const setUser = useSetRecoilState(userState)
  const [errors, setErrors] = useState<any>(null)

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const payload = Object.fromEntries(formData)

    setErrors(null)

    axiosClient
      .post('/login', payload)
      .then(({ data }) => {
        setToken(data.token)
        setUser(data.user)
        toast.success('Login Successful!')
      })
      .catch(err => {
        const { response } = err
        if (response && response.status === 422) {
          response.data.errors
            ? setErrors(response.data.errors)
            : setErrors({ message: [response.data.message] })
        }
      })
  }

  return (
    <>
      <Helmet>
        <title>Tolv - Sign in</title>
      </Helmet>

      <div className="form">
        <form onSubmit={handleSignIn}>
          <label>
            <span>Email Address</span>
            <input name="email" aria-label="E-mail" type="email" />
          </label>
          <label>
            <span>Password</span>
            <input name="password" aria-label="Password" type="password" />
          </label>
          <p>
            <button>Sign in</button>
          </p>
        </form>

        <p>
          New to Tolv? <Link to="/signup">Create an account.</Link>
        </p>

        <AnimatePresence>
          {errors && (
            <motion.div
              className="errors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {Object.keys(errors).map(key => (
                <p key={key}>{errors[key][0]}</p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Login
