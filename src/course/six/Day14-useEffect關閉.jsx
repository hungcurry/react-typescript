import { useState, useEffect } from 'react'

function Child({ count, setCount }) {
  useEffect(() => {
    // 練習區塊
    const intervalId = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)

    // 關閉setInterval 要用函示回傳
    return () => clearInterval(intervalId)
    // 區塊結束
  }, [])

  return (
    <h1>Child 元件: {count}</h1> 
  )
}

function Example() {
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)

  const toggleHandler = () => {
    setShow(!show)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      Example 元件: {count}

      {show && <Child count={count} setCount={setCount} />}

      <button type="button" onClick={toggleHandler}>
        {show ? '隱藏' : '顯示'}
      </button>
    </div>
  )
}

export default Example
