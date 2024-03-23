import { _setUserSeession } from ".";
import { UserSessionType } from "../../../types/userSessionType";
import store from "../../app/store";


export const setUserSession = (user_token : UserSessionType | null) => store.dispatch(_setUserSeession(user_token ))