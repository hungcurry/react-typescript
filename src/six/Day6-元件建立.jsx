import { useState } from 'react'
import PropTypes from 'prop-types';

// props type
// 此處確保 children 是一個合法的 React 元素
Main.propTypes = {
  children: PropTypes.node 
};
Child.propTypes = {
  children: PropTypes.node 
};

// 子元件
function Main({ children }) {
  console.log(children)
  return <main className="main"> Main {children}</main>
}
function SideBar() {
  return <aside className="sidebar"> Sidebar</aside>
}
function Child({ children }) {
  console.log(children)
  return <div className="child"> Child {children}</div>
}
function Child2() {
  return <div className="child2"> Child2</div>
}

function GrandSon() {
  return <div className="grandson"> grandson</div>
}

function Example() {
  // 父元件
  const [count, setCount] = useState(0)
  return (
    <>
      <div style={{ textAlign : "center"}}>
        <h1>Day6-元件建立</h1>
        <p>這是父元件 Example</p>
      </div>
      <div className="wrap" style={{display: 'flex'}}>
        <SideBar/>
        <Main>
          <Child>
            <GrandSon/>
          </Child>
          <Child2/>
        </Main>
      </div>
    </>
  )
}

export default Example
