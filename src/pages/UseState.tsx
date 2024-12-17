import { useState } from 'react'

const UseState: React.FC = () => {
  // const [count, setCount] = useState(0)

  const [str, setStr] = useState('Ray')
  const [num, setNum] = useState(0)
  const [bool, setBool] = useState(true)

  const [arr, setArr] = useState<number[]>([])
  const [obj, setObj] = useState<{ myName?: string }>({})
  return (
    <div>
      <p>String Value：{str}</p>
      <button type="button" onClick={() => setStr('QQ')}>
        更改
      </button>
      <hr />
      <p>Number Value：{num}</p>
      <button type="button" onClick={() => setNum(num + 1)}>
        更改
      </button>
      <hr />
      <p>Boolean Value：{bool.toString()}</p>
      <button type="button" onClick={() => setBool(!bool)}>
        更改
      </button>
      <hr />
      <p>Array Value：{JSON.stringify(arr)}</p>
      <button type="button" onClick={() => setArr([...arr, 1])}>
        更改
      </button>
      <hr />
      <p>Object Value：{JSON.stringify(obj)}</p>
      <button type="button" onClick={() => setObj({ ...obj, myName: 'QQ' })}>
        更改
      </button>
      <hr />
    </div>
  )
}

export default UseState
