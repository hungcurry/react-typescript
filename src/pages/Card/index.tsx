import { useState, useEffect, Dispatch, SetStateAction, useRef } from 'react'
import { API_GET_DATA } from '@/global/constants.js'
import Edit from './components/Edit'
import List from './components/List'
import styles from '@/assets/scss/module/input.module.scss'


// 專案安裝
// ----
// pnpm install uuid
// pnpm install @types/uuid
// pnpm install json-server
// pnpm install --save @types/node
// pnpm install prop-types
// ---

/* React.Dispatch 是React庫中的一個型別，
用於表示可以調用的函數，這個函數通常是用來更新React元件的狀態的。
它的完整型別是 React.Dispatch<T>，
其中 T 是狀態的型別，即你要更新的狀態的型別。

React.SetStateAction 是一個泛型型別，
用於描述狀態更新的不同方式。它可以是一個值，
也可以是一個函數，具體取決於你如何想要更新狀態。

在這個情況下，React.Dispatch<React.SetStateAction<Itemtype[]>> 型別表示一個函數，可以接受一個 Itemtype[] 型別的參數（即狀態的新值），
並用它來更新React元件的狀態。 Itemtype[] 表示狀態的型別是一個陣列，其中 Itemtype 是陣列中的元素型別。

總之，這個型別告訴我們，addData 是一個函數，可以用來更新一個 Itemtype[] 型別的狀態。 */

export interface Itemtype {
  note: string
  date: string
  time: string
  id: string
}
async function fetchGetData(setData: Dispatch<SetStateAction<Itemtype[]>>) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  // console.log("data" ,data)
  setData(data)
}
async function fetchSetData(data: Itemtype[]) {
  await fetch(API_GET_DATA, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    // 格式傳出去要一個物件包裹
    body: JSON.stringify({ data }),
  })
}
const Card: React.FC = () => {
  const [data, setData] = useState<Itemtype[]>([])

  // 因為一開始預設是空陣列,所以每次重新整理的時候.useEffect會執行一次
  // 就把資料清空了 但這不是我們要的,所以要做一個狀態
  const submitStatus = useRef(false)
  // console.log('submitStatus', submitStatus)

  // post
  useEffect(() => {
    // 沒有要按送出 就中止程式 防止重新整理useEffect 重新觸發讓資料變空
    if (!submitStatus.current) return

    console.log(`dataChange` , data);
    
    fetchSetData(data)
      .then(() => {
        // 完成後再執行某些事情
        submitStatus.current = false
      })
      .catch((error) => {
        console.log(`error`, error)
      })
  }, [data])

  // initdata
  useEffect(() => {
    fetchGetData(setData)
  }, [])

  return (
    <div className={styles.app}>
      <Edit addData={setData} submitStatus={submitStatus} />
      <List listData={data} deleteData={setData} submitStatus={submitStatus} />
      <p className="bg-red-500 text-white">Hello Vite + React + Tailwind CSS!</p>
    </div>
  )
}

export default Card
