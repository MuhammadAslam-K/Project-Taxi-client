import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";


import { userSlice } from "./slice/userSlice"


const userPersistConfig = { key: "userAuth", storage, version: 1 };


const userPersistReducer = persistReducer(userPersistConfig, userSlice.reducer);


export const store = configureStore({
    reducer: {
        user: userPersistReducer,
    },


    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
        return middleware;
    },
})

export const persister = persistStore(store);