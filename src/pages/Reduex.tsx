import List from '@/component/List'
import { useEffect, useRef } from 'react'
// Redux引入store / type
import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, remoteAllTodo } from '@/store/todoSlice'

const Reduex: React.FC = () => {
  // 取store值
  const todoList = useSelector((state: RootState) => state.todoSlice.todoList)
  const submitStatus = useSelector((state: RootState) => state.todoSlice.submitStatus)
  // 設定action 需要打dispatch
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleAddTodo = () => {
    if (inputRef.current?.value === '') return
    dispatch(
      addTodo({
        id: Date.now(),
        name: inputRef.current?.value,
        status: false,
      })
    )
    // 這寫法! 只有TS有
    inputRef.current!.value = ''
  }
  const handleRemoteAllTodo = () => {
    dispatch(remoteAllTodo())
  }

  useEffect(() => {
    // 防止重新整理useEffect 重新觸發讓資料變空
    if (!submitStatus) return

    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList, submitStatus])

  return (
    <div>
      <div className="bg-indigo-500 p-5 h-screen">
        <div className="max-w-[768px] m-auto bg-white p-5">
          <h1 className="text-center text-2xl mb-4">React ToDoList</h1>
          <div className="flex">
            <input
              type="text"
              ref={inputRef}
              className="w-full rounded-l-lg border-l-2 border-y-2 border-indigo-300 pl-4 focus:outline-indigo-500 focus:outline-none focus:outline-offset-0"
              placeholder="請輸入你的代辦事項"
            />
            <button
              onClick={handleAddTodo}
              className="w-[50px] h-[50px] border-0 bg-sky-500 hover:bg-sky-600 rounded-r-lg text-white transition duration-700"
            >
              +
            </button>
          </div>

          <List />

          <div className="flex justify-between items-center  mt-5">
            <p>
              目前有 <span className="font-medium">{todoList?.length}</span>{' '}
              個事項待完成
            </p>

            <button
              onClick={handleRemoteAllTodo}
              type="button"
              className="bg-red-300 p-2 rounded-md hover:bg-red-400 transition duration-700"
            >
              Clear All Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reduex
