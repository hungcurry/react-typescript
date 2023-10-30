import { configureStore } from '@reduxjs/toolkit'
// 引入需要全域檔案
import todoSlice from './todoSlice'

const store = configureStore({
  // 引入需要全域檔案
  reducer: {
    todoSlice,
  },
})
// RootState要記得下export來提供slices使用
export type RootState = ReturnType<typeof store.getState>
export default store
