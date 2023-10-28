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
  <>
  <form  className="p-4" 
  style={{
    backgroundSize: 'cover',
    background: "url('https://images.unsplash.com/photo-1600303881706-b8a373dc73c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80') no-repeat",
  }}>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email address</label>
      <input type="email" className="form-control" id="email" />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password" />
    </div>
    
    <button type="submit" className="btn">Submit</button>
  </form>
  </>
)
// 區塊結束

export default element
