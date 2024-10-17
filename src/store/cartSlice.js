import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const cartSlice = createSlice({
    //name: cart is stat or variable name
  name: 'cart',
  initialState,
  //reducer is object
  reducers: {
    //setData is function--action data that we pass
    updateCart: (state,action) => {
      // ...state.value will copy all values 
      // action.payload will add new value  
      state.value = [...state.value, action.payload];
    }
  },
})

export const { updateCart } = cartSlice.actions

export default cartSlice.reducer