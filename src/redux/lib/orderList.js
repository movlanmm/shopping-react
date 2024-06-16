import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name:'orderData',
    initialState:{
        orders:[]
    },
    reducers:{
        addOrder:(state,action)=>{
            state.orders.push(action.payload)
        },
        cleanOrder: state=>{
            state.orders = []
        },
        getUserOrders: (state, action) => {
            state.orders = [...action.payload]
        },
    }
})

export const {addOrder,cleanOrder,getUserOrders} = orderSlice.actions
export default orderSlice.reducer