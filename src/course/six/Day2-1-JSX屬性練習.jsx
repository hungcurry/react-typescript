import { useState } from 'react'

// 練習區塊ㄧ
function formatName({ firstName, lastName }) {
  return `${firstName} ${lastName}`
}
// 區塊結束

const user = {
  firstName: 'Candy',
  lastName: 'Wang',
  description: '前端工程師',
  avatar: 'https://i.pravatar.cc/300?img=31',
}
// 練習區塊二
const element = (
  <div className="card">
    <img src={user.avatar} alt="頭貼" />
    <div className="content">
      <h3>
        <b>{formatName(user)}</b>
      </h3>
      <p>{user.description}</p>
      <p className="text-blue">會每天練習 React 1 次！</p>
    </div>
  </div>
)
// 區塊結束

export default element
