import { useRoutes } from 'react-router-dom'
// ===================
// ... page ...
// ===================
import Home from '@/pages/Home.tsx'
import Nested from '@/pages/Nested/index.tsx'
import NestedAbout from '@/pages/Nested/NestedAbout.tsx'
import NestedProducts from '@/pages/Nested/NestedProducts.tsx'
import Card from '@/pages/Card/index.tsx'
import Reduex from '@/pages/Reduex.tsx'
import Props from '@/pages/Props'

// RAY react
import UseState from '@/pages/Hook/UseState'
import UseEffect from '@/pages/Hook/UseEffect'
import UseContext from '@/pages/Hook/UseContext'
import UseMemo from '@/pages/Hook/UseMemo'
import UseCallback from '@/pages/Hook/UseCallback'
import UseReducer from '@/pages/Hook/UseReducer'
import UseRef from '@/pages/Hook/UseRef'
import CustomHook from '@/pages/Hook/CustomHook'
import Fragments from '@/pages/Hook/Fragments'

//System Test
import BaseTest from '@/pages/BaseTest.tsx'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  // 巢狀路由
  {
    path: '/nested',
    element: <Nested />,
    children: [
      {
        path: 'about',
        element: <NestedAbout />,
      },
      {
        path: 'products',
        element: <NestedProducts />,
      },
    ],
  },
  {
    path: '/card',
    element: <Card />,
  },
  {
    path: '/reduex',
    element: <Reduex />,
  },
  // RAY react
  {
    path: '/useState',
    element: <UseState />,
  },
  {
    path: '/useEffect',
    element: <UseEffect />,
  },
  {
    path: '/useContext',
    element: <UseContext />,
  },
  {
    path: '/useMemo',
    element: <UseMemo />,
  },
  {
    path: '/useCallback',
    element: <UseCallback />,
  },
  {
    path: '/useReducer',
    element: <UseReducer />,
  },
  {
    path: '/useRef',
    element: <UseRef />,
  },
  {
    path: '/customHook',
    element: <CustomHook />,
  },
  {
    path: '/fragments',
    element: <Fragments />,
  },
  {
    path: '/props',
    element: <Props />,
  },
  // ------
  {
    path: '/baseTest',
    element: <BaseTest />,
  },
]

const AppRoutes: React.FC = () => {
  return useRoutes(routes)
}
export default AppRoutes
