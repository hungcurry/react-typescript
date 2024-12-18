import { useState } from 'react'

function formatName({ firstName, lastName }) {
  return firstName + ' ' + lastName
}

const users = [
  {
    id: 1,
    firstName: 'Candy',
    lastName: 'Wang',
    description: '前端工程師',
    avatar: 'https://i.pravatar.cc/300?img=31',
  },
  {
    id: 2,
    firstName: 'Josephine',
    lastName: 'James',
    description: 'UI / UX 設計師',
    avatar: 'https://i.pravatar.cc/300?img=32',
  },
  {
    id: 3,
    firstName: 'Glen',
    lastName: 'Castillo',
    description: '後端工程師',
    avatar: 'https://i.pravatar.cc/300?img=33',
  },
]
// 練習區塊
function Example() {
  const [count, setCount] = useState(0)
  return (
    <>
      <ul className="list">
        {users.map((item) => {
          return (
            <li key={item.id}>
              <div className="card">
                <img src={item.avatar} alt="頭貼" />
                <div className="content">
                  <h3>
                    <b>{formatName(item)}</b>
                  </h3>
                  <p>{item.description}</p>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
// 區塊結束

export default Example
