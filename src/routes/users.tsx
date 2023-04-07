import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { IUser } from '../atom'
import { Delete, Edit } from '../components/svg'
import axiosClient from '../helpers/axios-client'

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([])

  // prettier-ignore
  useEffect(() => {
    (async () => {
      const {
        data: { data }
      } = await axiosClient.get('/users')
      setUsers(data)
    })()
  }, [])

  const deleteUser = (id: string) => {
    if (!confirm('Please confirm you want to delete this user')) {
      return
    }
    setUsers(users => users.filter(user => user.id !== id))

    toast.success('Successfully deleted!')
    axiosClient.delete(`/users/${id}`)
  }

  return (
    <div className="font-sans max-w-7xl spacing pt-4 hidden md:block">
      <div className="flex justify-end mb-3">
        <Link to="/users/new">
          <button className="py-1 px-4 bg-black text-white rounded-[4px] active:translate-y-[1px] duration-200">
            <span className="text-lg mr-2">&#43;</span>Add new
          </button>
        </Link>
      </div>
      <table className="flex flex-col bg-white rounded-[5px] border border-[rgb(210,220,220)] mb-12">
        <thead className="bg-[rgb(245,245,245)]">
          <tr className="font-semibold grid grid-cols-7 py-[10px] px-5">
            <th className="text-start">ID</th>
            <th className="text-start col-span-3">Name</th>
            <th className="text-start">Date added</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            const date = new Date(user.created_at)
            const options: Intl.DateTimeFormatOptions = {
              month: 'long',
              year: 'numeric',
              day: 'numeric'
            }

            const formatDate = Intl.DateTimeFormat('en-US', options).format(
              date
            )
            return (
              <tr
                key={user.id}
                className="grid grid-cols-7 py-[10px] px-5 items-center border-t border-[rgb(210,220,220)]"
              >
                <td>{user.id}</td>
                <td className="col-span-3 flex gap-4">
                  <div className="w-14 h-14 bg-indigo-500 rounded-full">
                    <img
                      className="w-full rounded-full object-cover -translate-y-1"
                      src={`https://api.dicebear.com/5.x/open-peeps/svg?seed=${
                        user?.id + 12
                      }`}
                      alt="user avatar"
                    />
                  </div>
                  <div className="mt-2">
                    <h2 className="font-semibold leading-tight">{user.name}</h2>
                    <p className="text-gray-500">{user.email}</p>
                  </div>
                </td>
                <td>{formatDate}</td>
                <td className="col-span-2 flex justify-end">
                  <div className="flex justify-start gap-4 text-base">
                    <button className="active:translate-y-[1px] duration-200">
                      <Link to={`/users/${user.id}`}>
                        <Edit />
                      </Link>
                    </button>
                    <button
                      className="active:translate-y-[1px] duration-200"
                      onClick={() => deleteUser(user.id)}
                    >
                      <Delete />
                    </button>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Users
