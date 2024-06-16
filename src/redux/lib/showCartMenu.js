import { createSlice } from "@reduxjs/toolkit";

export const showCartMenu = createSlice({
    name: 'showCartMenu',
    initialState: {
        showCart: false
    },
    reducers: {
        showcart: (state) => {
            state.showCart = true
        },
        hidecart: (state) => {
            state.showCart = false
        },
    }
})

export const { showcart, hidecart } = showCartMenu.actions
export default showCartMenu.reducer