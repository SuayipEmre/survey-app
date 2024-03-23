import { _setThemeColor } from ".";
import store from "../../app/store";

export const setThemeColor = (theme : 'light' | 'dark') => store.dispatch(_setThemeColor(theme))