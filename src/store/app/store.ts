import { configureStore } from '@reduxjs/toolkit'
import LoginService from '../../Services/LoginService'
import authSlice from '../features/auth'
import themeSlice from '../features/theme'


const store = configureStore({

    reducer: {
        authSlice: authSlice,
        themeSlice: themeSlice,
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