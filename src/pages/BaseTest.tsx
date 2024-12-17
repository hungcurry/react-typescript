import { useState, useCallback } from 'react'
import Child from '@/component/Child'

// 定義父元件數據類型
type TparentData = {
  title?: string
  count?: number
  isActive?: boolean
  items?: string[]
  config?: {
    theme?: 'light' | 'dark'
    size?: 'sm' | 'md' | 'lg'
  }
}
// 定義初始數據
const initialState: TparentData = {
  title: 'React 父子元件範例',
  count: 0,
  isActive: true,
  items: ['Apple', 'Banana', 'Cherry'],
  config: {
    theme: 'light',
    size: 'md',
  },
}
const Parent = () => {
  const [parentData, setParentData] = useState(initialState)

  // 使用 useCallback 優化事件處理函數
  const handleUpdate = useCallback((newCount: number) => {
    console.log('父接收資料 newCount:', newCount)
    setParentData((prev) => ({ ...prev, count: newCount }))
  }, [])

  const handleSubmit = useCallback((newData: { id: number; name: string }) => {
    console.log('父接收資料 newData:', newData)
  }, [])

  return (
    <div>
      <Child {...parentData} onUpdate={handleUpdate} onSubmit={handleSubmit} />
    </div>
  )
}

export default Parent
