import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState, 
    reducers: {
        setLoggedInUser: (state, action) => {
            state.user = action.payload
        },
        logoutUser: (state,action) => {
            state.user = null
        }
    }
})

export const {setLoggedInUser, logoutUser} = authSlice.actions

export default authSlice.reducer