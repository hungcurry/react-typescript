// Redux引入store / type
import { RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { updateTodo } from '@/store/todoSlice'

interface TodoItem {
  id: number
  status: boolean
  name: string
}

const List: React.FC = () => {
  const todoList = useSelector((state: RootState) => state.todoSlice.todoList)
  const dispatch = useDispatch()

  const handleUpdateTodo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id: number = Number(event.target.dataset.id)
    dispatch(updateTodo(id))
  }

  const template = (todo: TodoItem) => {
    return (
      <li className="py-4" key={todo.id}>
        <label className={todo.status ? 'line-through' : ''}>
          <input
            type="checkbox"
            className="mr-2"
            onChange={handleUpdateTodo}
            data-id={todo.id}
            checked={todo.status}
          />
          {todo.name}
        </label>
      </li>
    )
  }

  // return ( <ul> { todoList.map((todo) => template(todo)) } </ul> )
  return (
    <ul>
      {todoList.map((todo) => {
        return template(todo)
      })}
    </ul>
  )
}

export default List
