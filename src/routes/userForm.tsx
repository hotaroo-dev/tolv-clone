import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { AnimatePresence, motion } from 'framer-motion'
import axiosClient from '../helpers/axios-client'

interface IUser {
  id: number | null
  name: string
  email: string
  password: string
}

const UserForm: React.FC = () => {
  const navigate = useNavigate()
  const { userId } = useParams()
  const [errors, setErrors] = useState(null)
  const [user, setUser] = useState<IUser>({
    id: null,
    name: '',
    email: '',
    password: ''
  })

  if (userId) {
    // prettier-ignore
    useEffect(() => {
      (async () => {
        const { data } = await axiosClient.get(`/users/${userId}`)
        setUser(data)
      })()
    }, [])
  }

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget as HTMLFormElement)
    const payload = Object.fromEntries(formData)

    setErrors(null)

    if (userId) {
      axiosClient
        .put(`/users/${userId}`, { ...payload, id: userId })
        .then(() => {
          navigate('/users')
          toast.success('Successfully updated!')
        })
        .catch(err => {
          const { response } = err
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    } else {
      axiosClient
        .post(`/users`, payload)
        .then(() => {
          navigate('/users')
          toast.success('Successfully created!')
        })
        .catch(err => {
          const { response } = err
          if (response && response.status === 422) {
            setErrors(response.data.errors)
          }
        })
    }
  }

  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <label>
          <span>Username</span>
          <input
            name="name"
            aria-label="User Name"
            type="text"
            defaultValue={user.name}
          />
        </label>
        <label>
          <span>Email Address</span>
          <input
            name="email"
            aria-label="E-mail"
            type="email"
            defaultValue={user.email}
          />
        </label>
        <label>
          <span>Password</span>
          <input name="password" aria-label="Password" type="password" />
        </label>
        <p>
          <button>{userId ? 'Save' : 'Create'}</button>
        </p>
      </form>

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
  )
}

export default UserForm
