import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type initialStateTypes = {
    userSession: UserSessionType | null
}

type UserSessionType = {
    password : string,
    username : string
}


const initialState: initialStateTypes = {
    userSession: null,
}

 const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _setUserSeession: (state, action: PayloadAction<UserSessionType>) => {
            console.log('payload : ', action );
            
            state.userSession = action.payload
        }
    }
})

export const{_setUserSeession} = authSlice.actions
export default authSlice.reducer