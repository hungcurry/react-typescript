import { useState } from 'react'

// 練習區塊
function Example() {
  // 宣告一個新的 state 變數，我們叫他「count」
  const [count, setCount] = useState(0)
  const addHandler = () => setCount(count + 1)
  const cutHandler = () => setCount(count - 1)
  
  return (
    <div>
      <p>現在的數字是{count}</p>
      <button onClick={addHandler}>加一</button>
      <button onClick={cutHandler}>減一</button>
    </div>
  )
}
// 區塊結束

export default Example
