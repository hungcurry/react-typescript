import { useState , useEffect} from 'react'
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";

// 練習區塊
function Example() {

  const Todo = () => {
    return <p>這是 Todo 頁面</p>;
  };
  const Login = () => {
    return <p>這是登入頁面</p>;
  };
  const Register = () => {
    return <p>這是註冊頁面</p>;
  };


  return (
    <div className='container'>
      {/* router modal */}
      <HashRouter>
        {/* NavLink */}
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routeview */}
        <Routes>
          <Route path="/" element={<h1>首頁</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>找不到頁面</p>
            </main>
          } />
        </Routes>
      </HashRouter>
    </div>
  );
}
// 區塊結束

export default Example
