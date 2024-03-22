import { createApi } from '@reduxjs/toolkit/query/react'
import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseEndPoint = 'https://fakestoreapi.com/'

const LoginService = createApi({
    reducerPath: 'login service',

    baseQuery: fetchBaseQuery({
        baseUrl: baseEndPoint,
    }),
    endpoints: (builder) => ({

        SendLoginRequest: builder.mutation({
            query: (body) => {
                return {
                    url: '/auth/login',
                    method: 'POST',
                    body,
                }
            }
        }),
    })
})
export const {
    useSendLoginRequestMutation
} = LoginService
export default LoginService