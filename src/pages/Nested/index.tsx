import { Outlet, Link } from 'react-router-dom'

const Nested: React.FC = () => {
  return (
    <>
      <nav className="px-5 flex items-center h-[60px] bg-violet-700">
        <h2 className="mr-auto text-2xl">Admin</h2>
        <ul className="flex">
          <li className="mr-3">
            <Link
              className="border p-3 "
              to={{
                pathname: '/nested/about',
                search: 'q=ray',
                hash: '#context',
              }}
              state={{
                datas: {
                  id: '1',
                  name: 'QQ 產品',
                },
              }}
            >
              產品詳細
            </Link>
          </li>
          <li className="mr-3">
            <Link to="/nested/products" className="border p-3 ">
              nested-Products
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Nested
