import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Language } from "../../../types/language";


type initialStateTypes = {
    language:  Language
}




const initialState: initialStateTypes = {
    language : Language.tr
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        _setLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload
        }
    }
})

export const { _setLanguage } = languageSlice.actions
export default languageSlice.reducer