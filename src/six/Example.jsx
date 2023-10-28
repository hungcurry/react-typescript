import { useState } from 'react'

// 子元件
function Main({children}) {
  return <main> Main {children}</main>
}
function Child() {
  return <div> Child </div>
}

function Example() { // 父元件
  const [count, setCount] = useState(0)
  return(
    <>
    <Main>
      <Child />
    </Main>
    </>
  )
}

export default Example
