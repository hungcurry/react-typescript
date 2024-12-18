// 定義 Props 型別
type TProps = {
  name: string // 必填
  age?: number // 可選
}

// 元件定義
const Child = ({ name, age }: TProps) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  )
}

// 使用 Greeting 元件
const Parent = () => {
  return (
    <div>
      <Child name="Alice" />
      <Child name="Bob" age={25} />
    </div>
  )
}

export default Parent
