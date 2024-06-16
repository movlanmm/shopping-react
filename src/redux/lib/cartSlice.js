import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cartData',
    initialState: {
        cart: []
    },
    reducers: {
        addCart: (state, action) => {
            const found = state.cart.find(item => item.id === action.payload.id)
            if (found) {
                found.quantity++
            } else {
                state.cart.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload)
        },
        deleteAllCart: (state) => {
            state.cart = []
        },
        getUserCart: (state, action) => {
            state.cart = [...action.payload]
        },
        updateQuantity: (state, action) => {
            const find = state.cart.find(item => item.id === action.payload.id)
            const index = state.cart.indexOf(find)
            state.cart[index] = action.payload
        },
    }
})

export const { addCart, removeFromCart, deleteAllCart, getUserCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer