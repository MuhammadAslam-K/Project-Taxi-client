import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state) => {
            state.loggedIn = true;
        },

        userLogout: (state) => {
            state.loggedIn = false;
        },
    }
})

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
