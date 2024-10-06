import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
    //name: data is statename
  name: 'cart',
  initialState,
  //reducer is object
  reducers: {
    //setData is function--action data that we pass
    updateCart: (state,action) => {
      state.value = [...state.value, action.payload];
      console.log(action.payload)
    }
  },
})

export const { updateCart } = cartSlice.actions

export default cartSlice.reducer