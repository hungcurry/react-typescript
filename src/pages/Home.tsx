import { useState } from 'react'

// type TitleProps = {
//   name: string
// }
interface TitleProps<T> {
  name: T
}
// 1.先從裡面看<TitleProps<string>
// 2.再看外層React.FC<>
const Title: React.FC<TitleProps<string>> = ({ name }) => {
  return <p>Props:{name}</p>
}

const Home: React.FC = () => {
  // 單數類型 會自動推導
  const [count] = useState(1200)
  // 複數類型
  const [title] = useState<number | string>('白爛貓')

  return (
    <>
      <p>
        {title}賣 {count}元
      </p>
      <Title name={'curry'}></Title>
    </>
  )
}

export default Home
