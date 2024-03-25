import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserSessionType } from '../../types/userSessionType';


/*
    Save user's language preference to storage.
    
    Once the user specifies a language, it remains persistent within the application until another language is specified
 */
export const saveUserLanguagePreference = async(lng : string) => {
    try {
      // Save user's language preference 
        await AsyncStorage.setItem('languagePreference', JSON.stringify(lng))
      } catch (error) {
        console.log("Oturum kaydedilirken bir hata oluştu: ", error);
      }
}