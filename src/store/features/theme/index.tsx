import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserSessionType } from "../../../types/userSessionType";
import { ColorTheme } from "../../../types/colorTypes";
import { Colors } from "../../../style/colors";


type initialStateTypes = {
    color: ColorTheme 
}


const initialState: initialStateTypes = {
    color: {} as ColorTheme
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        _setThemeColor: (state, action: PayloadAction<'light' | 'dark'>) => {

            state.color = Colors[action.payload]
            console.log('on state , ' ,state.color);
            
        
        }
    }
})

export const { _setThemeColor } = themeSlice.actions
export default themeSlice.reducer