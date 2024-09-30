import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/productSlice'

export const store = configureStore({
  reducer: {
    products: counterReducer,
  },
})