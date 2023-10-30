import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NestedAbout: React.FC = () => {
  // http://localhost:5173/#/nested/about?q=ray#context
  const { hash, key, pathname, search, state } = useLocation()
  useEffect(() => {
    console.log('hash:', hash) // hash: #context
    console.log('key:', key) // key: p6vddmmr
    console.log('pathname:', pathname) // pathname: /nested/about
    console.log('search:', search) // search: ?q=ray
    console.log('state:', state) // state: { datas: { id: '1', name: 'QQ 產品' } }
  }, [])

  return (
    <>
      <h1>NestedAbout</h1>
    </>
  )
}

export default NestedAbout
