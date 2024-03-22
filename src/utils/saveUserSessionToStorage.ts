import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserSessionToStorage = async(userData : any) => {
    try {
        await AsyncStorage.setItem('userSession', JSON.stringify(userData))
      } catch (error) {
        console.log("Oturum kaydedilirken bir hata oluştu: ", error);
      }
}