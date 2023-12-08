import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn: false
}

export const driverSlice = createSlice({
    name: "driver",
    initialState,
    reducers: {
        driverLogin: (state) => {
            state.loggedIn = true;
        },

        driverLogout: (state) => {
            state.loggedIn = false;
        },
    }
})

export const { driverLogin, driverLogout } = driverSlice.actions;

export default driverSlice.reducer;
