import React, { useReducer, createContext, useContext } from 'react'

// 定義動作的型別
type Action = { type: 'increment' } | { type: 'decrement' }
const reducer = (state: AppState, action: Action): AppState => {
  console.log('state', state)
  console.log('action', action)
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      }
    case 'decrement':
      return {
        count: state.count - 1,
      }
    default:
      return state
  }
}
// 定義狀態的型別
interface AppState {
  count: number
}
// 初始狀態
// 請注意通常初始的狀態會是一個物件。
const initState: AppState = {
  count: 0,
}
const CountContext = createContext<
  { state: AppState; dispatch: React.Dispatch<Action> } | undefined
>(undefined)

const Child: React.FC = () => {
  const { state, dispatch } = useContext(CountContext)! // 使用驚嘆號表示確保不會為空
  // console.log('state', state)
  // console.log('dispatch', dispatch)

  const decrement = () => {
    dispatch({ type: 'decrement' })
  }
  const increment = () => {
    dispatch({ type: 'increment' })
  }

  return (
    <div>
      <div>Count: {state.count}</div>
      <br />
      <button
        type="button"
        className="bg-blue-400 p-4 text-white"
        onClick={decrement}
      >
        Decrement(-)
      </button>{' '}
      |
      <button
        type="button"
        className="bg-blue-400 p-4 text-white"
        onClick={increment}
      >
        Increment(+)
      </button>
    </div>
  )
}

const UseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  // console.log(`useReducer`, useReducer(reducer, initState))
  return (
    <>
      <div>
        App Count: {state.count}
        <br />
        {/* Provider傳遞資料用 會搭配一個 value 屬性。 */}
        <CountContext.Provider value={{ state, dispatch }}>
          <Child />
        </CountContext.Provider>
      </div>
    </>
  )
}

export default UseReducer
