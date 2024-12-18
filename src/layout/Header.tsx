// import { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Header: React.FC = () => {
  // const [count, setCount] = useState(0)
  return (
    <>
      {/* NavLink */}
      <header>
        <div className="nav-link">
          {/* <NavLink to="/">
            <p>回到首頁</p>
          </NavLink> */}

          {/* <NavLink to="/nested">
            <p>Nested巢狀頁面</p>
          </NavLink> */}

          {/* <NavLink to="/reduex">
            <p>reduex頁面</p>
          </NavLink> */}

          {/* <NavLink to="/card">
            <p>card首頁</p>
          </NavLink> */}

          {/* <NavLink to="/useState">
            <p>useState頁面</p>
          </NavLink> */}

          {/* <NavLink to="/useEffect">
            <p>useEffect頁面</p>
          </NavLink> */}

          {/* <NavLink to="/useContext">
            <p>useContex頁面</p>
          </NavLink> */}

          {/* <NavLink to="/useMemo">
            <p>useMemo頁面</p>
          </NavLink> */}

          {/* <NavLink to="/useCallback">
            <p>useCallback頁面</p>
          </NavLink> */}

          {/* <NavLink to="/useReducer">
            <p>useReducer頁面</p>
          </NavLink> */}

          {/* <NavLink to="/useRef">
            <p>useRef頁面</p>
          </NavLink> */}

          {/* <NavLink to="/customHook">
            <p>customHook頁面</p>
          </NavLink> */}

          {/* <NavLink to="/fragments">
            <p>Fragments頁面</p>
          </NavLink> */}

          <NavLink to="/props">
            <p>Props頁面</p>
          </NavLink>

          <NavLink to="/BaseTest">
            <p>BaseTest頁面</p>
          </NavLink>
        </div>
      </header>
    </>
  )
}

export default Header
