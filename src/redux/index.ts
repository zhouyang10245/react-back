import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
export default store

// 监听store数据变化
store.subscribe(() => console.log(store.getState()))
