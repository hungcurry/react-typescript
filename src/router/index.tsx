import { useRoutes } from 'react-router-dom';
// ===================
// ... page ...
// ===================
import Home from '@/pages/Home.tsx'
import Nested from "@/pages/Nested/index.tsx";
import NestedAbout from '@/pages/Nested/NestedAbout.tsx';
import NestedProducts from '@/pages/Nested/NestedProducts.tsx';

import Card from '@/pages/Card/index.tsx'
import Reduex from '@/pages/Reduex.tsx'

// RAY react
import UseState from '@/pages/UseState.tsx'
import UseEffect from '@/pages/UseEffect.tsx'
import UseContext from '@/pages/UseContext.tsx'
import UseMemo from '@/pages/UseMemo.tsx'
import UseCallback from '@/pages/UseCallback.tsx'
import UseReducer from '@/pages/UseReducer.tsx'
import UseRef from '@/pages/UseRef.tsx'
import CustomHook from '@/pages/CustomHook.tsx'
import Fragments from '@/pages/Fragments.tsx'

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
];

const AppRoutes: React.FC = () => {
  return useRoutes(routes);
}
export default AppRoutes;
