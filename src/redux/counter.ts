import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state) => {
      state.value += 1
    },
    decremented: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// 导出dispatch方法
export const { incremented, decremented, incrementByAmount } =
  counterSlice.actions
// 导出自定义异步添加方法
export const incrementAsync = (amount: any) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount))
  }, 1000)
}
// 导出动态获取数据
export const selectCount = (state: any) => state.counter

export default counterSlice.reducer;

// 调用方法
// store.dispatch(incremented())
