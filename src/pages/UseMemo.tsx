import { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

const UseMemo: React.FC = () => {
  const [users, setUsers] = useState([])
  const [state, setState] = useState(false)

  const getUsers = async () => {
    const { data } = await axios.get('https://randomuser.me/api/?results=10')
    setUsers(data.results)
  }

  useEffect(() => {
    getUsers()
  }, [])

  const filterUsers = useMemo(() => {
    console.log(`useMemo`)
    return users.sort((a: { dob: { age: number } }, b: { dob: { age: number } }) => {
      if (state) {
        return a.dob.age < b.dob.age ? 1 : -1
      }
      return a.dob.age > b.dob.age ? 1 : -1
    })
  }, [state, users])

  return (
    <>
      <div>
        <button onClick={() => setState(true)} className="border-4 border-indigo-500">
          年齡大到小
        </button>
        <button onClick={() => setState(false)} className="border-4 border-indigo-500 ml-4">
          年齡小到大
        </button>
        <hr className="my-4" />
        <ul>
          {filterUsers.map(
            (user: {
              email: string
              name: {
                title: string
                first: string
                last: string
              }
              dob: {
                age: number
              }
            }) => (
              <li key={user.email}>
                {`Name：${user.name.title}.${user.name.first} ${user.name.last}, Age：${user.dob.age}`}
              </li>
            ),
          )}
        </ul>
      </div>
    </>
  )
}

export default UseMemo
