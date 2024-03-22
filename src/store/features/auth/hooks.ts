import { useSelector } from "react-redux";
import { RootState } from "../../app/store";


export const useUserSession = () => useSelector((state : RootState) => state.authSlice.userSession)