import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TodoState {
  todoList: { id: number; status: boolean; name: string }[]
  submitStatus: boolean
}
const LocalStorage = localStorage.getItem('todoList') as string
const initialState: TodoState = {
  todoList: JSON.parse(LocalStorage) || [],
  submitStatus: false,
}
const todoSlice = createSlice({
  // key value
  name: 'todo',
  // initialState 是初始的狀態
  initialState,
  // 而 reducers 則是一個物件，裡面包含了所有的 action，
  // action 你也可以想像成函式，而這些函式會帶入 state 跟 action 這兩個參數。
  reducers: {
    addTodo(state, action) {
      state.submitStatus = true
      state.todoList.push(action.payload)
    },
    updateTodo(state, action: PayloadAction<number>) {
      // console.log(`state` , state);
      // console.log(`action` , action);
      state.submitStatus = true
      const id = action.payload

      const index = state.todoList.findIndex((todo) => todo.id === Number(id))
      state.todoList[index].status = !state.todoList[index].status
    },
    remoteAllTodo(state) {
      state.todoList = []
    },
  },
})

export const { addTodo, updateTodo, remoteAllTodo } = todoSlice.actions
export default todoSlice.reducer
