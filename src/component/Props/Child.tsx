import { useState, useCallback, memo } from 'react'

// 定義子組件接收的數據類型
type TProps = {
  title?: string
  count?: number
  isActive?: boolean
  items?: string[]
  config?: {
    theme?: 'light' | 'dark'
    size?: 'sm' | 'md' | 'lg'
  }
  onUpdate: (count: number) => void
  onSubmit: (data: { id: number; name: string }) => void
}
// 使用 memo 優化組件重渲染
const Child = memo(({ title, count, isActive, items, onUpdate, onSubmit }: TProps) => {
  const [emitData] = useState({ id: 1, name: 'test' })

  const handleEmitClick = useCallback(() => {
    onUpdate((count ?? 0) + 1)
  }, [count, onUpdate])

  const handleEmitSubmit = useCallback(() => {
    onSubmit(emitData)
  }, [emitData, onSubmit])

  return (
    <div className="child-component">
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button className={`btn ${isActive ? 'active' : ''}`} onClick={handleEmitClick} type="button">
        增加
      </button>
      <hr />
      {/* prettier-ignore */}
      <ul>
        {
          items?.map((item, index) => 
            <li key={index}>{item}</li>
          )
        }
      </ul>
      <button onClick={handleEmitSubmit} type="button" className="btn">
        提交
      </button>

      <style>
        {`
          .btn {
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
          }
          .active {
            color: red;
          }`}
      </style>
    </div>
  )
})
// 添加組件名稱以便調試
Child.displayName = 'Child'

export default Child
