import { useState, useEffect } from 'react'

function Example() {
  const [data, setData] = useState({})
  // 在 useEffect 中呼叫 API: https://dog.ceo/api/breeds/image/random，並把回傳的圖片 URL 顯示到畫面上
  useEffect(()=>{
    const url = "https://dog.ceo/api/breeds/image/random"
    async function fetchMyAPI() {
      const res = await fetch(url);
      const responseJson = await res.json()

      // const { message } = responseJson
      // console.log('message' ,message)
      setData(responseJson)
    }
    fetchMyAPI()
  },[])

  console.log("data" , data)// 會先拿到空值 再取得值
  return (
    <div>

{/* xxx && OOO 優先回傳 false  ／ 如果是xxx true ,就會往後做
xxx || OOO 優先回傳 true  ／  如果是xxx false ,就會往後做 */}

{/* data.message && <img src={data.message}
簡單來說，如果 data.message 存在且有值，這一行會渲染出一個圖片元素，
否則不會有任何渲染。
這樣可以確保在資料不完整或尚未從 API 取得之前不會造成渲染錯誤。 */}


{/* data.message || <img src={data.message}
在這個情況下，如果 data.message 是一個有效的圖片 URL，它會被當作真值，
這樣的話整個表達式會返回 data.message，而不是渲染圖片元素。 */}

      {
        data.message && <img src={data.message} />
      }
    </div>
  )
}

export default Example
