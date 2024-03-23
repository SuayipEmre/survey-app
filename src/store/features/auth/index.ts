import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserSessionType } from "../../../types/userSessionType";


type initialStateTypes = {
    userSession: UserSessionType | null
}


const initialState: initialStateTypes = {
    userSession: null,
}

 const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _setUserSeession: (state, action: PayloadAction<UserSessionType | null>) => {
            console.log('payload : ', action );
            
            state.userSession = action.payload
        }
    }
})

export const{_setUserSeession} = authSlice.actions
export default authSlice.reducer