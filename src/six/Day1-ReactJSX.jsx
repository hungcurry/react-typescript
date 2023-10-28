import { useState } from 'react'


// 練習區塊ㄧ
function formatName({firstName , lastName}){
  return `${firstName} ${lastName}`
}
// 區塊結束

const user = {
  firstName: 'Candy',
  lastName: 'Wang',
  description: '前端工程師'
};
// 練習區塊二
const element = (<h1>{formatName(user)} 是一位 {user.description}</h1>);
// 區塊結束

export default element
