interface UserAuthSlice {
    loggedIn: boolean
}



export interface RootState {
    user: UserAuthSlice,
}
