import { useState, useEffect, useCallback } from 'react'

const Child = ({ count, getData }: { count: number; getData: () => void }) => {
  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{count}</div>
}

const UseCallback: React.FC = () => {
  const [count, setCount] = useState(0)

  // 無限循環事件。
  // 因為 count 被更新，因此觸發 re-render App 元件
  // App 元件因為被重新渲染，因此 getData 與 count 也跟著被重新生成並且傳遞給 Child 元件
  // Child 的 useEffect 發現 getData 被重新生成，因此會再次執行 getData 函式
  // const getData = () => {
  //   setTimeout(() => {
  //     setCount((pre) => pre + 1)
  //   }, 1000);
  // }

  // 正解
  const getData = useCallback(() => {
    setTimeout(() => {
      setCount((pre) => pre + 1)
    }, 1000)
  }, [])
  console.log(`getData`, getData)

  return (
    <>
      <Child count={count} getData={getData} />
    </>
  )
}

export default UseCallback
