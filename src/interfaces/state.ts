interface UserAuthSlice {
    loggedIn: boolean
}

interface driverSlice {
    loggedIn: boolean
}

export interface RootState {
    user: UserAuthSlice,
    driver: driverSlice
}
