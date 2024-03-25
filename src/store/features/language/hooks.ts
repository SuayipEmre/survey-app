import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const useLanguage = () => useSelector((state : RootState) => state.languageSlice.language)