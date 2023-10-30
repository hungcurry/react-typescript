// import { Route, Routes } from 'react-router-dom'
import Router from '@/router/index';
// ===================
// ... layout ...
// ===================
import Header from './Header.tsx'
import Footer from './Footer.tsx'
// ===================
// ... page ...
// ===================
// import Home from '@/pages/Home.tsx'
// import Nested from "@/pages/Nested/index.tsx";
// import NestedAbout from '@/pages/Nested/NestedAbout.tsx';
// import NestedProducts from '@/pages/Nested/NestedProducts.tsx';

// import Card from '@/pages/Card/index.tsx'
// import Reduex from '@/pages/Reduex.tsx'

// RAY react
// import UseState from '@/pages/UseState.tsx'
// import UseEffect from '@/pages/UseEffect.tsx'
// import UseContext from '@/pages/UseContext.tsx'
// import UseMemo from '@/pages/UseMemo.tsx'
// import UseCallback from '@/pages/UseCallback.tsx'
// import UseReducer from '@/pages/UseReducer.tsx'
// import UseRef from '@/pages/UseRef.tsx'
// import CustomHook from '@/pages/CustomHook.tsx'
// import Fragments from '@/pages/Fragments.tsx'

const Default: React.FC = () => {
  return (
    <>
      <Header />
      <hr />
      <div className="container">
        {/* 使用tsx html  */}
        <div className='nested'>
          {/* <Routes> */}
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/nested" element={ <Nested /> } >
              <Route path="about" element={ <NestedAbout /> } />
              <Route path="products" element={ <NestedProducts /> } />
            </Route>  */}

            {/* <Route path="/card" element={<Card />} /> */}
            {/* <Route path="/reduex" element={<Reduex />} /> */}

            {/* <Route path="/useState" element={<UseState />} /> */}
            {/* <Route path="/useEffect" element={<UseEffect />} /> */}
            {/* <Route path="/useContext" element={<UseContext />} /> */}
            {/* <Route path="/useMemo" element={<UseMemo />} /> */}
            {/* <Route path="/useCallback" element={<UseCallback />} /> */}
            {/* <Route path="/useReducer" element={<UseReducer />} /> */}
            {/* <Route path="/useRef" element={<UseRef />} /> */}
            {/* <Route path="/customHook" element={<CustomHook />} /> */}
            {/* <Route path="/fragments" element={<Fragments />} /> */}
          {/* </Routes> */}
        </div>

        {/* ------------------------------ */}

        {/* 使用物件index.tsx  */}
        <Router />
      </div>
      <Footer />
    </>
  )
}

export default Default
