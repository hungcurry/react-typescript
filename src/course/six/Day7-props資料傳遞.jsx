import { useState } from 'react'

// props 練習
// function Child(props) {
// console.log(props)
//   return <p>Hello, {props.name}</p>
// }

function Child({ name }) {
  return <p>Hello, {name}</p>
}

function Example() {
  return (
    <>
      <div>
        <Child name={"curry"} />
      </div>
    </>
  )
}

export default Example
