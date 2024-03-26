import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserSessionType } from '../../../types/userSessionType';


/**
 * Saves user session data to device storage.
 * @param {UserSessionType} userData - Save user to storage when user logs in to the app.
 */
export const saveUserSessionToStorage = async(userData : UserSessionType) => {
    try {
      // Save user session data to storage
        await AsyncStorage.setItem('userSession', JSON.stringify(userData))
      } catch (error) {
        console.log("error ", error);
      }
}