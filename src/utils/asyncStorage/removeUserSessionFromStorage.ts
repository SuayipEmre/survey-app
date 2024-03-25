import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUserSession } from "../../store/features/auth/actions";



export const removeUserSession = async (): Promise<void> => {
    try {
        // Remove user session data from AsyncStorage
        await AsyncStorage.removeItem('userSession')
        setUserSession(null)
    } catch (error) {
        // Handle any errors that occur during removal
        console.log("An error occurred while removing the session: ", error)
    }
}