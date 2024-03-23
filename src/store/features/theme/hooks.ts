import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export const useThemeColor = () => useSelector((state : RootState) => state.themeSlice.color )
