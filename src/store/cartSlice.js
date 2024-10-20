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
    },
    //step 1 to remove out of the cart--create remove function--step go cart.jx in page folder
    removeItem: (state,action)=>{
        const filter  = state.value.filter(item => item.id != action.payload)
        state.value = filter;
        console.log(state.value)
    },
    increment: (state,action)=>{
      //what api use for quantity keyword from api--if api have qty but our case no api in qty
      // state.value.quantity+1;
    },
    decrement:(state,action)=>{
  //what api use for quantity keyword from api--if api have qty but our case no api in qtyy
  // state.value.quantity-1;
    }
  },
})

export const { updateCart,removeItem } = cartSlice.actions

export default cartSlice.reducer