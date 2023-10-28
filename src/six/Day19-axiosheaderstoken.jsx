import { useState, useEffect } from 'react'
import axios from 'axios'

// 練習區塊
function Example() {
  const [data , setData] = useState([])
  const getData = () => {
    // 練習區
    const token = 'rqqWQlTafiYotxQ8x3dy3BGt0ES2'
    // 所有的 API 帶上 Authorization Token
    // axios.defaults.headers.common['Authorization'] = `${token}`;

    axios.get('https://livejs-api.hexschool.io/api/livejs/v1/admin/react-practice/orders',{
      headers: {
        'Authorization': `${token}`
      }
    })
    .then((res) => {
      console.log(res.data.orders)
      setData(res.data.orders)
    })
    .catch((err) => {
      alert('資料取得失敗')
      console.log('error=>' ,err.message)
    })
  }
  return (
    <div>
      <button onClick={getData}> 取得資料 </button>
      <ul style={{ display : 'flex'}}>
        {
          data.map((item)=>{
            return(
              <li key={item.id}>
                <img src={ item.products[0].images } alt="" />
                <p>{ item.user.address }</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}
// 區塊結束
export default Example
