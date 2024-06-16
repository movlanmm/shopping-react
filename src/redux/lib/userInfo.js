import { createSlice } from "@reduxjs/toolkit";

export const userInfo = createSlice({
    name: 'userInfo',
    initialState: {
        logged: false,
        userDetails: {}
    },
    reducers: {
        userLogged: (state, action) => {
            state.logged = true
            state.userDetails = action.payload
        },
        userLogout: (state) => {
            state.logged = false
            state.userDetails = {}
        }
    }
})

export const {userLogged,userLogout} = userInfo.actions
export default userInfo.reducer