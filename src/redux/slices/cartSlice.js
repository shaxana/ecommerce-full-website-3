import { createSlice } from "@reduxjs/toolkit";



 const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        carts:[]
    },
    reducers: {
        addToCart: (state, action) => {
            state.carts.push(action.payload);
        },
        removeCart: (state, action) => {
            state.cart.slice(action.payload,1)
         }
        

       

    },
})


export const { addToCart,removvefromcart} = cartSlice.actions

export default cartSlice.reducer