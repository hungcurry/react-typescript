import { useState } from 'react'

type TProps<T> = {
  name: T
}
const Child = ({ name }: TProps<string>) => {
  return <p>Props:{name}</p>
}

const Parent = () => {
  // 單數類型 會自動推導
  const [count] = useState(1200)
  // 複數類型
  const [title] = useState<number | string>('白爛貓')

  return (
    <>
      <p>
        {title}賣 {count}元
      </p>
      <Child name={'curry'}></Child>
    </>
  )
}

export default Parent
