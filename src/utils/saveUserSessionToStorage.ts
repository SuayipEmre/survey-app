import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserSessionType } from '../types/userSessionType';

export const saveUserSessionToStorage = async(userData : UserSessionType) => {
    try {
        await AsyncStorage.setItem('userSession', JSON.stringify(userData))
      } catch (error) {
        console.log("Oturum kaydedilirken bir hata oluştu: ", error);
      }
}