import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name:'productsData',
    initialState:{
        products:[]
    },
    reducers:{
        getProducts:(state,action)=>{
            state.products = [...action.payload]
        },
        updateProduct: (state,action)=>{
            const found = state.products.find(item=> item.id === action.payload.id)
            const index = state.products.indexOf(found)
            state.products[index] = action.payload
        }

    }
})

export const {getProducts,updateProduct} = productsSlice.actions
export default productsSlice.reducer