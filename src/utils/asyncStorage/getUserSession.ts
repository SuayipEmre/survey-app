import AsyncStorage from "@react-native-async-storage/async-storage";


/**
 * Retrieves user session data from device storage.
 * @returns {Promise<Object | null>} -  if there is a user session on storage return user data and redirect user to main naviigator. If there is no user information on async storage, redirect user to auth stack.
 */

export const getUserSession = async () => {
    try {
        const userData = await AsyncStorage.getItem('userSession');
        return JSON.parse(userData as string);
    } catch (error) {
        console.log("Oturum getirilirken bir hata oluştu: ", error)
        return null
    }
}