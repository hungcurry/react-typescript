import { configureStore} from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const store = configureStore({
  reducer: {
    todoSlice,
  },
});
// RootState要記得下export來提供slices使用
export type RootState = ReturnType<typeof store.getState>
export default store;
