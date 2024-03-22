import { _setUserSeession } from ".";
import store from "../../app/store";


export const setUserSession = (user_token : string) => store.dispatch(_setUserSeession(user_token ))