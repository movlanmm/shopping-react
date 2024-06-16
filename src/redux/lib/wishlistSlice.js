import { createSlice } from "@reduxjs/toolkit";

export const wishlistData = createSlice({
    name: 'wishlistData',
    initialState: {
        wishlist: []
    },
    reducers: {
        addWishlist: (state, action) => {
            const found = state.wishlist.find(item => item.id === action.payload.id)
            if (found) {
                state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id)
            } else {
                state.wishlist.push(action.payload)
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlist = state.wishlist.filter((item) => item.id !== action.payload)
        },
        deleteAllWishlist: (state) => {
            state.wishlist = []
        },
        getUserWishlist: (state, action) => {
            state.wishlist = [...action.payload]
        },
    }
})

export const { addWishlist, removeFromWishlist, deleteAllWishlist, getUserWishlist } = wishlistData.actions
export default wishlistData.reducer