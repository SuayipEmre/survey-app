import { configureStore } from '@reduxjs/toolkit'
import LoginService from '../../Services/LoginService'
import authSlice from '../features/auth'


const store = configureStore({

    reducer: {
        authSlice: authSlice,
        [LoginService.reducerPath]: LoginService.reducer
    },

    middleware: (getDefaultMiddleware) => {
        return (
            getDefaultMiddleware()
                .concat(LoginService.middleware)

        )
    }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store