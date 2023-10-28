import { useState, useEffect } from 'react'
import {
  HashRouter,
  NavLink,
  Route,
  Routes,
  useNavigate,
  // 動態路由
  useParams,
  Outlet,
} from 'react-router-dom'

// 練習區塊
function Example() {
  const Todo = () => {
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()

    const handleLoginOut = () => {
      if (!isLogin) {
        navigate('/login')
      }
    }

    return (
      <>
        <p>這是 Todo 頁面</p>
        <button type="button" onClick={ () => handleLoginOut() }>
          登出
        </button>
      </>
    )
  }
  const Login = () => {
    return <p>這是登入頁面</p>
  }
  const Register = () => {
    return <p>這是註冊頁面</p>
  }
  // 動態路由
  const Post = () => {
    return (
      <>
        <NavLink to="/post/postId:456">Post 詳細頁面</NavLink>
        <p>Post頁面</p>
        <Outlet />
      </>
    );
  };
  const PostId = () => {
    const params = useParams();
    return <p>Post ID 是 {params.postId}</p>;
  };

  return (
    <div className="container">
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
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routeview */}
        <Routes>
          <Route path="/" element={<h1>首頁</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />}>
            <Route path=":postId" element={<PostId />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>找不到頁面</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  )
}
// 區塊結束

export default Example
